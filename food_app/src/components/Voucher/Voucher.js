import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { IoHeartDislikeCircleSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import Person2Icon from '@mui/icons-material/Person2';
import { GrCheckboxSelected } from "react-icons/gr";
import { CiStopwatch } from "react-icons/ci";

const Voucher = () => {
  return (
    <div>
        <div className="Hed">
        <IoIosArrowBack />
        <h6 className="re_name">Review Food</h6>
      </div>
      <div className='voucher-div'>
        <div className="details">
          <img
            className="img_food"
            src="https://png.pngtree.com/png-vector/20220524/ourmid/pngtree-voucher-discount-png-image_4613299.png"
          />
          <div className="doller">
            <h6>Sale off 30% for pizza</h6>
            <span className="like_doller">
            <CiStopwatch />
              <span>Apr 10 - Apr 30</span>|
              
            </span>
            <span style={{ color: "yellowgreen" }}>11 days left</span>
          </div>
          <div className="icon">
          <GrCheckboxSelected />
          </div>
        </div>
        <div className="details">
          <img
            className="img_food"
            src="https://png.pngtree.com/png-vector/20220524/ourmid/pngtree-voucher-discount-png-image_4613299.png"
          />
          <div className="doller">
            <h6>Sale off 30% for pizza</h6>
            <span className="like_doller">
            <CiStopwatch />
              <span>Apr 10 - Apr 30</span>|
              
            </span>
            <span style={{ color: "yellowgreen" }}>11 days left</span>
          </div>
          <div className="icon">
          <GrCheckboxSelected />
          </div>
        </div>
        <div className="details">
          <img
            className="img_food"
            src="https://png.pngtree.com/png-vector/20220524/ourmid/pngtree-voucher-discount-png-image_4613299.png"
          />
          <div className="doller">
            <h6>Sale off 30% for pizza</h6>
            <span className="like_doller">
            <CiStopwatch />
              <span>Apr 10 - Apr 30</span>|
              
            </span>
            <span style={{ color: "yellowgreen" }}>11 days left</span>
          </div>
          <div className="icon">
          <GrCheckboxSelected />
          </div>
        </div>

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

export default Voucher