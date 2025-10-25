import React from "react";
import Table from "../compents/Table";

const Patients = () => {
    return (
        <div>
            <h1>Table of all Exisiting Patients(Heading)</h1>
            <div className="px-5 py-5">
                <Table/>
            </div>
            <p>In the Table there will be 2 notes, One to add Daily Notes and other to Get the discharge summary</p>
        </div>
    );
}

export default Patients;