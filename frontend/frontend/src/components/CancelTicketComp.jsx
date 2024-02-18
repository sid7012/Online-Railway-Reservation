import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../config'


const CancelTicketComp = (props) => {
    const styles = {
        table: {
            marginTop: '10px',
            border: 'solid',
            textAlign:"center"
        }
    }
    const navigate = useNavigate()

    const cancelTrain = () => {
        const url = `${URL}/tickets/${props.sam.id}`
        axios.delete(url).then((response) => {
            const result = response.data;
            console.log("inside delete train")
            if (result['status'] === 'success') {
                toast.success('Deleted successfully..!!')
                window.location.reload();
                navigate("/cancelTicket")
            }
            else {
                toast.warning(result['error'])
            }
        });
    }

    return (
        <div>
            <table className="table " style={styles.table}>
                <thead >
                    <tr>

                        <th scope="col">id</th>
                        <th scope="col">Start city</th>
                        <th scope="col">Dest city</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Reach Time</th>
                        <th scope="col">No of Passenger</th>
                        <th scope="col">status</th>
                        <th scope="col">Ticket Amount</th>

                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>{props.sam.id}</td>
                        <td>{props.sam.startCity}</td>
                        <td>{props.sam.destCity}</td>
                        <td>{props.sam.departureTime}</td>
                        <td>{props.sam.reachTime}</td>
                        <td>{props.sam.noOfPassanger}</td>
                        <td>{props.sam.status}</td>
                        <td>{props.sam.ticketAmount}</td>
                        <td>
                            <button onClick={cancelTrain} type="button" className="btn btn-danger">Cancel</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CancelTicketComp