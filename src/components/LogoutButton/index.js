const LogoutButton = props => {
  const {logout} = props

  const LogoutBtn = () => {
    logout()
  }

  return (
    <div>
      <button type="button" onClick={LogoutBtn}>
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
