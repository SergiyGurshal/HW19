import { HashRouter as Router, Route, Link } from 'react-router-dom'
import SignIn from './sign_in/SignIn'
import SignUp from './sing_up/SignUp'
import ForgotPassword from './forgot_password/ForgotPassword'
import Home from './home/Home'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={SignIn} exact={true} />
        <Route path="/sign-in" component={SignIn} exact={true} />
        <Route path="/sign-up" exact={true} component={SignUp} />
        <Route path="/home" exact={true} component={Home} />
        <Route path="/forgot-password" exact={true} component={ForgotPassword} />
      </Router>
    </div>
  )
}
