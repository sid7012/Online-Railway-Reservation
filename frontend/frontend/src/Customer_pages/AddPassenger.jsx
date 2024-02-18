import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AddedPassengerTable from './AddedPassengerTable'
import Swal from 'sweetalert2'
import TrainTableComponent from '../components/TrainTableComponent'

const AddPassenger = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    console.log(state)
    const trainData = state
    const sam = trainData.dataofTrain
    // console.log(state.dateOfTrav)
    const [arrayOfPassenger, setArrayOfPassenger] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [seatClassName, setSeatClassName] = useState('');
    const [innerType, setInnerType] = useState('');


    const addPassenger = () => {
        if (firstName.length === 0)
            toast.error("FirstName cannot be empty")
        else if (lastName.length === 0)
            toast.error("LastName cannot be empty")
        else if (gender.length === 0)
            toast.error("gender cannot be empty")
        else if (seatClassName.length === 0)
            toast.error("seatClassName cannot be empty")
        else if (innerType.length === 0)
            toast.error("Select Seating/Sleeper cannot be empty")
        else {
            const obj = { firstName, lastName, age, gender, seatClassName, innerType }
            arrayOfPassenger.push(obj)
            if (arrayOfPassenger.length !== 0)
                toast.success("Passenger added..!!")
            console.log(obj)
            console.log(arrayOfPassenger)

            // navigate("/addPassenger")
            setFirstName('')
            setLastName('')
            // setGender('')
            // setSeatClassName('')
            // setInnerType('')

        }
    }
    const bookTicket = () => {
        if (arrayOfPassenger.length !== 0) {
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then((result) => {
                // / Read more about isConfirmed, isDenied below /
                if (result.isConfirmed) {
                    Swal.fire('Saved!', '', 'success')
                    navigate("/payment", { state: { arrayOfPassenger, trainData } })
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
        }
        else
            toast.error("please add atleast one passeneger..!!")

    }

    return (
        <div style={{ marginTop: "20px" }} className="container-">
            <TrainTableComponent sam={sam} />
            <h1>Add Paseenger details</h1>
            <div className="form">
                <div className="row">
                    <div className="col">
                        <div className="label-control">FirstName :</div>
                        <input value={firstName} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} type="text" className="form-control" />
                    </div>

                    <div className="col">
                        <div className="label-control">LastName :</div>
                        <input value={lastName} onChange={(e) => {
                            setLastName(e.target.value)
                        }} type="text" className="form-control" />
                    </div>

                    <div className="col">
                        <div className="label-control">Age :</div>
                        <input onChange={(e) => {
                            setAge(e.target.value)
                        }} type="number" className="form-control" />
                    </div>

                    <div className="col">
                        <div className="label-control">Gender :</div>
                        <label type="date" className="form-control">
                            <select type="date" className="form-control" onChange={(e) => {
                                setGender(e.target.value)
                            }} >
                                <option style={{ textAlign: "center" }}>--Select --</option>
                                <option style={{ textAlign: "center" }}>Male</option>
                                <option style={{ textAlign: "center" }}>Female</option>
                            </select>
                        </label>
                    </div>

                    <div className="col">
                        <div className="label-control">Ac/Non-Ac :</div>
                        <label type="date" className="form-control">
                            <select type="date" className="form-control" onChange={(e) => {
                                setSeatClassName(e.target.value)
                            }} >
                                <option style={{ textAlign: "center" }}>--Select --</option>
                                <option style={{ textAlign: "center" }}>AC</option>
                                <option style={{ textAlign: "center" }}>NON-AC</option>
                            </select>
                        </label>
                    </div>

                    <div className="col">
                        <div className="label-control">seating/sleeping :</div>
                        <label type="date" className="form-control">
                            <select type="date" className="form-control" onChange={(e) => {
                                setInnerType(e.target.value)
                            }} >
                                <option style={{ textAlign: "center" }}>--Select --</option>
                                <option style={{ textAlign: "center" }}>Seating</option>
                                <option style={{ textAlign: "center" }}>Sleeper</option>
                            </select>
                        </label>
                    </div>
                    <div className="col">
                        <button onClick={addPassenger}
                            className="btn-success"
                            style={{ borderRadius: "7px", marginTop: "25px", width: "200px", height: "40px" }}>
                            Add Passenger
                        </button>
                    </div>
                </div>

            </div>

            <div style={{ marginTop: "50px" }} className="row">
                {(arrayOfPassenger.length !== 0) ? arrayOfPassenger.map((s) => {
                    return <AddedPassengerTable sam={s} />
                }) : ""}
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <button onClick={bookTicket}
                        className="btn-primary"
                        style={{ borderRadius: "7px", marginTop: "25px", width: "500px", height: "40px", marginBottom: "100px" }}>
                        Book Ticket
                    </button>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}


export default AddPassenger
