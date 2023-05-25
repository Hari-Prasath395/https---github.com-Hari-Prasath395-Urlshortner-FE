


import React from 'react';

const Dashboard = ({ urlsPerDay, urlsPerMonth }) => {
  return (
    <div className='container'>
    <div className="row mt-3">
      <div className="col">
        <table className="table table-success">
          <thead>
            <tr>
              <th>URLs Created per Day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{urlsPerDay}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col">
        <table className="table table-success">
          <thead>
            <tr>
              <th>URLs Created per Month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{urlsPerMonth}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
