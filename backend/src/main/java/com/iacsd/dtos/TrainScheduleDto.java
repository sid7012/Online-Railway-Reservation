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
public class TrainScheduleDto
{
	private int id;
	private int trainId;
	private LocalDate dateOfTravelling;
	private String seatClassName;
	private int seatingSeatCount;
	private int sleeperSeatCount;
	private int seatingSeatPrice;
	private int sleeperSeatPrice;
	private int totalSeatCount;
	
}

