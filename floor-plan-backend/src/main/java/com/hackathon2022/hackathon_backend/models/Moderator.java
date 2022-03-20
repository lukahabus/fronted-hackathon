package com.hackathon2022.hackathon_backend.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "usertable")
public class Moderator {
    @Id
    @Column(name = "user_id", nullable = false)
    private UUID user_id;
    @Column(name = "username", nullable = false, unique = true)
    private String username;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "role", nullable = false)
    private ModeratorRoles role;
    @Column(name = "team_id", nullable = false)
    private UUID team_id;

    public Moderator(UUID moderator_id, String username, String email, String password, ModeratorRoles role, UUID team_id) {
        this.user_id = moderator_id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.team_id = team_id;
    }

    public Moderator() {

    }
}
