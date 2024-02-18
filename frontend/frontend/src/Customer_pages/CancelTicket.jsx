import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CancelTicketComp from "../components/CancelTicketComp";
import { URL } from "../config";


const CancelTicket = () => {
    const [ticket, setTicket] = useState([]);
    // console.log(sessionStorage.id);
    // console.log(sessionStorage.firstName);

    useEffect(() => {

        const url = `${URL}/users/getListOfTickets/${sessionStorage.id}`;
        console.log("Inside get tickets");
        axios.put(url).then((response) => {
            const result = response.data;
            console.log("List of Tickets")
            if (result['status'] === 'success') {
                setTicket(result.data);
                console.log(result.data)
            } else {
                toast.error(result['error'])
                console.log("error")
            }
        });
    }, []);

    const styles = {
        table: {
            marginTop: "10px",
            border: "solid",
        },
    };

    return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>
                </div>
            </div>
            <h2 style={{ textAlign: "center",color: "Background"  }}>Booked Ticket Details</h2>
            {ticket.map((t) => {
                return <CancelTicketComp key={t.id} sam={t} />;
            })}
        </div>
    );
};

export default CancelTicket;
