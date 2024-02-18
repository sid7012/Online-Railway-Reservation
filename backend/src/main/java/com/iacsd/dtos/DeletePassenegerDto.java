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
public class DeletePassenegerDto
{
	private int id;
	private LocalDate dateOfTravelling;
}
