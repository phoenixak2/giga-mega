"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12"
        >
          Contact Us
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-secondary p-10 rounded-lg shadow-lg max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Get in Touch
          </h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl mr-4">📍</span>
              <p className="text-secondary-foreground">
                3 شارع صعب صالح عين شمس
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-4">📞</span>
              <a
                href="tel:01551652641"
                className="text-secondary-foreground hover:text-primary-foreground transition-colors"
              >
                Eng. Mina: 01551652641
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-4">📞</span>
              <a
                href="tel:01200510270"
                className="text-secondary-foreground hover:text-primary-foreground transition-colors"
              >
                Eng. Beshoy: 01200510270
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-4">📘</span>
              <Link
                href="https://www.facebook.com/people/GEGA-MEGA/61556049603580/"
                target="_blank"
                className="text-secondary-foreground hover:text-primary-foreground transition-colors"
              >
                Facebook
              </Link>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-4">📱</span>
              <Link
                href="https://wa.me/201551652641"
                target="_blank"
                className="text-secondary-foreground hover:text-primary-foreground transition-colors"
              >
                WhatsApp (Mina)
              </Link>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-4">📱</span>
              <Link
                href="https://wa.me/201200510270"
                target="_blank"
                className="text-secondary-foreground hover:text-primary-foreground transition-colors"
              >
                WhatsApp (Beshoy)
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;