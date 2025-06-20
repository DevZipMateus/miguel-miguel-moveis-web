import { ArrowRight, Award, Clock, Leaf, Users, Check, Star, Instagram } from 'lucide-react';
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
      <section className="relative bg-gradient-to-br from-beige-100 to-beige-200 pt-2 sm:pt-4 lg:pt-6" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('/lovable-uploads/d836e3da-0272-4a0e-990e-f208dfe9c4c7.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <style>
          {`
            @media (max-width: 480px) {
              section {
                background-position: center 30% !important;
                background-size: cover !important;
                min-height: 100vh !important;
              }
            }
            @media (min-width: 481px) and (max-width: 640px) {
              section {
                background-position: center 25% !important;
                background-size: cover !important;
                min-height: 95vh !important;
              }
            }
            @media (min-width: 641px) and (max-width: 768px) {
              section {
                background-position: center 20% !important;
                background-size: cover !important;
                min-height: 90vh !important;
              }
            }
            @media (min-width: 769px) and (max-width: 1024px) {
              section {
                background-position: center 15% !important;
                background-size: cover !important;
                min-height: 85vh !important;
              }
            }
            @media (min-width: 1025px) and (max-width: 1440px) {
              section {
                background-position: center 10% !important;
                background-size: cover !important;
                background-attachment: scroll !important;
                min-height: 90vh !important;
              }
            }
            @media (min-width: 1441px) {
              section {
                background-position: center 5% !important;
                background-size: cover !important;
                background-attachment: fixed !important;
                min-height: 95vh !important;
              }
            }
          `}
        </style>
        <div className="container-custom py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 min-h-[100vh] sm:min-h-[95vh] md:min-h-[90vh] lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center w-full">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 animate-fade-in text-center lg:text-left">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight drop-shadow-lg font-normal px-0 py-[77px] my-[20px]">
                MÓVEIS PLANEJADOS
                <span className="block text-beige-200">SOB MEDIDA</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-white leading-relaxed drop-shadow-md px-2 sm:px-4 lg:px-0">
                <strong>Tradição, Qualidade e Competência</strong> desde 1993. 
                Oferecemos móveis planejados com acabamento impecável e pontualidade que você pode confiar.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 items-center lg:items-start px-2 sm:px-4 lg:px-0">
                <a href="https://wa.me/5515997827489?text=Olá! Gostaria de solicitar um orçamento." target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:scale-105 transition-transform w-full sm:w-auto justify-center">
                  <span className="bg-brown-700 text-white px-3 xs:px-4 sm:px-6 py-2.5 sm:py-3 lg:py-3 rounded-lg font-semibold text-xs xs:text-sm sm:text-base lg:text-lg drop-shadow-md w-full sm:w-auto text-center">
                    SOLICITE SEU ORÇAMENTO
                  </span>
                </a>
                <Link to="/projetos" className="border-2 border-white text-white px-4 xs:px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg hover:bg-white hover:text-brown-700 transition-colors font-semibold text-xs xs:text-sm sm:text-base lg:text-lg inline-flex items-center justify-center drop-shadow-md w-full sm:w-auto">
                  VER PROJETOS
                </Link>
              </div>
            </div>
            
            <div className="relative px-2 sm:px-4 lg:px-0 mt-4 lg:mt-0">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 xl:p-8 shadow-xl border border-white/30">
                <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 text-center">
                  <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brown-800 mb-1 sm:mb-2">30+</div>
                  <div className="text-brown-600 font-medium text-xs xs:text-sm sm:text-base">ANOS DE EXPERIÊNCIA</div>
                  <div className="mt-1 sm:mt-2 lg:mt-4 text-xs sm:text-sm text-gray-600">
                    Transformando sonhos em realidade desde 1993
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores da Marca */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4 lg:px-0">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-800 mb-1 sm:mb-2 lg:mb-4">
              NOSSOS VALORES
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              O que nos diferencia no mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 lg:px-0">
            {values.map((value, index) => {
            const IconComponent = value.icon;
            return <div key={index} className="text-center">
                  <div className="bg-brown-100 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                    <IconComponent className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-brown-700" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-brown-800 mb-1 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 px-1">
                    {value.description}
                  </p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Como Funciona - Preview */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-beige-50">
        <div className="container-custom">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4 lg:px-0">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-800 mb-1 sm:mb-2 lg:mb-4">
              COMO FUNCIONA
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 lg:mb-8">
              5 etapas simples para ter o móvel dos seus sonhos
            </p>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 lg:px-0">
            {["Escolha o Ambiente", "Descreva seu Projeto", "Informe as Medidas", "Aprovação e Execução", "Entrega e Instalação"].map((step, index) => <div key={index} className="text-center">
                <div className="bg-brown-700 text-white w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-base xs:text-lg sm:text-xl font-bold mx-auto mb-1 sm:mb-2 lg:mb-3">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-brown-800 text-xs sm:text-sm leading-tight px-1">
                  {step}
                </h3>
              </div>)}
          </div>
          
          <div className="text-center px-2 sm:px-4 lg:px-0">
            <Link to="/etapas" className="bg-brown-700 text-white px-4 xs:px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg hover:bg-brown-800 transition-colors font-semibold inline-flex items-center text-xs xs:text-sm sm:text-base">
              CONHEÇA TODAS AS ETAPAS
              <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4 lg:px-0">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-800 mb-1 sm:mb-2 lg:mb-4">
              PROJETOS EM DESTAQUE
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Conheça alguns dos nossos trabalhos mais recentes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 lg:px-0">
            <div className="group cursor-pointer">
              <div className="h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 xl:h-64 rounded-lg mb-2 sm:mb-3 lg:mb-4 overflow-hidden">
                <img src="/lovable-uploads/b12043e8-c245-4b3c-88af-79641041a98a.png" alt="Cozinha planejada moderna com bancada preta e armários verdes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-brown-800 mb-1 sm:mb-2">
                Cozinhas
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600">Projetos funcionais e elegantes</p>
            </div>

            <div className="group cursor-pointer">
              <div className="h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 xl:h-64 rounded-lg mb-2 sm:mb-3 lg:mb-4 overflow-hidden">
                <img src="/lovable-uploads/ad992950-fb43-4a78-808f-fc1f4b3dde64.png" alt="Closet planejado branco com prateleiras, gavetas e cabideiro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-brown-800 mb-1 sm:mb-2">
                Quartos
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600">Ambientes aconchegantes e organizados</p>
            </div>

            <div className="group cursor-pointer">
              <div className="h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 xl:h-64 rounded-lg mb-2 sm:mb-3 lg:mb-4 overflow-hidden">
                <img src="/lovable-uploads/9f182d5b-7fe1-4305-902a-77b601d04e19.png" alt="Living moderno integrado com cozinha, mesa de jantar e área de estar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-brown-800 mb-1 sm:mb-2">
                Living
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600">Espaços integrados e modernos</p>
            </div>
          </div>
          
          <div className="text-center px-2 sm:px-4 lg:px-0">
            <Link to="/projetos" className="bg-brown-700 text-white px-4 xs:px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg hover:bg-brown-800 transition-colors font-semibold inline-flex items-center text-xs xs:text-sm sm:text-base">
              VER TODOS OS PROJETOS
              <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-beige-50">
        <div className="container-custom">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4 lg:px-0">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-800 mb-1 sm:mb-2 lg:mb-4">
              O QUE NOSSOS CLIENTES DIZEM
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 lg:px-0">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-md">
                <div className="flex mb-2 sm:mb-3 lg:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 lg:mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-brown-800 text-xs xs:text-sm sm:text-base">
                  {testimonial.name}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4 lg:px-0">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-800 mb-1 sm:mb-2 lg:mb-4">
              ACOMPANHE MAIS PROJETOS NO INSTAGRAM
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 lg:mb-8">
              Veja nossos trabalhos mais recentes e se inspire para seu projeto
            </p>
          </div>
          
          <div className="text-center px-2 sm:px-4 lg:px-0">
            <a 
              href="https://www.instagram.com/franciscomiguelmarcenaria?utm_source=qr&igsh=MTV1OTN0Mzh4a2Z5aQ%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              <Instagram className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              @franciscomiguelmarcenaria
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;
