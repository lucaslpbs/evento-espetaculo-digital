
import { Button } from '@/components/ui/button';
import { Play, Users, Lightbulb, Music, Monitor, Building } from 'lucide-react';

const Home = () => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-electric-yellow rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-electric-red rounded-full animate-pulse delay-500"></div>
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
            <Button className="bg-electric-blue hover:bg-electric-blue/80 text-white px-8 py-4 text-lg font-bold rounded-full electric-shadow">
              <Play className="mr-2 h-5 w-5" />
              Ver Nossos Trabalhos
            </Button>
            <Button variant="outline" className="border-electric-yellow text-electric-yellow hover:bg-electric-yellow hover:text-black px-8 py-4 text-lg font-bold rounded-full">
              <Users className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
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
                className="bg-card border border-electric-blue/20 rounded-2xl p-6 hover:border-electric-blue/40 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-electric-blue to-electric-yellow rounded-full mb-4 mx-auto">
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-electric-blue/10 to-electric-yellow/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Pronto para criar um <span className="text-gradient">espetáculo</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para transformar sua visão em realidade. 
            Entre em contato e descubra como podemos fazer seu evento brilhar!
          </p>
          <Button className="bg-electric-yellow hover:bg-electric-yellow/80 text-black px-8 py-4 text-lg font-bold rounded-full animate-glow">
            Solicitar Orçamento Agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
