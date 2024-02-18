import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import TrainTableComponent from '../components/TrainTableComponent'
import { URL } from '../config'

const SingleTrainDetails = () => {
    const { state } = useLocation()
    const trainData = state.data
    console.log(state.data.id)

    const [arrayOfDates, setArrayOfDates] = useState([]);
    const [dateSelected, setDateSelected] = useState('')
    const trainId = trainData.id;
    console.log(trainId)
    const navigate = useNavigate();

    useEffect(() => {
        const url = `${URL}/trains/selectDate/${trainId}`
        axios.get(url).then(response => {
            const result = response.data
            console.log("date of travellings")
            if (result['status'] === 'success') {
                setArrayOfDates(result.data)
                console.log(result.data)
            } else {
                toast.error(result['error'])
                console.log("error")
            }
        })
    }, [])


    const handleChange = (event) => {
        setDateSelected(event.target.value)

    };
    console.log(dateSelected)

    const bookTicket = () => {
        navigate("/addPassenger", { state: { dataofTrain: trainData, dateOfTrav: dateSelected } })
    }

    return (
        <div style={{ marginTop: "20px" }} className='container'>
            <TrainTableComponent sam={trainData} />
            <div className="label-control">Available Date of travelling</div>
            {arrayOfDates.length != 0 ? <label type="date" className="form-control">
                <select type="date" className="form-control" onChange={handleChange}>
                    <option style={{ textAlign: "center"}}>--Select Date of Travelling--</option>
                    {arrayOfDates.map((f) => (
                        <option value={f}>{f}</option>
                    ))}
                </select>
            </label>
                : <h3 style={{textAlign:"center", color:"red"}}>Dates are not available</h3> }
            <div className="row">
                <div className="col"></div>
                {
                    arrayOfDates.length !== 0 ?  <div style={{marginBottom:"170px"}} className="col">
                    <button onClick={bookTicket}
                        className="btn-primary"
                        style={{ borderRadius: "7px", marginTop: "50px", width: "100%", height: "40px" }}>
                        Book
                    </button>
                </div>:""
                }
               
                <div className="col"></div>
            </div>

        </div>
    )
}

export default SingleTrainDetails