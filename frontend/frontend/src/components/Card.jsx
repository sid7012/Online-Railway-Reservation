import React from "react";
import { Link, parsePath } from "react-router-dom";

const AdminCard = (props) => {
  const data = props.bhushan
  const newdata = { ...data }

  console.log(newdata.msg)
  console.log(newdata.link)
  console.log(typeof (newdata))
  console.log(typeof (newdata.link))

  const url = newdata.link;
  return (
    <div>
      <div
        style={{
          color: "white",
          textAlign: "center",
          borderRadius: "50px",
          marginBottom: "100px",
        }}
        className=" bg-success ">
        <div className="card-header ">Features</div>
        <div
          style={{ color: "white", borderRadius: "30px" }}
          className="card-body bg-dark "
        >
          <h5 className="card-title">{newdata.msg}</h5>
          <Link style={{ textAlign: "center", width: "250px", borderRadius: "50px", }}
            to={{ pathname: url }}
            className="btn btn-danger"
          >
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
