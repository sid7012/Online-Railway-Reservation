import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../config";
import Train from "../components/Train";
import { useNavigate } from "react-router";


const TrainDetails = () => {
  const navigate = useNavigate();
  const [trains, setTrains] = useState([]);
  // console.log(sessionStorage.id);
  // console.log(sessionStorage.firstName);

  useEffect(() => {
    const url = `${URL}/trains/`;
    console.log("Inside get all trains");
    axios.get(url).then((response) => {
      const result = response.data;
      setTrains(result.data);

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
      <h2 style={{ textAlign: "center" }}>Train Details</h2>
      {trains.map((t) => {
        return <Train key={t.id} sam={t} />;
      })}
    </div>
  );
};

export default TrainDetails;
