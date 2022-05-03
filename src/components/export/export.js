import './export.css';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState, useEffect} from 'react'
import { getVisitors, getCSV, fetchCSV} from "../APIUtils"
import Moment from "moment"
import TimePicker from 'react-time-picker';

function Export() {

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: "selection"
        }
      ]);

      const [apiState, apiSetState] = useState(
          {
              startString: "",
              endString: ""
          }
      )

      const [visitors, setVisitors] = useState([
          {
            id: "",
            username: "",
            visitorType: ""
          }
      ])

      const [startDateTime, setStartDateTime] = useState(["10:00:00"])
      const [endDateTime, setEndDateTime] = useState(["12:00:00"])


    useEffect(() =>{
        getVisitors().then((data) => {setVisitors(data)})
        if(apiState.startString != '' && apiState.endString != '')
        {
            //Make post request for csv here
            console.log(fetchCSV(apiState.startString, apiState.endString, startDateTime, endDateTime))
            console.log(apiState)
        }
        return visitors
    }, [apiState])

      const submit = async() =>
      {
        if(state[0].endDate != null) {
            apiSetState({...apiState, startString: Moment(state[0].startDate).format('YYYY-MM-DD'), endString: Moment(state[0].endDate).format('YYYY-MM-DD')})
        }
        else {
            apiSetState({...apiState, startString: Moment(state[0].startDate).format('YYYY-MM-DD'), endString: Moment(state[0].startDate).format('YYYY-MM-DD')})
        }
      }

      return (
    <div className="export">
        <div className = "date-picker">

          <h2 className = "title-date">Select Date Range</h2>
          <DateRange
            onChange={item => {setState([item.selection])}}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
          <div className = "overall-time-div">
            <div className = "start-time-div">
              <div className = "time-titles">Start Time:</div>
              <TimePicker onChange = {setStartDateTime} maxDetail = "second" value = {startDateTime} format = "HH:mm:ss" className = "time-selector"/>
            </div>
            <div className = "end-time-div">
              <div className = "time-titles">End Time:</div>
              <TimePicker onChange = {setEndDateTime} maxDetail = "second" value = {endDateTime} format = "HH:mm:ss" className = "time-selector"/>
            </div>
            
          </div>
          
          <button className = "export-all-button" onClick={submit}>Export</button>
        </div>
        <div className = "list-visitors">
                <h2 className = "export-vis-title">Visitors to Export CSV</h2>
        <div className = "list-styling">
          {visitors.map(({ id, username, visitorType }) => (
            <div key={id} className = "overall-card">
                <div className = "username-card">{username}</div> 
                <br/> 
                <div className = "visitortype-card">{visitorType}</div>
            </div>
        ))}
        </div>  
        </div>
    </div>
      );
    }

export default Export;