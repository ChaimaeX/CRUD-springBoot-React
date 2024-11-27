package com.codeproject.crudspringreact.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codeproject.crudspringreact.Entity.Employer;
import com.codeproject.crudspringreact.repos.EmployeRepos;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployerService {
    private final EmployeRepos repos;

    public Employer postEmployer(Employer employer){
        return repos.save(employer);
    }

    public List<Employer> getAllEmployer(){
        return repos.findAll();
    }

    public void deleteEmployer(Long id){
        if (!repos.existsById(id)) {
            throw new EntityNotFoundException("Employer with ID " + id +"not found" );
        }
        repos.deleteById(id);
    }

    public Employer getEmployerById(Long id){
        return repos.findById(id).orElse(null);
    }

    public Employer updateRmployer(Long id , Employer employer){
        Optional<Employer> optionalEmployer = repos.findById(id);
        if (optionalEmployer.isPresent()) {
            Employer existEmployer = optionalEmployer.get();

            existEmployer.setEmail(employer.getEmail());
            existEmployer.setName(employer.getName());
            existEmployer.setPhone(employer.getPhone());
            existEmployer.setDepartement(employer.getDepartement());

            return repos.save(existEmployer);
        }
        return null;
    }
    
}
