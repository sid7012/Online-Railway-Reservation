import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { URL } from '../config'
import { useNavigate } from 'react-router'


const AddTrain = () => {

  const navigate = useNavigate()

  const [trainName, setTrainName] = useState('')
  const [startCity, setSourseCity] = useState('')
  const [destCity, setDestCity] = useState('')
  const [departureTime, setDepartureTime] = useState('')
  const [reachTime, setReachTime] = useState('')
  const [acSeatingSeatCount, setACSeatCountSitting] = useState(0)
  const [acSleeperSeatCount, setACSeatCountSleeping] = useState(0)
  const [nonAcSeatingSeatCount, setNonACSeatCountSitting] = useState(0)
  const [nonAcSleeperSeatCount, setNonACSeatCountSleeping] = useState(0)
  const [acSeatingSeatPrice, setACSeatPriceSitting] = useState(0)
  const [acSleeperSeatPrice, setACSeatPriceSleeping] = useState(0)
  const [nonAcSeatingSeatPrice, setNonACSeatPriceSitting] = useState(0)
  const [nonAcSleeperSeatPrice, setNonACSeatPriceSleeping] = useState(0)
  const [totalSeatCount, setTotalSeatCount] = useState(0)

 
  const addTrain = () => {
    const body = {
      trainName,
      startCity,
      destCity,
      departureTime,
      reachTime,
      acSeatingSeatCount,
      acSleeperSeatCount,
      nonAcSeatingSeatCount,
      nonAcSleeperSeatCount,
      acSeatingSeatPrice,
      acSleeperSeatPrice,
      nonAcSeatingSeatPrice,
      nonAcSleeperSeatPrice,
      totalSeatCount:0
    }
    const url = `${URL}/trains/`
    if (trainName === '')
      toast.error('Name is Empty')
    else if (startCity === '')
      toast.error('Source City is Empty')
    else if (destCity === '')
      toast.error('Destination City is Empty')
    else if (departureTime === '')
      toast.error('Departure Time is Empty')
    else if (reachTime === '')
      toast.error('Reach Time is Empty')
    else if (acSeatingSeatCount === 0)
      toast.error('AC Seating Seat Count is Empty')
    else if (acSleeperSeatCount === 0)
      toast.error('Ac Sleeper Seat Count is Empty')
    else if (nonAcSeatingSeatCount === 0)
      toast.error('non AC Seating Seat Count is Empty')
    else if (nonAcSleeperSeatCount === 0)
      toast.error('non AC Sleeper Seat Count is Empty')
    else if (acSeatingSeatPrice === 0)
      toast.error('AC Seating Seat Price is Empty')
    else if (acSleeperSeatPrice === 0)
      toast.error('AC Sleeper Seat Price is Empty')
    else if (nonAcSeatingSeatPrice === 0)
      toast.error('non AC Seating Seat Price is Empty')
    else if (nonAcSleeperSeatPrice === 0)
      toast.error('non AC Sleeper Seat Price is Empty')
    else {
      axios.post(url, body).then((response) => {
        const result = response.data
        if (result['status'] === 'success') {
          toast.success('Train added Successfully')
          navigate("/trainDetails")
        }
        else
          toast.error(result['error'])
      })
      console.log(body)
    }
  }
  const cancel = () => {
    navigate("/trainDetails")
  }

  return (

    <div className="container">
      <h2> Add Train here </h2>
      <div className="form">
        <div className="row">
          <div className="col">
            <div className="label-control">Train Name :</div>
            <input onChange={(e) => {
              setTrainName(e.target.value)
            }} type="text" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">Source City :</div>
            <input onChange={(e) => {
              setSourseCity(e.target.value)
            }} type="text" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="label-control">Destination City :</div>
            <input onChange={(e) => {
              setDestCity(e.target.value)
            }} type="text" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">Departure Time :</div>
            <input onChange={(e) => {
              setDepartureTime(e.target.value)
            }} type="time" className="form-control" pattern="[0-9]{2}" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="label-control">Reach Time :</div>
            <input onChange={(e) => {
              setReachTime(e.target.value)
            }} type="time" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">AC Seat Count(Sitting) :</div>
            <input onChange={(e) => {
              setACSeatCountSitting(e.target.value)
            }} type="number" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="label-control">AC Seat Count(Sleeping) :</div>
            <input onChange={(e) => {
              setACSeatCountSleeping(e.target.value)
            }} type="number" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">Non-AC Seat Count(Sitting) :</div>
            <input onChange={(e) => {
              setNonACSeatCountSitting(e.target.value)
            }} type="number" className="form-control" />
          </div>
        </div>


        <div className="row">
          <div className="col">
            <div className="label-control">Non-AC Seat Count(Sleeping) :</div>
            <input onChange={(e) => {
              setNonACSeatCountSleeping(e.target.value)
            }} type="number" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">AC Seat Price(Sitting) :</div>
            <input onChange={(e) => {
              setACSeatPriceSitting(e.target.value)
            }} type="number" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="label-control">AC Seat Price(Sleeping) :</div>
            <input onChange={(e) => {
              setACSeatPriceSleeping(e.target.value)
            }} type="number" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">Non-AC Seat Price(Sitting) :</div>
            <input onChange={(e) => {
              setNonACSeatPriceSitting(e.target.value)
            }} type="number" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="label-control">Non-AC Seat Price(Sleeping) :</div>
            <input onChange={(e) => {
              setNonACSeatPriceSleeping(e.target.value)
            }} type="number" className="form-control" />
          </div>
          <div className="col"></div>
        </div>
        <div>
          <button style={{ marginTop: "10px", borderRadius: "30px", width: "200px", height: "40px" }}
            onClick={addTrain} className="btn-primary button" >Add Train</button>
          <button style={{ marginTop: "10px", borderRadius: "30px", width: "200px", height: "40px" }} onClick={cancel} className="btn-danger float-end ">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddTrain