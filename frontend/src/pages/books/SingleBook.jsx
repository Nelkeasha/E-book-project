import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchBookByIdQuery } from '../../redux/features/books/books.Api';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { getImgUrl } from '../../utils/gettingUrl';
import { FiShoppingCart } from 'react-icons/fi';

const SingleBook = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchBookByIdQuery(id);

  const book = data; // Directly use the data as the book object

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product); // Debug the product being added
    dispatch(addToCart(product));
  };

  if (isLoading) {
    console.log("Loading state active...");
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error("Error fetching the book data:", isError);
    return <div>Error occurred while fetching the book data.</div>;
  }

  if (!book) {
    console.warn("No book data found.");
    return <div>No book data found.</div>;
  }

  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

      <div>
        <div>
          <img
            src={`${getImgUrl(book.coverImage)}`}
            alt={book.title}
            className="mb-8"
          />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {book.author || 'Unknown'}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Published:</strong> {new Date(book.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category:</strong> {book.category || 'Uncategorized'}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {book.description || 'No description available.'}
          </p>
        </div>

        <button
          onClick={() => handleAddToCart(book)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1"
        >
          <FiShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
