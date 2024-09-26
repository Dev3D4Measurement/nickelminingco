class SBPGallery {
  constructor(containerId, options) {
    this.container = document.getElementById(containerId);
    this.options = options;
    this.images = options.images || [];
    this.init();
  }

  init() {
    this.renderGallery();
    this.createModal();
  }

  renderGallery() {
    this.images.forEach((image, index) => {
      const item = document.createElement("div");
      item.className = `sbp-gallery-item${image.tall ? " tall" : ""}`;

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt || `Gallery Image ${index + 1}`;

      item.appendChild(img);
      this.container.appendChild(item);

      item.addEventListener("click", () => this.openModal(img.src, img.alt));
    });
  }

  createModal() {
    this.modal = document.createElement("div");
    this.modal.className = "sbp-modal";

    const modalContent = document.createElement("img");
    modalContent.className = "sbp-modal-content";

    const closeBtn = document.createElement("button");
    closeBtn.className = "sbp-close";
    closeBtn.textContent = "Exit";
    closeBtn.onclick = () => this.closeModal();

    this.modal.appendChild(modalContent);
    this.modal.appendChild(closeBtn);
    document.body.appendChild(this.modal);

    window.addEventListener("resize", () => this.adjustModalImage());
  }

  openModal(imageSrc, imageAlt) {
    const modalContent = this.modal.querySelector(".sbp-modal-content");
    modalContent.src = imageSrc;
    modalContent.alt = imageAlt;
    this.modal.style.display = "flex";
    this.adjustModalImage();
  }

  closeModal() {
    this.modal.style.display = "none";
  }

  adjustModalImage() {
    const modalContent = this.modal.querySelector(".sbp-modal-content");
    const aspectRatio = modalContent.naturalWidth / modalContent.naturalHeight;
    const windowRatio = window.innerWidth / window.innerHeight;

    if (aspectRatio > windowRatio) {
      modalContent.style.width = "90vw";
      modalContent.style.height = "auto";
    } else {
      modalContent.style.width = "auto";
      modalContent.style.height = "90vh";
    }
  }
}
