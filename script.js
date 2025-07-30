/*som meia boca*/
document.addEventListener('DOMContentLoaded', () => {
  
  const interação = async () => {
    const audio = document.getElementById('entrada-som');
    if (!audio) return;

    try {
      await audio.play();
      ['click', 'scroll', 'keydown'].forEach(event => {
        document.removeEventListener(event, interação);
      });
    } catch (error) {
      console.warn('O navegador bloqueou o áudio até uma interação do usuário.');
    }
  };

  ['click', 'scroll', 'keydown'].forEach(event => {
    document.addEventListener(event, interação, { once: true });
  });
     /*acaba o som meia boca*/


  
   /* Animação dos cards*/

  const anima = () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    if (fadeInElements.length === 0) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); 

    fadeInElements.forEach(element => observer.observe(element));
  };

  anima(); /*animação dos cards*/

});