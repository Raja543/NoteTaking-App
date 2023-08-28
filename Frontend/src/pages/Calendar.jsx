import React from "react";
import Sidebar from "../Components/Sidebar";
import EventForm from '../Components/EventForm';

const Calendar = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div>
        <h4>Calendar page</h4>
        <EventForm />
      </div>
    </div>
  );
};

export default Calendar;
