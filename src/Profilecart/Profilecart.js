import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import './Profilecart.css'

const Profilecart = (props) => {
    const element = <FontAwesomeIcon icon={faUser} />
    let salaries = 0;
    for(const salary of props.cart){
        salaries = salaries+salary.salary;
    }
    return (
        <div className="cart-summary"> 
            <div className="profile-cart">
                <h4>{element} Profile Selected: {props.cart.length}</h4>
                <p>Total Amount: $ {salaries} <br/></p>
                {
                     props.cart.map(pname=><li>{pname.name}</li>)
                }
            </div>

            {/* {
                    props.cart.map(image=><img style={{width: '50px'}} src={image.img} alt="" />)
            }  */}
        </div>
    );
};

export default Profilecart;