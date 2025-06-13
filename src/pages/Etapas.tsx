
import { Check, ArrowRight, Clock, Ruler, PenTool, Hammer, Truck } from 'lucide-react';

const Etapas = () => {
  const steps = [
    {
      number: 1,
      icon: PenTool,
      title: "ESCOLHA O AMBIENTE",
      description: "Defina qual ambiente você deseja mobiliar: cozinha, quarto, sala, home office, lavabo ou living.",
      details: [
        "Análise do espaço disponível",
        "Identificação das necessidades específicas",
        "Definição do estilo desejado",
        "Orientação sobre possibilidades"
      ],
      color: "bg-brown-600"
    },
    {
      number: 2,
      icon: PenTool,
      title: "DESCREVA SEU PROJETO",
      description: "Conte-nos sobre suas ideias, envie referências visuais e compartilhe sua visão do projeto ideal.",
      details: [
        "Briefing detalhado do projeto",
        "Análise de referências enviadas",
        "Discussão sobre funcionalidades",
        "Sugestões de melhorias"
      ],
      color: "bg-brown-700"
    },
    {
      number: 3,
      icon: Ruler,
      title: "INFORMAR MEDIDAS",
      description: "Nossa equipe realizará a medição precisa do local ou você pode enviar as medidas se preferir.",
      details: [
        "Medição profissional no local",
        "Análise técnica do espaço",
        "Identificação de limitações",
        "Projeto técnico detalhado"
      ],
      color: "bg-brown-800"
    },
    {
      number: 4,
      icon: Hammer,
      title: "APROVAÇÃO E EXECUÇÃO",
      description: "Após aprovação do projeto e orçamento, iniciamos a produção com prazo definido.",
      details: [
        "Aprovação final do projeto",
        "Definição de cronograma",
        "Seleção de materiais",
        "Início da produção"
      ],
      color: "bg-brown-700"
    },
    {
      number: 5,
      icon: Truck,
      title: "ENTREGA E INSTALAÇÃO",
      description: "Entregamos e instalamos seu móvel no prazo combinado, com acabamento perfeito.",
      details: [
        "Entrega pontual",
        "Instalação profissional",
        "Acabamentos finais",
        "Garantia de qualidade"
      ],
      color: "bg-brown-600"
    }
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Hero Section */}
      <section className="bg-brown-800 text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              5 ETAPAS PARA SEU MÓVEL SOB MEDIDA
            </h1>
            <p className="text-xl text-beige-200 leading-relaxed">
              Um processo simples e transparente para transformar suas ideias em realidade. 
              Cada etapa é cuidadosamente planejada para garantir o resultado perfeito.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-24 w-0.5 h-32 bg-brown-300 hidden md:block"></div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Step Number & Icon */}
                  <div className="md:col-span-2">
                    <div className="flex flex-col items-center md:items-start">
                      <div className={`${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4`}>
                        {step.number}
                      </div>
                      <div className={`${step.color} p-4 rounded-full`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-10">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <h3 className="text-2xl md:text-3xl font-bold text-brown-800 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center">
                            <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características do Processo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              NOSSO COMPROMISSO COM VOCÊ
            </h2>
            <p className="text-xl text-gray-600">
              Garantias que acompanham todo o processo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                PONTUALIDADE GARANTIDA
              </h3>
              <p className="text-gray-600">
                Cumprimos rigorosamente os prazos estabelecidos em contrato
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <PenTool className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                PROJETO PERSONALIZADO
              </h3>
              <p className="text-gray-600">
                Cada móvel é único e desenvolvido especialmente para seu espaço
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Check className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                QUALIDADE SUPERIOR
              </h3>
              <p className="text-gray-600">
                Acabamento impecável e materiais de primeira qualidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brown-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            VAMOS COMEÇAR SEU PROJETO?
          </h2>
          <p className="text-xl text-beige-200 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e inicie agora mesmo a primeira etapa do seu móvel dos sonhos
          </p>
          <a
            href="https://wa.me/5515997827489?text=Olá! Gostaria de iniciar um projeto de móvel sob medida."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-beige-500 text-brown-800 px-8 py-4 rounded-lg hover:bg-beige-400 transition-colors font-semibold text-lg inline-flex items-center"
          >
            INICIAR PROJETO AGORA
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Etapas;
