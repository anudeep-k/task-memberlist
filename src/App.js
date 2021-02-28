import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Members from "./components/Members";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMembers } from "./redux/actions/members";

import { getEvents } from "./redux/actions/events";
import Events from "./components/Events";
function App() {
  const members = useSelector((state) => state.members);
  const calendarEvents = useSelector((state) => state.events);
  const [people, setPeople] = useState([]);
  console.log(calendarEvents);
  const [events, setEvents] = useState([]);

  //    const [members,setMembers] =useState({})
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
    dispatch(getEvents());
    setPeople(members);
    setEvents(calendarEvents);
    console.log(members);
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Members
        members={people}
        setMembers={setPeople}
        events={events}
        setEvents={setEvents}
      />
      <Events events={events} setEvents={setEvents} />
    </div>
  );
}

export default App;
