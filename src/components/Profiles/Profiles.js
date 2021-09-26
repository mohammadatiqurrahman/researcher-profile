import React, { useEffect, useState } from 'react';
import Profilecart from '../../Profilecart/Profilecart';
import Showprofile from '../Showprofile/Showprofile'
import './Profiles.css'
const Profiles = () => {
    const [profiles,setProfiles] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res=>res.json())
        .then(data=>setProfiles(data))
    },[])

    const handleProfile = (profile) =>{
        const newCart = [...cart,profile];
        setCart(newCart)
    }
    return (
        <div className="profile-body">
            <div className="profile-details">
               {
                   profiles.map(profile=><Showprofile 
                    key={profile.key}
                    profile={profile}
                    handleProfile = {handleProfile}
                   ></Showprofile>)
               }
            </div>
            <div className="profile-cart">
                <Profilecart cart={cart}></Profilecart>
            </div>
        </div>
    );
};

export default Profiles;