import React, { Component } from 'react'

export default class Display extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <React.Fragment>
        <div className="table-responsive-sm">
          <table className="table align-middle  caption-top  table-dark table-striped table-bordered table-hover">
            <caption className="text-center fs-4 text-decoration-underline fw-bold text-danger">List of all Users</caption>
            <thead>
              <tr className="text-black table-info table-bordered border-black align-bottom">
                <th>Id</th>
                <th>Firstname</th>
                <th>LastName</th>
                <th>ImageUrl</th>
                <th>Country</th>
                <th>Username</th>
                <th>Password</th>

              </tr>
            </thead>
            {this.props.data && this.props.data.map((user) => {
             return <tbody key={user.id}>
                <tr className="text-info table-active table-bordered border-white fw-bold lh-sm">
                  <td className="text-danger fw-bold align-top lh-sm">{user.firstname}</td>
                  <td className="text-info fw-bold align-top lh-sm">{user.lastname}</td>
                  <td className="text-info fw-bold align-top lh-sm">{user.image}</td>
                  <td className="text-info fw-bold  align-top lh-sm">{user.country}</td>
                  <td className="text-info fw-bold align-top lh-sm">{user.cou}</td>
                  <td className="text-info fw-bold align-top lh-sm">{user.username}</td>
                  <td className="text-info fw-bold align-top lh-sm">{user.password}</td>

                </tr>
              </tbody>
            })}
          </table>
        </div>
      </React.Fragment>
    )
  }

}
