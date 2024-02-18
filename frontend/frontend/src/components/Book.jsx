import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { URL } from '../config'
import { toast } from 'react-toastify'

const Book = (props) => {
    const styles = {
        table: {
            marginTop: '10px',
            border: 'solid'
        }
    }
    const navigate = useNavigate()

    return (
        <div>
            <table className="table " style={styles.table}>
                <thead >
                    <tr>

                        <th scope="col">id</th>
                        <th scope="col">Train Name</th>
                        <th scope="col">Start city</th>
                        <th scope="col">Dest city</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Reach Time</th>
                        <th scope="col">Book</th>
                       
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td >{props.sam.id}</td>
                        <td>{props.sam.trainName}</td>
                        <td>{props.sam.startCity}</td>
                        <td>{props.sam.destCity}</td>
                        <td>{props.sam.departureTime}</td>
                        <td>{props.sam.reachTime}</td>
                        <td>
                            <button onClick={() => {
                                 navigate("/singleTrainDetails", { state: { data: props.sam} })
                            }} type="button" className="btn btn-success">Book</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Book