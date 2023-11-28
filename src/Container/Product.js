import React from "react";
import { useParams } from "react-router-dom";
import { productlist } from "../Data/ProdeuctList";

const Product = () => {
  const params = useParams();
  const props = productlist.find(
    (element) => element.id === parseInt(params.id)
  );
  return (
    <div className="card m-2">
      <div className="mt-2">
        <img
          src={props.thumbnail}
          height={350}
          width={400}
          alt={props.title}
          className="border-radius-9"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="mt-2">price: {`$${props.price}`}</h6>
        <h6 className="mt-2">Discount: {props.discountPercentage} %</h6>
        <h6 className="mt-2">Rating: {props.rating}</h6>

        <div className="mt-4">
          {props.stock > 0 ? (
            <button className="btn btn-success">Available</button>
          ) : (
            <button className="btn btn-outline-danger">Out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
