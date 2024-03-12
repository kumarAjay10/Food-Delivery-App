import { CDN_URL } from "../utils/constants";
import { CiStar } from "react-icons/ci";
import { FaWalking } from "react-icons/fa";

const RestaurantCard = (props) => {


  const { resData } = props;
  const { cloudinaryImageId, cuisines, avgRating, name, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 min-h-[370px]  p-4 w-[300px] shadow-lg text-red-800 bg-white rounded-lg hover:shadow-orange-600  transition ease-in-out delay-50 hover:scale-105 duration-200 object-contain">
      <img 
        className="rounded-lg w-[280px] h-[200px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold pt-2 pb-1 text-xl line-clamp-1 ">{name}</h2>
      <h3 className="mb-4 tracking-wide truncate">{cuisines.join(", ")}</h3>
      <div className="flex justify-between mb-2">
        <h4
          style={
            avgRating < 4
              ? { backgroundColor: "#f7084e" }
              : { backgroundColor: "#00ad1d" }
          }
          className="p-2 mb-4 text-white font-bold rounded-md flex items-center gap-2"
        >
          {avgRating ? avgRating : "--"}
          <CiStar />
        </h4>
        <h4 className="mt-2 ml-5 font-bold">
          <FaWalking className="ml-3" />
          {resData.info.sla.lastMileTravelString}{" "}
        </h4>
        <h4 className="mt-2  font-bold"> {costForTwo} </h4>
      </div>
      <span className="pt-3 text-base font-bold"> {resData.info.sla.deliveryTime} </span><span className="pt-3 text-base">minutes till delivery</span>
    </div>
  );
};




export default RestaurantCard;
