import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

class Home extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="main-container">
            <h1>Home Route</h1>
            <div>
              <LogoutButton logout={this.onClickLogout} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
