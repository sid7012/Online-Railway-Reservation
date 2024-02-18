package com.iacsd.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.entities.TrainSchedule;

public interface TrainScheduleDao extends JpaRepository<TrainSchedule, Integer>
{

}
