// import dependencies
import React from 'react';

// class
class Header extends React.Component {
  constructor() {
    super();
  }

  // render
  render() {
    // _return
    return (<header id="main-header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item logo-item" href="https://github.com/YaraWebDeveloper" target="_blank">
            <img src={global.conf.mediaApi + "img/test/logo_img.png"} className="__img-logo"/>
          </a>
        </div>
      </nav>
    </header>)
  }
}

// export
export default Header;
