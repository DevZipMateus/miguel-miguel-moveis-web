
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    projeto: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.telefone || !formData.projeto) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, telefone e descrição do projeto.",
        variant: "destructive",
      });
      return;
    }

    // Criar mensagem para WhatsApp
    const mensagem = `Olá! Meu nome é ${formData.nome}.
    
Telefone: ${formData.telefone}
Email: ${formData.email || 'Não informado'}

Descrição do projeto:
${formData.projeto}

Gostaria de solicitar um orçamento.`;

    const urlWhatsApp = `https://wa.me/5515997827489?text=${encodeURIComponent(mensagem)}`;
    
    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Limpar formulário
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      projeto: ''
    });

    toast({
      title: "Sucesso!",
      description: "Você será redirecionado para o WhatsApp para enviar sua mensagem.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Hero Section */}
      <section className="bg-brown-800 text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ENTRE EM CONTATO
            </h1>
            <p className="text-xl text-beige-200 leading-relaxed">
              Estamos prontos para transformar suas ideias em realidade. 
              Entre em contato conosco e solicite seu orçamento personalizado sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-brown-800 mb-6">
                SOLICITE SEU ORÇAMENTO
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-brown-800 font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-brown-800 font-medium mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                    placeholder="(15) 99999-9999"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-brown-800 font-medium mb-2">
                    E-mail (opcional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="projeto" className="block text-brown-800 font-medium mb-2">
                    Descrição do Projeto *
                  </label>
                  <textarea
                    id="projeto"
                    name="projeto"
                    value={formData.projeto}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent resize-vertical"
                    placeholder="Descreva detalhadamente seu projeto: ambiente, medidas aproximadas, estilo desejado, referências, etc."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brown-700 text-white py-4 rounded-lg hover:bg-brown-800 transition-colors font-semibold text-lg flex items-center justify-center"
                >
                  ENVIAR SOLICITAÇÃO
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4 text-center">
                * Campos obrigatórios. Você será redirecionado para o WhatsApp para finalizar o envio.
              </p>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brown-800 mb-4">
                  INFORMAÇÕES DE CONTATO
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:15997827489"
                    className="flex items-center text-gray-700 hover:text-brown-700 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-4 text-brown-600" />
                    <div>
                      <div className="font-medium">(15) 99782-7489</div>
                      <div className="text-sm text-gray-500">WhatsApp e chamadas</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:francisco.moveis@hotmail.com"
                    className="flex items-center text-gray-700 hover:text-brown-700 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-4 text-brown-600" />
                    <div>
                      <div className="font-medium">francisco.moveis@hotmail.com</div>
                      <div className="text-sm text-gray-500">E-mail comercial</div>
                    </div>
                  </a>

                  <div className="flex items-start text-gray-700">
                    <MapPin className="h-5 w-5 mr-4 text-brown-600 mt-1" />
                    <div>
                      <div className="font-medium">Rua Célia Lourdes Vercellino, 1314</div>
                      <div className="text-sm text-gray-500">Jardim Hermínia – Boituva, SP</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brown-800 mb-4">
                  HORÁRIO DE ATENDIMENTO
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-4 text-brown-600" />
                    <div>
                      <div className="font-medium">Segunda a Sexta</div>
                      <div className="text-gray-600">09h às 18h</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-4 text-brown-600" />
                    <div>
                      <div className="font-medium">Sábado</div>
                      <div className="text-gray-600">09h às 13h</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 mt-3">
                    Domingo: Fechado
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-brown-800 mb-4">
                  REDES SOCIAIS
                </h3>
                
                <div className="space-y-3">
                  <a 
                    href="https://instagram.com/franciscomiguelmarcenaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-brown-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5 mr-4 text-brown-600" />
                    <div>
                      <div className="font-medium">@franciscomiguelmarcenaria</div>
                      <div className="text-sm text-gray-500">Veja nossos projetos</div>
                    </div>
                  </a>

                  <a 
                    href="https://facebook.com/Francisco Miguel Marcenaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-brown-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5 mr-4 text-brown-600" />
                    <div>
                      <div className="font-medium">Francisco Miguel Marcenaria</div>
                      <div className="text-sm text-gray-500">Novidades e dicas</div>
                    </div>
                  </a>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="https://wa.me/5515997827489?text=Olá! Gostaria de solicitar um orçamento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:scale-105 transition-transform"
                  >
                    <img 
                      src="/lovable-uploads/a745f338-e488-40fb-815d-6c0c00289320.png" 
                      alt="Fale conosco pelo WhatsApp" 
                      className="h-16 w-16 rounded-full"
                    />
                    <span className="ml-3 bg-green-600 text-white px-4 py-2 rounded-lg font-medium">
                      FALE CONOSCO
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brown-800 mb-4">
              NOSSA LOCALIZAÇÃO
            </h2>
            <p className="text-lg text-gray-600">
              Visite nosso ateliê em Boituva, SP
            </p>
          </div>
          
          <div className="bg-beige-100 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-brown-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brown-800 mb-2">
                MIGUEL & MIGUEL MARCENARIA
              </h3>
              <p className="text-gray-600">
                Rua Célia Lourdes Vercellino, 1314<br />
                Jardim Hermínia – Boituva, SP
              </p>
              <a 
                href="https://maps.google.com/?q=Rua+Célia+Lourdes+Vercellino,+1314,+Boituva,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-brown-700 text-white px-6 py-2 rounded-lg hover:bg-brown-800 transition-colors"
              >
                VER NO GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
