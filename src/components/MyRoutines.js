import React, { useState, useEffect } from "react";
const url = "http://fitnesstrac-kr.herokuapp.com/api/";

function MyRoutines() {
  const [myRoutines, setMyRoutines] = useState([]);
  console.log("My Routines: ", myRoutines);
  async function myRoutinesData() {
    const username = sessionStorage.getItem("USERNAME");
    const token = sessionStorage.getItem("AUTH_TOKEN");
    const response = await fetch(`${url}users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log("result: ", result);
    setMyRoutines(result);
  }
  useEffect(() => {
    myRoutinesData();
  }, []);

  return <div></div>;
}
export default MyRoutines;
