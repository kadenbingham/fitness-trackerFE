import React, { useState, useEffect } from "react";

const url = "http://fitnesstrac-kr.herokuapp.com/api/";

function Activities() {
  const [activities, setActivities] = useState([]);
  console.log(activities);
  async function fetchActivities() {
    const response = await fetch(`${url}activities`);

    const data = await response.json();

    setActivities(data);
  }
  useEffect(() => {
    fetchActivities();
  }, []);
  return (
    <div>
      {activities.map((act, i) => (
        <div key={i}>
          <h3>{act.name}</h3>

          <p>{act.description}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Activities;
