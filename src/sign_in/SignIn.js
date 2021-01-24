import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../sign_in/sign-in.sass'
import authIcon from '../imgs/padlock.svg'
import { getUserFromLS } from '../modules/localStorageMethods'

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
      window.location.href = '/home'
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

  const rememberChange = (e) => {
    setRememberMe(e.target.checked)
  }

  return (
    <div className="sing-in">
      <div className="icon-container">
        <img src={authIcon} width="25px" height="25px" />
      </div>
      <h2 className="title">Sing in</h2>
      <form action="" className="sign-in-form" onSubmit={onFormSubmit}>
        <input type="email" className="input" id="emailInput" placeholder="Email Address *" onChange={emailChange} />
        <input type="password" className="input" id="passwordInput" placeholder="Password *" onChange={passwordChange} />
        <div className="remember">
          <input type="checkbox" name="remember" className="checkbox-remember" onClick={rememberChange} />
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
