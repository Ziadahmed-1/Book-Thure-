import { useRef, useState } from "react";
import CartItem from "./CartItem";
import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const CartModal = forwardRef(function CartModal({
  cartItems,
  setCartItems,
  dialog,
  closeModal,
}) {
  const [ordered, setOrdered] = useState(false);

  const submitted = (
    <div className="bg-gray-300  w-full flex flex-col gap-4  border-black border-2 mx-auto p-5 rounded-xl items-center  ">
      <FontAwesomeIcon icon={faCircleCheck} className="size-16" />
      <h2 className="text-md py-2 md:text-lg lg:text-xl xl:text-3xl text-center font-semibold">
        Your order has been submitted successfully!
      </h2>
    </div>
  );

  function handleClearItems() {
    setCartItems([]);
  }

  function handleOrder() {
    setOrdered(true);
    setTimeout(() => {
      setCartItems([]);
      closeModal();
      setOrdered(false);
    }, [3000]);
  }

  function handleOusideClick(e) {
    if (e.target?.id == dialog?.current?.id) {
      closeModal();
    }
  }

  return (
    <dialog
      id="mola"
      onClick={(e) => handleOusideClick(e)}
      ref={dialog}
      className="fixed top-32 md:w-3/4 xl:w-1/2 rounded-xl outline-none backdrop:bg-gray-50 backdrop:bg-opacity-10 `backdrop:blur-2xl text-pretty  "
    >
      {/* if there are items */}
      {ordered ? (
        submitted
      ) : cartItems?.length !== 0 ? (
        <div className="bg-gray-300  w-full flex flex-col gap-4  border-black border-2 mx-auto p-5 rounded-xl  ">
          <div className="flex justify-between">
            <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold">
              Your books are ready to be shipped{" "}
              <FontAwesomeIcon icon={faTruckFast} />
            </h2>
            <FontAwesomeIcon
              onClick={closeModal}
              className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold cursor-pointer hover:text-rose-800 transition-all duration-300"
              icon={faCircleXmark}
            />
          </div>
          <hr />

          <div className="max-h-[10rem] lg:max-h-[20rem] overflow-y-scroll flex flex-col gap-2">
            <div className="  flex flex-col gap-2 justify-between">
              {cartItems?.map((book) => (
                <CartItem
                  key={book.book_id}
                  book={book}
                  setCartItems={setCartItems}
                />
              ))}
            </div>
          </div>
          <hr />
          <div className="md:self-end flex justify-center flex-col md:flex-row gap-2 items-center">
            <p className="text-lg">
              {cartItems?.length} items with total cost : (
              {cartItems?.length * 10}$)
            </p>
            <button
              onClick={handleClearItems}
              className="text-md lg:text-xl text-stone-200 bg-rose-950 rounded-lg py-1 px-2 transition-all duration-200 hover:bg-rose-900  "
            >
              Clear all items
            </button>
            <button
              onClick={handleOrder}
              className="flex items-center gap-1 text-md lg:text-xl font-semibold bg-lime-800 hover:bg-lime-600 transition-all duration-200 rounded-lg py-2 px-4 text-stone-100"
            >
              <p>Confirm</p>
              <FontAwesomeIcon icon={faHandshake} />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-300  w-full flex flex-col gap-4  border-black border-2 mx-auto p-5 rounded-xl ">
          <h2 className="text-md py-6 md:text-lg lg:text-xl xl:text-3xl text-center font-semibold">
            There are no items in your cart yet
          </h2>
        </div>
      )}
    </dialog>
  );
});

export default CartModal;
