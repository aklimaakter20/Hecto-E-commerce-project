import React, { useState } from "react";
import PageHeading from "../Components/PageHeading";
import Check from "../assets/check.png";
import { RxCross2 } from "react-icons/rx";
import { FaEuroSign } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import {
  clearCart,
  deleteProduct,
  increment,
} from "../Components/slice/cartSlice";
import { decrement } from "../Components/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WishCard = () => {
  const [handleDelete, setHandleDelete] = useState(false);
  let WishData = useSelector((state) =>  state.wishItemSlice.wishItem);

  console.log(WishData);

  //   const dispatch = useDispatch();

  //   const handleDeleteShow = (id) => {
  //     if (handleDelete === id) {
  //         setHandleDelete(null);
  //       } else {
  //         setHandleDelete(id);
  //       }
  // }
  //   let handleIncrement = (item) => {
  //     dispatch(increment(item));
  //   };
  //   let handleDecrement = (item) => {
  //     dispatch(decrement(item));
  //   };
  //   let handleDeleteFromCart = (index) => {
  //     dispatch(deleteProduct(index));
  //     setConfirm(true);
  //   };
  //   const [confirm, setConfirm] = useState(false);

  //   const handleClearCart = () => {
  //     dispatch(clearCart());
  //   };

  //   let { totalPrice, totalQty } = CartData.reduce(
  //     (acc, item) => {
  //       acc.totalPrice += item.price * item.qty;
  //       acc.totalQty += item.qty;
  //       return acc;
  //     },
  //     { totalPrice: 0, totalQty: 0 }
  //   );

  //   console.log(totalPrice, totalQty);

  return (
    <section>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab
        nobis aspernatur, ipsam consequatur tempore sint commodi ullam
        blanditiis. Impedit praesentium eum laborum suscipit dolore magnam eaque
        deserunt molestias optio.
      </div>
      <div>
        {WishData.map((item,inex)=>(
            <div className="w-[200px] mx-auto">
                <img src={item.images} alt="" />
            </div>
        ))

        }
      </div>
    </section>
  );
};

export default WishCard;
