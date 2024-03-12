import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
   dispatch(addItem(item));
  }
  return (
    <div>
      <div>
        {items.map((item) => (
          <div>
            <div
              key={item.card.info.id}
              className=" h-[170px] p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="py-2">
                <div className="font-bold">{item.card.info.name}</div>
                <div>₹ {item.card.info.price / 100 || item.card.info.defaultPrice/100}</div>
              </div>
              <div>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-[120px] h-[100px]"
                />
                <button
                  className="p-[38px] py-0 ml-0 bg-green-600 shadow-lg absolute mx-8 mb-64"
                  onClick={()=>handleAddItem(item)}
              
                >
                  Add +
                </button>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
