
// import {FcDeleteDatabase} from "react-icons/fc"/
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex gap-10">

        <div >
          <img src={item.image} 
            className="h-[50vh] "
          />
        </div>
        <div className="w-[20vw]">
          <h1 className="flex font-bold">{item.title}</h1>
          <h1>{item.description}</h1>
          <br/>
          <div className="flex justify-between	">
            <p className="text-green-600 font-bold"> ${item.price}</p>
            <div className= "">
              <div 
              onClick={removeFromCart}>
                <MdDelete className="w-[50px] h-[30px]"/>
              </div>
            </div>
          </div>

        </div>


      </div>
      <br/>
      <div className="w-full bg-black h-[1px]"></div>

    </div>
  );
};

export default CartItem;
