import React, { useState } from "react";
import SimpleMeetioImage from "../assets/BammyImages/hero2.png";
import SimpleMeetioImage1 from "../assets/BammyImages/Rectangle 527.png";
import SimpleMeetioImage2 from "../assets/BammyImages/hero1.png";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [SimpleMeetioImage1, SimpleMeetioImage2, SimpleMeetioImage];

const features = [
    {
        id: 1,
        title: "Meet",
        description:
            "Make your meeting memorable and impactful with intuitive features like recording, emojis, and AI summaries.",
        points: ["HD Video", "Screen Sharing", "Meeting Recording"],
    },
    {
        id: 2,
        title: "Collaborate",
        description:
            "Collaborate seamlessly with your team using our integrated tools for effective communication and project management.",
        points: ["Real-time Editing", "File Sharing", "Task Management"],
    },
    {
        id: 3,
        title: "Chat",
        description:
            "Stay connected with your team through our chat feature, allowing for quick communication and collaboration.",
        points: ["Direct Messaging", "Group Chats", "File Sharing"],
    },
];

const Solution: React.FC = () => {
    const [visibleIndex, setVisibleIndex] = useState<number>(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleVisibility = (index: number) => {
        setVisibleIndex(index); 
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <section className="py-10 bg-white">
            <div className="mx-auto px-4 md:px-12">
                {/* title */}
                <div className="text-left mb-8">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-600 mb-3">
                        Solution
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-900 font-bold">
                        The platform for all your meeting needs
                    </p>
                </div>

                {/* text */}
                <div className="flex flex-col lg:flex-row w-full space-y-6 lg:space-y-0 md:space-x-5 items-start">
                    <div className="space-y-6 w-full lg:w-1/3">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="relative flex items-center bg-white border-b-2 border-b-gray-200 p-4 sm:p-6"
                            >
                                {visibleIndex === feature.id && (
                                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[80%] w-1 bg-yellow-500"></span>
                                )}

                                <div className="flex-1">
                                    <div
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => toggleVisibility(feature.id)}
                                    >
                                        <span className="text-base md:text-xl font-bold text-gray-900 flex items-end gap-2">
                                            {feature.title}{" "}
                                            {visibleIndex === feature.id ? (
                                                <IoIosArrowUp size={20} />
                                            ) : (
                                                <IoIosArrowDown size={20} />
                                            )}
                                        </span>
                                    </div>
                                    {visibleIndex === feature.id && (
                                        <div className="mt-4">
                                            <p className="text-sm sm:text-base text-gray-900 text-justify">
                                                {feature.description}
                                            </p>
                                            <div className="mt-2 space-y-1">
                                                {feature.points.map((point, index) => (
                                                    <span
                                                        key={index}
                                                        className="text-gray-700 flex items-center gap-1"
                                                    >
                                                        <IoCheckmarkCircle /> {point}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href="#"
                                                className="text-blue-600 hover:underline mt-2 inline-block"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* image */}
                    <div className="w-full lg:w-2/3 relative mt-6 md:mt-0">
                        <div className="flex justify-center items-center relative">
                            <button
                                title="Previous"
                                onClick={prevImage}
                                className="absolute left-0 p-2 bg-gray-300 hover:bg-gray-400 rounded-full shadow-md transition duration-300"
                            >
                                <FaChevronLeft className="text-gray-700" size={24} />
                            </button>
                            <img
                                src={images[currentIndex]}
                                alt={`Image ${currentIndex + 1}`}
                                className="w-full h-auto rounded-md object-fit"
                            />
                            <button
                                title="Next"
                                onClick={nextImage}
                                className="absolute right-0 p-2 bg-gray-300 hover:bg-gray-400 rounded-full shadow-md transition duration-300"
                            >
                                <FaChevronRight className="text-gray-700" size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
