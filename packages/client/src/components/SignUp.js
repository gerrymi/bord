import React from 'react'

function SignUp({
buttonsDisplayed,
setButtonsDisplayed
}) 
{
    function goBack() {
        console.log(buttonsDisplayed)
        setButtonsDisplayed(true)
    }
    return  (
        <div className="sign-up">
            <input placeholder="User Name"/>
            <input placeholder="Email"/>
            <input placeholder="Create Password"/>
            <button>Register</button>
            <button onClick={() => {
                goBack()
            }}>Back</button>
        </div>
    )
}

export default SignUp