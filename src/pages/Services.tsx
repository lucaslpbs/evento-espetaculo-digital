
import { Building, Music, Monitor, Lightbulb, Home, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Estrutura de Palco',
      description: 'Palcos modulares profissionais para qualquer tipo de evento, desde pequenas apresentações até grandes shows.',
      features: ['Palcos modulares', 'Cobertura completa', 'Diferentes tamanhos', 'Montagem especializada']
    },
    {
      icon: Music,
      title: 'Equipamentos de Som',
      description: 'Sistema de áudio profissional com qualidade cristalina para garantir que sua mensagem chegue a todos.',
      features: ['Line Array profissional', 'Mixers digitais', 'Microfones sem fio', 'Monitoração de palco']
    },
    {
      icon: Monitor,
      title: 'Painéis de LED',
      description: 'Telões e painéis LED de alta resolução para máximo impacto visual em qualquer ambiente.',
      features: ['Alta resolução', 'Diferentes tamanhos', 'Indoor e outdoor', 'Controle em tempo real']
    },
    {
      icon: Lightbulb,
      title: 'Iluminação Cênica',
      description: 'Iluminação profissional que transforma ambientes e cria a atmosfera perfeita para seu evento.',
      features: ['Moving lights', 'LED wash', 'Strobes', 'Controle DMX']
    },
    {
      icon: Home,
      title: 'Cobertura e Tendas',
      description: 'Soluções completas de cobertura para eventos ao ar livre, garantindo conforto em qualquer clima.',
      features: ['Tendas modulares', 'Estruturas metálicas', 'Fechamentos laterais', 'Piso elevado']
    },
    {
      icon: Headphones,
      title: 'Produção e Suporte Técnico',
      description: 'Equipe especializada para operação técnica completa durante todo o seu evento.',
      features: ['Operadores especializados', 'Suporte 24/7', 'Backup de equipamentos', 'Coordenação técnica']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologia de ponta e expertise técnica para tornar seu evento inesquecível
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-electric-blue to-electric-yellow rounded-full mb-6 mx-auto group-hover:animate-glow">
                <service.icon className="h-10 w-10 text-black" />
              </div>
              
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-electric-blue rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-electric-blue/10 to-electric-yellow/10 rounded-2xl p-12 border border-electric-blue/30">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
            Precisa de uma <span className="text-gradient">solução personalizada</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Cada evento é único. Nossa equipe está pronta para criar uma solução 
            sob medida para suas necessidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-electric-blue hover:bg-electric-blue/80 text-white px-8 py-4 text-lg font-bold rounded-full electric-shadow">
              Solicitar Orçamento
            </Button>
            <Button variant="outline" className="border-electric-yellow text-electric-yellow hover:bg-electric-yellow hover:text-black px-8 py-4 text-lg font-bold rounded-full">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
