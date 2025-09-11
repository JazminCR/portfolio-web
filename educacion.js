const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.querySelector(".close");

// Solo las que tienen data-cert se hacen clickeables
document.querySelectorAll(".estudio-card:not(.no-cert)").forEach(card => {
  card.addEventListener("click", () => {
    const cert = card.getAttribute("data-cert");
    modalContent.src = cert;
    modal.style.display = "block";
  });
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalContent.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalContent.src = "";
  }
});
