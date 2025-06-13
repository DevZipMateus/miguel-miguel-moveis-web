
import { ArrowRight, Award, Clock, Leaf, Users, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
const Home = () => {
  const values = [{
    icon: Award,
    title: "ACABAMENTO IMPECÁVEL",
    description: "Cada detalhe é pensado para garantir a máxima qualidade e durabilidade."
  }, {
    icon: Leaf,
    title: "SUSTENTABILIDADE",
    description: "Utilizamos madeiras certificadas e processos eco-responsáveis."
  }, {
    icon: Clock,
    title: "PONTUALIDADE",
    description: "Cumprimos rigorosamente os prazos estabelecidos em contrato."
  }, {
    icon: Users,
    title: "ATENDIMENTO PERSONALIZADO",
    description: "Cada projeto é único e desenvolvido especialmente para você."
  }];
  const testimonials = [{
    name: "Maria Silva",
    text: "Excelente trabalho! A cozinha ficou perfeita, exatamente como imaginei.",
    rating: 5
  }, {
    name: "João Santos",
    text: "Pontualidade e qualidade impressionantes. Recomendo para todos!",
    rating: 5
  }, {
    name: "Ana Paula",
    text: "Móveis de altíssima qualidade. Estou muito satisfeita com o resultado.",
    rating: 5
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-100 to-beige-200" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/lovable-uploads/873f0be9-1856-4415-9c80-3111b5e94d4b.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                MÓVEIS PLANEJADOS
                <span className="block text-beige-200">SOB MEDIDA</span>
              </h1>
              <p className="text-xl text-white leading-relaxed drop-shadow-md">
                <strong>Tradição, Qualidade e Competência</strong> desde 1993. 
                Oferecemos móveis planejados com acabamento impecável e pontualidade que você pode confiar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a href="https://wa.me/5515997827489?text=Olá! Gostaria de solicitar um orçamento." target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:scale-105 transition-transform">
                  
                  <span className="ml-3 bg-brown-700 text-white px-6 py-3 rounded-lg font-semibold text-lg drop-shadow-md">SOLICITE SEU ORÇAMENTO</span>
                </a>
                <Link to="/projetos" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brown-700 transition-colors font-semibold text-lg inline-flex items-center justify-center drop-shadow-md">
                  VER PROJETOS
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="text-6xl font-bold text-brown-800 mb-2">30+</div>
                  <div className="text-brown-600 font-medium">ANOS DE EXPERIÊNCIA</div>
                  <div className="mt-4 text-sm text-gray-600">
                    Transformando sonhos em realidade desde 1993
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores da Marca */}
      <section className="section-padding bg-white">
        
      </section>

      {/* Como Funciona - Preview */}
      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              COMO FUNCIONA
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              5 etapas simples para ter o móvel dos seus sonhos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {["Escolha o Ambiente", "Descreva seu Projeto", "Informe as Medidas", "Aprovação e Execução", "Entrega e Instalação"].map((step, index) => <div key={index} className="text-center">
                <div className="bg-brown-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-brown-800 text-sm">
                  {step}
                </h3>
              </div>)}
          </div>
          
          <div className="text-center">
            <Link to="/etapas" className="bg-brown-700 text-white px-8 py-4 rounded-lg hover:bg-brown-800 transition-colors font-semibold inline-flex items-center">
              CONHEÇA TODAS AS ETAPAS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              PROJETOS EM DESTAQUE
            </h2>
            <p className="text-xl text-gray-600">
              Conheça alguns dos nossos trabalhos mais recentes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Cozinhas - com imagem real */}
            <div className="group cursor-pointer">
              <div className="h-64 rounded-lg mb-4 overflow-hidden">
                <img src="/lovable-uploads/b12043e8-c245-4b3c-88af-79641041a98a.png" alt="Cozinha planejada moderna com bancada preta e armários verdes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                Cozinhas
              </h3>
              <p className="text-gray-600">Projetos funcionais e elegantes</p>
            </div>

            {/* Quartos - com imagem real */}
            <div className="group cursor-pointer">
              <div className="h-64 rounded-lg mb-4 overflow-hidden">
                <img src="/lovable-uploads/ad992950-fb43-4a78-808f-fc1f4b3dde64.png" alt="Closet planejado branco com prateleiras, gavetas e cabideiro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                Quartos
              </h3>
              <p className="text-gray-600">Ambientes aconchegantes e organizados</p>
            </div>

            {/* Living - com imagem real */}
            <div className="group cursor-pointer">
              <div className="h-64 rounded-lg mb-4 overflow-hidden">
                <img src="/lovable-uploads/9f182d5b-7fe1-4305-902a-77b601d04e19.png" alt="Living moderno integrado com cozinha, mesa de jantar e área de estar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                Living
              </h3>
              <p className="text-gray-600">Espaços integrados e modernos</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/projetos" className="bg-brown-700 text-white px-8 py-4 rounded-lg hover:bg-brown-800 transition-colors font-semibold inline-flex items-center">
              VER TODOS OS PROJETOS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              O QUE NOSSOS CLIENTES DIZEM
            </h2>
            <p className="text-xl text-gray-600">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-brown-800">
                  {testimonial.name}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-brown-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            PRONTO PARA TRANSFORMAR SEU ESPAÇO?
          </h2>
          <p className="text-xl text-beige-200 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos criar o móvel perfeito para sua casa
          </p>
          <a href="https://wa.me/5515997827489?text=Olá! Gostaria de solicitar um orçamento." target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:scale-105 transition-transform">
            
            <span className="ml-3 bg-beige-500 text-brown-800 px-6 py-3 rounded-lg font-semibold text-lg">
              FALE CONOSCO AGORA
            </span>
          </a>
        </div>
      </section>
    </div>;
};
export default Home;
