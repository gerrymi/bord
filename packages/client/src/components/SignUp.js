import React from 'react'

function SignUp({
    buttonsDisplayed,
    setButtonsDisplayed
}) {
    function goBack() {
        console.log(buttonsDisplayed)
        setButtonsDisplayed(true)
    }
    return (
        <div className="sign-up__concept">
            <input className='user-panel__input' placeholder="E-mail Address" />
            <input type='password' className='user-panel__input' placeholder="Password" />
            <input type='password' className='user-panel__input' placeholder="Retype Password" />
            <button className='register-button'>Create Account</button>
            <button
                className='back-button'
                onClick={() => {
                    goBack() 
                }}> <i>&#60; Back</i></button>
        </div>
    )
}

export default SignUp