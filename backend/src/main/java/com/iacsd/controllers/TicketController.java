package com.iacsd.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iacsd.entities.Email;
import com.iacsd.entities.Ticket;
import com.iacsd.services.TicketServiseImpl;

@CrossOrigin
@RestController
@RequestMapping("/tickets")
public class TicketController
{
	@Autowired
	private JavaMailSender sender;

	@Autowired
	private TicketServiseImpl ticketServiseImpl;

	@PostMapping("/")
	public ResponseEntity<?> save(@RequestBody Ticket t)
	{
		Ticket ticket = ticketServiseImpl.save(t);
		if (ticket != null)
			return Response.success(t);
		return Response.error("Nod added..!!");
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTicket(@PathVariable int id)
	{
		int noOfRowsDeleted = ticketServiseImpl.deleteTicket(id);
		return Response.success("No of rows deleted " + noOfRowsDeleted);
	}

	// this method is used to send the mail after ticket booking
	@PostMapping("/sendMail")
	public ResponseEntity<?> processForm(@RequestBody Email em)
	{
		System.out.println(em.getDestEmail() + "  " + em.getMessage());
		SimpleMailMessage mesg = new SimpleMailMessage();
		mesg.setTo(em.getDestEmail());
		mesg.setSubject(em.getSubject());
		mesg.setText(em.getMessage());
		sender.send(mesg);
		return Response.success(em);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> exceptionHandler(Exception e)
	{
		System.out.println("Found Exception..!!");
		e.printStackTrace();
		return Response.error(e.getMessage());
	}
}
