import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApartmentById } from "../services/ApiService";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { Gi3DStairs } from "react-icons/gi";

function ApartmentContent() {
  let { id } = useParams();
  const [post, setPost] = useState("");
  const [categoryType, setCategoryType] = useState("");

  const getPost = async () => {
    try {
      const res = await getApartmentById(id);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const typeSettings = () => {
    switch (post.main_category_type) {
      case post.main_category_type === "1":
        setCategoryType("იყიდება");
        break;
      case post.main_category_type === "2":
        setCategoryType("გირავდება");
        break;
      case post.main_category_type === "3":
        setCategoryType("ქირავდება");
        break;
      case post.main_category_type === "4":
        setCategoryType("ქირავდება დღიურად");
        break;
      default:
        setCategoryType("იყიდება");
    }
  };

  useEffect(() => {
    typeSettings();
  });

  return (
    <>
      <div className="container">
        <div className="row pt-4">
          <div className="col-md-8 col-12" key={post.id}>
            <div className="card" style={{ width: "100%" }}>
              <img
                src={post.image1}
                style={{ height: "300px", objectFit: "cover" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title fs-4">{categoryType} ბინა ბათუმში</h6>

                <p className="card-text fs-6 pt-2">
                  <b>ქალაქი:</b> {post.city}{" "}
                </p>
                <p className="card-text fs-6">
                  <b>ქუჩის მისამართი:</b> {post.address}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p className=" fs-3 text-success fw-bold">
              ფასი: {post.price}
              {post.Currency_type === 1 ? "$" : "₾"}
            </p>
            <p className=" fs-5 fw-bold ">ფართი {post.area} მ²</p>
            <p>სახელი: {post.owner_name}</p>
            <p>მობილური: {post.mobile === null ? "0" : post.mobile}</p>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-8">
            <div className="detail">
              <ul>
                <li>
                  <MdOutlineSpaceDashboard /> {post.area} მ²
                  <p className="fs-6">
                    ოთახი {post.room === null ? "0" : post.room}
                  </p>
                </li>
                <li>
                  <MdOutlineBedroomParent />{" "}
                  {post.bedroom === null ? "0" : post.bedroom}{" "}
                  <p className="fs-6">საძინებელი</p>
                </li>
                <li>
                  <Gi3DStairs />{" "}
                  {post.apartment_floor === null ? "0" : post.apartment_floor}{" "}
                  <p className="fs-6">სართული</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-8">
            <div className="description">
              <h3>მოკლე აღწერა</h3>
              <p className="card-text">{post.description}</p>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-8">
            <h3> პარამეტრები</h3>
            <ul>
              <li>
                {post.internet ? (
                  "ინტერნეტი"
                ) : (
                  <span className="text-decoration-line-through">
                    ინტერნეტი
                  </span>
                )}
              </li>
              <li>
                {post.gas ? (
                  "ბუნებრივი აირი"
                ) : (
                  <span className="text-decoration-line-through">
                    ბუნებრივი აირი
                  </span>
                )}
              </li>
              <li>
                {post.air_conditioner ? (
                  "კონდიციონერი"
                ) : (
                  <span className="text-decoration-line-through">
                    კონდიციონერი
                  </span>
                )}
              </li>
              <li>
                {post.tv ? (
                  "ტელევიზორი"
                ) : (
                  <span className="text-decoration-line-through">
                    ტელევიზორი
                  </span>
                )}
              </li>
              <li>
                {post.fireplace ? (
                  "ბუხარი"
                ) : (
                  <span className="text-decoration-line-through">ბუხარი</span>
                )}
              </li>
              <li>
                {post.refrigerator ? (
                  "მაცივარი"
                ) : (
                  <span className="text-decoration-line-through">მაცივარი</span>
                )}
              </li>
              <li>
                {post.washing_machine ? (
                  "სარეცხი მანქანა"
                ) : (
                  <span className="text-decoration-line-through">
                    სარეცხი მანქანა
                  </span>
                )}
              </li>
              <li>
                {post.dishwasher ? (
                  "ჭურჭლის სარეცხი მანქანა"
                ) : (
                  <span className="text-decoration-line-through">
                    ჭურჭლის სარეცხი მანქანა
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApartmentContent;
