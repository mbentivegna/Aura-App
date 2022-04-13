import './return.css';
import { useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function Return() {

    const [formData, setFormData] = useState(-1)

    const [buttonDisabled, setButtonDisabled] = useState(false);
  
    //*****Get Request for Number Options*****
    var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var numList= [];
    numberOptions.forEach(function(element) {
        numList.push({ label:element, value: element })
    });



    const submit = async() => {
        
        if (formData === -1)
        {
            toast.warn("Please Enter a Tracker #", {position: toast.POSITION.TOP_CENTER})
        }
        else 
        {
            toast.success("Successfully Returned Device! The Page will Reset Shortly.", {position: toast.POSITION.TOP_CENTER})
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
            <h2 className = "reg-title">Return</h2>
            <div>
                <h3>Tracker #:</h3>
                <Select options = {numList} className="select" onChange = {(e) => setFormData(e.label)}></Select>
                <button onClick = {submit} className = "submit-button" disabled = {buttonDisabled}>Submit</button>
            </div>
            
        </div>

    </div>
  );
}

export default Return;