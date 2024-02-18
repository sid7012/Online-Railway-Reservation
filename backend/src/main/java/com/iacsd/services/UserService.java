package com.iacsd.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iacsd.daos.UserDao;
import com.iacsd.dtos.DtoEntityConvertor;
import com.iacsd.dtos.LoginUserDto;
import com.iacsd.dtos.PassengerDto;
import com.iacsd.dtos.UserDto;
import com.iacsd.entities.Passenger;
import com.iacsd.entities.Ticket;
import com.iacsd.entities.Train;
import com.iacsd.entities.User;

@Transactional
@Service
public class UserService
{
	@Autowired
	private UserDao userDao;

	@Autowired
	private PassengerServiceImpl passengerServiceImpl;

	@Autowired
	private TrainServiceImpl trainServiceImpl;

	@Autowired
	private TicketServiseImpl ticketServiseImpl;

	public List<User> findAll()
	{
		return userDao.findAll();
	}

	public UserDto findById(int id)
	{
		User user = userDao.findById(id);
		if (user != null)
			return DtoEntityConvertor.toUserDto(user);
		return null;
	}

	public User findByIdUser(int id)
	{
		User user = userDao.findById(id);
		if (user != null)
			return user;
		return null;
	}

	public UserDto findByEmail(String email)
	{
		User user = userDao.findByEmail(email);
		System.out.println(user);
		if (user != null)
			return DtoEntityConvertor.toUserDto(user);
		return null;
	}

	public UserDto forgetPassword(LoginUserDto dto)
	{
		User user = userDao.findByEmail(dto.getEmail());
		if (user != null)
		{
			user.setPassword(dto.getPassword());
			return DtoEntityConvertor.toUserDto(user);
		}
		return null;

	}

	public UserDto authenticateUser(LoginUserDto loginUser)
	{
		User user = userDao.findByEmail(loginUser.getEmail());
		if (user != null)
		{
			if (loginUser.getEmail().equals(user.getEmail()) && user.getPassword().equals(loginUser.getPassword()))
			{
				return DtoEntityConvertor.toUserDto(user);
			}
		}
		return null;
	}

	public int deleteById(int id)
	{
		if (userDao.existsById(id))
		{
			userDao.deleteById(id);
			return 1;
		}
		return 0;
	}

	public UserDto save(User user)
	{
		List<User> list = userDao.findAll();
		boolean flag = true;
		for (User u : list)
		{
			if (u.getEmail().equals(user.getEmail()))
			{
				flag = false;
				break;
			}
		}
		if (flag)
		{
			User u = userDao.save(user);
			if (user != null)
				return DtoEntityConvertor.toUserDto(u);
		}
		return null;
	}

	// add passenger list
	public List<Passenger> addPassengerList(PassengerDto[] list)
	{
		List<Passenger> passList = new ArrayList<Passenger>();

		for (PassengerDto p : list)
		{
			Passenger savedPass = passengerServiceImpl.save(DtoEntityConvertor.fromPassengerDto(p));
			passList.add(savedPass);
		}
		return passList;
	}

	public int setFareForTicket(PassengerDto[] list, int ticketId)
	{
		Ticket ticket = ticketServiseImpl.findById(ticketId);

		List<PassengerDto> listOfPassenger = Arrays.asList(list);
		int trainId = listOfPassenger.get(0).getTrainId();
		Train train = trainServiceImpl.findById(trainId);
		int fare = 0;
		for (PassengerDto ps : listOfPassenger)
		{
			// Sleeper
			// Seating
			if (ps.getSeatClassName().equals("AC") && ps.getInnerType().equals("Seating"))
			{
				fare += train.getAcSeatingSeatPrice();
			}
			if (ps.getSeatClassName().equals("AC") && ps.getInnerType().equals("Sleeper"))
			{
				fare += train.getAcSleeperSeatPrice();
			}
			if (ps.getSeatClassName().equals("NON-AC") && ps.getInnerType().equals("Seating"))
			{
				fare += train.getNonAcSeatingSeatPrice();
			}
			if (ps.getSeatClassName().equals("NON-AC") && ps.getInnerType().equals("Sleeper"))
			{
				fare += train.getNonAcSleeperSeatPrice();
			}
		}
		ticket.setTicketAmount(fare);

		return fare;
	}

	public List<Ticket> getListOfTicket(int id)
	{
		User user = userDao.findById(id);
		List<Passenger> passengerList = user.getPassengerList();
		TreeSet<Ticket> treeSet = new TreeSet<>();
		List<Ticket> list = new ArrayList<Ticket>();
		if (!passengerList.isEmpty())
		{
			for (Passenger p : passengerList)
			{
				treeSet.add(p.getTicket());
			}
			treeSet.forEach((s) ->
			{
				list.add(s);
			});
			return list;
		}
		return null;
	}
}
