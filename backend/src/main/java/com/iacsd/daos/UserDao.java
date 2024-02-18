package com.iacsd.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.entities.User;

public interface UserDao extends JpaRepository<User, Integer>
{
	User findById(int id);
	User findByEmail(String email);
	
}
