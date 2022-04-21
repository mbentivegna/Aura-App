import './register.css';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {getAvailableTags} from '../APIUtils.js'
toast.configure()

function Register() {

    const [formData, setFormData] = useState({
        username: "",
        visitorType: "",
        boardName: "",
        email: ""
    })

    const [getTags, setGetTags] = useState([])
    useEffect(() =>{
        getAvailableTags().then((data) => {setGetTags(data)})
        return getTags
    }, [])

    const [buttonDisabled, setButtonDisabled] = useState(false);

    var typeOptions = ["STUDENT", "FACULTY", "GUEST"]
    var list= [];
    typeOptions.forEach(function(element) {
        list.push({ label:element, value: element })
    });

    //*****Get Request for Number Options*****
    function numListFunc() {
        var numList= [];
        getTags.forEach(function(element) {
            numList.push({ label:element.boardName, value: element.boardName })
        });
        
        return numList
    }

    const submit = async() => {
        
        if (formData.username === "")
        {
            toast.warn("Please Enter a Name", {position: toast.POSITION.TOP_CENTER})
        }
        else if (formData.visitorType === "")
        {
            toast.warn("Please Enter a Visitor Type", {position: toast.POSITION.TOP_CENTER})
        }
        else if (formData.boardName === "")
        {
            toast.warn("Please Enter a Tracker #", {position: toast.POSITION.TOP_CENTER})
        }
        else 
        {
            toast.success("Successfully Registered Device! The Page will Reset Shortly.", {position: toast.POSITION.TOP_CENTER})
            console.log(formData)
            fetch('http://localhost:8080/api/board/assign', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })


            setButtonDisabled(true)
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

  return (
    <div className = "total">
        <div className = "register">
            <h2 className = "reg-title">Registration</h2>
            <div>
                <h3 className = "sub-title">Name:</h3>
                <input type = "text" value = {formData.username} onChange = {(e) => setFormData({...formData, username: e.target.value})}  className="inputBoxes" />

                <h3 className = "sub-title">Email:</h3>
                <input type = "text" value = {formData.email} onChange = {(e) => setFormData({...formData, email: e.target.value})}  className="inputBoxes" />

                <h3 className = "sub-title">Visitor Type:</h3>
                <Select options = {list} className="select" onChange = {(e) => setFormData({...formData, visitorType: e.label})} defaultValue={"None"}></Select>

                <h3 className = "sub-title">Tracker #:</h3>
                <Select options = {numListFunc()} className="select" onChange = {(e) => setFormData({...formData, boardName: e.label})} defaultValue={"None"}></Select>
                <button onClick = {submit} className = "submit-button" disabled= {buttonDisabled}>Submit</button>
            </div>
            
        </div>

    </div>
  );
}

export default Register;