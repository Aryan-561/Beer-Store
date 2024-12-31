import React from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


function CardContainer() {
  const data = useSelector((state) => state.beerInfo || []);


  return (
    <>
      {data && data.length > 0 ? (
        <div className="w-full my-6 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center ">
          {data.map((item) => (
            <div
              key={item.id}
              className={`${item.isHidden ? "hidden" : "block"}`}
            >
              <Cards
                name={item.name}
                rating={item.rating?.average.toFixed(1)}
                review={item.rating?.reviews}
                price={item.price}
                imgSrc={item.image}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-[80vh] flex justify-center items-center text-cyan-950  text-5xl md:text-7xl ">
          <FontAwesomeIcon icon={faSpinner} spinPulse />
        </div>
      )}
    </>
  );
}

export default CardContainer;
