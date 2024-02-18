package com.iacsd.controllers;

import java.util.List;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.iacsd.dtos.DeletePassenegerDto;
import com.iacsd.dtos.LoginUserDto;
import com.iacsd.dtos.PassengerDto;
import com.iacsd.dtos.UserDto;
import com.iacsd.entities.Passenger;
import com.iacsd.entities.Ticket;
import com.iacsd.entities.User;
import com.iacsd.services.PassengerServiceImpl;
import com.iacsd.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController
{
	@Autowired
	private UserService userService;

	@Autowired
	private PassengerServiceImpl passengerServiceImpl;

	@GetMapping("/")
	public ResponseEntity<?> findAll()
	{
		List<User> list = userService.findAll();
		if (list.isEmpty())
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(list);
	}

	@PostMapping("/findByEmail")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginUserDto loginUser)
	{
		UserDto userDto = userService.authenticateUser(loginUser);
		if (userDto == null)
			return Response.error("Invalid Login details..!!");
		return Response.success(userDto);
	}
	
	@GetMapping("/sendEmail")
	public ResponseEntity<?> authenticateUser(@RequestParam(name = "email") String email)
	{
		System.out.println(email);
		UserDto userDto = userService.findByEmail(email);
		
		if (userDto == null)
			return Response.error("Invalid Login details..!!");
		return Response.success(userDto);
	}
	
	
	@PostMapping("/forgetPassword")
	public ResponseEntity<?> forgetPassword(@RequestBody LoginUserDto loginUser)
	{
		UserDto userDto = userService.forgetPassword(loginUser);
		if (userDto == null)
			return Response.error("Invalid user... !!");
		return Response.success(userDto);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int id)
	{
		UserDto user = userService.findById(id);
		if (user == null)
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(user);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") int id)
	{
		int noOfRowsDeleted = userService.deleteById(id);
		if (noOfRowsDeleted == 0)
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success("no. of rows deleted is " + noOfRowsDeleted);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> save(@PathVariable("id") int id, @RequestBody User user)
	{
		user.setId(id);
		UserDto u = userService.save(user);
		if (u == null)
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(u);
	}

	@PostMapping("/")
	public ResponseEntity<?> save(@RequestBody User user)
	{
		UserDto u = userService.save(user);
		if (u == null)
			return Response.error("User already exist..!!");
		return Response.success(u);
	}

	@PostMapping("/addPassengerList/{ticketId}")
	public ResponseEntity<?> addPassengerList(@RequestBody PassengerDto[] list, @PathVariable("ticketId") int ticketId)
	{
		System.out.println(ticketId);
		userService.setFareForTicket(list, ticketId);
		List<Passenger> passList = userService.addPassengerList(list);
		if (passList.isEmpty())
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(passList);
	}

	@GetMapping("/listByTrainID")
	public ResponseEntity<?> listByUserIdAndDate(@RequestBody DeletePassenegerDto dto)
	{
		List<Passenger> list = passengerServiceImpl.listByTrainIdAndDate(dto);
		if (list.isEmpty())
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(list);
	}

	@PutMapping("/getListOfPassengers/{id}")
	public ResponseEntity<?> getListOfPassengers(@PathVariable("id") int id)
	{
		User user = userService.findByIdUser(id);
		if (user != null)
		{
			List<Passenger> passengerList = user.getPassengerList();
			if (passengerList.isEmpty())
			{
				System.out.println("Empty..!!");
				return Response.error("List is Empty...!!");
			}
			return Response.success(passengerList);
		}
		return Response.status(HttpStatus.NOT_FOUND);
	}

	@PutMapping("/getListOfTickets/{id}")
	public ResponseEntity<?> getListOfTickets(@PathVariable("id") int id)
	{
		List<Ticket> listOfTicket = userService.getListOfTicket(id);
		return Response.success(listOfTicket);

	}

	// this method solves the problem of try catch block we used in every method
	// before
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> exceptionHandler(Exception e)
	{
		System.out.println("Found Exception ..!!");
		e.printStackTrace();
		return Response.error(e.getMessage());
	}

}
