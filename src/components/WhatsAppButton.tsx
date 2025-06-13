
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5515997827489?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 shadow-lg hover:scale-105 transition-transform z-50 animate-pulse"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img 
        src="/lovable-uploads/a745f338-e488-40fb-815d-6c0c00289320.png" 
        alt="WhatsApp" 
        className="h-16 w-16 rounded-full"
      />
    </a>
  );
};

export default WhatsAppButton;
