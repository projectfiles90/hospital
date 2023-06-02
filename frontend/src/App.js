import "./App.css";
import axios from "axios";
import Patients from "./components/patients";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/patients";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPatients(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Patients patients={patients} />
    </div>
  );
}

export default App;