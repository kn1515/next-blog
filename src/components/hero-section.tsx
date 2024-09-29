import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-indigo-600 text-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <img
          src="https://github.com/kn1515.png"
          alt="GitHub Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-5xl font-bold mb-4">ぽんろぐ</h1>
        <p className="text-lg mb-8">あるエンジニアのIT技術関連に関する備忘録</p>
        <a
          href="#posts"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          Blog Posts
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
