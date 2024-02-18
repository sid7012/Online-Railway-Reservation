package com.iacsd.controllers;

import java.time.LocalDate;
import java.util.List;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iacsd.dtos.StartAndDestCityDto;
import com.iacsd.entities.Train;
import com.iacsd.entities.TrainSchedule;
import com.iacsd.services.TrainServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/trains")
public class TrainController
{
	@Autowired
	private TrainServiceImpl trainService;

	// get details of all trains
	@GetMapping("/")
	public ResponseEntity<?> findAll()
	{
		List<Train> list = trainService.findAll();
		if (list.isEmpty())
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(list);

	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int id)
	{
		Train train = trainService.findById(id);
		if (train == null)
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(train);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") int id)
	{
		int noOfRowsDeleted = trainService.deleteById(id);
		if (noOfRowsDeleted == 0)
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success("no. of rows deleted is " + noOfRowsDeleted);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> save(@PathVariable("id") int id, @RequestBody Train train)
	{
		train.setId(id);
		Train train2 = trainService.save(train);
		if (train2 == null)
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(train2);
	}

	@PostMapping("/")
	public ResponseEntity<?> save(@RequestBody Train t)
	{
		Train train = trainService.saveWithTotalCount(t);

		if (train == null)
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(train);

	}

	@GetMapping("/listOfTrainSchedule/{id}")
	public ResponseEntity<?> listOfCompartments(@PathVariable("id") int id)
	{
		List<TrainSchedule> listOfTrainSchedule = trainService.getListOfTrainSchedule(id);
		if (listOfTrainSchedule == null)
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(listOfTrainSchedule);
	}

	@GetMapping("/from")
	public ResponseEntity<?> listOfstartCity()
	{
		System.out.println("from called");
		List<String> list = trainService.listOfstartCity();
		if (!list.isEmpty())
			return Response.success(list);
		return Response.error("Not found");
	}

	@GetMapping("/to/{from}")
	public ResponseEntity<?> listOfdestCity(@PathVariable("from") String from)
	{
		System.out.println("to called");
		List<String> list = trainService.listOfdestCity(from);
		if (!list.isEmpty())
			return Response.success(list);
		return Response.error("Not found..!!");
	}

	@PostMapping("/listOfTrains")
	public ResponseEntity<?> listOfTrains(@RequestBody StartAndDestCityDto dto)
	{
		System.out.println("list of trains called");
		Train train = trainService.specificTrain(dto);
		if (train != null)
			return Response.success(train);
		return Response.error("Train not found");
	}

	@GetMapping("/selectDate/{id}")
	public ResponseEntity<?> selectDate(@PathVariable("id") int id)
	{
		System.out.println("Dates called");
		TreeSet<LocalDate> dates = trainService.selectDate(id);
		if (!dates.isEmpty())
			return Response.success(dates);
		return Response.error("Dates are not available..!!");
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
