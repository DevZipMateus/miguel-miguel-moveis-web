
import { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';

const Projetos = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'TODOS OS PROJETOS' },
    { id: 'cozinhas', name: 'COZINHAS' },
    { id: 'salas', name: 'SALAS' },
    { id: 'quartos', name: 'QUARTOS' },
    { id: 'home-office', name: 'HOME OFFICE' },
    { id: 'lavabos', name: 'LAVABOS' },
    { id: 'living', name: 'LIVING' },
  ];

  const projects = [
    {
      id: 1,
      title: "Cozinha Moderna Planejada",
      category: "cozinhas",
      description: "Projeto completo com ilha central, bancada em granito e armários em MDF",
      features: ["Ilha central", "Bancada em granito", "Armários planejados", "Iluminação LED"],
    },
    {
      id: 2,
      title: "Sala de Estar Elegante",
      category: "salas",
      description: "Estante modular com TV integrada e móveis complementares",
      features: ["Estante modular", "Painel para TV", "Nichos decorativos", "Acabamento premium"],
    },
    {
      id: 3,
      title: "Quarto Casal Completo",
      category: "quartos",
      description: "Guarda-roupa planejado, cabeceira e móveis complementares",
      features: ["Guarda-roupa", "Cabeceira personalizada", "Criados-mudo", "Penteadeira"],
    },
    {
      id: 4,
      title: "Home Office Funcional",
      category: "home-office",
      description: "Mesa executiva com gavetas e estante para livros e decoração",
      features: ["Mesa executiva", "Gavetas organizadoras", "Estante integrada", "Ergonomia"],
    },
    {
      id: 5,
      title: "Lavabo Compacto",
      category: "lavabos",
      description: "Móvel sob medida para pia com aproveitamento máximo do espaço",
      features: ["Móvel sob pia", "Gavetas", "Espelho integrado", "Compacto"],
    },
    {
      id: 6,
      title: "Living Aconchegante",
      category: "living",
      description: "Estante para TV, bar e área de convivência integrados",
      features: ["Painel TV", "Bar integrado", "Prateleiras", "Design moderno"],
    },
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Hero Section */}
      <section className="bg-brown-800 text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NOSSOS PROJETOS
            </h1>
            <p className="text-xl text-beige-200 leading-relaxed">
              Explore nossa galeria de projetos realizados e inspire-se para criar o seu móvel dos sonhos. 
              Cada projeto reflete nossa dedicação à qualidade e ao design personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-brown-700 text-white'
                    : 'bg-beige-100 text-brown-700 hover:bg-beige-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grade de Projetos */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Imagem do Projeto */}
                <div className="h-64 bg-beige-200 flex items-center justify-center relative group">
                  <div className="text-center">
                    <div className="text-6xl text-brown-300 mb-2">📐</div>
                    <p className="text-brown-600 font-medium">Projeto Realizado</p>
                  </div>
                  <div className="absolute inset-0 bg-brown-800 bg-opacity-0 group-hover:bg-opacity-75 transition-all flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brown-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Características */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brown-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Botão de Ação */}
                  <a
                    href={`https://wa.me/5515997827489?text=Olá! Gostaria de um orçamento para um projeto similar ao "${project.title}".`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brown-700 text-white py-3 rounded-lg hover:bg-brown-800 transition-colors font-medium inline-flex items-center justify-center"
                  >
                    SOLICITAR ORÇAMENTO
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Categorias Detalhadas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              AMBIENTES QUE TRANSFORMAMOS
            </h2>
            <p className="text-xl text-gray-600">
              Especializamos em criar móveis únicos para cada ambiente da sua casa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category, index) => (
              <div key={category.id} className="text-center group">
                <div className="bg-beige-100 h-48 rounded-2xl mb-4 flex items-center justify-center group-hover:bg-beige-200 transition-colors">
                  <div className="text-center">
                    <div className="text-5xl text-brown-400 mb-2">
                      {index === 0 && '🍽️'}
                      {index === 1 && '🛋️'}
                      {index === 2 && '🛏️'}
                      {index === 3 && '💻'}
                      {index === 4 && '🚿'}
                      {index === 5 && '📺'}
                    </div>
                    <h3 className="text-xl font-bold text-brown-800">{category.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.id === 'cozinhas' && 'Projetos funcionais com aproveitamento máximo do espaço'}
                  {category.id === 'salas' && 'Ambientes elegantes para receber e relaxar'}
                  {category.id === 'quartos' && 'Espaços aconchegantes e organizados para descanso'}
                  {category.id === 'home-office' && 'Ambientes produtivos e inspiradores para trabalho'}
                  {category.id === 'lavabos' && 'Soluções compactas e funcionais'}
                  {category.id === 'living' && 'Integração perfeita entre funcionalidade e design'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brown-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            TEM UM PROJETO EM MENTE?
          </h2>
          <p className="text-xl text-beige-200 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para transformar suas ideias em realidade. 
            Solicite seu orçamento personalizado sem compromisso.
          </p>
          <a
            href="https://wa.me/5515997827489?text=Olá! Gostaria de solicitar um orçamento personalizado."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-beige-500 text-brown-800 px-8 py-4 rounded-lg hover:bg-beige-400 transition-colors font-semibold text-lg inline-flex items-center"
          >
            SOLICITAR ORÇAMENTO
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
