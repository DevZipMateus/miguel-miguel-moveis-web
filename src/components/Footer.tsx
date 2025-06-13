import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-brown-800 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            
            <p className="text-beige-100 mb-4">
              Tradição, Qualidade e Competência desde 1993
            </p>
            <p className="text-beige-200 text-sm">
              Oferecendo móveis planejados com acabamento impecável e pontualidade.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CONTATO</h4>
            <div className="space-y-3">
              <a href="tel:15997827489" className="flex items-center text-beige-200 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-3" />
                (15) 99782-7489
              </a>
              <a href="mailto:francisco.moveis@hotmail.com" className="flex items-center text-beige-200 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-3" />
                francisco.moveis@hotmail.com
              </a>
              <div className="flex items-start text-beige-200">
                <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0" />
                <span>Rua Célia Lourdes Vercellino, 1314<br />Jardim Hermínia – Boituva, SP</span>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h4 className="text-lg font-semibold mb-4">HORÁRIO DE ATENDIMENTO</h4>
            <div className="space-y-2">
              <div className="flex items-center text-beige-200">
                <Clock className="h-4 w-4 mr-3" />
                <div>
                  <div>Segunda a Sexta</div>
                  <div className="text-sm">09h às 18h</div>
                </div>
              </div>
              <div className="flex items-center text-beige-200 mt-3">
                <Clock className="h-4 w-4 mr-3" />
                <div>
                  <div>Sábado</div>
                  <div className="text-sm">09h às 13h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">REDES SOCIAIS</h4>
            <div className="space-y-3">
              <a href="https://www.instagram.com/franciscomiguelmarcenaria?utm_source=qr&igsh=MTV1OTN0Mzh4a2Z5aQ%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center text-beige-200 hover:text-white transition-colors">
                <Instagram className="h-4 w-4 mr-3" />
                @franciscomiguelmarcenaria
              </a>
              
            </div>
            
            <div className="mt-6">
              <a href="https://wa.me/5515997827489?text=Olá! Gostaria de solicitar um orçamento." target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:scale-105 transition-transform">
                <img src="/lovable-uploads/a745f338-e488-40fb-815d-6c0c00289320.png" alt="Fale conosco pelo WhatsApp" className="h-12 w-12 rounded-full" />
                <span className="ml-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium">
                  FALE CONOSCO
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-brown-700">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-beige-200 text-sm">
            <p>&copy; 2025 Miguel & Miguel Marcenaria. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido com excelência para você</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;