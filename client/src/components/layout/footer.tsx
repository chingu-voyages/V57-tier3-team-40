export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>123 lala Street, City, ST 12345</p>
              <p>(555) 123-4567</p>
              <p>info@littlepaws.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Adopt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              About Us - Project Link
            </h3>
            <p className="text-gray-300 text-sm">
              Technologies used: React, TypeScript, Vite, TailwindCSS, Node.js,
              Express, Docker...
            </p>
            <p className="text-gray-300 text-sm">
              Disclaimer: This website created for educational purposes only.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2025 Little Paws. Made with ❤️ by Chingu Team</p>
        </div>
      </div>
    </footer>
  );
}
