import React from "react";

class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.State = {
      dayOfWeek: "Monday"
    };

  }

  render(props) {
    // let currentWeekday = props.marketSchedule.find(x => x.day === "Monday");
    // console.log(currentWeekday);
    
    
    return (
      <React.Fragment>
        <h1 class="display-6">Market Schedule</h1>
        <hr />
        <form>
          <label for="weekdays"><span class="text-lead">Choose a day of the week:</span></label>
            <select class="form-control" id="weekdays" name="weekdays">
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
        </form>
        <hr />
        {/* <p>Day of the Week: {currentWeekday.day}</p> */}
      </React.Fragment>
    );
  }

}

export default Schedule;