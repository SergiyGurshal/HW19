import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { addUserToLS } from '../modules/localStorageMethods'
import onChangeFn from '../modules/onChange'

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
      window.location.href = '/HW19#/home'
    }
  }

  return (
    <div className="sing">
      <div className="icon-container">
        <img src={authIcon} width="25px" height="25px" />
      </div>
      <h2 className="sign-title">Sing up</h2>
      <form action="" className="sign-form" onSubmit={onFormSubmit}>
        <div className="name-container">
          <input
            type="text"
            className="input name"
            placeholder="First name *"
            onChange={(e) => onChangeFn(e, 'name', setFirstName)}
          />
          <input
            type="text"
            className="input name"
            placeholder="Last name *"
            onChange={(e) => onChangeFn(e, 'name', setLastName)}
          />
        </div>
        <input type="email" className="input" placeholder="Email Address*" onChange={(e) => onChangeFn(e, 'email', setEmail)} />
        <input
          type="password"
          className="input"
          placeholder="Password*"
          onChange={(e) => onChangeFn(e, 'password', setPassword)}
        />
        <div className="license">
          <input
            type="checkbox"
            name="license"
            className="checkbox-license"
            onClick={(e) => setpolicyChecked(e.target.checked)}
          />
          <label htmlFor="license">I want to recive inspiration, marketing promotions and sell soul to the devil</label>
        </div>
        <input type="submit" value="SIGN UP" className="submit-btn" />
      </form>
      <div className="links-container-sign-up">
        <Link to="/sign-in" className="links">
          Already have an account? Sign in
        </Link>
      </div>
      <p className="copyright">Copyright @ Authorization 2020</p>
    </div>
  )
}
