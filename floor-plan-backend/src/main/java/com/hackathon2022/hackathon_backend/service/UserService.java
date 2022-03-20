package com.hackathon2022.hackathon_backend.service;

import javax.servlet.http.HttpServletRequest;

import com.hackathon2022.hackathon_backend.exceptions.AuthenticationError;
import com.hackathon2022.hackathon_backend.models.Moderator;
import com.hackathon2022.hackathon_backend.repositories.ModeratorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hackathon2022.hackathon_backend.security.JwtTokenProvider;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class UserService {

  private final ModeratorRepository moderatorRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtTokenProvider jwtTokenProvider;
  private final AuthenticationManager authenticationManager;

  public String login(String username, String password) {
    try {
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
      return jwtTokenProvider.createToken(username, Collections.singletonList(moderatorRepository.getModeratorByUsername(username).getRole()));
    } catch (AuthenticationException e) {
      throw new AuthenticationError("Invalid username/password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  public String register(Moderator user) {
    if (!moderatorRepository.existsByUsername(user.getUsername())) {
      user.setPassword(passwordEncoder.encode(user.getPassword()));
      moderatorRepository.save(user);
      return jwtTokenProvider.createToken(user.getUsername(), Collections.singletonList(user.getRole()));
    } else {
      throw new AuthenticationError("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }


  public Moderator search(String username) {
    Moderator appUser = moderatorRepository.getModeratorByUsername(username);
    if (appUser == null) {
      throw new AuthenticationError("The user doesn't exist", HttpStatus.NOT_FOUND);
    }
    return appUser;
  }

  public Moderator whoami(HttpServletRequest req) {
    return moderatorRepository.getModeratorByUsername(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)));
  }

  public String refresh(String username) {
    return jwtTokenProvider.createToken(username, Collections.singletonList(moderatorRepository.getModeratorByUsername(username).getRole()));
  }

}
