document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".faq-block");

  if (blocks.length > 0) {
    const firstBlock = blocks[0];
    const img = firstBlock.querySelector("img");

    if (img.complete) {
      firstBlock.classList.add("active");
    } else {
      img.onload = () => firstBlock.classList.add("active");
      img.onerror = () => firstBlock.classList.add("active");
    }
  }

  document.querySelectorAll(".faq-title").forEach((title) => {
    title.addEventListener("click", function () {
      const clickedBlock = this.closest(".faq-block");
      const img = clickedBlock.querySelector("img");

      if (clickedBlock.classList.contains("active")) return;

      document.querySelectorAll(".faq-block").forEach((block) => {
        block.classList.remove("active");
      });

      if (img.complete) {
        clickedBlock.classList.add("active");
      } else {
        img.onload = () => clickedBlock.classList.add("active");
        img.onerror = () => clickedBlock.classList.add("active");
      }
    });
  });
});
