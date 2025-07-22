"use client";
import { motion } from "framer-motion";

interface ServiceCardProps {
  name: string;
  description: string;
}

const ServiceCard = ({ name, description }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-secondary rounded-lg shadow-lg p-8"
    >
      <h3 className="text-2xl font-bold text-primary-foreground mb-4">
        {name}
      </h3>
      <p className="text-secondary-foreground">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;