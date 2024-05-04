import React from "react";
import "./ChngePass.css";
import { IoIosArrowBack } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { IoHeartDislikeCircleSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import Person2Icon from "@mui/icons-material/Person2";

const ChnagePass = () => {
  return (
    <div className="changePassScreen">
      <div className="Hed">
        <IoIosArrowBack />
        <h6 className="re_name">Review Food</h6>
      </div>
      <div className="input_conntent">
        <div className="Pass">
          <label className="per_text">Enter old Password</label>
          <input placeholder="Password" className="input-bar" />
        </div>
        <div className="Pass1">
          <label className="per_text">Create New Password</label>
          <input placeholder="Enter New Password" className="input-bar" />
          <input placeholder="Re-enter New PassWord" className="input-bar" />
        </div>
        <div className="change-btn">
          <button className="chnage_sub">Submit</button>
        </div>
      </div>
      <div className="footer_icon_ChangePass">
        <div className="change-footer">
          <MdHome />
          <IoHeartDislikeCircleSharp />
          <GiForkKnifeSpoon />
          <MdLocalGroceryStore />
          <Person2Icon />
        </div>
      </div>
    </div>
  );
};

export default ChnagePass;
