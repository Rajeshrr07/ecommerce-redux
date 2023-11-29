import React from "react";

const ProductListItem = (props) => {
  return (
    <div
      className="m-4 d-flex p-2 border  border-radius-9 align-items-center justify-content-center"
      style={{ width: "100%" }}
      role="button"
    >
      <div className="mt-2">
        <img
          src={props.thumbnail}
          height={150}
          width={180}
          alt={props.title}
          className=" border-radius-9"
        />
      </div>

      <h5 className="card-title ms-4">{props.title}</h5>
      <h6 className="mt-2 me-4">price: {`$${props.price}`}</h6>
      <h6 className="mt-2 me-4">Discount: {props.discountPercentage} %</h6>
      <h6 className="mt-2 me-4">Rating: {props.rating}</h6>

      <button className="btn btn-danger ms-3" onClick={props.incrementItem}>
        +
      </button>
      <span className="ms-3">Quantity {props.count}</span>
      <button className="btn btn-danger  ms-3" onClick={props.decrementItem}>
        -
      </button>
      <button className="btn btn-danger  ms-3" onClick={props.removeItem}>
        Remove
      </button>
    </div>
  );
};

export default ProductListItem;
