import { Link, NavLink } from "react-router-dom";

type NavLinkClassProps = {
  isActive: boolean;
};

// Style function for active links
const navLinkClass = ({ isActive }: NavLinkClassProps) =>
  `px-3 py-2 rounded-md transition-colors ${
    isActive
      ? "bg-blue-700 text-white"
      : "text-blue-100 hover:text-white hover:bg-blue-500"
  }`;

export default function Header() {
  const navItems = [
    { id: "home", to: "/", label: "Home" },
    { id: "dogs", to: "/dogs", label: "Dogs&Puppies" },
    { id: "cats", to: "/cats", label: "Cats&Kittens" },
    { id: "adopt", to: "/adopt", label: "Adopt vs Foster" },
  ];

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">🐾</span>
              </div>
              <h1 className="text-xl font-bold">Little Paws</h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink className={navLinkClass} to={item.to}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
