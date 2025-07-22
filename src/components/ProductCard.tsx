"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({ name, price, imageUrl }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-secondary rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-60">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-foreground mb-2">
          {name}
        </h3>
        <p className="text-lg text-secondary-foreground">
          ${price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;