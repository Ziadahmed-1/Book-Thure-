import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const CartItem = function ({ book, setCartItems }) {
  function handleRemoveItem() {
    setCartItems((prev) => {
      const updated = prev.filter(
        (listBook) => listBook.book_id !== book.book_id
      );
      return updated;
    });
  }
  return (
    <div className="bg-stone-100 flex py-1 px-6 justify-between items-center rounded-md">
      <p className=" text-sm md:text-lg">{book?.title}</p>
      <FontAwesomeIcon
        onClick={handleRemoveItem}
        icon={faXmark}
        className="hover:text-red-900 cursor-pointer"
      />
    </div>
  );
};

export default CartItem;
