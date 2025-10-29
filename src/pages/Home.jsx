import React from "react";
import Card from "../compents/Card";

const Home = () => { 
    return( 
    <div className="p-5">
        <div className="p-5">
        <Card
            className = "p-5"
            title="New Patient"
            action="Add Patient"
            link="/NewPatientForm"
            />
        </div>
        <div className="p-5">
        <Card
            className = "p-5"
            title="Existing Patient"
            action="View Patients"
            link="/Patients"
        />
        </div>
    </div>
    );
}

export default Home;