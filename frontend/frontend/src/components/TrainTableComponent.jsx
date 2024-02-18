import React from 'react'

const TrainTableComponent = (props) => {

    const trainData = props.sam

    return (

        <div style={{ marginTop: "20px" }} className='container'>
            <h1>Train Details</h1>
            <table style={{ border: "solid" }} className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Train Id</th>
                        <th scope="col">Train Name</th>
                        <th scope="col">Start City</th>
                        <th scope="col">Destination City</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Reach Time</th>
                        <th scope="col">AC Sleeper Fare</th>
                        <th scope="col">AC Seating Fare</th>
                        <th scope="col">non-AC Sleeper Fare</th>
                        <th scope="col">non-AC Seating Fare</th>
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
        </div>
    )
}

export default TrainTableComponent