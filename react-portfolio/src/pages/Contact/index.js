import React,{useState} from 'react'
// import './style.css'
// import { BsGithub, BsLinkedin }

const ContactMeForm = () => {

    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

    const handleInputChange = (e) => {
        if(e.target.id==='nameInput'){
            setNameInput(e.target.value)
        } else if (e.target.id==='emailInput'){
            setEmailInput(e.target.value)
        } else if (e.target.id==='messageInput'){
            setMessageInput(e.target.value)
        }
    }

    const [alertText, setAlertText] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(emailInput.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
            setAlertText('This form does not currently function. Please try again at another time.')
        } else if(nameInput.length < 1 || emailInput  < 1|| messageInput  < 1) {
            setAlertText('All fields must be filled out!')
        } else if(!emailInput.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setAlertText('Please enter a valid email address!')
        } 
    }

    return (
        <div className='ContactMeContainer'>
            <h2>Contact Me</h2>
            <form>
                <div id='nameDiv'>
                <label htmlFor='nameInput'>Your name: </label>
                <input id='nameInput' value={nameInput} type='text' placeholder='Name' onChange={handleInputChange}></input>
                </div>
                <div id='emailDiv'>
                <label htmlFor='emailInput'>Your email: </label>
                <input id='emailInput' value={emailInput} type='text' placeholder='Email' onChange={handleInputChange}></input>
                </div>
                <div id='messageDiv'>
                <label htmlFor='messageInput'>Your message: </label>
                <textarea id='messageInput' value={messageInput} placeholder='Write a message here.' onChange={handleInputChange}></textarea>
                </div>
                <p id='alertText'>{alertText}</p>
                <button onClick={handleFormSubmit} >Submit</button>
            </form>
        </div>

      )
}

export default ContactMeForm