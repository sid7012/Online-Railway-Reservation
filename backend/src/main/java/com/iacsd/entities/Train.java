package com.iacsd.entities;

import java.time.LocalTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "train")
public class Train
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private int id;

	@Column(name = "train_name")
	private String trainName;

	@Column(name = "start_city")
	private String startCity;

	@Column(name = "dest_city")
	private String destCity;

	@Column(name = "departure_time")
	private LocalTime departureTime;

	@Column(name = "reach_time")
	private LocalTime reachTime;

	@Column(name = "ac_seating_seat_count")
	private int acSeatingSeatCount;

	@Column(name = "ac_sleeper_seat_count")
	private int acSleeperSeatCount;

	@Column(name = "non_ac_seating_seat_count")
	private int nonAcSeatingSeatCount;

	@Column(name = "non_ac_sleeper_seat_count")
	private int nonAcSleeperSeatCount;

	@Column(name = "ac_seating_seat_price")
	private int acSeatingSeatPrice;

	@Column(name = "ac_sleeper_seat_price")
	private int acSleeperSeatPrice;

	@Column(name = "non_ac_seating_seat_price")
	private int nonAcSeatingSeatPrice;

	@Column(name = "non_ac_sleeper_seat_price")
	private int nonAcSleeperSeatPrice;

	@Column(name = "total_seat_count")
	private int totalSeatCount;

	@OneToMany(mappedBy = "train", cascade = CascadeType.REMOVE) // by default Lazy
	@JsonIgnore
	private List<TrainSchedule> trainScheduleList;

	@OneToMany(mappedBy = "train", cascade = CascadeType.REMOVE) // by default Lazy
	@JsonIgnore
	private List<Passenger> passengerList;

	public Train()
	{

	}

	public Train(int id, String trainName, String startCity, String destCity, LocalTime departureTime,
			LocalTime reachTime)
	{
		this.id = id;
		this.trainName = trainName;
		this.startCity = startCity;
		this.destCity = destCity;
		this.departureTime = departureTime;
		this.reachTime = reachTime;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getTrainName()
	{
		return trainName;
	}

	public void setTrainName(String trainName)
	{
		this.trainName = trainName;
	}

	public String getStartCity()
	{
		return startCity;
	}

	public void setStartCity(String startCity)
	{
		this.startCity = startCity;
	}

	public String getDestCity()
	{
		return destCity;
	}

	public void setDestCity(String destCity)
	{
		this.destCity = destCity;
	}

	public LocalTime getDepartureTime()
	{
		return departureTime;
	}

	public void setDepartureTime(LocalTime departureTime)
	{
		this.departureTime = departureTime;
	}

	public LocalTime getReachTime()
	{
		return reachTime;
	}

	public void setReachTime(LocalTime reachTime)
	{
		this.reachTime = reachTime;
	}

	public int getAcSeatingSeatCount()
	{
		return acSeatingSeatCount;
	}

	public void setAcSeatingSeatCount(int acSeatingSeatCount)
	{
		this.acSeatingSeatCount = acSeatingSeatCount;
	}

	public int getAcSleeperSeatCount()
	{
		return acSleeperSeatCount;
	}

	public void setAcSleeperSeatCount(int acSleeperSeatCount)
	{
		this.acSleeperSeatCount = acSleeperSeatCount;
	}

	public int getNonAcSeatingSeatCount()
	{
		return nonAcSeatingSeatCount;
	}

	public void setNonAcSeatingSeatCount(int nonAcSeatingSeatCount)
	{
		this.nonAcSeatingSeatCount = nonAcSeatingSeatCount;
	}

	public int getNonAcSleeperSeatCount()
	{
		return nonAcSleeperSeatCount;
	}

	public void setNonAcSleeperSeatCount(int nonAcSleeperSeatCount)
	{
		this.nonAcSleeperSeatCount = nonAcSleeperSeatCount;
	}

	public int getAcSeatingSeatPrice()
	{
		return acSeatingSeatPrice;
	}

	public void setAcSeatingSeatPrice(int acSeatingSeatPrice)
	{
		this.acSeatingSeatPrice = acSeatingSeatPrice;
	}

	public int getAcSleeperSeatPrice()
	{
		return acSleeperSeatPrice;
	}

	public void setAcSleeperSeatPrice(int acSleeperSeatPrice)
	{
		this.acSleeperSeatPrice = acSleeperSeatPrice;
	}

	public int getNonAcSeatingSeatPrice()
	{
		return nonAcSeatingSeatPrice;
	}

	public void setNonAcSeatingSeatPrice(int nonAcSeatingSeatPrice)
	{
		this.nonAcSeatingSeatPrice = nonAcSeatingSeatPrice;
	}

	public int getNonAcSleeperSeatPrice()
	{
		return nonAcSleeperSeatPrice;
	}

	public void setNonAcSleeperSeatPrice(int nonAcSleeperSeatPrice)
	{
		this.nonAcSleeperSeatPrice = nonAcSleeperSeatPrice;
	}

	public int getTotalSeatCount()
	{
		return totalSeatCount;
	}

	public void setTotalSeatCount(int totalSeatCount)
	{
		this.totalSeatCount = totalSeatCount;
	}

	public List<TrainSchedule> getTrainScheduleList()
	{
		return trainScheduleList;
	}

	public void setTrainScheduleList(List<TrainSchedule> trainScheduleList)
	{
		this.trainScheduleList = trainScheduleList;
	}

	public List<Passenger> getPassengerList()
	{
		return passengerList;
	}

	public void setPassengerList(List<Passenger> passengerList)
	{
		this.passengerList = passengerList;
	}

	@Override
	public String toString()
	{
		return "Train [id=" + id + ", trainName=" + trainName + ", startCity=" + startCity + ", destCity=" + destCity
				+ ", departureTime=" + departureTime + ", reachTime=" + reachTime + "]";
	}

}
