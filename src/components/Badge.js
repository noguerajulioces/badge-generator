import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
  render()
    {
      return <div>
        <div className="Badge">
          <div className="Badge__header">
            <img src={confLogo} alt="header"/>
          </div>
        <div className="Badge__section-name">
          <imag className="Badge__avatar" src= {this.props.avatarURL} alt="name"></imag>
          <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
        </div>
        <div className="Badge__section-info">
          <p><strong>{this.props.jobTitle} </strong></p>
          <p> @{this.props.twitter} </p>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
        </div>
      </div>
  }
}

export default Badge;