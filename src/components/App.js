import React from "react";
import Header from "./Header";
import Schedule from "./Schedule"
import Produce from "./Produce"
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

   const availableProduce = [  
    {  
       month: "January",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Turnips"
       ]
    },
    {  
       month: "February",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes"
       ]
    },
    {  
       month: "March",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes"
       ]
    },
    {  
       month: "April",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Asparagus",
          "Garlic",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Potatoes"
       ]
    },
    {  
       month: "May",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Asparagus",
          "Cauliflower",
          "Garlic",
          "Lettuce",
          "Potatoes",
          "Radishes"
       ]
    },
    {  
       month: "June",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Blackberries",
          "Cherries",
          "Raspberries",
          "Strawberries",
          "Asparagus",
          "Broccoli",
          "Cauliflower",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Potatoes",
          "Radishes",
          "Squash"
       ]
    },
    {  
       month: "July",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Apricots",
          "Blackberries",
          "Blueberries",
          "Cherries",
          "Melons",
          "Nectarines",
          "Peaches",
          "Raspberries",
          "Strawberries",
          "Tomatoes",
          "Beets",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
       ]
    },
    {  
       month: "August",
       selection: [  
          "Apples",
          "Apricots",
          "Blackberries",
          "Blueberries",
          "Cherries",
          "Melons",
          "Nectarines",
          "Peaches",
          "Pears",
          "Plums",
          "Raspberries",
          "Rhubarb",
          "Strawberries",
          "Tomatoes",
          "Beets",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
       ]
    },
    {  
       month: "September",
       selection: [  
          "Apples",
          "Blueberries",
          "Grapes",
          "Melons",
          "Peaches",
          "Pears",
          "Plums",
          "Raspberries",
          "Tomatoes",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
       ]
    },
    {  
       month: "October",
       selection: [  
          "Apples",
          "Grapes",
          "Hazelnuts",
          "Melons",
          "Peaches",
          "Pears",
          "Tomatoes",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Pumpkins",
          "Radishes",
          "Squash",
          "Turnips"
       ]
    },
    {  
       month: "November",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Broccoli",
          "Carrots",
          "Cauliflower",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Squash",
          "Turnips"
       ]
    },
    {  
       month: "December",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
         "Broccoli",
          "Carrots",
          "Cauliflower",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Turnips"
       ]
    }
 ];

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-md-4">
            <Schedule 
              marketSchedule = {marketSchedule} />
          </div>
          <div className="col-md-8">
            <Produce 
              availableProduce = {availableProduce} />
          </div>
        </div>  
      </div>
    </React.Fragment>
  );
}

export default App;