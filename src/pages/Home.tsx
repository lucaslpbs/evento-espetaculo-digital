import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Users, Lightbulb, Music, Monitor, Building, Star, Award, Heart } from 'lucide-react';
import { EventModal } from '@/components/EventModal';

const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Building,
      title: 'Estrutura de Palco',
      description: 'Palcos modulares de alta qualidade para qualquer tipo de evento'
    },
    {
      icon: Music,
      title: 'Equipamentos de Som',
      description: 'Sistema de áudio profissional com qualidade cristalina'
    },
    {
      icon: Monitor,
      title: 'Painéis de LED',
      description: 'Telões e painéis LED de alta resolução para máximo impacto visual'
    },
    {
      icon: Lightbulb,
      title: 'Iluminação Cênica',
      description: 'Iluminação profissional que transforma ambientes'
    }
  ];

  const testimonials = [
    {
      name: 'Ana Silva',
      event: 'Casamento',
      text: 'A Teclas Eventos transformou nosso sonho em realidade! Equipamentos de primeira e equipe super profissional.',
      rating: 5
    },
    {
      name: 'João Santos',
      event: 'Evento Corporativo',
      text: 'Excelente estrutura e suporte técnico. Nosso evento foi um sucesso total!',
      rating: 5
    }
  ];

  const eventGallery = [
    {
      id: 1,
      type: 'image' as const,
      title: 'Evento Corporativo',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      description: 'Evento corporativo de grande porte com iluminação profissional e estrutura completa para 500 participantes.',
      details: {
        date: '15 de Março, 2024',
        location: 'Centro de Convenções - São Paulo',
        attendees: '500 participantes',
        duration: '8 horas',
        services: ['Palco Modular', 'Sistema de Som', 'Iluminação LED', 'Painéis de LED', 'Produção Técnica'],
        gallery: [
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=300&h=200&fit=crop'
        ]
      }
    },
    {
      id: 2,
      type: 'image' as const,
      title: 'Casamento',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      description: 'Casamento dos sonhos com som ambiente perfeito e iluminação romântica que criou a atmosfera ideal.',
      details: {
        date: '22 de Abril, 2024',
        location: 'Fazenda Villa Bella - Interior SP',
        attendees: '150 convidados',
        duration: '12 horas',
        services: ['Som Ambiente', 'Iluminação Romântica', 'Microfonação', 'DJ Setup', 'Assessoria Técnica'],
        gallery: [
          'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=200&fit=crop'
        ]
      }
    },
    {
      id: 3,
      type: 'video' as const,
      title: 'Show Musical',
      thumbnail: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop',
      description: 'Show de grande porte com estrutura de palco profissional e painéis LED de última geração.',
      details: {
        date: '10 de Maio, 2024',
        location: 'Arena Cultural - Rio de Janeiro',
        attendees: '2.000 pessoas',
        duration: '6 horas',
        services: ['Palco Principal', 'Painéis LED 4K', 'Sistema de Som Line Array', 'Iluminação Cênica', 'Efeitos Especiais'],
        gallery: [
          'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=200&fit=crop'
        ]
      }
    }
  ];

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Images */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop" 
            alt="Evento com iluminação profissional" 
            className="w-full h-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
            alt="Equipamentos de som profissional" 
            className="w-full h-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop" 
            alt="Estrutura de palco moderna" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-red-600 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 animate-fade-in-up">
            <span className="text-gradient">Transformamos</span>
            <br />
            <span className="text-white">seu evento em um</span>
            <br />
            <span className="text-gradient">espetáculo!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-300">
            Estrutura completa para eventos inesquecíveis:<br />
            Som, palco, LED, iluminação e muito mais
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-bold rounded-full red-shadow">
              <Play className="mr-2 h-5 w-5" />
              Ver Nossos Trabalhos
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-bold rounded-full">
              <Users className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tecnologia de ponta e equipe especializada para tornar seu evento único
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-white rounded-full mb-4 mx-auto">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-center text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              Nossos <span className="text-gradient">Eventos</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Veja alguns dos nossos trabalhos mais recentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventGallery.map((event, index) => (
              <div 
                key={event.id}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                onClick={() => handleEventClick(event)}
              >
                <img 
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center mb-2">
                      {event.type === 'video' ? (
                        <Play className="h-5 w-5 text-red-500 mr-2" />
                      ) : (
                        <Monitor className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span className="text-xs text-gray-300 uppercase tracking-wide">
                        Clique para ver mais
                      </span>
                    </div>
                    <h3 className="text-white font-bold">{event.title}</h3>
                    <p className="text-gray-300 text-sm">{event.description.substring(0, 60)}...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              O que dizem nossos <span className="text-gradient">clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-red-500/20 rounded-2xl p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-red-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-white rounded-full flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600/20 to-black">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-12 w-12 text-red-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
              Pronto para criar um <span className="text-gradient">espetáculo</span>?
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para transformar sua visão em realidade. 
            Entre em contato e descubra como podemos fazer seu evento brilhar!
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-bold rounded-full animate-glow red-shadow">
            Solicitar Orçamento Agora
          </Button>
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          event={selectedEvent}
        />
      )}
    </div>
  );
};

export default Home;
