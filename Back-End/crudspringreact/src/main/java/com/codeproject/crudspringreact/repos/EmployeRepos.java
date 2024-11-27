package com.codeproject.crudspringreact.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codeproject.crudspringreact.Entity.Employer;

@Repository
public interface EmployeRepos extends JpaRepository<Employer,Long>{
    
}
