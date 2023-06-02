import React from "react";

function Patients(props) {
  return (
    <div>
      <h1>These patients are from the API</h1>
      {props.patients.map((patient) => {
        return (
            <h2>{patient.name}</h2>
          
        );
      })}
    </div>
  );
}

export default Patients;