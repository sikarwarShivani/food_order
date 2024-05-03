import React from 'react'
import './Account.css'
import { IoIosArrowForward } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { IoHeartDislikeCircleSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import Person2Icon from '@mui/icons-material/Person2';

const Account = () => {
  return (
    <div style={{padding:'10px'}}>
      <div className='main-div'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vl7JTcT_gToPMsWNDhBdjq6TsA6o9scv-h0oTgpsfw&s' className='img_profile'/>
        <h5>Kiwi</h5>
        <span>+1 9635563487</span>
      </div>
    <div>
        <div className='list'>
            <p>My Profile</p>
            <IoIosArrowForward/>
        </div>
        <div className='list'>
            <p>My Profile</p>
            <IoIosArrowForward/>
        </div>
        <div className='list'>
            <p>My Profile</p>
            <IoIosArrowForward/>
        </div>
        <div className='list'>
            <p>My Profile</p>
            <IoIosArrowForward/>
        </div>
        <div className='list'>
            <p>My Profile</p>
            <IoIosArrowForward/>
        </div>
        <div className='list'>
            <p>My Profile</p>
            <IoIosArrowForward/>
        </div>
        <div className='list'>
            <p>My Profile</p>
            <IoIosArrowForward/>
        </div>
    </div>
    <div className="btn-sum">
      <button className="btn_sub">Submit</button>
      </div>
      <div className="footer_icon">
      <MdHome />
      <IoHeartDislikeCircleSharp />
      <GiForkKnifeSpoon />
      <MdLocalGroceryStore/>
      <Person2Icon/>
      </div>
    </div>
  )
}

export default Account
