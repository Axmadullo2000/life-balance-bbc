function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar_menu">
        <a className="navbar-brand logo text-light text-md-center d-md-flex justify-content-md-center" href="/">
          Life Balance
        </a>

        <div className="collapse navbar-collapse menu" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-black" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default NavBar;