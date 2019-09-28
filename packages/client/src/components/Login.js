import React from 'react'
function Login({
    buttonsDisplayed,
    setButtonsDisplayed
    }) 
    {
        function goBack() {
            console.log(buttonsDisplayed)
            setButtonsDisplayed(true)
        }
    return (
        <div className="log-in">
            <input placeholder="Username"/>
            <input placeholder="Create Password"/>
            <button>Log In</button>
            <button onClick={() => {
                goBack()
            }}>Back</button>
        </div>
    )
}

export default Login