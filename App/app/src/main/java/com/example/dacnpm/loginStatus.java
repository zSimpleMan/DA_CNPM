package com.example.dacnpm;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class loginStatus {

    @SerializedName("login")
    @Expose
    private String login;
    @SerializedName("username")
    @Expose
    private String username;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
