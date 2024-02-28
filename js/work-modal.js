(() => {
  const refs = {
    openModalBtn: document.querySelector("[work-modal-open]"),
    closeModalBtn: document.querySelector("[work-modal-close]"),
    modal: document.querySelector("[work-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();