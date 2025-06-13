
import KitchenCarousel from '../components/KitchenCarousel';

const Projetos = () => {
  return (
    <div className="min-h-screen bg-beige-50">
      {/* Carrossel de Cozinhas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              PROJETOS DE COZINHAS
            </h2>
            <p className="text-xl text-gray-600">
              Cozinhas planejadas com funcionalidade e design exclusivo
            </p>
          </div>
          <KitchenCarousel />
        </div>
      </section>
    </div>
  );
};

export default Projetos;
