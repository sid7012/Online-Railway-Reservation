package com.iacsd.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iacsd.daos.TrainDao;
import com.iacsd.dtos.StartAndDestCityDto;
import com.iacsd.entities.Train;
import com.iacsd.entities.TrainSchedule;

@Transactional
@Service
public class TrainServiceImpl
{
	@Autowired
	private TrainDao trainDao;

	public List<Train> findAll()
	{
		return trainDao.findAll();
	}

	public Train findById(int id)
	{
		return trainDao.findById(id).get();
	}

	public int deleteById(int id)
	{
		if (trainDao.existsById(id))
		{
			trainDao.deleteById(id);
			return 1;
		}
		return 0;
	}

	public Train save(Train t)
	{
		Train train = trainDao.save(t);
		if (train != null)
			return train;
		return null;
	}

	public Train saveWithTotalCount(Train t)
	{
		t.setTotalSeatCount(t.getAcSeatingSeatCount() + t.getAcSleeperSeatCount() + t.getNonAcSeatingSeatCount()
				+ t.getNonAcSleeperSeatCount());
		Train train = trainDao.save(t);
		if (train != null)
			return train;
		return null;
	}

	public List<TrainSchedule> getListOfTrainSchedule(int id)
	{
		Train train = trainDao.findById(id).get();
		return train.getTrainScheduleList();
	}

	public Train specificTrain(StartAndDestCityDto dto)
	{
		List<Train> list = trainDao.findAll();
		for (Train s : list)
		{
			if (s.getStartCity().equals(dto.getStartCity()) && s.getDestCity().equals(dto.getDestCity()))
			{
				return s;
			}
		}
		return null;
	}

	public List<String> listOfdestCity(String from)
	{
		List<Train> list = trainDao.findAll();
		List<String> listOfDestCity = new ArrayList<String>();
		for (Train s : list)
		{
			if (s.getStartCity().equals(from))
				listOfDestCity.add(s.getDestCity());
		}
		if (!listOfDestCity.isEmpty())
			return listOfDestCity;
		return null;
	}

	public List<String> listOfstartCity()
	{
		TreeSet<String> treeSet = new TreeSet<String>();
		List<Train> list = trainDao.findAll();
		List<String> listOfStartCity = new ArrayList<String>();

		for (Train t : list)
		{
			treeSet.add(t.getStartCity());
		}
		treeSet.forEach((s) ->
		{
			listOfStartCity.add(s);
		});

		if (!listOfStartCity.isEmpty())
			return listOfStartCity;
		return null;
	}

	public TreeSet<LocalDate> selectDate(int id)
	{
		Train train = trainDao.findById(id).get();
		List<TrainSchedule> listOfTrainSchedule = train.getTrainScheduleList();

		TreeSet<LocalDate> dates = new TreeSet<LocalDate>();

		for (TrainSchedule c : listOfTrainSchedule)
		{
			dates.add(c.getDateOfTravelling());
		}
		return dates;
	}

}
