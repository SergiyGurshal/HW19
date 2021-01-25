import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../sign_in/sign-in.sass'
import authIcon from '../imgs/padlock.svg'
import { getUserFromLS } from '../modules/localStorageMethods'
import onChangeFn from '../modules/onChange'

export default function SignIn() {
  const [email, setEmail] = useState({ value: '', right: false })
  const [password, setPassword] = useState({ value: '', right: false })
  const [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    const user = getUserFromLS()

    if (JSON.parse(localStorage.getItem('autofill'))) {
      document.getElementById('emailInput').value = user.email
      document.getElementById('passwordInput').value = user.password
      document.getElementsByClassName('checkbox-remember')[0].checked = true
      setRememberMe(true)
    }
  }, [])

  const onFormSubmit = (e) => {
    e.preventDefault()

    const user = getUserFromLS()
    if (
      (email.right && password.right && email.value === user.email && password.value === user.password) ||
      JSON.parse(localStorage.getItem('autofill'))
    ) {
      localStorage.setItem('autofill', JSON.stringify(rememberMe))
      e.target.reset()
      window.location.href = '/HW19#/home'
    }
  }

  return (
    <div className="sing">
      <div className="icon-container">
        <img src={authIcon} width="25px" height="25px" />
      </div>
      <h2 className="sign-title">Sing in</h2>
      <form action="" className="sign-form" onSubmit={onFormSubmit}>
        <input
          type="email"
          className="input"
          id="emailInput"
          placeholder="Email Address *"
          onChange={(e) => onChangeFn(e, 'email', setEmail)}
        />
        <input
          type="password"
          className="input"
          id="passwordInput"
          placeholder="Password *"
          onChange={(e) => onChangeFn(e, 'password', setPassword)}
        />
        <div className="remember">
          <input type="checkbox" name="remember" className="checkbox-remember" onClick={(e) => setRememberMe(e.target.checked)} />
          <label htmlFor="remember">Remember me</label>
        </div>
        <input type="submit" value="SIGN IN" className="submit-btn" />
      </form>
      <div className="links-container-sign-in">
        <Link to="/forgot-password" className="links">
          Forgot password?
        </Link>
        <Link to="/sign-up" className="links">
          Don't have an account? Sign up
        </Link>
      </div>
      <p className="copyright">Copyright @ Authorization 2020</p>
    </div>
  )
}
