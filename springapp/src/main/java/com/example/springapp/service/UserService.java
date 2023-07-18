package com.example.springapp.service;

import com.example.springapp.config.jwt.JwtTokenProvider;
import com.example.springapp.dto.UserDto;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
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

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Properties;

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

    public boolean createUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        try {
            userRepository.save(user);
        } catch (Exception e) {
            throw new UsernameNotFoundException(e.getMessage());
        }
        return true;
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
    /* @Override
    public Department updateDepartment(Long departmentId, Department department) {
       Department depDB=departmentRepository.findById(departmentId).get();
       if(Objects.nonNull(department.getDepartmentName()) && !"".equalsIgnoreCase(department.getDepartmentName())){
           depDB.setDepartmentName(department.getDepartmentName());
       }
        if(Objects.nonNull(department.getDepartmentCode()) && !"".equalsIgnoreCase(department.getDepartmentCode())){
            depDB.setDepartmentCode(department.getDepartmentCode());
        }
        if(Objects.nonNull(department.getDeparmentAddress()) && !"".equalsIgnoreCase(department.getDeparmentAddress())){
            depDB.setDeparmentAddress(department.getDeparmentAddress());
        }
        return departmentRepository.save(depDB);
    } */
    /*
    public User updateUser(Long departmentId, User user) {
        User userDB=userRepository.findById(departmentId).get();
        if(Objects.nonNull(user.getName()) && !"".equalsIgnoreCase(user.getName())){
            userDB.setName(user.getName());
        }
        if(Objects.nonNull(user.getEmail()) && !"".equalsIgnoreCase(user.getEmail())){
            userDB.setEmail(user.getEmail());
        }
        if(Objects.nonNull(user.getRoles()) && !"".equalsIgnoreCase(user.getRoles())){
            userDB.setRoles(user.getRoles());
        }
        if(Objects.nonNull(user.getAge()) && !"".equalsIgnoreCase(String.valueOf(user.getAge()))){
            userDB.setAge(user.getAge());
        }
        if(Objects.nonNull(user.getGender()) && !"".equalsIgnoreCase(user.getGender())){
            userDB.setGender(user.getGender());
        }
        if(Objects.nonNull(user.getAddress()) && !"".equalsIgnoreCase(user.getAddress())){
            userDB.setAddress(user.getAddress());
        }
        return userRepository.save(userDB);
    }*/
    public User updateUser(Long departmentId, UserDto userDto) {
        User userDB = userRepository.findById(departmentId).orElse(null);
        if (userDB != null) {
            if (userDto.getName() != null && !userDto.getName().isEmpty()) {
                userDB.setName(userDto.getName());
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
    public boolean sendEmail(String to, String subject, String message) {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(fromEmail, smtpPassword);
            }
        });

        try {
            Message emailMessage = new MimeMessage(session);
            emailMessage.setFrom(new InternetAddress(fromEmail));
            emailMessage.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            emailMessage.setSubject(subject);
            emailMessage.setText(message);
            Transport.send(emailMessage);
            return true;
        } catch (MessagingException e) {
            e.printStackTrace();
            return false;
        }
    }
}
