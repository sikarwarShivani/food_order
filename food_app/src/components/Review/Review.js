import React from "react";
import "./Review.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoHeartDislikeCircleSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import Person2Icon from '@mui/icons-material/Person2';import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

const Review = () => {
  return (
    <div>
      <div className="Hed">
        <IoIosArrowBack />
        <h6 className="re_name">Review Food</h6>
      </div>
      <div>
        <div className="details">
          <img
            className="img_food"
            src="https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-masala-dosa-indian-traditional-food-with-sambhar-decorated-on-plate-png-image_11522352.png"
          />
          <div className="doller">
            <h6>Dogmie jagong tutung</h6>
            <span className="like_doller">
              <SlLike />
              <span>999+</span>|
              <SlDislike />
              <span>93+</span>
            </span>
            <span style={{ color: "yellowgreen" }}>$99.99</span>
          </div>
          <div className="icon">
            <SlLike />
            <span className="dislike">
              <SlDislike />
            </span>
          </div>
        </div>
        <div className="details">
          <img
            className="img_food"
            src="https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-masala-dosa-indian-traditional-food-with-sambhar-decorated-on-plate-png-image_11522352.png"
          />
          <div className="doller">
            <h6>Dogmie jagong tutung</h6>
            <span className="like_doller">
              <SlLike />
              <span>999+</span>|
              <SlDislike />
              <span>93+</span>
            </span>
            <span style={{ color: "yellowgreen" }}>$99.99</span>
          </div>
          <div className="icon">
            <SlLike />
            <SlDislike />
          </div>
        </div>
        <div className="details">
          <img
            className="img_food"
            src="https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-masala-dosa-indian-traditional-food-with-sambhar-decorated-on-plate-png-image_11522352.png"
          />
          <div className="doller">
            <h6>Dogmie jagong tutung</h6>
            <span className="like_doller">
              <SlLike />
              <span>999+</span>|
              <SlDislike />
              <span>93+</span>
            </span>
            <span style={{ color: "yellowgreen" }}>$99.99</span>
          </div>
          <div className="icon">
            <SlLike />
            <SlDislike />
          </div>
        </div>
      </div>
      <div className="review-btn">
      <button className="btn-rev">Submit</button>
      </div>
      <div className="Review-footer">
      <MdHome />
      <IoHeartDislikeCircleSharp />
      <GiForkKnifeSpoon />
      <MdLocalGroceryStore/>
      <Person2Icon/>
      </div>
    </div>
  );
};

export default Review;
