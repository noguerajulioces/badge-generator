import React from 'react';

import './styles/Badges.css';
import confLogo from '../images/stars.svg'; 

class Home extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Home;