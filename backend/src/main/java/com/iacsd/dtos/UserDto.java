package com.iacsd.dtos;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDto
{
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String role;

}
