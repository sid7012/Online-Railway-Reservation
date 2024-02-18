package com.iacsd.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "train_schedule")
public class TrainSchedule
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;

	@Column(name = "date_of_travelling")
	private LocalDate dateOfTravelling;

	@Column(name = "seat_class_name")
	private String seatClassName;

	@Column(name = "seating_seat_count")
	private int seatingSeatCount;

	@Column(name = "sleeper_seat_count")
	private int sleeperSeatCount;

	@Column(name = "seating_seat_price")
	private int seatingSeatPrice;

	@Column(name = "sleeper_seat_price")
	private int sleeperSeatPrice;

	@Column(name = "total_seat_count")
	private int totalSeatCount;

	@ManyToOne // by default EAGER
	@JoinColumn(name = "train_id")
	private Train train;

	public TrainSchedule()
	{

	}

	public TrainSchedule(int id, LocalDate dateOfTravelling, String seatClassName, int seatingSeatCount,
			int sleeperSeatCount, int seatingSeatPrice, int sleeperSeatPrice, int totalSeatCount)
	{
		this.id = id;
		this.dateOfTravelling = dateOfTravelling;
		this.seatClassName = seatClassName;
		this.seatingSeatCount = seatingSeatCount;
		this.sleeperSeatCount = sleeperSeatCount;
		this.seatingSeatPrice = seatingSeatPrice;
		this.sleeperSeatPrice = sleeperSeatPrice;
		this.totalSeatCount = totalSeatCount;
	}

	public TrainSchedule(int id, LocalDate dateOfTravelling, String seatClassName, int seatingSeatCount,
			int sleeperSeatCount, int seatingSeatPrice, int sleeperSeatPrice, int totalSeatCount, Train train)
	{
		this.id = id;
		this.dateOfTravelling = dateOfTravelling;
		this.seatClassName = seatClassName;
		this.seatingSeatCount = seatingSeatCount;
		this.sleeperSeatCount = sleeperSeatCount;
		this.seatingSeatPrice = seatingSeatPrice;
		this.sleeperSeatPrice = sleeperSeatPrice;
		this.totalSeatCount = totalSeatCount;
		this.train = train;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public LocalDate getDateOfTravelling()
	{
		return dateOfTravelling;
	}

	public void setDateOfTravelling(LocalDate dateOfTravelling)
	{
		this.dateOfTravelling = dateOfTravelling;
	}

	public String getSeatClassName()
	{
		return seatClassName;
	}

	public void setSeatClassName(String seatClassName)
	{
		this.seatClassName = seatClassName;
	}

	public int getSeatingSeatCount()
	{
		return seatingSeatCount;
	}

	public void setSeatingSeatCount(int seatingSeatCount)
	{
		this.seatingSeatCount = seatingSeatCount;
	}

	public int getSleeperSeatCount()
	{
		return sleeperSeatCount;
	}

	public void setSleeperSeatCount(int sleeperSeatCount)
	{
		this.sleeperSeatCount = sleeperSeatCount;
	}

	public int getSeatingSeatPrice()
	{
		return seatingSeatPrice;
	}

	public void setSeatingSeatPrice(int seatingSeatPrice)
	{
		this.seatingSeatPrice = seatingSeatPrice;
	}

	public int getSleeperSeatPrice()
	{
		return sleeperSeatPrice;
	}

	public void setSleeperSeatPrice(int sleeperSeatPrice)
	{
		this.sleeperSeatPrice = sleeperSeatPrice;
	}

	public int getTotalSeatCount()
	{
		return totalSeatCount;
	}

	public void setTotalSeatCount(int totalSeatCount)
	{
		this.totalSeatCount = totalSeatCount;
	}

	public Train getTrain()
	{
		return train;
	}

	public void setTrain(Train train)
	{
		this.train = train;
	}

	@Override
	public String toString()
	{
		return "TrainSchedule [id=" + id + ", dateOfTravelling=" + dateOfTravelling + ", seatClassName=" + seatClassName
				+ ", seatingSeatCount=" + seatingSeatCount + ", sleeperSeatCount=" + sleeperSeatCount
				+ ", seatingSeatPrice=" + seatingSeatPrice + ", sleeperSeatPrice=" + sleeperSeatPrice
				+ ", totalSeatCount=" + totalSeatCount + "]";
	}

}
