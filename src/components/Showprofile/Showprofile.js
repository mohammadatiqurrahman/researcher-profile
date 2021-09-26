import React from 'react';
import './Showprofile.css'

const Showprofile = (props) => {
    // console.log(props.profile)
    const {name,age,title,salary,img,country} = props.profile
    return (
        <div className="style-profile">
         <img src={img} alt="" />
         <h4>Name: {name}</h4>
         <h5>Title: {title}</h5>
         <p>Age: {age}</p>
         <p>Country: {country}</p>
         <p>Salary: ${salary}</p>
         <button onClick={()=>{props.handleProfile(props.profile)}}>Select Profile</button>
        </div>
    );
};

export default Showprofile;