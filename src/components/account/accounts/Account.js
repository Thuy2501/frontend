import { Switch, Route } from 'react-router-dom'
import Accounts from './Accounts'
import ForgotPassword from './auth/ForgotPassword'
// import Test from './accounts/auth/Test'
import Test1 from './Test1'
import Test2 from './Test2'
import ResetPassword from './auth/ResetPassword'
import Login from './auth/Login'
import Register from './auth/Register'

const Auth = () => {
  return (
    <div>
      <Route path="/accounts" component={Accounts}></Route>
      <Route path="/test1" component={Test1}></Route>
      <Route path="/test2" component={Test2}></Route>
      <Switch>
        {/* <Route path="/accounts/register" component={Accounts} exact></Route> */}
        <Route path="/forgot_password" component={ForgotPassword} exact></Route>
        {/* <Route path="/test" component={Test} exact></Route> */}
        <Route path="/register" component={Register} exact></Route>
        <Route path="/reset_password" component={ResetPassword} exact></Route>
        {/* <Route path="/login" component={Accounts} exact></Route> */}
      </Switch>
    </div>
  )
}

export default Auth
