import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              GEGA & MEGA
            </span>
          </h3>
          <p className="text-secondary-foreground">
            Your one-stop shop for the latest and greatest in tech products and
            services.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-secondary-foreground">
            <li>📍 3 شارع صعب صالح عين شمس</li>
            <li>📞 Eng. Mina: 01551652641</li>
            <li>📞 Eng. Beshoy: 01200510270</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <Link
              href="https://www.facebook.com/people/GEGA-MEGA/61556049603580/"
              target="_blank"
              className="hover:text-secondary-foreground transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="https://wa.me/201551652641"
              target="_blank"
              className="hover:text-secondary-foreground transition-colors"
            >
              WhatsApp (Mina)
            </Link>
            <Link
              href="https://wa.me/201200510270"
              target="_blank"
              className="hover:text-secondary-foreground transition-colors"
            >
              WhatsApp (Beshoy)
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-accent pt-6">
        <p className="text-secondary-foreground">
          &copy; {new Date().getFullYear()} GEGA & MEGA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;