import React, { useState, useEffect } from "react";

const TrackingPage = () => {
  const [pageVisits, setPageVisits] = useState(0);

  useEffect(() => {
    // Get the current page visits from local storage
    const storedPageVisits = localStorage.getItem("pageVisits");

    // If there are stored page visits, update the state
    if (storedPageVisits) {
      setPageVisits(parseInt(storedPageVisits, 10));
    }

    // Increment page visits and update local storage
    setPageVisits((prevVisits) => {
      const newPageVisits = prevVisits + 1;
      localStorage.setItem("pageVisits", newPageVisits.toString());
      return newPageVisits;
    });
  }, []);

  return (
    <div>
      <h1>Page Visit Tracker</h1>
      <p>This page has been visited {pageVisits} times.</p>
    </div>
  );
};

export default TrackingPage;
