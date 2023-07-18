package com.example.springapp.service;

import com.example.springapp.config.jwt.JwtTokenProvider;
import com.example.springapp.dto.UserDto;
import com.example.springapp.email.EmailService;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.util.*;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Lazy
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Lazy
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${spring.mail.password}")
    private String smtpPassword;



    public boolean verifyUser(String email,String password){
        User user=userRepository.findByEmail(email).orElseThrow();
         return new BCryptPasswordEncoder().matches(password,user.getPassword());
    }
    public boolean checkuserNameExists(String email){
        return userRepository.findByEmail(email).isPresent();
    }

    public User createUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        try {
            userRepository.save(user);
        } catch (Exception e) {
            throw new UsernameNotFoundException(e.getMessage());
        }
        return user;
    }
    public Optional<User> getIndividualUser(String email){
        return userRepository.findByEmail(email);
    }

    public String generateToken(String email,String password){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email,password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token=tokenProvider.generateToken(authentication);
        return token;
    }

    public List<User> getAllUser(){
        return userRepository.findAll();
    }

    public List<User> getUserByRole(String role){
        System.out.println("Service"+role);
        return userRepository.findByRoles(role);
    }
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException(""));
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public boolean deleteUserById(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
    public User updateUser(Long departmentId, UserDto userDto) {
        User userDB = userRepository.findById(departmentId).orElse(null);
        if (userDB != null) {
            if (userDto.getFirstName() != null && !userDto.getFirstName().isEmpty()) {
                userDB.setFirstName(userDto.getFirstName());
            }
            if (userDto.getLastName() != null && !userDto.getLastName().isEmpty()) {
                userDB.setLastName(userDto.getLastName());
            }
            if (userDto.getDob() != null ){
                userDB.setDob(userDto.getDob());
            }
            if (userDto.getEmail() != null && !userDto.getEmail().isEmpty()) {
                userDB.setEmail(userDto.getEmail());
            }
            if (userDto.getRoles() != null && !userDto.getRoles().isEmpty()) {
                userDB.setRoles(userDto.getRoles());
            }
            if(userDto.getAge() != null) {
            userDB.setAge(userDto.getAge());
            }
            if (userDto.getGender() != null && !userDto.getGender().isEmpty()) {
                userDB.setGender(userDto.getGender());
            }
            if (userDto.getAddress() != null && !userDto.getAddress().isEmpty()) {
                userDB.setAddress(userDto.getAddress());
            }
            if (userDto.getPhone() != null) {
                userDB.setPhone(userDto.getPhone());
            }
            if (userDto.getSalary() != null) {
                userDB.setSalary(userDto.getSalary());
            }
            if (userDto.getSpecialist() != null && !userDto.getSpecialist().isEmpty()) {
                userDB.setSpecialist(userDto.getSpecialist());
            }
            return userRepository.save(userDB);
        } else {
            return null;
        }
    }
    public User updateUserProfileImage(Long userId, MultipartFile profileImage) {
        User userDB = userRepository.findById(userId).orElse(null);
        if (userDB != null) {
            try {
                byte[] imageData = profileImage.getBytes();
                userDB.setProfileImage(imageData);
                return userRepository.save(userDB);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }
    public void sendEmailWithPassword(String email, String password) {
        // Implement your actual email sending logic here
        String subject = "Registration Details";
        String body = "Thank you for registering. Your password is: " + password;

        // Replace the code below with your email sending implementation
        try {
            // Create a new email message
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(email);
            helper.setSubject(subject);
            helper.setText(body, true);

            // Send the email
            javaMailSender.send(message);

            System.out.println("Email sent successfully to: " + email);
        } catch (MessagingException e) {
            System.out.println("Failed to send email to: " + email);
            e.printStackTrace();
        }
    }

    public String generateRandomPassword() {
        // Generate a random password
        String allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%/";
        int passwordLength = 8;
        Random random = new Random();
        StringBuilder password = new StringBuilder();

        for (int i = 0; i < passwordLength; i++) {
            int index = random.nextInt(allowedChars.length());
            password.append(allowedChars.charAt(index));
        }

        return password.toString();
    }
}
