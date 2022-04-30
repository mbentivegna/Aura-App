import './return.css';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {getOccupiedTags} from '../APIUtils'

toast.configure()
function Return() {

    const [formData, setFormData] = useState("")

    const [buttonDisabled, setButtonDisabled] = useState(false);
  
    const [occupied, setOccupied] = useState([]);

    useEffect(() =>{
        getOccupiedTags().then((data) => {setOccupied(data)})
        return occupied
    }, [])

    //*****Get Request for Number Options*****
    var numList= [];
    occupied.forEach(function(element) {
        numList.push({ label:element.boardName, value: element.boardName})
    });



    const submit = async() => {
        
        if (formData === "")
        {
            toast.warn("Please Enter a Tracker #", {position: toast.POSITION.TOP_CENTER})
        }
        else 
        {
            toast.success("Successfully Returned Device! The Page will Reset Shortly.", {position: toast.POSITION.TOP_CENTER})
            console.log(formData)
            setButtonDisabled(true)

            fetch('http://localhost:8080/api/board/unassign?boardName=' + formData, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
            //******Make post request here******
            await sleep(6);
            window.location.reload(false);
            
        }
    }

    function sleep(duration) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, duration * 1000)
        })
    }

    const customStyles = {
        control: base => ({
          ...base,
          height: 50,
          minHeight: 50,
          
        })
      };


  return (
    <div className = "total-ret">
        <div className = "return">
            <h2 className = "ret-title">Return</h2>
            <div>
                <h3 className = "sub-title-ret">Tracker #:</h3>
                <Select styles={customStyles} options = {numList} className="select-ret" onChange = {(e) => setFormData(e.label)}></Select>
                <button onClick = {submit} className = "submit-button-ret" disabled = {buttonDisabled}>Submit</button>
            </div>
            
        </div>

    </div>
  );
}

export default Return;