package com.example.springapp.dataLoader;

import com.example.springapp.model.HmsRole;
import com.example.springapp.repository.HmsRoleRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class RoleDataLoader implements ApplicationRunner {

    private final HmsRoleRepository hmsRoleRepository;
    private final List<HmsRole> hmsRoles;


    public RoleDataLoader(HmsRoleRepository hmsRoleRepository, List<HmsRole> idRolePairs) {
        this.hmsRoleRepository = hmsRoleRepository;
        this.hmsRoles = idRolePairs;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        HashMap<Long, String> data = new HashMap<>();
        HmsRole role = new HmsRole();
        HashMap<String, Object>[] roles = new HashMap[4];

        roles[0] = new HashMap<>();
        roles[0].put("id", 1L);
        roles[0].put("role_name", "ROLE_ADMIN");

        roles[1] = new HashMap<>();
        roles[1].put("id", 2L);
        roles[1].put("role_name", "ROLE_PATIENT");

        roles[2] = new HashMap<>();
        roles[2].put("id", 3L);
        roles[2].put("role_name", "ROLE_DOCTOR");

        roles[3] = new HashMap<>();
        roles[3].put("id", 4L);
        roles[3].put("role_name", "ROLE_STAFF");

        for (Map<String, Object> rol : roles) {
            Long id = (Long) rol.get("id");
            String roleName = (String) rol.get("role_name");
            role.setId((Long) rol.get("id"));
            role.setRole_name( (String) rol.get("role_name"));
            hmsRoleRepository.save(role);
        }

//        for (HmsRole pair : hmsRoles) {
//            HmsRole role = new HmsRole();
//            role.setId(pair.getId());
//            role.setRole_name(pair.getRole_name());
//            hmsRoleRepository.save(role);
//        }

    }
}
