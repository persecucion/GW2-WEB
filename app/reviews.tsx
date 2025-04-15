'use client';

import React, { useState, useEffect } from 'react';
import { FaStar, FaArrowLeft, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingButton from './components/GlowingButton';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Alice",
      photo: "/images/alice.jpg",
      text: "GW2 es increíble! He hecho tantos amigos aquí.",
      rating: 5,
      memberSince: "6 meses",
      likes: 15,
      dislikes: 2
    },
    {
      id: 2,
      name: "Bob",
      photo: "/images/bob.jpg",
      text: "Los eventos son super divertidos. Nunca me los pierdo!",
      rating: 4,
      memberSince: "1 año",
      likes: 10,
      dislikes: 1
    },
    {
      id: 3,
      name: "Charlie",
      photo: "/images/charlie.jpg",
      text: "La comunidad es muy acogedora. Me siento como en casa.",
      rating: 5,
      memberSince: "3 meses",
      likes: 20,
      dislikes: 0
    },
    // Add more reviews here...
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleRating = (reviewId: number, newRating: number) => {
    setReviews(reviews.map(review => 
      review.id === reviewId ? {...review, rating: newRating} : review
    ));
  };

  const handleLike = (reviewId: number) => {
    setReviews(reviews.map(review => 
      review.id === reviewId ? {...review, likes: review.likes + 1} : review
    ));
  };

  const handleDislike = (reviewId: number) => {
    setReviews(reviews.map(review => 
      review.id === reviewId ? {...review, dislikes: review.dislikes + 1} : review
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-inter">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/" passHref>
          <GlowingButton href="/" className="mb-8 text-white">
            <FaArrowLeft className="mr-2" />
            Volver
          </GlowingButton>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text text-center">
          Todas las Reseñas
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <Image 
                  src={review.photo}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-400">Miembro desde hace {review.memberSince}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{review.text}</p>
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${star <= review.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                    onClick={() => handleRating(review.id, star)}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <button 
                  className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
                  onClick={() => handleLike(review.id)}
                >
                  <FaThumbsUp className="mr-2" />
                  <span>{review.likes}</span>
                </button>
                <button 
                  className="flex items-center text-red-400 hover:text-red-300 transition-colors duration-300"
                  onClick={() => handleDislike(review.id)}
                >
                  <FaThumbsDown className="mr-2" />
                  <span>{review.dislikes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

