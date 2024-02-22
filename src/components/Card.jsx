// Card.jsx
import React from "react";
import { Card as ProductCard } from "flowbite-react";
import { Button } from "flowbite-react";

function Card({ image, title, description, activities }) {
  return (
    <ProductCard className="w-3/12 bg-black rounded-xl m-2">
      <div class="flex flex-col">
        <div>
          <img src={image} alt={title} className="rounded-lg w-24 h-24" />
        </div>
        <div>
          <h5 className="text-3xl font-bold tracking-tight text-white mt-4 mb-2">
            {title}
          </h5>
          <p className="font-normal text-gray-400 dark:text-gray-400">
            {description}
          </p>
          <div>
            {activities &&
              activities.map((activity) => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {activity}
                </span>
              ))}
          </div>
        </div>
      </div>
      <Button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-2xl py-2 px-4 w-10/12 rounded-xl mx-auto"
        gradientDuoTone="purpleToBlue"
      >
        Ver más
      </Button>
    </ProductCard>
  );
}

export default Card;
