<template>
  <div className="navbar navbar-expand-lg nav-background">
    <div className="container-fluid">
      <a className="logo" href="/"><img src="../assets/wordmark.png" className='wordmark' /></a>
      <div className="d-none d-lg-block">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-link">
            <a className="btn btn-dark" href="/music">Listen Now</a>
          </li>
          <li className="nav-link">
            <a className="btn btn-dark" href="/shows">Upcoming Shows</a>
          </li>
          <li className="nav-link">
            <a className="btn btn-dark" href="/contact">Booking / Contact</a>
          </li>
        </ul>
      </div>
      <div className="d-lg-none">
        <div className="btn-group">
          <a className="btn btn-dark" href="/shows">Shows</a>
          <a className="btn btn-dark" href="/music">Music</a>
          <a className="btn btn-dark" href="/contact">Contact</a>
        </div>
      </div>
    </div>
  </div>
</template>