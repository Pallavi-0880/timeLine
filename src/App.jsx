import { useState } from "react"
import Time from "./Time.jsx"
import "./index.css"
import events from "./events.json"
const App = () => {
  const [data, setData] = useState(events);
  const [year, setYear] = useState(0);
  const [event, setEvent] = useState("");
  const changeYearState = (year) => {
    setYear(year.target.value);
  };
  const changeEventState = (event) => {
    setEvent(event.target.value);
  };

  const addItems = () => {
    let newObject = {}
    newObject.year = year;
    newObject.event = event;
    //  console.log(newObject)
    setData([...data, newObject])
  }

  return (
    <div >
      <h1 className="heading">Time-line</h1>
      <div className="container">
      {data.map(event => {
        return (<Time year={event.year} event={event.event} />)
      })}
      <input type="number" name="year" value={year} onChange={changeYearState} />
      <input type="text" name="event" value={event} onChange={changeEventState} />
      <button onClick={addItems}>Submit</button>
      </div>
    </div>
  )
}

export default App;
