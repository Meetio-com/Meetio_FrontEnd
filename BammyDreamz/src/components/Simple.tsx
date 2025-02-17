import React, { useState } from "react";
import SimpleMeetioImage1 from "../assets/BammyImages/Rectangle 527.png";
import SimpleMeetioImage from "../assets/BammyImages/hero2.png";
import SimpleMeetioImage2 from "../assets/BammyImages/hero1.png";
import SimpleRectangle from "../assets/BammyImages/Rectangle 604.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [SimpleMeetioImage, SimpleMeetioImage1, SimpleMeetioImage2];

const Simple: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="flex flex-col justify-center items-center bg-[#5b5a80] m-2 p-4">
            <div className="text-center mb-6 lg:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Simple, User-Friendly Interface
                </h1>
                <p className="text-sm md:text-lg text-white text-center opacity-90">
                    A platform designed for easy social networking
                </p>
            </div>

            <div className="flex flex-col md:flex-row max-w-[1160px] justify-between items-start w-full space-y-4 md:space-x-6">
                {/* Left Side */}
                <div className="flex flex-col w-full md:w-1/3 lg:w-1/4 mt-4 items-center self-stretch">
                    <img
                        src={SimpleRectangle}
                        alt="Rectangle"
                        className="rounded-md h-[500px] w-[full] md:w-[1000px] lg:w-[1100px] object-cover"
                    />
                    <h3 className="text-lg md:text-xl lg:text-2xl text-center text-white mt-3">
                        Host. Connect. Engage. Seamlessly
                    </h3>
                </div>

                {/* Right Side */}
                <div className="relative flex items-center w-full md:w-2/3 lg:w-3/4 self-stretch">
                    <button
                        title="Previous"
                        onClick={prevImage}
                        className="absolute left-2 md:left-5 p-2 bg-gray-300 hover:bg-gray-400 rounded-full shadow-md transition duration-300"
                    >
                        <FaChevronLeft className="text-gray-700" size={24} />
                    </button>

                    <img
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        className="w-full h-full object-cover rounded-md"
                    />

                    <button
                        title="Next"
                        onClick={nextImage}
                        className="absolute right-2 md:right-5 p-2 bg-gray-300 hover:bg-gray-400 rounded-full shadow-md transition duration-300"
                    >
                        <FaChevronRight className="text-gray-700" size={24} />
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Simple;
