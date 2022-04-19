import React from "react";
import Header from "./Header";
import Schedule from "./Schedule"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const marketSchedule = [  
    {  
       day: "Sunday",
       location: "Lents International",
       hours: "9:00am - 2:00pm",
       booth: "4A"
    },
    {  
       day: "Monday",
       location: "Pioneer Courthouse Square",
       hours: "10:00am - 2:00pm",
       booth: "7C"
    },
    {  
       day: "Tuesday",
       location: "Hillsboro",
       hours: "5:00pm - 8:30pm",
       booth: "1F"
    },
    {  
       day: "Wednesday",
       location: "Shemanski Park",
       hours: "10:00am - 2:00pm",
       booth: "3E"
    },
    {  
       day: "Thursday",
       location: "Northwest Portland",
       hours: "2:00pm - 6:00pm",
       booth: "6D"
    },
    {
      day: "Friday",
      location: "No market on Friday",
      hours: "n/a",
      booth: "n/a"
    },
    {  
       day: "Saturday",
       location: "Beaverton",
       hours: "10:00am - 1:30pm",
       booth: "9G"
    }
   ];

  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          <Header />
        </div>
        <div class="row">
          <div class="col-md-4">
            <Schedule 
              marketSchedule = {marketSchedule} />
          </div>
          <div class="col-md-8">
          </div>
        </div>  
      </div>
    </React.Fragment>
  );
}

export default App;