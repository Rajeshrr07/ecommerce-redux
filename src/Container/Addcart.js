import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../Components/ProductListItem";
import { modifyItem, removeItem } from "../Redux/Reducer/Cart";
import { useNavigate } from "react-router-dom";

const Addcart = () => {
  const list = useSelector((state) => state.cart.list);
  console.log("list", list);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };
  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item));
      alert("item removed successfully");
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
    alert("item removed successfully");
  };
  return (
    <>
      {list.length > 0 ? (
        <>
          {list.map((item) => (
            <ProductListItem
              key={item.id}
              {...item}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemFromCart(item)}
            />
          ))}
          <button
            className="btn btn-success"
            onClick={() => navigate("/checkout")}
          >
            Go to Checkout
          </button>
        </>
      ) : (
        <h3>No Items in the cart</h3>
      )}
    </>
  );
};

export default Addcart;
