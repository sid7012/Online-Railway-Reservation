import React from 'react'
import { Link } from 'react-router-dom'

const PassenegerComponent = () => {

    return (
        <div className="container-">
            <div className="row">
                <div className="col">
                    <div className="label-control">FirstName :</div>
                    <input type="text" className="form-control" />
                </div>
                <div className="col">
                    <div className="label-control">LastName :</div>
                    <input type="text" className="form-control" />
                </div>
                <div className="col">
                    <div className="label-control">Age :</div>
                    <input type="text" className="form-control" />
                </div>
                <div className="col">
                    <div className="label-control">Gender :</div>
                    <input type="text" className="form-control" />
                </div>
                <div className="col">
                    <div className="label-control">Ac/Non-Ac :</div>
                    <label type="date" className="form-control">
                        <select type="date" className="form-control" >
                            <option style={{ textAlign: "center" }}>--Select --</option>
                            <option style={{ textAlign: "center" }}>AC</option>
                            <option style={{ textAlign: "center" }}>NON-AC</option>
                        </select>
                    </label>
                </div>
                <div className="col">
                    <div className="label-control">Ac/Non-Ac :</div>
                    <label type="date" className="form-control">
                        <select type="date" className="form-control" >
                            <option style={{ textAlign: "center" }}>--Select --</option>
                            <option style={{ textAlign: "center" }}>Seating</option>
                            <option style={{ textAlign: "center" }}>Sleeper</option>
                        </select>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default PassenegerComponent