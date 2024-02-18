package com.iacsd;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.iacsd.daos.UserDao;
import com.iacsd.entities.User;

@SpringBootTest
class AdminUserTest
{

	@Autowired
	private UserDao userDao;

	@Test
	@Transactional
	public User findByEmail(String email)
	{
		User user = userDao.findByEmail(email);
		System.out.println("Sam");
		return user;
	}

}
