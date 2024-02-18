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
@Table(name = "passenger")
public class Passenger
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column
	private int age;

	@Column
	private String gender;

	@Column(name = "seat_class_name ")
	private String seatClassName;

	@Column(name = "inner_type")
	private String innerType;

	@Column(name = "date_of_travelling")
//	@Temporal(TemporalType.TIMESTAMP)
	private LocalDate dateOfTravelling;

	@ManyToOne // by default EAGER
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne // by default EAGER
	@JoinColumn(name = "train_id")
	private Train train;

	@ManyToOne // by default EAGER
	@JoinColumn(name = "ticket_id")
	private Ticket ticket;

	public Passenger()
	{
		// TODO Auto-generated constructor stub
	}

	public Passenger(int id, String firstName, String lastName, int age, String gender, String seatClassName,
			String innerType, LocalDate dateOfTravelling)
	{
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.seatClassName = seatClassName;
		this.innerType = innerType;
		this.dateOfTravelling = dateOfTravelling;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getFirstName()
	{
		return firstName;
	}

	public void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}

	public String getLastName()
	{
		return lastName;
	}

	public void setLastName(String lastName)
	{
		this.lastName = lastName;
	}

	public int getAge()
	{
		return age;
	}

	public void setAge(int age)
	{
		this.age = age;
	}

	public String getGender()
	{
		return gender;
	}

	public void setGender(String gender)
	{
		this.gender = gender;
	}

	public String getSeatClassName()
	{
		return seatClassName;
	}

	public void setSeatClassName(String seatClassName)
	{
		this.seatClassName = seatClassName;
	}

	public String getInnerType()
	{
		return innerType;
	}

	public void setInnerType(String innerType)
	{
		this.innerType = innerType;
	}

	public LocalDate getDateOfTravelling()
	{
		return dateOfTravelling;
	}

	public void setDateOfTravelling(LocalDate dateOfTravelling)
	{
		this.dateOfTravelling = dateOfTravelling;
	}

	public User getUser()
	{
		return user;
	}

	public void setUser(User user)
	{
		this.user = user;
	}

	public Train getTrain()
	{
		return train;
	}

	public Ticket getTicket()
	{
		return ticket;
	}

	public void setTicket(Ticket ticket)
	{
		this.ticket = ticket;
	}

	public void setTrain(Train train)
	{
		this.train = train;
	}

	@Override
	public String toString()
	{
		return "Passenger [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
				+ ", gender=" + gender + ", seatClassName=" + seatClassName + ", innerType=" + innerType
				+ ", dateOfTravelling=" + dateOfTravelling + "]";
	}

}
