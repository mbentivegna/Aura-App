import './register.css';
import { useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function Register() {

    const [formData, setFormData] = useState({
        name: "",
        type: "",
        number: -1,
    })

    const [buttonDisabled, setButtonDisabled] = useState(false);


    var typeOptions = ["Student", "Faculty", "Critic"]
    var list= [];
    typeOptions.forEach(function(element) {
        list.push({ label:element, value: element })
    });

    //*****Get Request for Number Options*****
    var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var numList= [];
    numberOptions.forEach(function(element) {
        numList.push({ label:element, value: element })
    });



    const submit = async() => {
        
        if (formData.name === "")
        {
            toast.warn("Please Enter a Name", {position: toast.POSITION.TOP_CENTER})
        }
        else if (formData.type === "")
        {
            toast.warn("Please Enter a Visitor Type", {position: toast.POSITION.TOP_CENTER})
        }
        else if (formData.number === -1)
        {
            toast.warn("Please Enter a Tracker #", {position: toast.POSITION.TOP_CENTER})
        }
        else 
        {
            toast.success("Successfully Registered Device! The Page will Reset Shortly.", {position: toast.POSITION.TOP_CENTER})
            console.log(formData)
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
                <h3>Name:</h3>
                <input type = "text" value = {formData.name} onChange = {(e) => setFormData({...formData, name: e.target.value})}  className="inputBoxes" />

                <h3>Visitor Type:</h3>
                <Select options = {list} className="select" onChange = {(e) => setFormData({...formData, type: e.label})} defaultValue={"None"}></Select>

                <h3>Tracker #:</h3>
                <Select options = {numList} className="select" onChange = {(e) => setFormData({...formData, number: e.label})} defaultValue={"None"}></Select>
                <button onClick = {submit} className = "submit-button" disabled= {buttonDisabled}>Submit</button>
            </div>
            
        </div>

    </div>
  );
}

export default Register;