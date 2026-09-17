import React from "react";

 function Card({ name, image, price, onAddToCart }) {
  return (
    <div className="bg-white border border-[#dfe2ce] p-5">
      <div className="h-60 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain"
        />
      </div>

      <h3 className="mt-5 font-medium line-clamp-2 text-[#292d20]">
        {name}
      </h3>

      <p className="mt-3 font-semibold text-[#68733f]">
        ${price}
      </p>

  <button
  onClick={onAddToCart}
  className="mt-4 w-full py-2 bg-[#68733f] text-white hover:bg-[#4f582f]"
>
  Add to Cart
</button>
    </div>
  );
}

export default Card;