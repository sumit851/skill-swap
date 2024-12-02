import Image from 'next/image';
import React from 'react';

const HeroImage = () => {
  return (
    <div className="w-full h-64 md:h-full relative aspect-video">
      <Image 
        src="/images/hero-image.jpeg"
        alt="Hero Image"
        width={400}
        height={400}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="rounded-full shadow-lg object-cover hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
      />
    </div>
 
  );
}

export default HeroImage;