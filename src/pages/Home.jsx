import React from "react";
import Card from "../compents/Card";

const Home = () => {
    return( 
    <div className="p-5">
        <div className="p-5">
        <Card
            className = "p-5"
            title="New Patient"
            />
        </div>
        <div className="p-5">
        <Card
            title="Existing Patient"
        />
        </div>
    </div>
    );
}

export default Home;