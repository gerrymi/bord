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
        <div className="log-in__concept">
            <input className='user-panel__input' placeholder="E-mail Address"/>
            <input className='user-panel__input' placeholder="Password"/>
            <button className='log-in-button'>Log In</button>
            <button 
            className='back-button'
            onClick={() => {
                goBack()
            }}><i>&#60; Back</i></button>
        </div>
    )
}

export default Login