
import { useState } from 'react';
import { Play, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'concerts', name: 'Shows & Concerts' },
    { id: 'corporate', name: 'Eventos Corporativos' },
    { id: 'weddings', name: 'Casamentos' },
    { id: 'festivals', name: 'Festivais' }
  ];

  // Placeholder data - would be replaced with real images/videos
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'concerts',
      title: 'Show Rock Festival 2023',
      thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&h=300&fit=crop',
      description: 'Estrutura completa para festival de rock com 20.000 pessoas'
    },
    {
      id: 2,
      type: 'video',
      category: 'corporate',
      title: 'Evento Corporativo Tech Summit',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop',
      description: 'Produção audiovisual para conferência de tecnologia'
    },
    {
      id: 3,
      type: 'image',
      category: 'weddings',
      title: 'Casamento dos Sonhos',
      thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop',
      description: 'Iluminação romântica e som ambiente para cerimônia'
    },
    {
      id: 4,
      type: 'image',
      category: 'festivals',
      title: 'Festival de Verão',
      thumbnail: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=300&fit=crop',
      description: 'Painéis LED e estrutura de palco para festival ao ar livre'
    },
    {
      id: 5,
      type: 'video',
      category: 'concerts',
      title: 'Show Sertanejo Arena',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      description: 'Produção completa para show em arena coberta'
    },
    {
      id: 6,
      type: 'image',
      category: 'corporate',
      title: 'Lançamento de Produto',
      thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&h=300&fit=crop',
      description: 'Evento de lançamento com mapping e efeitos especiais'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
            Fotos e <span className="text-gradient">Vídeos</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Veja alguns dos nossos trabalhos mais marcantes e se inspire para seu próximo evento
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-electric-blue text-black hover:bg-electric-blue/80'
                  : 'border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10'
              }`}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentSlide(0);
              }}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Carousel */}
        <div className="relative mb-16 bg-card rounded-2xl overflow-hidden border border-electric-blue/20">
          <div className="relative h-96 md:h-[500px]">
            <img
              src={filteredItems[currentSlide]?.thumbnail}
              alt={filteredItems[currentSlide]?.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center mb-2">
                {filteredItems[currentSlide]?.type === 'video' ? (
                  <Play className="h-6 w-6 text-electric-yellow mr-2" />
                ) : (
                  <ImageIcon className="h-6 w-6 text-electric-blue mr-2" />
                )}
                <span className="text-sm text-gray-300 uppercase tracking-wide">
                  {filteredItems[currentSlide]?.type}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-2">
                {filteredItems[currentSlide]?.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {filteredItems[currentSlide]?.description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex space-x-2 p-4 overflow-x-auto">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(index)}
                className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentSlide
                    ? 'border-electric-blue'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center mb-2">
                    {item.type === 'video' ? (
                      <Play className="h-5 w-5 text-electric-yellow mr-2" />
                    ) : (
                      <ImageIcon className="h-5 w-5 text-electric-blue mr-2" />
                    )}
                    <span className="text-xs text-gray-300 uppercase tracking-wide">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-orbitron font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-electric-blue/10 to-electric-yellow/10 rounded-2xl p-12 border border-electric-blue/30">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
            Gostou do que viu? <span className="text-gradient">Vamos conversar!</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Cada projeto é único. Conte-nos sobre sua visão e vamos criar 
            algo ainda mais espetacular para você.
          </p>
          <Button className="bg-electric-yellow hover:bg-electric-yellow/80 text-black px-8 py-4 text-lg font-bold rounded-full animate-glow">
            Criar Meu Evento
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
