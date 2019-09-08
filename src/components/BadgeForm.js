import React from 'react';

class BadgeForm extends React.Component{

  //state = {};
  handleClick = (e) => {
    console.log("Button was click");
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("The form was send");
    console.log(this.state);
  }

  render()
    {
      return (
        <div>
          <div className="card">
            <h1>Nuevo Badge</h1>
              <form onSubmit={this.props.onChange}>
                <div className="form-group">
                  <label htmlFor="">First Name</label>
                  <input onChange={this.props.onChange} 
                          className="form-control" 
                          type="text"
                          name="firstName"
                          value={this.props.formValues.firstName}
                          />
                </div>

                <div className="form-group">
                  <label htmlFor="">Last Name</label>
                  <input onChange={this.props.onChange} 
                          className="form-control" 
                          type="text"
                          name="lastName"
                          value={this.props.formValues.lastName}
                          />
                </div>

                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input onChange={this.props.onChange}
                          className="form-control" 
                          type="email"
                          name="email"
                          value={this.props.formValues.email}
                          />
                </div>

                <div className="form-group">
                  <label>Job Title</label>
                  <input onChange={this.props.onChange}
                          className="form-control" 
                          type="text"
                          name="jobTitle"
                          value={this.props.formValues.jobTitle}
                          />
                </div>

                <div className="form-group">
                  <label htmlFor="">Twitter</label>
                  <input onChange={this.props.onChange}
                          className="form-control" 
                          type="text"
                          name="twitter"
                          value={this.props.formValues.twitter}
                          />
                </div>

                <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
              </form>
            </div>
        </div>
      );
  }
}

export default BadgeForm;