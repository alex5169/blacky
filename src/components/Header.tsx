import { MAIN_IMAGE, NAME } from "~/data";

const Header = () => {
  return (
    <header className="relative z-10 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-cat-brown/20 animate-float">
              <img
                src={MAIN_IMAGE}
                alt="Michi Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <span className="text-cat-brown hover:text-cat-brown-light transition-colors text-3xl font-black">
              {NAME}
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
