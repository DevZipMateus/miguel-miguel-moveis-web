
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
    <header className="shadow-sm relative z-50">
      {/* Top Bar - Full width background */}
      <div className="bg-brown-800 text-white py-1 sm:py-2 w-full">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center text-xs sm:text-sm gap-1 sm:gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 lg:gap-4 w-full lg:w-auto">
              <a href="tel:15997827489" className="flex items-center hover:text-beige-200 transition-colors whitespace-nowrap text-center">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm">(15) 99782-7489</span>
              </a>
              <a href="mailto:francisco.moveis@hotmail.com" className="flex items-center hover:text-beige-200 transition-colors text-center">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                <span className="break-all sm:break-normal text-xs sm:text-sm">francisco.moveis@hotmail.com</span>
              </a>
            </div>
            <div className="text-center text-xs lg:text-sm mt-1 lg:mt-0">
              <span className="font-medium">Segunda a Sexta: 9h às 18h | Sábado: 9h às 13h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Full width background */}
      <div className="w-full" style={{ backgroundColor: '#726048' }}>
        <div className="container-custom py-2 sm:py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/2d0424fe-e79a-40e9-8d10-7c37634db431.png" 
                alt="Miguel & Miguel Marcenaria" 
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-4 2xl:space-x-8">
              {menuItems.map(item => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`font-medium transition-colors hover:text-white text-sm 2xl:text-base ${
                    isActive(item.path) ? 'text-white border-b-2 border-white' : 'text-beige-100'
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
              className="hidden lg:inline-flex items-center hover:scale-105 transition-transform"
            >
              <span className="ml-2 bg-brown-700 text-white px-3 lg:px-4 py-2 lg:py-2 rounded-lg font-medium text-xs lg:text-sm xl:text-base">
                SOLICITE SEU ORÇAMENTO
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button className="xl:hidden text-white p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="xl:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              {menuItems.map(item => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`block py-2 font-medium transition-colors hover:text-white text-sm ${
                    isActive(item.path) ? 'text-white' : 'text-beige-100'
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
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full" 
                />
                <span className="ml-2 bg-brown-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium text-sm">
                  SOLICITE SEU ORÇAMENTO
                </span>
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
