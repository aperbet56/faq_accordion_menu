// Récupération des différents éléments <div> ayant la classe faq
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  // Ecoute de l'événement click sur la div faq
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
