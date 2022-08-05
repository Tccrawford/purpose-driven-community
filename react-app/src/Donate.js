import React, {useState} from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";







function DonationForm(){
    const [donationInput, setDonationInput] = useState("");
    const navigate = useNavigate();
    const sendDonation = async (e) => {

        e.preventDefault();
        fetch('/create-donation-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                donation: donationInput
            })
        }).then(res => {
            if(res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(() => {
            navigate('/donation-session')
        }).catch(e => {
            console.error(e.error)
        })
    }
    return(
        <div>
        <InputGroup onSubmit={sendDonation} className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Dollar amount (with dot and two decimal places)" 
            onChange={(e) => {
                        setDonationInput(e.target.value);
                        console.log(e.target.value);}
            } 
            />
            <Button type="submit">Submit</Button>
        </InputGroup>

        </div>
    )
}

export default DonationForm;