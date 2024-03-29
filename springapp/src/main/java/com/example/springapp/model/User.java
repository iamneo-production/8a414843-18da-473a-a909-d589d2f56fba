package com.example.springapp.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Entity
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @Column(unique = true,nullable = false)
    @NotNull(message = "Email Cannot be Null")
    @Email(message = "Should be a Valid Email")
    private String email;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String newPassword;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String roles;
    private Integer age;
    private String gender;
    private Date dob;
    private String address;
    private Long phone;
    private Long salary;
    private String specialist;
    @Column(length = 1048576)
    private byte[] profileImage;

    @CreationTimestamp
    private Date createdAt;
    @UpdateTimestamp
    private Date updatedAt;
    private boolean status=true;
    public void setRoles(String roles){
        this.roles=roles;
    }
    private boolean isEnabled=true;

    public void setIsEnabled(boolean enabled) {
        isEnabled = enabled;
    }

    public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setGender(String gender){this.gender=gender;}
    public String getGender(){return gender;}

    public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	// public void  setAge( ){this.age= this.age;}
    public Integer getAge(){return age;}
    /*public void setAddress( ){this.address= this.address;}*/
    public String getAddress(){return address;}
    /*public void setPhone()
    {this.phone= this.phone;}*/
    public Long getPhone(){return phone;}
    public void setCreatedAt(Date createdAt){this.createdAt=createdAt;}
    public Date getCreatedAt(){return createdAt;}
    public void setUpdatedAt(Date updatedAt){this.updatedAt=updatedAt;}
    public Date getUpdatedAt(){return updatedAt;}

    /*public void setSalary(long salary){
        this.salary= this.salary;
    }*/
    public Long getSalary(){
        return salary;
    }
    /*public void setSpecialist(String specialist){
        this.specialist= this.specialist;
    }*/
    public String getSpecialist(){
        return specialist;
    }

    public byte[] getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(byte[] profileImage) {
        this.profileImage = profileImage;
    }


    public void setStatus(boolean status){this.status=status;}
    public boolean getStatus(){return status;}

    @Override
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return  Arrays.stream(roles.split(",")).map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    public String getUsername() {
        return email;
    }


    @Override
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    public boolean isEnabled() {
        return isEnabled;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }

    public String getRoles() {
        return roles;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public void setSpecialist(String specialist) {
        this.specialist = specialist;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    /*public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }*/

    /*public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }*/
    public boolean hasSpecificRole() {
        // Check if the user has a specific role (e.g., ROLE_STAFF, ROLE_DOCTOR, ROLE_ADMIN)
        List<String> specificRoles = Arrays.asList("ROLE_STAFF", "ROLE_DOCTOR", "ROLE_ADMIN");
        for (String role : specificRoles) {
            if (roles.contains(role)) {
                return true;
            }
        }
        return false;
    }
}
