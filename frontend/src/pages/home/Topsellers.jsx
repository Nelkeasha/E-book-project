import { useEffect, useState } from "react";
import BookCard from "../books/BookCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFetchAllBooksQuery } from "../../redux/features/books/books.Api";

const categories = ["choose a genre", "Business", "Fiction", "Non-Fiction", "Horror", "Adventure"];

const Topsellers = () => {
  const [selectedCategory, setSelectedCategory] = useState("choose a genre");

  const { data } = useFetchAllBooksQuery();
 

  // Ensure books is an array and normalize category filtering
  const books = Array.isArray(data) ? data : data?.books || [];
  const filteredBooks =
    selectedCategory === "choose a genre"
      ? books
      : books.filter(book => book.category?.toLowerCase() === selectedCategory.toLowerCase());

  if (!Array.isArray(books)) {
    return <p>Loading books...</p>;
  }

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Topsellers</h2>

      {/* Category Filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Swiper Component */}
      {filteredBooks.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 2, spaceBetween: 50 },
            1180: { slidesPerView: 3, spaceBetween: 50 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No books found for the selected category.</p>
      )}
    </div>
  );
};

export default Topsellers;
