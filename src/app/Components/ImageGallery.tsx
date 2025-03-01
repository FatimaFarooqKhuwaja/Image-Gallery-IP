"use client";

import Image from 'next/image';
import { useState } from 'react';


const ImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  // Directly specify the image links
  const images = [
    '/assets/cup.webp',
    '/assets/babygift.webp',
    '/assets/babypowder.webp',
    '/assets/brush.jpg',
    '/assets/bulb.jpg',
    '/assets/cakerusk.jpg',
    '/assets/cap.jpg',
    '/assets/chappati.jpg',
    '/assets/chashma.jpg',
    '/assets/facewash.jpg',
    '/assets/femaleimg.webp',
    '/assets/frok.webp',
    '/assets/garammasala.jpg',
    '/assets/glasses.png',
    '/assets/greatwatch.webp',
    '/assets/greentea.jpg',
    '/assets/gulahmed.webp',
    '/assets/gulahmed2.jpg',
    '/assets/gulahmed3.jpeg',
    '/assets/handparrse.jpg',
    '/assets/handparse.jpg',
    '/assets/handparsee.webp',
    '/assets/images.jpg',
    '/assets/ketchup.jpg',
    '/assets/light-switch-board.jpg',
    '/assets/liner.webp',
    '/assets/lipstick.jpg',
    '/assets/machine.webp',
    '/assets/mayo.webp',
    '/assets/milkpak.png',
    '/assets/oil.jpg',
    '/assets/originalwatch.webp',
    '/assets/parse.jpg',
    '/assets/parse1.jpg',
   
  ];

  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-950 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Image Gallery</h1>
          <p className="text-sm">A collection of beautiful images</p>
        </div>
      </nav>

      {/* Gallery Header */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-blue-950">Image Gallery</h1>
      </header>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={200}
              height={200}
              className="w-full h-auto rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-200"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {/* Modal for Full Image View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <Image
              src={currentImage || '/images/placeholder.jpg'}
              alt="Full-size view"
              width={400}
              height={400}
              className="w-96 h-auto rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-4 text-white bg-red-500 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;