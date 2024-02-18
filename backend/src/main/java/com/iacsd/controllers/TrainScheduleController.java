package com.iacsd.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iacsd.dtos.AddScheduleDto;
import com.iacsd.dtos.TrainScheduleDto;
import com.iacsd.entities.TrainSchedule;
import com.iacsd.services.TrainScheduleServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/trainSchedule")
public class TrainScheduleController
{
	@Autowired
	private TrainScheduleServiceImpl trainScheduleService;

	@PostMapping("/")
	public ResponseEntity<?> save(@RequestBody TrainScheduleDto dto)
	{
		TrainSchedule trainSchedule = trainScheduleService.save(dto);
		return Response.success(trainSchedule);
	}

	@PostMapping("/addSchedule")
	public ResponseEntity<?> addSchedule(@RequestBody AddScheduleDto dto)
	{
		
			TrainSchedule ac = trainScheduleService.addScheduleForAc(dto);
			TrainSchedule nonAc = trainScheduleService.addScheduleForNonAc(dto);
			System.out.println("Sam");
			if (ac != null && nonAc != null)
				return Response.success(ac);
	
		return Response.error("Schedule already present..!!");
	}

	// this method solves the problem of try catch block we used in every method
	// before
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> exceptionHandler(Exception e)
	{
		System.out.println("Found Exception..!!");
		return Response.error(e.getMessage());
	}

}
