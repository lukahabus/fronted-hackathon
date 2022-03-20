package com.hackathon2022.hackathon_backend.security;

import com.hackathon2022.hackathon_backend.models.Moderator;
import com.hackathon2022.hackathon_backend.repositories.ModeratorRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class MyUserDetails implements UserDetailsService {

  private final ModeratorRepository moderatorRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    final Moderator moderator = moderatorRepository.getModeratorByUsername(username);

    if (moderator == null) {
      throw new UsernameNotFoundException("Moderator '" + username + "' not found");
    }

    return org.springframework.security.core.userdetails.User//
        .withUsername(username)
        .password(moderator.getPassword())
        .authorities(moderator.getRole())
        .accountExpired(false)
        .accountLocked(false)
        .credentialsExpired(false)
        .disabled(false)
        .build();
  }

}
