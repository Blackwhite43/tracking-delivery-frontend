// const { default: Button } = require("../ui/button");
import { useRef, useState } from "react";
import classes from "./event-search.module.css";
import axios from "axios";

function EventsSearch(props) {
  const startDateInputRef = useRef(null);
  const endDateInputRef = useRef(null);

  function submitHandler(event) {
    event.preventDefault();
    console.log(event);

    const selectedStartDate = startDateInputRef.current.value;
    const selectedEndDate = endDateInputRef.current.value;

    props.onSearch(selectedStartDate, selectedEndDate);
  }

  return (
    <form
      className={`classes.form flex pt-7 pb-5 justify-center`}
      onSubmit={submitHandler}
    >
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="startDate">Start date</label>
          <input
            type="date"
            id="startDate"
            ref={startDateInputRef}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="endDate">End date</label>
          <input
            type="date"
            id="endDate"
            ref={endDateInputRef}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
        </div>
      </div>
      <button className="w-28 rounded-lg font-bold p-1 bg-[var(--warna-6)] text-[var(--warna-3)] hover:bg-grey-700">
        Finds Events
      </button>
    </form>
  );
}

export default EventsSearch;
