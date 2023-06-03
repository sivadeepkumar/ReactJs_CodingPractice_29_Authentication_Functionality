import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  const onLoggedIn = () => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="main-container">
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={onLoggedIn}>
          Login With Sample Creds
        </button>
      </div>
    </div>
  )
}

export default Login
