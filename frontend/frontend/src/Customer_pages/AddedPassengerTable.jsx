import React from 'react'

const AddedPassengerTable = (props) => {
    return (
        <div className='container'>
            <table style={{ border: "solid" }} className="table table-hover ">
                <thead className="table table-hover table-success">
                    <tr>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Ac/Non-Ac</th>
                        <th scope="col">seating/sleeping</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >{props.sam.firstName}</td>
                        <td >{props.sam.lastName}</td>
                        <td >{props.sam.age}</td>
                        <td >{props.sam.gender}</td>
                        <td >{props.sam.seatClassName}</td>
                        <td >{props.sam.innerType}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AddedPassengerTable