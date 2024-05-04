import React from 'react'
import './PayMent2.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoHeartDislikeCircleSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import Person2Icon from "@mui/icons-material/Person2";

const PayMent2 = () => {
  return (
    <div>
        <div className="Hed">
        <IoIosArrowBack />
        <h6 className="re_name">PayPal</h6>
      </div>
      <div>
      <div className="list">
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZRrSMJyS__aswSdbIVLJMgdGa_voKM_a3HVMyxG23w&s"
              className="img_paypal"
            />
            My Profile
          </span>

          <p>
            itoh@gmail.com
            <span>
              <IoIosArrowForward />
            </span>
          </p>
          </div>
      </div>
      <div className="btn-1">
      <button className="default">Make as default </button>
      </div>
      <div className="btn-2">
      <button className="remove">Remove</button>
      </div>
      <div className="paypal-footer">
        <MdHome />
        <IoHeartDislikeCircleSharp />
        <GiForkKnifeSpoon />
        <MdLocalGroceryStore />
        <Person2Icon />
      </div>
      
    </div>
  )
}

export default PayMent2