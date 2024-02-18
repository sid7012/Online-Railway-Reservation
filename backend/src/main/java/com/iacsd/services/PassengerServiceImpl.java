package com.iacsd.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iacsd.daos.PassengerDao;
import com.iacsd.dtos.DeletePassenegerDto;
import com.iacsd.entities.Passenger;

@Transactional
@Service
public class PassengerServiceImpl
{
	@Autowired
	private PassengerDao passengerDao;

	public List<Passenger> findAll()
	{
		List<Passenger> list = passengerDao.findAll();
		return list;
	}

	public Passenger findById(int id)
	{
		Passenger p = passengerDao.findById(id);
		return p;
	}

	public List<Passenger> findByDateOfTravelling(LocalDate date)
	{
		List<Passenger> list = passengerDao.findByDateOfTravelling(date);
		return list;
	}

	public Passenger save(Passenger p)
	{
		Passenger passenger = passengerDao.save(p);
		if (passenger != null)
			return passenger;
		return null;
	}

	// delete single passenger
	public void deleteById(int id)
	{
		passengerDao.deleteById(id);
	}

	// delete by specific user & travelling date
	public boolean deleteByUserIdAndDate(DeletePassenegerDto dto)
	{
		List<Passenger> list = passengerDao.findAll();
		boolean flag = false;
		for (Passenger p : list)
		{
			System.out.println(dto.getId() == p.getUser().getId());
			System.out.println(dto.getDateOfTravelling().equals(p.getDateOfTravelling()));
			if (dto.getId() == p.getUser().getId() && dto.getDateOfTravelling().equals(p.getDateOfTravelling()))
			{
				passengerDao.deleteById(p.getId());
				flag = true;
			}
		}

		if (flag)
			return true;
		return false;
	}

	public List<Passenger> listByTrainIdAndDate(DeletePassenegerDto dto)
	{
		List<Passenger> list = passengerDao.findAll();
		List<Passenger> passList = new ArrayList<Passenger>();

		for (Passenger p : list)
		{
			if (dto.getId() == p.getUser().getId()
					&& dto.getDateOfTravelling().toString().equals(p.getDateOfTravelling().toString()))
			{
				passList.add(p);

			}
		}
		return passList;
	}

}
