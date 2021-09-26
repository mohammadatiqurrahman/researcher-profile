import React from 'react';
import './Profilecart.css'

const Profilecart = (props) => {
    // console.log(props.cart)
    let salaries = 0;
    for(const salary of props.cart){
        salaries = salaries+salary.salary
    }
    return (

        <div className="profile-cart">
            
            <div>
                <h4>Profile Selected: {props.cart.length}</h4>
                <p>Total Amount: ${salaries} <br/></p>
            </div>
            <div className="cart-profile">

            {/* {
                    props.cart.map(image=><img style={{width: '50px'}} src={image.img} alt="" />)
            }  */}
            {
                     props.cart.map(pname=><li>{pname.name}</li>)
            } 


            </div>
        </div>
    );
};

export default Profilecart;