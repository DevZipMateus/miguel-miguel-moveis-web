
import { Award, Users, Clock, Leaf, Target, Heart, Star } from 'lucide-react';

const Sobre = () => {
  const values = [
    {
      icon: Award,
      title: "QUALIDADE",
      description: "Utilizamos apenas materiais de primeira qualidade e técnicas aprimoradas ao longo de 30 anos."
    },
    {
      icon: Clock,
      title: "PONTUALIDADE",
      description: "Cumprimos rigorosamente os prazos estabelecidos, respeitando o cronograma do seu projeto."
    },
    {
      icon: Heart,
      title: "PAIXÃO",
      description: "Cada móvel é criado com dedicação e amor pelos detalhes que fazem a diferença."
    },
    {
      icon: Users,
      title: "FAMÍLIA",
      description: "Somos uma empresa familiar que valoriza relacionamentos duradouros com nossos clientes."
    },
    {
      icon: Leaf,
      title: "SUSTENTABILIDADE",
      description: "Comprometidos com práticas eco-responsáveis e uso consciente dos recursos naturais."
    },
    {
      icon: Target,
      title: "EXCELÊNCIA",
      description: "Buscamos constantemente a perfeição em cada projeto, superando expectativas."
    }
  ];

  const milestones = [
    {
      year: "1993",
      title: "FUNDAÇÃO",
      description: "Miguel & Miguel Marcenaria inicia suas atividades em Boituva, SP"
    },
    {
      year: "2000",
      title: "EXPANSÃO",
      description: "Ampliação do ateliê e incorporação de novas tecnologias"
    },
    {
      year: "2010",
      title: "MODERNIZAÇÃO",
      description: "Investimento em equipamentos de última geração"
    },
    {
      year: "2020",
      title: "DIGITALIZAÇÃO",
      description: "Implementação de projetos 3D e atendimento digital"
    },
    {
      year: "2024",
      title: "HOJE",
      description: "Mais de 1.000 projetos realizados e clientes satisfeitos"
    }
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Hero Section */}
      <section className="bg-brown-800 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                NOSSA HISTÓRIA
              </h1>
              <p className="text-xl text-beige-200 leading-relaxed mb-6">
                <strong>Desde 1993</strong> sendo referência regional em serviços de marcenaria, 
                oferecendo móveis planejados com acabamento impecável e pontualidade que você pode confiar.
              </p>
              <p className="text-lg text-beige-300 leading-relaxed">
                Tradição, qualidade e competência definem nossa jornada de mais de 30 anos 
                transformando sonhos em realidade através da arte da marcenaria.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-beige-100 rounded-3xl p-8 text-center text-brown-800">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold mb-2">30+</div>
                    <div className="text-sm">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">1000+</div>
                    <div className="text-sm">Projetos Realizados</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-sm">Satisfação</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">7</div>
                    <div className="text-sm">Ambientes Especializados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              NOSSA MISSÃO
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Criar móveis únicos e funcionais que transformem espaços e melhorem a qualidade de vida 
                das pessoas, mantendo sempre nossa tradição de excelência no acabamento e projetos contemporâneos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Acreditamos que cada cliente tem necessidades únicas, por isso desenvolvemos soluções 
                personalizadas que refletem personalidade e atendem às demandas específicas de cada projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="section-padding bg-beige-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              NOSSOS VALORES
            </h2>
            <p className="text-xl text-gray-600">
              Os pilares que guiam nosso trabalho diariamente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-brown-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-brown-700" />
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              NOSSA TRAJETÓRIA
            </h2>
            <p className="text-xl text-gray-600">
              Marcos importantes em nossa jornada de crescimento
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-brown-300 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-beige-100 p-6 rounded-2xl">
                      <div className="text-3xl font-bold text-brown-800 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-brown-700 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-brown-700 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="section-padding bg-beige-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              NOSSA EQUIPE
            </h2>
            <p className="text-xl text-gray-600">
              Profissionais dedicados à excelência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-brown-200 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-20 w-20 text-brown-700" />
              </div>
              <h3 className="text-2xl font-bold text-brown-800 mb-2">
                CARINA MIGUEL
              </h3>
              <p className="text-lg text-brown-600 mb-4">Responsável Técnica</p>
              <p className="text-gray-600 leading-relaxed">
                Com anos de experiência no setor, Carina lidera nossa equipe com 
                dedicação e expertise técnica, garantindo que cada projeto atenda 
                aos mais altos padrões de qualidade.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h4 className="text-lg font-bold text-brown-800 mb-2">
                  COMPROMISSO COM A QUALIDADE
                </h4>
                <p className="text-gray-600">
                  Nossa equipe é constantemente treinada nas mais modernas técnicas 
                  de marcenaria e atendimento ao cliente.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h4 className="text-lg font-bold text-brown-800 mb-2">
                  ATENDIMENTO PERSONALIZADO
                </h4>
                <p className="text-gray-600">
                  Cada cliente recebe atenção individual desde o primeiro contato 
                  até a entrega final do projeto.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h4 className="text-lg font-bold text-brown-800 mb-2">
                  INOVAÇÃO CONSTANTE
                </h4>
                <p className="text-gray-600">
                  Investimos continuamente em capacitação e novas tecnologias 
                  para oferecer o melhor aos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações e Garantias */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              NOSSOS DIFERENCIAIS
            </h2>
            <p className="text-xl text-gray-600">
              O que nos torna únicos no mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                MADEIRAS CERTIFICADAS
              </h3>
              <p className="text-gray-600">
                Utilizamos apenas madeiras de reflorestamento e fornecedores certificados
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                GARANTIA ESTENDIDA
              </h3>
              <p className="text-gray-600">
                Oferecemos garantia de qualidade e suporte pós-venda diferenciado
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                PROJETOS 3D
              </h3>
              <p className="text-gray-600">
                Visualize seu projeto antes da execução com nossa tecnologia 3D
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brown-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FAÇA PARTE DA NOSSA HISTÓRIA
          </h2>
          <p className="text-xl text-beige-200 mb-8 max-w-2xl mx-auto">
            Junte-se aos mais de 1.000 clientes satisfeitos que confiaram em nossa experiência 
            para transformar seus espaços. Solicite seu orçamento hoje mesmo!
          </p>
          <a
            href="https://wa.me/5515997827489?text=Olá! Gostaria de conhecer mais sobre a Miguel & Miguel Marcenaria."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-beige-500 text-brown-800 px-8 py-4 rounded-lg hover:bg-beige-400 transition-colors font-semibold text-lg inline-flex items-center"
          >
            FALE CONOSCO
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
