import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../config'

const AddSchedule = () => {
    const { state } = useLocation()

    const trainData = state.trainData
    console.log(trainData)
    const trainId = trainData.id;
    console.log(trainId)

    const [dateOfTravelling, setDateOfTravelling] = useState('');


    const navigate = useNavigate();
    console.log(dateOfTravelling);

    const addSchedule = () => {
        if (trainId === 0)
            toast.warning("Train not found..!!")
        else if (dateOfTravelling.length === 0)
            toast.warning("Please select the date..!!")
        else {
            const body = {
                trainId,
                dateOfTravelling
            }
            const url = `${URL}/trainSchedule/addSchedule`
            axios.post(url, body).then((response) => {
                const result = response.data
                if (result['status'] === 'success') {
                    toast.success(`${trainData.trainName} Train Schedule added Successfully`)
                    navigate("/trainDetails")
                    console.log(result.data)
                }
                else
                    toast.error(result['error'])
            })
            console.log(body)
        }


    }

    return (
        <div style={{ marginTop: "20px" }} className='container'>
            <h1>Train Details</h1>
            <table style={{ border: "solid" }} className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Train Id</th>
                        <th scope="col">Train Name</th>
                        <th scope="col">Start City</th>
                        <th scope="col">Destination City</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Reach Time</th>
                        <th scope="col">AC Sleeper Fair</th>
                        <th scope="col">AC Seating Fair</th>
                        <th scope="col">non-AC Sleeper Fair</th>
                        <th scope="col">non-AC Seating Fair</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{trainData.id}</td>
                        <td>{trainData.trainName}</td>
                        <td>{trainData.startCity}</td>
                        <td>{trainData.destCity}</td>
                        <td>{trainData.departureTime}</td>
                        <td>{trainData.reachTime}</td>
                        <td>{trainData.acSleeperSeatPrice}</td>
                        <td>{trainData.acSeatingSeatPrice}</td>
                        <td>{trainData.nonAcSleeperSeatPrice}</td>
                        <td>{trainData.nonAcSeatingSeatPrice}</td>
                    </tr>
                </tbody>
            </table>
            <div className="row">
                <div className="row">
                    <div className="label-control ">Add Date :</div>

                    <input id='2' onChange={(e) => {
                        setDateOfTravelling(e.target.value)
                    }} type="date" className="form-control" >

                    </input>
                </div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                    <button onClick={addSchedule}
                        className="btn-primary"
                        style={{ borderRadius: "7px", marginTop: "50px", width: "100%", height: "40px" }}>
                        Add Schedule
                    </button>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default AddSchedule