package com.iacsd;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class RailwayReservationApplication //implements CommandLineRunner
{

	public static void main(String[] args)
	{
		SpringApplication.run(RailwayReservationApplication.class, args);
	}

	
}
