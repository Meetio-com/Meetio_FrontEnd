import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import videoCall from "../assets/videoCall.png";
import recordMeeting from "../assets/recordMeeting.png";
import captions from "../assets/captions.png";
import avatar from "../assets/avatar.png";

// React Icons
import {
  FaMicrophone,
  FaPhone,
  FaPhoneSlash,
  FaEllipsisV,
  FaVideo,
  FaClosedCaptioning,
  FaCogs,
  FaRegComments,
} from "react-icons/fa";

const MeetioEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Upcoming Events Section */}
      <h2 className="text-3xl font-bold mb-6">Upcoming Online Events</h2>
      <Slider {...settings}>
        {[event1, event2, event3].map((image, index) => (
          <div key={index} className="px-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={image}
                alt="Event"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-blue-600 text-sm font-semibold">
                  JAN 16 2025 | 7:30 PM GMT
                </p>
                <h3 className="text-lg font-bold mt-1">
                  Career Meetup with Designers and Developers
                </h3>
                <div className="flex items-center mt-3">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={avatar}
                        alt="Attendee"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-semibold">+10</span>
                </div>
                <p className="text-blue-500 mt-3 cursor-pointer">More Details</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Take Control Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl font-bold leading-tight">
            Take control of your meetings with our{" "}
            <span className="text-yellow-500">virtual assistant</span> services
          </h2>

          {/* Avatars */}
          <div className="flex items-center mt-4">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src={avatar}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>

          {/* Features */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Collaborating Power */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-md">
                <FaCogs className="text-white text-xl w-10" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Collaborating Power
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Empowering teams with seamless communication, smart
                  collaboration tools, and a dynamic virtual workspace for
                  productivity anytime, anywhere.
                </p>
              </div>
            </div>

            {/* Easy to Customize */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-md">
                <FaCogs className="text-white text-xl w-10" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Easy to Customize
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tailor your meeting experience with flexible settings,
                  personalized features, and seamless integrations to match
                  your unique workflow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0 relative">
          {/* Blue Floating Icon at Top Right */}
          <div className="absolute top-3 right-3 bg-blue-500 p-2 rounded-full shadow-md">
            <FaRegComments className="text-white text-xl" />
          </div>

          {/* Video Call Image */}
          <div className="relative w-full">
            <img
              src={videoCall}
              alt="Video Call"
              className="w-full rounded-lg shadow-lg"
            />

            {/* Call Controls */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-transparent">
              {/* Camera Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer">
                <FaVideo className="text-black text-xl" />
              </div>

              {/* End Call (Red Background) */}
              <div className="w-12 h-12 flex items-center justify-center bg-red-500 rounded-full shadow-md cursor-pointer">
                <FaPhoneSlash className="text-white text-xl" />
              </div>

              {/* Microphone Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer">
                <FaMicrophone className="text-black text-xl" />
              </div>

              {/* More Options (Ellipsis) */}
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer">
                <FaEllipsisV className="text-black text-xl" />
              </div>
            </div>
          </div>

          {/* Two Bottom Images with Labels */}
          <div className="grid grid-cols-2 gap-4 mt-4 w-full">
            {/* Record Meeting */}
            <div className="relative">
              <img
                src={recordMeeting}
                alt="Record Meeting"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute bottom-3 left-3 bg-white flex items-center px-3 py-1 rounded-full shadow-md">
                {/* Icon Container */}
                <div className="relative flex items-center justify-center w-6 h-6 rounded-full border-2 border-red-500 mr-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>

                <span className="text-sm font-semibold text-black">
                  Record Meeting
                </span>
              </div>
            </div>

            {/* Captions */}
            <div className="relative">
              <img
                src={captions}
                alt="Captions"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute bottom-3 left-3 bg-white flex items-center px-3 py-1 rounded-full shadow-md">
                {/* CC Icon inside a rounded box */}
                <div className="flex items-center justify-center w-5 h-5 border-2 border-black rounded-md mr-2">
                  <span className="text-black text-xs font-bold"> CC</span>
                </div>

                <span className="text-sm font-semibold text-black">
                  Captions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetioEvents;