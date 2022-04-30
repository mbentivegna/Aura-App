import './export.css';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState, useEffect} from 'react'
import { getVisitors, getCSV, fetchCSV} from "../APIUtils"
import Moment from "moment"

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

    useEffect(() =>{
        getVisitors().then((data) => {setVisitors(data)})
        if(apiState.startString != '' && apiState.endString != '')
        {
            //Make post request for csv here
            console.log(fetchCSV(apiState.startString, apiState.endString))
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