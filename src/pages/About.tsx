import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex min-h-[65vh] flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto flex h-full max-w-screen-xl flex-wrap items-center justify-between p-4">
        <h1 className="mb-4 text-4xl font-bold">About Us</h1>
        <p className="mb-6 text-lg">
          We are a team dedicated to providing the best services and solutions
          to our clients. Our goal is to exceed expectations and deliver
          high-quality results in every project we undertake.
        </p>
        <p className="text-lg">
          With years of experience and a passion for excellence, we strive to
          build lasting relationships and make a positive impact in our
          industry.
        </p>
      </div>
    </div>
  );
};

export default About;
