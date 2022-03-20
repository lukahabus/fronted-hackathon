package com.hackathon2022.hackathon_backend.models;

import org.springframework.security.core.GrantedAuthority;

public enum ModeratorRoles implements GrantedAuthority {
    APP_ADMIN, ROOM_ADMIN, TEAM_ADMIN, USER;
    @Override
    public String getAuthority() {
        return name();
    }
}
