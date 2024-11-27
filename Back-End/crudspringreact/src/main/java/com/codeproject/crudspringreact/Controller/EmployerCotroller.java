package com.codeproject.crudspringreact.Controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codeproject.crudspringreact.Entity.Employer;
import com.codeproject.crudspringreact.Service.EmployerService;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmployerCotroller {

    private final EmployerService employerService;
     
    @PostMapping("/employer")
    public Employer posEmployer(@RequestBody Employer employer) {
        
        return employerService.postEmployer(employer);
    }

    @GetMapping("/employers")
    public List<Employer> getAllEmployer(){

        return employerService.getAllEmployer();
    }
    @DeleteMapping("/employer/{id}")
    public ResponseEntity<?> deleteEmployer(@PathVariable Long id){
         try {
            employerService.deleteEmployer(id);
            return new ResponseEntity<>("Employer with ID "+ id + " delete successfully",HttpStatus.OK);
         } catch (Exception e) {
            // TODO: handle exception
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
         }
    }

    @GetMapping("/employer/{id}")
    public ResponseEntity<?> getEmployerById(@PathVariable Long id){
        Employer employer = employerService.getEmployerById(id);
        if (employer == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(employer);
    }
    
    @PatchMapping("/employer/{id}")
    public ResponseEntity<?> updateEmployer(@PathVariable Long id, @RequestBody Employer employer) {
        Employer updateEmployer = employerService.updateRmployer(id , employer);

        if (updateEmployer == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            
        }
        return ResponseEntity.ok(updateEmployer);


    }
    
}
