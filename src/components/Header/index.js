import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="nav-bar">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/about">
        <h1>About</h1>
      </Link>
    </div>
  </nav>
)

export default Header
