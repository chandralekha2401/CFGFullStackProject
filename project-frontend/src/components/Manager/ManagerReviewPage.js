import React from 'react';
import './ManagerReviewpage.css'

function ManagerReviewpage(){
 return (
    <div className='text-center' >
      <center>
        <table className="table">
  <thead className="thead-light">
    <tr>
      
      <th scope="col">Applicant's UserNames</th>
      <th scope="col">Applications</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Applicant1</td>
      <td><a href=" "> applicant1.pdf</a></td>
      <td>
        <button className="btn-Edit">pending</button>
        <button className ="btn-danger">Delcine</button>
        <button className="btn-success">Accept</button>
      </td>
    </tr>
    <tr>
      <td>Applicant2</td>
      <td><a href=" "> applicant2.pdf</a></td>
      <td>
      <button className="btn-Edit">pending</button>
        <button className ="btn-danger">Delcine</button>
        <button className="btn-success">Accept</button>
      </td>
    </tr>
    <tr>
      <td>Applicant3</td>
      <td><a href=" "> applicant3.pdf</a></td>
      <td>
      <button className="btn-Edit">pending</button>
        <button className ="btn-danger">Delcine</button>
        <button className="btn-success">Accept</button>
      </td>
    </tr>
      </tbody>
</table>
</center>
    </div>
 )
}
export default ManagerReviewpage;