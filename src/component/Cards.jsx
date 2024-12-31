import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";

function Cards({ name, rating, review, price, imgSrc }) {
  const [img, setImg] = useState(imgSrc);
  const onImgErr = () => {
    console.log("img error occur");
    setImg(
      "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png"
    );
  };

  return (
    <>
      <div className="w-72 h-80 p-2 bg-cyan-600 text-cyan-950 border-4 border-solid border-cyan-200  flex flex-col items-center justify-around rounded-lg scale-95 hover:scale-100 hover:border-cyan-900  cursor-pointer">
        <div className="">
          <img
            src={`${img}`}
            alt={name}
            className="h-28 sm:h-32"
            onError={onImgErr}
          />
        </div>
        <div className="text-center font-medium sm:text-lg my-3">{name}</div>
        <div className="w-full px-3  flex flex-row justify-between items-center">
          <div className="my-4 flex flex-col items-start space-y-1">
            <div className="font-bold">
              <FontAwesomeIcon icon={faStar} /> {rating}
            </div>
            <div className="font-medium">
              <FontAwesomeIcon icon={faUser} /> {review}{" "}
            </div>
          </div>
          <div className="text-2xl font-extrabold">{price}</div>
        </div>
      </div>
    </>
  );
}

export default Cards;
