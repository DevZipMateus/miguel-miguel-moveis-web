
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const menuItems = [{
    name: 'INÍCIO',
    path: '/'
  }, {
    name: 'ETAPAS',
    path: '/etapas'
  }, {
    name: 'PROJETOS',
    path: '/projetos'
  }, {
    name: 'SOBRE',
    path: '/sobre'
  }, {
    name: 'CONTATO',
    path: '/contato'
  }];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top Bar */}
      <div className="bg-brown-800 text-white py-2">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <a 
                href="tel:15997827489" 
                className="flex items-center hover:text-beige-200 transition-colors whitespace-nowrap"
              >
                <Phone className="h-4 w-4 mr-1 flex-shrink-0" />
                (15) 99782-7489
              </a>
              <a 
                href="mailto:francisco.moveis@hotmail.com" 
                className="flex items-center hover:text-beige-200 transition-colors text-center"
              >
                <Mail className="h-4 w-4 mr-1 flex-shrink-0" />
                <span className="break-all sm:break-normal">francisco.moveis@hotmail.com</span>
              </a>
            </div>
            <div className="text-center text-xs sm:text-sm">
              <span className="font-medium">Segunda a Sexta: 9h às 18h | Sábado: 9h às 13h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/c0780ec3-dab4-491d-98da-44be6436ae2a.png" 
              alt="Miguel & Miguel Marcenaria" 
              className="h-16 md:h-20 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-brown-700 ${
                  isActive(item.path) 
                    ? 'text-brown-800 border-b-2 border-brown-800' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <a 
            href="https://wa.me/5515997827489?text=Olá! Gostaria de solicitar um orçamento." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:inline-flex items-center hover:scale-105 transition-transform"
          >
            <span className="ml-2 bg-brown-700 text-white px-4 py-2 rounded-lg font-medium text-sm">
              SOLICITE SEU ORÇAMENTO
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            {menuItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 font-medium transition-colors hover:text-brown-700 ${
                  isActive(item.path) ? 'text-brown-800' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/5515997827489?text=Olá! Gostaria de solicitar um orçamento." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center mt-4 hover:scale-105 transition-transform"
            >
              <img 
                src="/lovable-uploads/a745f338-e488-40fb-815d-6c0c00289320.png" 
                alt="Solicite seu orçamento pelo WhatsApp" 
                className="h-12 w-12 rounded-full" 
              />
              <span className="ml-2 bg-brown-700 text-white px-4 py-2 rounded-lg font-medium">
                SOLICITE SEU ORÇAMENTO
              </span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
