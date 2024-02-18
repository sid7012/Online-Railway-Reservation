import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../config'

const PassengerList = () => {

    const navigate = useNavigate()

    const [array, setArray] = useState([]);
    const userId = sessionStorage.id

    useEffect(() => {
        const url = `${URL}/users/getListOfPassengers/${userId}`
        axios.put(url).then(response => {
            const result = response.data
            console.log("date of travellings")
            if (result['status'] === 'success') {
                console.log(result.data)
                setArray(result.data)
            } else {
                toast.error(result['error'])
                console.log("error")
            }
        })
    }, [])
    console.log("sam:", array)


    return (
        <div className='container'>
            <h2 style={{ textAlign: "center", color: "Background" }}>Passenger List</h2>
            <table className="table table-hover" style={{ marginTop: '10px', border: 'solid', marginBottom: "100px", borderRadius: "100px", textAlign:"center" }}>
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Train Name</th>
                        <th scope="col">Start City</th>
                        <th scope="col">Dest City</th>
                        <th scope="col">Seat Class</th>
                        <th scope="col">Seat Type</th>
                        <th scope="col">Date of Travelling</th>
                        <th scope="col">Ticket Id</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        array.map((arr) => {
                            return <tr>
                                <td>{arr.id}</td>
                                <td>{arr.firstName}</td>
                                <td>{arr.lastName}</td>
                                <td>{arr.age}</td>
                                <td>{arr.gender}</td>
                                <td>{arr.train.trainName}</td>
                                <td>{arr.train.startCity}</td>
                                <td>{arr.train.destCity}</td>
                                <td>{arr.seatClassName}</td>
                                <td>{arr.innerType}</td>
                                <td>{arr.dateOfTravelling}</td>
                                <td>{arr.ticket.id}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PassengerList