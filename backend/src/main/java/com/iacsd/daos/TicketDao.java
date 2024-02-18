package com.iacsd.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.entities.Ticket;

public interface TicketDao extends JpaRepository<Ticket, Integer>
{
	Ticket findById(int id);
}
