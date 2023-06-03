import Header from '../Header'

const About = props => {
  const onClickLogout = () => {
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="main-container">
          <h1>About Route</h1>
          <br />
          <div>
            <button type="button" onClick={onClickLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
