package com.example.springapp.dto;

import java.util.List;

public class BaseResponseDto {
    private Object message;
    private Object data;



    public BaseResponseDto(Object message, Object data) {
        this.message = message;
        this.data = data;
    }

    public BaseResponseDto(Object message) {
        this.message = message;
    }

    public Object getMessage() {
        return message;
    }

    public void setMessage(Object message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
