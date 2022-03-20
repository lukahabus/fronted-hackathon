package com.hackathon2022.hackathon_backend.exceptions;

import org.springframework.http.HttpStatus;

public class AuthenticationError extends RuntimeException {

    private final String message;
    private final HttpStatus httpStatus;

    public AuthenticationError(String message, HttpStatus httpStatus) {
        this.message = message;
        this.httpStatus = httpStatus;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

}
