package com.iacsd.daos;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.entities.Passenger;

public interface PassengerDao extends JpaRepository<Passenger, Integer>
{
	Passenger findById(int id);

	List<Passenger> findByDateOfTravelling(LocalDate date);
}
