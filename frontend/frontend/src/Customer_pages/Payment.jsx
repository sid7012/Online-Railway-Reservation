import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from "axios";
import { URL } from '../config';
import Swal from 'sweetalert2';

const Payment = () => {

    const { state } = useLocation();
    console.log(state)
    console.log(state.trainData)
    console.log(state.arrayOfPassenger[0].firstName)
    console.log(state.arrayOfPassenger[0])

    const navigate = useNavigate();
    //variables used to assign states came from last page
    const trainDetails = state.trainData
    const array = state.arrayOfPassenger

    console.log(trainDetails.dataofTrain.trainName)

    const [cardNumber, setCardNumber] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');


    // const [userId, setUserId] = useState(0)
    // const [trainId, setTrainId] = useState(0)
    // const [ticketId, settTicketId] = useState(0)

    //ids assigned from session storage & states
    const userId = sessionStorage.id
    const trainId = trainDetails.dataofTrain.id
    const dateOfTravelling = trainDetails.dateOfTrav
    let arrayToBackend = []

    //variables are used the send the email
    const destEmail = sessionStorage.email
    const subject = "Railway reservation Ticket"
    let message = "Congratulations..!! Ticket Booked"

    // const sam = { ...state.arrayOfPassenger[0], s: "sam" }
    // console.log(sam)

    // setTrainId(state.trainData.dataofTrain.id)
    // setUserId(sessionStorage.id);

    // const s = parseInt(trainDetails.dataofTrain.nonAcSleeperSeatPrice)
    // const b = s + 20
    // console.log(b)

    //this method is called in make payment method
    const helper = () => {
        const body = {
            //values are assigned to the elements from states which came fromlast page
            noOfPassanger: array.length,
            startCity: trainDetails.dataofTrain.startCity,
            destCity: trainDetails.dataofTrain.destCity,
            departureTime: trainDetails.dataofTrain.departureTime,
            reachTime: trainDetails.dataofTrain.reachTime,
            ticketAmount: 500,
            status: "Booked"
        }
        //this axios call will put the entry in ticket table
        const url = `${URL}/tickets/`
        axios.post(url, body).then(response => {
            const result = response.data
            console.log(result.data)
            if (result['status'] === 'success') {
                console.log("Ticket added")
                toast.success("Ticket confirmed..!!")
                //ticket id is generated from above method & used next axios call of passenger add 
                let ticketId = parseInt(result.data.id)
                let ticketObj = result.data
                console.log(ticketId)
                //for getting ticket id 
                //we applied for loop bcoz it is array oo diffrent object came from state
                let sam = {};
                for (let i = 0; i < state.arrayOfPassenger.length; i++) {
                    //this is called as object spreading
                    sam = { ...state.arrayOfPassenger[i], userId, trainId, ticketId, dateOfTravelling }
                    arrayToBackend.push(sam)
                }
                //checked that array of objects is produced or not
                console.log("ala re", arrayToBackend)

                //this axios call will put the entry of passengers in passenger table
                const url2 = `${URL}/users/addPassengerList/${ticketId}`
                axios.post(url2, arrayToBackend, ticketId).then(response => {
                    const result = response.data
                    console.log("passList: ", result.data)
                    if (result['status'] === 'success') {
                        toast.success("Passenger added...!!")
                        const mailBody = {
                            destEmail,
                            subject,
                            message:`Train Name: ${trainDetails.dataofTrain.trainName}
                                    Start City: ${trainDetails.dataofTrain.startCity}
                                    Start City: ${trainDetails.dataofTrain.destCity}
                                    Date of Travelling: ${trainDetails.dateOfTrav}
                                    Boarding Time: ${trainDetails.dataofTrain.departureTime}
                                    Reach Time: ${trainDetails.dataofTrain.reachTime}
                                    Fare: ${ticketObj.ticketAmount}`
                        }
                        const url3 = `${URL}/tickets/sendMail`
                        axios.post(url3, mailBody).then(response => {
                            const result = response.data
                            console.log("Ticket mail: ", result.data)
                            if (result['status'] === 'success') {
                                toast.success("Ticket sent to your mail....!!")
                            } else {
                                toast.error(result['error'])
                            }
                        })
                        navigate("/ticket", { state: { passList: array, trainData: trainDetails, ticketObj } })
                    } else {
                        toast.error(result['error'])
                    }
                })

            } else
                toast.error(result['error'])
        })
    }
    //this method is calling above helper method
    const makePayment = () => {

        if (cardNumber.length == 0)
            toast.warning("Please enter the card number..!!");
        else if (date.length == 0)
            toast.warning("Please enter the card date..!!");
        else if (cvv.length == 0)
            toast.warning("Please enter the card cvv..!!");
        else if (name.length == 0)
            toast.warning("Please enter the card name..!!");
        else {
            //sweet alert is used to ask permissions or give confirmations
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Confirm it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    helper()
                    Swal.fire(
                        'Booked!',
                        'Your Ticket has been Confirmed...!!',
                        'success'
                    )
                }
            })
        }

    }



    return (
        <div className="container" style={{ font: "50px", color: "black", fontFamily: "inherit" }} >
            <h1 style={{ color: "red" }}>Payment</h1>
            <br>
            </br>
            <div className="row" >
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div>
                            <label htmlFor="" className="label-control">Card number :</label>
                            <input
                                onChange={(e) => {
                                    setCardNumber(e.target.value)
                                }}
                                type="number"
                                className="form-control" />
                        </div>
                        <br>
                        </br>
                        <div>
                            <label htmlFor="" className="label-contor">Date(MM/yy) :</label>
                            <input
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                                type="text"
                                className="form-control" />
                        </div>
                        <br>
                        </br>
                        <div>
                            <label htmlFor="" className="label-contor">cvv :</label>
                            <input
                                onChange={(e) => {
                                    setCvv(e.target.value)
                                }}
                                type="number"
                                className="form-control" />
                        </div>
                        <br>
                        </br>
                        <div>
                            <label htmlFor="" className="label-contor">Name of card holder :</label>
                            <input
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                                type="text"
                                className="form-control" />
                        </div>
                        <br>
                        </br>
                        <div style={{ marginBottom: "45px" }} className='row'>
                            <button
                                onClick={makePayment}
                                className="btn btn-success"
                                style={{ borderRadius: "7px", marginTop: "10px" }}>
                                Make Payment
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>

    )
}

export default Payment