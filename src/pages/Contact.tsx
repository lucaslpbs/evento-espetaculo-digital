
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 99999-9999',
      subInfo: 'WhatsApp disponível'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@eventtech.com.br',
      subInfo: 'Resposta em até 2h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua dos Eventos, 123',
      subInfo: 'São Paulo - SP'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg - Sex: 8h às 18h',
      subInfo: 'Sáb: 9h às 14h'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
            <span className="text-gradient">Contatos</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pronto para transformar sua visão em realidade? Entre em contato conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-orbitron font-bold text-white mb-6">
                Fale <span className="text-gradient">Conosco</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Nossa equipe está sempre pronta para atender você. 
                Entre em contato através de qualquer um dos canais abaixo.
              </p>
            </div>

            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-card border border-electric-blue/20 rounded-2xl hover:border-electric-blue/40 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-electric-blue to-electric-yellow rounded-full flex-shrink-0">
                  <contact.icon className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-orbitron font-bold text-white mb-1">
                    {contact.title}
                  </h3>
                  <p className="text-electric-blue font-medium mb-1">
                    {contact.info}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {contact.subInfo}
                  </p>
                </div>
              </div>
            ))}

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-electric-red/20 to-electric-yellow/20 border border-electric-red/30 rounded-2xl p-6">
              <h3 className="text-lg font-orbitron font-bold text-white mb-2">
                Suporte <span className="text-electric-red">24/7</span>
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Para eventos em andamento, temos suporte técnico disponível 24 horas por dia.
              </p>
              <Button className="bg-electric-red hover:bg-electric-red/80 text-white w-full">
                Suporte Emergencial
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-electric-blue/20 rounded-2xl p-8">
              <h2 className="text-2xl font-orbitron font-bold text-white mb-6">
                Solicitar <span className="text-gradient">Orçamento</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Seu nome completo"
                      className="bg-input border-electric-blue/30 text-white placeholder-gray-500 focus:border-electric-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="seu@email.com"
                      className="bg-input border-electric-blue/30 text-white placeholder-gray-500 focus:border-electric-blue"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="bg-input border-electric-blue/30 text-white placeholder-gray-500 focus:border-electric-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tipo de Evento *
                    </label>
                    <Select onValueChange={(value) => handleChange('eventType', value)}>
                      <SelectTrigger className="bg-input border-electric-blue/30 text-white">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-electric-blue/30">
                        <SelectItem value="casamento">Casamento</SelectItem>
                        <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                        <SelectItem value="show">Show/Concert</SelectItem>
                        <SelectItem value="festival">Festival</SelectItem>
                        <SelectItem value="aniversario">Aniversário</SelectItem>
                        <SelectItem value="formatura">Formatura</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Data do Evento
                    </label>
                    <Input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleChange('eventDate', e.target.value)}
                      className="bg-input border-electric-blue/30 text-white focus:border-electric-blue"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Local do Evento
                    </label>
                    <Input
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      placeholder="Cidade - Estado"
                      className="bg-input border-electric-blue/30 text-white placeholder-gray-500 focus:border-electric-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Detalhes do Evento
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Conte-nos mais sobre seu evento: número de convidados, tipo de estrutura desejada, necessidades específicas..."
                    className="bg-input border-electric-blue/30 text-white placeholder-gray-500 focus:border-electric-blue min-h-32"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-electric-blue hover:bg-electric-blue/80 text-white py-4 text-lg font-bold rounded-full animate-glow"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Solicitar Orçamento
                </Button>
              </form>

              <div className="mt-8 p-6 bg-gradient-to-r from-electric-yellow/10 to-electric-blue/10 rounded-xl border border-electric-yellow/30">
                <h3 className="text-lg font-orbitron font-bold text-white mb-2">
                  🚀 Resposta <span className="text-gradient">Rápida</span>
                </h3>
                <p className="text-gray-300 text-sm">
                  Retornamos seu contato em até 2 horas durante o horário comercial. 
                  Para orçamentos urgentes, ligue diretamente para nosso WhatsApp!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
