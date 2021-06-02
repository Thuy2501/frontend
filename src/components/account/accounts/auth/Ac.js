import { Switch, Route } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'
// import Test from './accounts/auth/Test'
import Test1 from './Test1'
import ResetPassword from './ResetPassword'
import Login from './Login'
import Register from './Register'

const Ac = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} exact></Route>
      <Route path="/forgot_password" component={ForgotPassword} exact></Route>
      {/* <Route path="/test" component={Test} exact></Route> */}
      <Route path="/register" component={Register} exact></Route>
      <Route path="/reset_password" component={ResetPassword} exact></Route>
      {/* <Route path="/login" component={Accounts} exact></Route> */}
      {/* <Route path="/test1" component={Test1} exact></Route> */}
    </Switch>
  )
}

export default Ac
