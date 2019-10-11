import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';

const UserForm = () => {
    let [step, setStep] = useState(1);
    let [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const handleChange = input => e => {
        setUserInfo({
            ...userInfo,
            [input]: e.target.value
        })
    }

    switch (step) {
        case 1:
            return (
                <FormUserDetails
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={userInfo}
                />
            )
        case 2:
            return (
                <h1>FormPersonalDetails</h1>
            )
        case 3:
            return (
                <h1>Confirm</h1>
            )
    }
}

export default UserForm;