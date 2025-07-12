
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play, ImageIcon, Calendar, MapPin, Users, Clock } from 'lucide-react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    id: number;
    type: 'image' | 'video';
    category?: string;
    title: string;
    thumbnail: string;
    description: string;
    details?: {
      date?: string;
      location?: string;
      attendees?: string;
      duration?: string;
      services?: string[];
      gallery?: string[];
    };
  };
}

export const EventModal = ({ isOpen, onClose, event }: EventModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-red-500/30">
        <DialogHeader>
          <div className="flex items-center mb-2">
            {event.type === 'video' ? (
              <Play className="h-6 w-6 text-red-500 mr-2" />
            ) : (
              <ImageIcon className="h-6 w-6 text-red-500 mr-2" />
            )}
            <span className="text-sm text-gray-300 uppercase tracking-wide">
              {event.type}
            </span>
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-orbitron font-bold text-white">
            {event.title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Imagem Principal */}
          <div className="relative">
            <img
              src={event.thumbnail}
              alt={event.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            {event.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full p-4">
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            )}
          </div>

          {/* Informações do Evento */}
          <div className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              {event.description}
            </p>

            {event.details && (
              <div className="space-y-3">
                {event.details.date && (
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-5 w-5 text-red-500 mr-3" />
                    <span>{event.details.date}</span>
                  </div>
                )}

                {event.details.location && (
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 text-red-500 mr-3" />
                    <span>{event.details.location}</span>
                  </div>
                )}

                {event.details.attendees && (
                  <div className="flex items-center text-gray-300">
                    <Users className="h-5 w-5 text-red-500 mr-3" />
                    <span>{event.details.attendees}</span>
                  </div>
                )}

                {event.details.duration && (
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-5 w-5 text-red-500 mr-3" />
                    <span>{event.details.duration}</span>
                  </div>
                )}

                {event.details.services && (
                  <div className="mt-6">
                    <h4 className="text-white font-bold mb-3">Serviços Utilizados:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.details.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm border border-red-500/30"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Galeria Adicional */}
        {event.details?.gallery && (
          <div className="mt-6">
            <h4 className="text-white font-bold mb-4">Mais Fotos do Evento:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {event.details.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${event.title} - Foto ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        )}

        {/* Botão de Ação */}
        <div className="flex justify-center mt-6 pt-6 border-t border-red-500/20">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-bold rounded-full">
            Criar Evento Similar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
