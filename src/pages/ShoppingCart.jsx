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

const ShoppingCart = () => {
  // redux theke data nea aste useSelector use hoy
  const [handleDelete, setHandleDelete] = useState(false)
  let CartData = useSelector((state) => state.cartItemSlice.cartItems);
  // redux theke data nea aste useDispatch use hoy
  const dispatch = useDispatch();

  const handleDeleteShow = (id) => {
    if (handleDelete === id) {
        setHandleDelete(null);
      } else {
        setHandleDelete(id);
      }
}
  let handleIncrement = (item) => {
    dispatch(increment(item));
  };
  let handleDecrement = (item) => {
    dispatch(decrement(item));
  };
  let handleDeleteFromCart = (index) => {
    dispatch(deleteProduct(index));
    setConfirm(true);
  };
  const [confirm, setConfirm] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let { totalPrice, totalQty } = CartData.reduce(
    (acc, item) => {
      acc.totalPrice += item.price * item.qty;
      acc.totalQty += item.qty;
      return acc;
    },
    { totalPrice: 0, totalQty: 0 }
  );

  console.log(totalPrice, totalQty);

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div>
            <PageHeading heading="Shopping Curt" pageName="shopping curt" />
          </div>

          <div className="flex">
            <div>
              <div className=" w-[75%] flex flex-col sm:flex-row items-center gap-32 py-10 lg:mx-20">
                <h4 className="font-bold text-secondary text-xl">Product</h4>
                <h4 className="font-bold text-secondary text-xl">Price</h4>
                <h4 className="font-bold text-secondary text-xl">Quantity</h4>
                <h4 className="font-bold text-secondary text-xl">Total</h4>
              </div>

              {CartData.length > 0 ? (
                CartData.map((item, index) => (
                  <div className="flex justify-between items-center py-4 relative">
                    <div className="w-[35%] flex flex-col md:flex-row gap-2">
                      <div className="relative">
                        <img
                          className=" w-32 bg-[#EBEAEE] rounded-lg"
                          src={item.thumbnail}
                          alt=""
                        />
                        <div
                          onClick={() => handleDeleteShow(item.id)}
                          className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#000000] text-white flex items-center justify-center p-[2px]"
                        >
                          <RxCross2 />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 justify-center">
                        <h3 className="text-sm ">{item.title}</h3>
                        <p className="text-sm">Color:Brown</p>
                        <p className="text-sm">Size:Xl</p>
                      </div>
                    </div>
                    <div className="w-[15%] flex items-center">
                      <p>${item.price}</p>
                    </div>
                    <div className="w-[25%] flex items-center">
                      <div className="flex gap-2 bg-gray-100">
                        <p
                          onClick={() => handleDecrement(index)}
                          className="border-2 bg-gray-100 px-4 w-10 "
                        >
                          -
                        </p>
                        <p className="border-2 bg-gray-100 px-4 w-10 ">
                          {item.qty}
                        </p>
                        <p
                          onClick={() => handleIncrement(index)}
                          className="border-2 bg-gray-100 px-4 w-10 "
                        >
                          +
                        </p>
                      </div>
                    </div>
                    <div className="w-[15%] flex items-center">
                      <p>${(item.price * item.qty).toFixed(2)}</p>
                    </div>
                    {/* confirm delete part */}

                    {handleDelete === item.id && (
                      <div className="absolute -top-10 left-0 flex flex-col items-center bg-white border border-gray-200 shadow-md p-6 rounded-lg max-w-sm mx-auto">
                        <h3 className="font-josefin font-semibold text-[18px] text-primary pb-3">
                          Are you sure you want to delete this?
                        </h3>
                        <div className="flex gap-4 mt-2">
                          <button
                            onClick={() => handleFromProduct(index)}
                            className="rounded-lg bg-primary py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                          >
                            Yes
                          </button>
                          <button
                            onClick={handleDeleteShow}
                            className="w-full rounded-lg bg-primary py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                          >
                            No
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div>
                  <Link to="/shop">
                    <button className="bg-primary text-white px-5 py-4 rounded-md cursor-pointer ">
                      Go to Shop Page
                    </button>{" "}
                  </Link>
                </div>
              )}
              {CartData.length > 0 && (
                <div className="flex justify-around mt-20 ">
                  <button
                    onClick={handleClearCart}
                    className="bg-primary text-white px-5 py-4 rounded-md cursor-pointer"
                  >
                    Clear Cart{" "}
                  </button>
                  <button className="bg-primary text-white px-5 py-4 rounded-md cursor-pointer">
                    Update Cart
                  </button>
                </div>
              )}
            </div>
            <div className="right md:w-[25%]">
              <div className="">
                <h4 className="font-bold text-secondary text-xl py-10 text-center">
                  Cart Totals
                </h4>
                <div className=" bg-[#F4F4FC] px-8 py-4 rounded-sm mt-5 shadow-lg space-y-5">
                  <div className="border-b-2 flex gap-20 border-[#E8E6F1]">
                    <p className="text-secondary font-semibold text-lg">
                      Total Price:
                    </p>
                    <span className="text-secondary font-semibold text-lg">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-b-2 flex gap-20 border-[#E8E6F1]">
                    <p className="text-secondary font-semibold text-lg">
                      Total Quantity:
                    </p>
                    <span className="text-secondary font-semibold text-lg">
                      {totalQty}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={Check} alt="" />
                    <p className="text-xs text-[#8A91AB]">
                      Shipping & taxes calculated at checkout
                    </p>
                  </div>
                  <button className="bg-[#19D16F] px-6 py-2 rounded-sm text-white">
                    Proceed To Checkout
                  </button>
                </div>
              </div>

              <div className="bg-[#F4F4FC] px-8 py-4 rounded-sm mt-5 shadow-lg space-y-8">
                <h4 className="font-bold text-secondary text-xl py-10 text-center">
                  Calculate Shopping
                </h4>
                <input
                  className="border-b-2 outline-none "
                  type="text"
                  placeholder="Bangladesh"
                />
                <input
                  className="border-b-2 outline-none "
                  type="text"
                  placeholder="Mirpur Dhaka - 1200"
                />
                <input
                  className="border-b-2 outline-none "
                  type="text"
                  placeholder="Postal Code"
                />
                <button className="bg-[#FB2E86] px-6 py-2 rounded-sm text-white">
                  Calculate Shiping
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;