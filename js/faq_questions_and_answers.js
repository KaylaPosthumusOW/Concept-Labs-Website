const faqData = [
  {
    question: "What does ConceptLabs actually do?",
    answer:
      "We help you turn your idea into a real business — from validation and registration to branding and online presence. You leave with a complete setup, ready to launch.",
  },
  {
    question: "Do I need to already have a company or business plan?",
    answer:
      "No, you don’t need a company or business plan. We guide you from idea to launch, handling validation, registration, branding, and more.",
  },
  {
    question: "How long does the process take?",
    answer:
      "The process typically takes 2-4 weeks, depending on your needs and how quickly you provide information.",
  },
  {
    question: "What if my idea isn’t ready yet?",
    answer:
      "We help you refine and validate your idea before moving forward, ensuring you launch with confidence.",
  },
  {
    question: "Is this only for tech startups?",
    answer: "No, we work with all types of businesses, not just tech startups.",
  },
  {
    question: "Do you handle company registration for me?",
    answer:
      "Yes, we handle all the paperwork and official registrations so you can focus on your business.",
  },
  {
    question: "Will I get all the official documents after registration?",
    answer:
      "Absolutely. You’ll receive all official documents and certificates once your company is registered.",
  },
  {
    question: "Can you help with setting up a business bank account?",
    answer:
      "Yes, we can guide you through the process of setting up a business bank account.",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("faqAccordions");
  if (!container) return;

  container.innerHTML = "";

  faqData.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "faq-item";

    wrapper.innerHTML = `
      <button class="faq-question" aria-expanded="false" aria-controls="faq-panel-${index}" id="faq-btn-${index}">
        <span class="faq-question-text">${item.question}</span>
        <span class="faq-chevron" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>
      <div class="faq-panel" id="faq-panel-${index}" role="region" aria-labelledby="faq-btn-${index}">
        <div class="faq-panel-inner">
          <hr class="faq-panel-divider">
          <div class="faq-panel-answer">${item.answer}</div>
        </div>
      </div>
    `;



    container.appendChild(wrapper);
  });

  const items = container.querySelectorAll(".faq-item");

  function closeAllExcept(exceptionItem) {
    items.forEach((item) => {
      if (item === exceptionItem) return;

      const btn = item.querySelector(".faq-question");
      const panel = item.querySelector(".faq-panel");

      btn.setAttribute("aria-expanded", "false");
      item.classList.remove("open");
      panel.style.maxHeight = "0px";
    });
  }

  items.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const panel = item.querySelector(".faq-panel");

    // start closed
    panel.style.maxHeight = "0px";

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      closeAllExcept(item);

      if (isOpen) {
        item.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        panel.style.maxHeight = "0px";
      } else {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // On resize, keep height correct if open
  window.addEventListener("resize", () => {
    items.forEach((item) => {
      if (!item.classList.contains("open")) return;
      const panel = item.querySelector(".faq-panel");
      panel.style.maxHeight = panel.scrollHeight + "px";
    });
  });
});
