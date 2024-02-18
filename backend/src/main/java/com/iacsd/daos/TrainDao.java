package com.iacsd.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.entities.Train;

public interface TrainDao extends JpaRepository<Train, Integer>
{
//	Train findById(int id);
	
}
