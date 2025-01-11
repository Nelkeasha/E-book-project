import { useNavigate } from "react-router-dom";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  const navigate = useNavigate(); // For navigation

  const handleSubscribeClick = () => {
    // Open a modal or redirect to subscription page
    navigate("/subscribe"); // Redirect to subscription page (you can customize this URL)
  };

  const handleExploreClick = () => {
    // Redirect to books listing or new releases page
    navigate("/books"); // Redirect to explore books page (you can customize this URL)
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-20 md:py-24 relative">
      <div className="max-w-screen-xl mx-auto px-4 md:flex md:items-center justify-between gap-12">

        {/* Left section - text content with animation */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate__animated animate__fadeIn animate__delay-1s">
            Fresh Books Awaiting You
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 animate__animated animate__fadeIn animate__delay-2s">
            Discover new titles every week! Stay ahead of the curve with our handpicked recommendations. Ready to dive in?
          </p>

          <div className="space-x-4">
            {/* Primary CTA: Subscribe */}
            <button 
              onClick={handleSubscribeClick}
              className="bg-yellow-500 text-gray-800 py-3 px-8 rounded-full text-lg font-semibold shadow-md transition transform hover:scale-105 hover:bg-lightBlue-200 focus:outline-none focus:ring-2 focus:ring-lightBlue-500"
            >
              Subscribe Now
            </button>

            {/* Secondary CTA: Explore Books */}
            <button 
              onClick={handleExploreClick}
              className="bg-transparent text-lightBlue-300 py-3 px-8 rounded-full text-lg font-semibold border-2 border-lightBlue-300 transition transform hover:scale-105 hover:bg-lightBlue-300 hover:text-gray-800"
            >
              Explore Books
            </button>
          </div>
        </div>

        {/* Right section - Image with hover effect */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img 
            src={bannerImg} 
            alt="New Book Releases"
            className="w-full md:w-2/3 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm">Scroll down to explore more books</p>
        <div className="animate-bounce text-3xl">
          ⬇
        </div>
      </div>
    </div>
  );
};

export default Banner;
