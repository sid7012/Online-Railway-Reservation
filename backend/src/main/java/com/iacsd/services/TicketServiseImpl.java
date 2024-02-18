package com.iacsd.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iacsd.daos.TicketDao;
import com.iacsd.entities.Ticket;

@Transactional
@Service
public class TicketServiseImpl
{
	@Autowired
	private TicketDao ticketDao;
	
	public List<Ticket> findAll()
	{
		return ticketDao.findAll();
	}
	
	public Ticket save(Ticket t)
	{
		return ticketDao.save(t);
	}

	public Ticket findById(int id)
	{
		return ticketDao.findById(id);
	}
	public int deleteTicket(int id)
	{
		ticketDao.deleteById(id);
		return 1;
	}
	
}
