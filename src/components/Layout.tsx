
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Quem Somos', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Fotos e Vídeos', path: '/galeria' },
    { name: 'Contatos', path: '/contatos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-electric">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-electric-blue/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-electric-yellow rounded-lg"></div>
              <span className="text-2xl font-orbitron font-bold text-gradient">EventTech</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-all duration-300 hover:text-electric-blue ${
                    isActive(item.path) ? 'text-electric-blue' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 font-medium transition-all duration-300 hover:text-electric-blue ${
                    isActive(item.path) ? 'text-electric-blue' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Fixed Quote Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-electric-yellow text-black font-bold py-4 px-6 rounded-full animate-bounce-gentle hover:animate-glow transition-all duration-300 electric-shadow">
          <Phone className="mr-2 h-5 w-5" />
          Solicite seu orçamento
        </Button>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
