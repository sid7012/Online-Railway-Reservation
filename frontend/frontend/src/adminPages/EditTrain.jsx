import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import { toast } from "react-toastify"
import { URL } from '../config'
import { useNavigate } from 'react-router'

const EditTrain = () => {

    const navigate = useNavigate()

    const [trainName, setTrainName] = useState('')
    const [startCity, setSourseCity] = useState('')
    const [destCity, setDestCity] = useState('')
    const [departureTime, setDepartureTime] = useState('')
    const [reachTime, setReachTime] = useState('')
    const [acSeatingSeatPrice, setACSeatPriceSitting] = useState('')
    const [acSleeperSeatPrice, setACSeatPriceSleeping] = useState('')
    const [nonAcSeatingSeatPrice, setNonACSeatPriceSitting] = useState('')
    const [nonAcSleeperSeatPrice, setNonACSeatPriceSleeping] = useState('')

    //these fields are hidden in ui just used to send data to the backnd
    const [acSeatingSeatCount, setACSeatCountSitting] = useState('')
    const [acSleeperSeatCount, setACSeatCountSleeping] = useState('')
    const [nonAcSeatingSeatCount, setNonACSeatCountSitting] = useState('')
    const [nonAcSleeperSeatCount, setNonACSeatCountSleeping] = useState('')
    const [totalSeatCount, setTotalSeatCount] = useState('')

    const { state } = useLocation()
    const id = state.id
    useEffect(() => {
        const url = `${URL}/trains/${id}`
        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] === 'success') {
                // toast.success('Got the details of train...!!')
                console.log(result.data)
                const setData = result.data

                setTrainName(setData.trainName)
                setSourseCity(setData.startCity)
                setDestCity(setData.destCity)
                setDepartureTime(setData.departureTime)
                setReachTime(setData.reachTime)
                setACSeatPriceSitting(setData.acSeatingSeatPrice)
                setACSeatPriceSleeping(setData.acSleeperSeatPrice)
                setNonACSeatPriceSitting(setData.nonAcSeatingSeatPrice)
                setNonACSeatPriceSleeping(setData.nonAcSleeperSeatPrice)

                //these fields are hidden in ui just used to send data to the backnd
                setACSeatCountSitting(setData.acSeatingSeatCount)
                setACSeatCountSleeping(setData.acSleeperSeatCount)
                setNonACSeatCountSitting(setData.nonAcSeatingSeatCount)
                setNonACSeatCountSleeping(setData.nonAcSleeperSeatCount)
                setTotalSeatCount(setData.totalSeatCount)

            }
            else
                toast.error(result['error'])
        })
    }, []);

    const editHandler = () => {
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
            totalSeatCount

        }
        const url = `${URL}/trains/${id}`
        axios.put(url, body).then((response) => {
            const result = response.data
            if (result['status'] === 'success') {
                toast.success('Train edited suceessfully..!!')
                console.log("Sam", result.data)
                navigate("/trainDetails")
            }
            else
                toast.error(result['error'])
        })
    }

    const bhushan = () => {
        navigate("/trainDetails")
    }
    return (
        <div className="container">
            <h2> Add Train here </h2>
            <div className="form">
                <div className="row">
                    <div className="col">
                        <div className="label-control">Train Name :</div>
                        <input value={trainName} onChange={(e) => {
                            setTrainName(e.target.value)
                        }} type="text" className="form-control" />
                    </div>
                    <div className="col">
                        <div className="label-control">Source City :</div>
                        <input readOnly value={startCity} onChange={(e) => {
                            setSourseCity(e.target.value)

                        }} type="text" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="label-control">Destination City :</div>
                        <input readOnly value={destCity} onChange={(e) => {
                            setDestCity(e.target.value)
                        }} type="text" className="form-control" />
                    </div>
                    <div className="col">
                        <div className="label-control">Departure Time :</div>
                        <input value={departureTime} onChange={(e) => {
                            setDepartureTime(e.target.value)
                        }} type="time" className="form-control" pattern="[0-9]{2}" />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="label-control">Reach Time :</div>
                        <input value={reachTime} onChange={(e) => {
                            setReachTime(e.target.value)
                        }} type="time" className="form-control" />
                    </div>
                    <div className="col">
                        <div className="label-control">AC Seat Price(Sitting) :</div>
                        <input value={acSeatingSeatPrice} onChange={(e) => {
                            setACSeatPriceSitting(e.target.value)
                        }} type="number" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="label-control">AC Seat Price(Sleeping) :</div>
                        <input value={acSleeperSeatPrice} onChange={(e) => {
                            setACSeatPriceSleeping(e.target.value)
                        }} type="number" className="form-control" />
                    </div>
                    <div className="col">
                        <div className="label-control">Non-AC Seat Price(Sitting) :</div>
                        <input value={nonAcSeatingSeatPrice} onChange={(e) => {
                            setNonACSeatPriceSitting(e.target.value)
                        }} type="number" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="label-control">Non-AC Seat Price(Sleeping) :</div>
                        <input value={nonAcSleeperSeatPrice} onChange={(e) => {
                            setNonACSeatPriceSleeping(e.target.value)
                        }} type="number" className="form-control" />
                    </div>
                    <div className="col"></div>
                </div>
                <div>
                    <button style={{ marginTop: "10px" }} onClick={editHandler} className="btn-primary" >Edit Train</button>
                    <button style={{ margin: "10px" }} onClick={bhushan} className="btn-danger float-end">Cancel</button>
                </div>

                {/* following tags are hidden bcoz those r silentely sending data to the backend */}
                <div hidden>
                    <div className="row">
                        <div className="col">
                            <div className="label-control">AC Seat Count(Sleeping) :</div>
                            <input value={acSleeperSeatCount} onChange={(e) => {
                                setACSeatCountSleeping(e.target.value)
                            }} type="number" className="form-control" />
                        </div>
                        <div className="col">
                            <div className="label-control">Non-AC Seat Count(Sitting) :</div>
                            <input value={nonAcSeatingSeatCount} onChange={(e) => {
                                setNonACSeatCountSitting(e.target.value)
                            }} type="number" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="label-control">Non-AC Seat Count(Sleeping) :</div>
                        <input value={nonAcSleeperSeatCount} onChange={(e) => {
                            setNonACSeatCountSleeping(e.target.value)
                        }} type="number" className="form-control" />
                    </div>
                    <div className="col">
                        <div className="label-control">AC Seat Count(Sitting) :</div>
                        <input value={acSeatingSeatCount} onChange={(e) => {
                            setACSeatCountSitting(e.target.value)
                        }} type="number" className="form-control" />
                    </div>

                    <div className="col">
                        <div className="label-control">Total Seat Count :</div>
                        <input value={totalSeatCount} onChange={(e) => {
                            setTotalSeatCount(e.target.value)
                        }} type="number" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTrain