package com.iacsd.dtos;

import java.time.LocalDate;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PassengerDto
{
	private int id;
	private String firstName;
	private String lastName;
	private int age;
	private String gender;
	private String seatClassName;
	private String innerType;
	private LocalDate dateOfTravelling;
	private int userId;
	private int trainId;
	private int ticketId;

}
