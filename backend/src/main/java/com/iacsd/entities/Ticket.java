package com.iacsd.entities;

import java.time.LocalTime;
import java.util.List;
import java.util.Objects;

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
@Table(name = "ticket")
public class Ticket implements Comparable<Ticket>
{
	@Override
	public int hashCode()
	{
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj)
	{
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Ticket other = (Ticket) obj;
		return id == other.id;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "no_of_passanger")
	private int noOfPassanger;

	@Column(name = "start_city")
	private String startCity;

	@Column(name = "dest_city")
	private String destCity;

	@Column(name = "departure_time")
	private LocalTime departureTime;

	@Column(name = "reach_time")
	private LocalTime reachTime;

	@Column(name = "ticket_amount")
	private int ticketAmount;

	@OneToMany(mappedBy = "ticket", cascade = CascadeType.REMOVE) // by default Lazy
	@JsonIgnore
	private List<Passenger> passengerList;

	@Column
	private String status;

	public Ticket()
	{
		// TODO Auto-generated constructor stub
	}

	public Ticket(int id, int noOfPassanger, String startCity, String destCity, LocalTime departureTime,
			LocalTime reachTime, int ticketAmount, String status)
	{
		super();
		this.id = id;
		this.noOfPassanger = noOfPassanger;
		this.startCity = startCity;
		this.destCity = destCity;
		this.departureTime = departureTime;
		this.reachTime = reachTime;
		this.ticketAmount = ticketAmount;
		this.status = status;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public int getNoOfPassanger()
	{
		return noOfPassanger;
	}

	public void setNoOfPassanger(int noOfPassanger)
	{
		this.noOfPassanger = noOfPassanger;
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

	public int getTicketAmount()
	{
		return ticketAmount;
	}

	public void setTicketAmount(int ticketAmount)
	{
		this.ticketAmount = ticketAmount;
	}

	public List<Passenger> getPassengerList()
	{
		return passengerList;
	}

	public void setPassengerList(List<Passenger> passengerList)
	{
		this.passengerList = passengerList;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	@Override
	public String toString()
	{
		return "Ticket [id=" + id + ", noOfPassanger=" + noOfPassanger + ", startCity=" + startCity + ", destCity="
				+ destCity + ", departureTime=" + departureTime + ", reachTime=" + reachTime + ", ticketAmount="
				+ ticketAmount + ", status=" + status + "]";
	}

	@Override
	public int compareTo(Ticket o)
	{
		if(this.id == o.getId())
			return 0;
		else
			return this.id > o.getId() ? 1:-1;
		
	}

}
