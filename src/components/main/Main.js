import { Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ForgotPassword from './auth/ForgotPassword'
import ActivationEmail from './auth/ActivationEmail'
import Body from './draft/Body'

import NotFound from '../utils/NotFound/NotFound'

import { useSelector } from 'react-redux'

const Main = () => {
  const auth = useSelector((state) => state.auth)
  const { isLogged, isAdmin } = auth
  return (
    <Switch>
      <Route
        path="/login"
        component={isLogged ? NotFound : Login}
        exact
      ></Route>
      <Route path="/forgot_password" component={ForgotPassword} exact></Route>
      <Route
        path="/register"
        component={isLogged ? NotFound : Register}
        exact
      ></Route>
      <Route
        path="/reader/activate/:activation_token"
        component={ActivationEmail}
        exact
      ></Route>
      <Route path="/bt" component={Body} exact></Route>
    </Switch>
  )
}

export default Main
