package com.hackathon2022.hackathon_backend.repositories;

import com.hackathon2022.hackathon_backend.models.Moderator;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ModeratorRepository extends JpaRepository<Moderator, UUID> {
    public Moderator getModeratorByUsername(String username);

    public boolean existsByUsername(String username);
}
