import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../Components/ProductListItem";
import { modifyItem, removeItem } from "../Redux/Reducer/Cart";
import { useNavigate, useParams } from "react-router-dom";
import { productlist } from "../Data/ProdeuctList";

const Checkout = () => {
  const params = useParams();
  const list = useSelector((state) => state.cart.list);
  const [state, setState] = useState(
    params.id
      ? [
          {
            ...productlist.find(
              (element) => element.id === parseInt(params.id)
            ),
            count: 1,
          },
        ]
      : list
  );

  console.log("list", list);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const incrementItem = (item) => {
    const index = state.findIndex((product) => product.id === item.id);
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
    setState((state) => [
      ...state.slice(0, index),
      { ...item, count: item.count + 1 },
      ...state.slice(index + 1),
    ]);
  };
  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItemFromCart(item));
      alert("item removed successfully");
    } else {
      const index = state.findIndex((product) => product.id === item.id);
      setState((state) => [
        ...state.slice(0, index),
        { ...item, count: item.count - 1 },
        ...state.slice(index + 1),
      ]);
    }
  };
  const removeItemFromCart = (item) => {
    const index = state.findIndex((product) => product.id === item.id);
    setState((state) => [...state.slice(0, index), ...state.slice(index + 1)]);
  };
  return (
    <>
      {state.length > 0 ? (
        <>
          {state.map((item) => (
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
            onClick={() => navigate("/success")}
          >
            place order
          </button>
        </>
      ) : (
        <h3>No Items in the checkout</h3>
      )}
    </>
  );
};

export default Checkout;
