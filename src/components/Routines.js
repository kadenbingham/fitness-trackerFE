import React, { useState, useEffect } from "react";
const url = "http://fitnesstrac-kr.herokuapp.com/api/";

function Routines() {
  /*const [token, setToken]
  if () {
    return (
      <div>
        {}
        <form>{}</form>
      </div>
    );
  }
  */
  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    async function fetchRoutines() {
      const response = await fetch(`${url}routines`);
      const data = await response.json();
      setRoutines(data);
      console.log(routines);
    }
    fetchRoutines();
  }, []);
  return (
    <div>
      {routines.map((routine, i) => (
        <div key={i}>
          <h3>{routine.name}</h3>

          <p>{routine.goal}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
export default Routines;
