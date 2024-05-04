import React from "react";
import "./MenuPage.css";
import { CgProfile } from "react-icons/cg";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoHeartDislikeCircleSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import Person2Icon from '@mui/icons-material/Person2';import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

const MenuPage = () => {
  return (
    <div className="first-div">
      <div className="sec_div">
        <div className="icon_name">
          <div className="profile_name">
            <CgProfile />
            <p>Hii ram</p>
          </div>
          <span>
            {" "}
            <CgMenuGridR />
          </span>
        </div>
        <div className="constet_text">
          <div className="text_content">
            <p>Find and order</p>
            <h2>Food for You</h2>
          </div>
        </div>
        <div>
          <div className="search_bar">
            <span>
              <IoMdSearch
                style={{ width: "25px", height: "25px", color: "gray" }}
              />
            </span>
            <input placeholder="search" />
          </div>
          <div className="img-div">
            <div className="food_div">
              <img className="img-food"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNAOJ5GYnesbEIBPyqGiD20B_v6UVqlE7qXK9WiJCvw&s"
              />
              <p className="bur-nam">Burger</p>
            </div>
            <div className="food_div">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNAOJ5GYnesbEIBPyqGiD20B_v6UVqlE7qXK9WiJCvw&s"
                className="img-food"
              />
              <p className="bur-nam">Burger</p>
            </div>
            <div className="food_div">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNAOJ5GYnesbEIBPyqGiD20B_v6UVqlE7qXK9WiJCvw&s"
                className="img-food"
              />
              <p className="bur-nam">Burger</p>
            </div>
            <div className="food_div">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNAOJ5GYnesbEIBPyqGiD20B_v6UVqlE7qXK9WiJCvw&s"
                className="img-food"
              />
              <p className="bur-nam">Burger</p>
            </div>
          </div>
          <div>
            <h3>Food menu</h3>
            <div className="card_div">
              <div className="div_menu">
                <span className="img_Text">
                  <p>Burger</p>
                </span>
                <span className="img_Burger">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNAOJ5GYnesbEIBPyqGiD20B_v6UVqlE7qXK9WiJCvw&s"
                    className="bur_img"
                  />
                </span>
              </div>
              <div className="div_menu">
                <span className="img_Text">
                  <p>Burger</p>
                </span>
                <span className="img_Burger">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNAOJ5GYnesbEIBPyqGiD20B_v6UVqlE7qXK9WiJCvw&s"
                    className="bur_img"
                  />
                </span>
              </div>
              <div className="div_menu">
                <span className="img_Text">
                  <p>Burger</p>
                </span>
                <span className="img_Burger">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNAOJ5GYnesbEIBPyqGiD20B_v6UVqlE7qXK9WiJCvw&s"
                    className="bur_img"
                  />
                </span>
              </div>
            </div>
            <div className="card_div">
              <div className="div_menu">
                <span className="img_Text">
                  <p>Burger</p>
                </span>
                <span className="img_Burger">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNAOJ5GYnesbEIBPyqGiD20B_v6UVqlE7qXK9WiJCvw&s"
                    className="bur_img"
                  />
                </span>
              </div>
              <div className="div_menu">
                <span className="img_Text">
                  <p>Burger</p>
                </span>
                <span className="img_Burger">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNAOJ5GYnesbEIBPyqGiD20B_v6UVqlE7qXK9WiJCvw&s"
                    className="bur_img"
                  />
                </span>
              </div>
              <div className="div_menu">
                <span className="img_Text">
                  <p>Burger</p>
                </span>
                <span className="img_Burger">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNAOJ5GYnesbEIBPyqGiD20B_v6UVqlE7qXK9WiJCvw&s"
                    className="bur_img"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      <div className="Menu-footer">
      <MdHome />
      <IoHeartDislikeCircleSharp />
      <GiForkKnifeSpoon />
      <MdLocalGroceryStore/>
      <Person2Icon/>
      </div>
      </div>

    </div>
  );
};

export default MenuPage;
