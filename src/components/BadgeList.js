import React from 'react';

class BagdeList extends React.Component{
  render() {
      return(
        <div className="BadgesList">
          <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
              return(
                <div className="card" key={badge.id}>
                  <div className="row">
                    <div className="col-2">
                      <img src={badge.avatarUrl} alt="imagen"/>
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h5>{badge.firstName} <strong>{badge.lastName}</strong></h5>
                        <p>@{badge.twitter} 
                        <br/>
                        {badge.jobTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              );
            })}
          </ul>  
        </div>
      );
  }
}

export default BagdeList;