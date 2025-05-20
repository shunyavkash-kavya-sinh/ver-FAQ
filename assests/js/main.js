document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".faq-block");
  if (blocks.length > 0) {
    blocks[0].classList.add("active");
  }
  document.querySelectorAll(".faq-title").forEach((title) => {
    title.addEventListener("click", function () {
      const clickedBlock = this.closest(".faq-block");
      blocks.forEach((block) => block.classList.remove("active"));
      clickedBlock.classList.add("active");
    });
  });
});
