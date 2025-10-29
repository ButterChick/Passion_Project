import React from "react";
import Table from "../compents/Table";
import Card from "../compents/Card";

const Patients = () => {
    return (
        <div>
            <h1>Table of all Exisiting Patients(Heading)</h1>
            <div className="px-5 py-5">
                <Table/>
            </div>
            <div className="p-5">
                <Card
                    className = "rounded-lg"
                    title="New Patient"
                    action="Add Patient"
                    link="/NewPatientForm"
                    />
            </div>
        </div>
    );
}

export default Patients;