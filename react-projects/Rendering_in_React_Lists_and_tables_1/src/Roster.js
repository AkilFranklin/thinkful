import React from "react";

function Roster({ detailed, roster }) {
  let rows;
  if (!detailed){
    rows = roster.map(({ id, firstName }) => <li>{firstName}</li>);
    return <main><ol>{rows}</ol></main>
  } else {
    rows = roster.map(({ id, firstName, lastName, location }) =>
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{location}</td>
      </tr>
    );
    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }

}

export default Roster;
