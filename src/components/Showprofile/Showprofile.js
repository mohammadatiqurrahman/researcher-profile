import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import './Showprofile.css'

const Showprofile = (props) => {
    // console.log(props.profile)
    const element = <FontAwesomeIcon icon={faCheckSquare} />

    const {name,age,title,salary,img,country} = props.profile
    return (
        <div className="style-profile">
         <img src={img} alt="" />
         <h4>Name: {name}</h4>
         <h5>Title: {title}</h5>
         <p>Age: {age}</p>
         <p>Country: {country}</p>
         <p>Salary: ${salary}</p>
         <button className="btn-regular" onClick={()=>{props.handleProfile(props.profile)}}>{element} Select Profile</button>
        </div>
    );
};

export default Showprofile;