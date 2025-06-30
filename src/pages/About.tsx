
import { Award, Clock, Users, Zap } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Clock,
      number: '15+',
      label: 'Anos de Experiência'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Eventos Realizados'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Clientes Satisfeitos'
    },
    {
      icon: Zap,
      number: '24/7',
      label: 'Suporte Técnico'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
            Quem <span className="text-gradient">Somos</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça a história por trás dos eventos mais espetaculares
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-white">
              Nossa <span className="text-gradient">Missão</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Há mais de 15 anos no mercado, a EventTech nasceu da paixão por transformar 
              momentos especiais em experiências inesquecíveis. Nossa missão é fornecer 
              estrutura completa e tecnologia de ponta para eventos de todos os portes.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Combinamos expertise técnica com atendimento humanizado, garantindo que 
              cada detalhe do seu evento seja executado com perfeição. Nossa equipe 
              multidisciplinar trabalha 24/7 para superar expectativas.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Acreditamos que cada evento é único e merece uma produção personalizada. 
              Por isso, oferecemos soluções sob medida, desde pequenas celebrações até 
              grandes festivais e eventos corporativos.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-electric-blue/20 to-electric-yellow/20 rounded-2xl p-8 border border-electric-blue/30">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                Nossos <span className="text-gradient">Diferenciais</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Equipamentos de última geração constantemente atualizados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Equipe técnica especializada e certificada</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Suporte completo do planejamento à execução</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Atendimento personalizado para cada cliente</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Backup completo de equipamentos em todos os eventos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center bg-card border border-electric-blue/20 rounded-2xl p-6 hover:border-electric-blue/40 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-electric-blue to-electric-yellow rounded-full mb-4 mx-auto">
                <achievement.icon className="h-8 w-8 text-black" />
              </div>
              <div className="text-3xl md:text-4xl font-orbitron font-bold text-gradient mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-400 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
