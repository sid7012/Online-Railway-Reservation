package com.iacsd.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iacsd.daos.TrainDao;
import com.iacsd.daos.TrainScheduleDao;
import com.iacsd.dtos.AddScheduleDto;
import com.iacsd.dtos.DtoEntityConvertor;
import com.iacsd.dtos.TrainScheduleDto;
import com.iacsd.entities.Train;
import com.iacsd.entities.TrainSchedule;

@Transactional
@Service
public class TrainScheduleServiceImpl
{
	@Autowired
	private TrainScheduleDao trainScheduleDao;

	@Autowired
	private TrainDao trainDao;

	public List<TrainSchedule> findAll()
	{
		List<TrainSchedule> list = trainScheduleDao.findAll();
		return list;
	}

	public TrainSchedule save(TrainScheduleDto dto)
	{
		TrainSchedule cmt = DtoEntityConvertor.toTrainScheduleDto(dto);
		TrainSchedule c = trainScheduleDao.save(cmt);
		return c;
	}

	public TrainSchedule addScheduleForAc(AddScheduleDto dto)
	{
		Train train = trainDao.findById(dto.getTrainId()).get();

		TrainSchedule trainSchedule = DtoEntityConvertor.addScheduleForAc(dto, train);
		TrainSchedule savedTrainSchedule = trainScheduleDao.save(trainSchedule);

		return savedTrainSchedule;
	}

	public TrainSchedule addScheduleForNonAc(AddScheduleDto dto)
	{
		Train train = trainDao.findById(dto.getTrainId()).get();

		TrainSchedule trainSchedule = DtoEntityConvertor.addScheduleForNonAc(dto, train);
		TrainSchedule savedTrainSchedule = trainScheduleDao.save(trainSchedule);
		return savedTrainSchedule;
	}

	public boolean isTrainScheduleAvailable(AddScheduleDto dto)
	{
		List<TrainSchedule> listOfSchedule = trainScheduleDao.findAll();
		boolean flag = true;
		for (TrainSchedule ts : listOfSchedule)
		{
			System.out.println("in for");
			System.out.println(ts.getTrain().getId());
			if ((ts.getTrain().getId() == dto.getTrainId())
					&& (ts.getDateOfTravelling().toString().equals(dto.getDateOfTravelling().toString())))
			{
				flag = false;
				break;
			}
		}
		return flag;
	}

}
