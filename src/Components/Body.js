import RestaurantCard from "./ReasturantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import { QualityContainer } from "./QualityContainner";
import { scroller } from "react-scroll";

const Body = () => {
  const [listOfResturants, setListOfResturant] = useState([]);
  const [filiterResturant, setFilterResturant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const handleScroll = () => {
    scroller.scrollTo("res-list", {
      smooth: true,
      duration: 560,
      offset: -220,

    });
  };

 
  console.log("body rerenderd");
  useEffect(() => {
   
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3342725&lng=76.8648893&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! please check your internet connection;
      </h1>
    );

 
  return listOfResturants.length === null  ? (
    <Shimmer />
  ) : (
    <>
      <QualityContainer handleClick={handleScroll} />

      <div className="body">
       
        <div className="filter flex">
          <div className="search m-4 p-6 ">
            <input
              type="text"
              className="border border-solid ml-6 border-gray-400 py-2 pl-3 pr-16 rounded-2xl rounded-r-none bg-white"
              value={searchText}
              placeholder="Search Restaurants"
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 rounded-full rounded-l-none  text-white bg-orange-950 border border-l-gray-200"
              onClick={() => {
                console.log(searchText);
                const filteredResturant = listOfResturants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilterResturant(filteredResturant);
                setsearchText("");
              }}
            >
              Search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <button
              className="px-4 py-1 bg-orange-500 text-white xl:bg-white rounded-full xl:hover:bg-orange-500 xl:hover:text-white xl:text-black"
              onClick={() => {
                const filterered = listOfResturants.filter(
                  (res) => res.info.avgRating > 4
                );
              
                setFilterResturant(filterered);
              }}
            >
              Top Rated restaurant
            </button>
          </div>
        </div>
        <hr className="ml-16 mr-16 mt-0"></hr>
        <div id="res-list" className="flex flex-wrap mx-16">
          {filiterResturant.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                {" "}
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </>

  );
};

export default Body;
