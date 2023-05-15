import React, { useState } from 'react';
import "./Payments.css"
import { useNavigate } from 'react-router-dom';

const Payments = () => {
    const [currentRole, setCurrentRole] = useState('basic');
    const navigate = useNavigate();
    
    const handleBackClick = () => {
        navigate('/');
    }
    
    const handlePayment = (e) => {
        e.preventDefault();
        setCurrentRole('company');
    };

    return (
        <form onSubmit={handlePayment}>
            <div>
                <div class="payments-container">
                    <label class="payment">Select the subscription</label>
                    <input type="radio" name="payment" value="1mes" />
                    <label>1 mounth - 10€</label>
                    <input type="radio" name="payment" value="3meses" />
                    <label>3 mounth - 20€</label>
                    <input type="radio" name="payment" value="1año" />
                    <label>1 year - 30€</label>
                </div>
                <button className="btn btn-primary" type="submit">Pay</button>
                <p class="payment">Tu rol actual es: {currentRole}</p>
                <button className="btn btn-primary" type="submit" onClick={handleBackClick} >Go Back</button>
            </div>
        </form>
    );
};

export default Payments;
