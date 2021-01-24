import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { addUserToLS } from '../modules/localStorageMethods'

import '../sing_up/sign-up.sass'
import authIcon from '../imgs/padlock.svg'

export default function SignIn() {
  const [firstName, setFirstName] = useState({ value: '', right: false })
  const [lastName, setLastName] = useState({ value: '', right: false })
  const [email, setEmail] = useState({ value: '', right: false })
  const [password, setPassword] = useState({ value: '', right: false })
  const [policyChecked, setpolicyChecked] = useState(false)

  const onFormSubmit = (e) => {
    e.preventDefault()

    if (firstName.right && lastName.right && email.right && password.right && policyChecked) {
      addUserToLS({ firstName: firstName.value, lastName: lastName.value, email: email.value, password: password.value })
      localStorage.setItem('autofill', JSON.stringify(false))
      e.target.reset()
      window.location.href = '/home'
    }
  }

  const policyChange = (e) => {
    setpolicyChecked(e.target.checked)
  }

  const fNameChange = (e) => {
    const valueOfInput = e.target.value
    const nameForm = /...+/

    if (nameForm.test(valueOfInput)) {
      e.target.className = 'input name right'
      setFirstName({ value: valueOfInput, right: true })
    } else {
      e.target.className = 'input name wrong'
      setFirstName({ value: valueOfInput, right: false })
    }
  }

  const lNameChange = (e) => {
    const valueOfInput = e.target.value

    const nameForm = /...+/

    if (nameForm.test(valueOfInput)) {
      e.target.className = 'input name right'
      setLastName({ value: valueOfInput, right: true })
    } else {
      e.target.className = 'input name wrong'
      setLastName({ value: valueOfInput, right: false })
    }
  }

  const passwordChange = (e) => {
    const valueOfInput = e.target.value

    const passwordForm = /(?=.*[a-z])(?=.*[A-Z])......../

    if (passwordForm.test(valueOfInput)) {
      e.target.className = 'input right'
      setPassword({ value: valueOfInput, right: true })
    } else {
      e.target.className = 'input wrong'
      setPassword({ value: valueOfInput, right: false })
    }
  }

  const emailChange = (e) => {
    const valueOfInput = e.target.value

    const emailForm = /...+@..+\...+/

    if (emailForm.test(valueOfInput)) {
      e.target.className = 'input right'
      setEmail({ value: valueOfInput, right: true })
    } else {
      e.target.className = 'input wrong'
      setEmail({ value: valueOfInput, right: false })
    }
  }

  return (
    <div className="sing-in">
      <div className="icon-container">
        <img src={authIcon} width="25px" height="25px" />
      </div>
      <h2 className="title">Sing up</h2>
      <form action="" className="sign-up-form" onSubmit={onFormSubmit}>
        <div className="full-name-container">
          <input type="text" className="input name" placeholder="First name *" onChange={fNameChange} />
          <input type="text" className="input name" placeholder="Last name *" onChange={lNameChange} />
        </div>
        <input type="email" className="input" placeholder="Email Address*" onChange={emailChange} />
        <input type="password" className="input" placeholder="Password*" onChange={passwordChange} />
        <div className="license">
          <input type="checkbox" name="license" className="checkbox-license" onClick={policyChange} />
          <label htmlFor="license">I want to recive inspiration, marketing promotions and sell soul to the devil</label>
        </div>
        <input type="submit" value="SIGN UP" className="submit-btn" />
      </form>
      <div className="links-container">
        <Link to="/sign-in" className="links">
          Already have an account? Sign in
        </Link>
      </div>
      <p className="copyright">Copyright @ Authorization 2020</p>
    </div>
  )
}
