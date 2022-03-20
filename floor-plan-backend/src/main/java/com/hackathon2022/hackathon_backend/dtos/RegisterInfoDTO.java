package com.hackathon2022.hackathon_backend.dtos;

import com.hackathon2022.hackathon_backend.models.Moderator;
import com.hackathon2022.hackathon_backend.models.ModeratorRoles;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class RegisterInfoDTO {
    private String username;
    private String email;
    private String password;
    private ModeratorRoles role;
    private UUID team_id;

    public static Moderator getModeratorFromDTO(RegisterInfoDTO registerInfoDTO) {
        return new Moderator(UUID.randomUUID(),
                registerInfoDTO.getUsername(),
                registerInfoDTO.getEmail(),
                registerInfoDTO.getPassword(),
                registerInfoDTO.getRole(),
                registerInfoDTO.getTeam_id());
    }
}
