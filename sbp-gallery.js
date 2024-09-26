class SBPGallery {
  constructor(containerId, options) {
    this.container = document.getElementById(containerId);
    this.options = options;
    this.images = options.images || [];
    this.currentImageIndex = 0;
    this.init();
  }

  init() {
    this.renderGallery();
    this.createModal();
    this.initModalNavigation();
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

      item.addEventListener("click", () => this.openModal(index));
    });
  }

  createModal() {
    this.modal = document.createElement("div");
    this.modal.className = "sbp-modal";

    this.modalContent = document.createElement("img");
    this.modalContent.className = "sbp-modal-content";

    const closeBtn = document.createElement("button");
    closeBtn.className = "sbp-close";
    closeBtn.textContent = "Exit";
    closeBtn.onclick = () => this.closeModal();

    const prevBtn = document.createElement("button");
    prevBtn.className = "sbp-nav-btn sbp-prev";
    prevBtn.textContent = "❮";
    prevBtn.onclick = () => this.showPreviousImage();

    const nextBtn = document.createElement("button");
    nextBtn.className = "sbp-nav-btn sbp-next";
    nextBtn.textContent = "❯";
    nextBtn.onclick = () => this.showNextImage();

    this.modal.appendChild(this.modalContent);
    this.modal.appendChild(closeBtn);
    this.modal.appendChild(prevBtn);
    this.modal.appendChild(nextBtn);
    document.body.appendChild(this.modal);
  }

  initModalNavigation() {
    // 터치 스와이프 (모바일)
    let touchStartX = 0;
    let touchEndX = 0;

    this.modal.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].clientX;
      },
      false
    );

    this.modal.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault();
      },
      false
    );

    this.modal.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].clientX;
        this.handleModalSwipe(touchStartX, touchEndX);
      },
      false
    );

    // 키보드 네비게이션 (데스크톱)
    document.addEventListener("keydown", (e) => {
      if (this.modal.style.display === "flex") {
        if (e.key === "ArrowLeft") {
          this.showPreviousImage();
        } else if (e.key === "ArrowRight") {
          this.showNextImage();
        } else if (e.key === "Escape") {
          this.closeModal();
        }
      }
    });
  }

  handleModalSwipe(touchStartX, touchEndX) {
    const swipeThreshold = 50;
    const swipeLength = touchEndX - touchStartX;

    if (swipeLength > swipeThreshold) {
      this.showPreviousImage();
    } else if (swipeLength < -swipeThreshold) {
      this.showNextImage();
    }
  }

  openModal(index) {
    this.currentImageIndex = index;
    this.updateModalImage();
    this.modal.style.display = "flex";
  }

  closeModal() {
    this.modal.style.display = "none";
  }

  showPreviousImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.updateModalImage();
  }

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.updateModalImage();
  }

  updateModalImage() {
    const image = this.images[this.currentImageIndex];
    this.modalContent.src = image.src;
    this.modalContent.alt = image.alt;
    this.adjustModalImage();
  }

  adjustModalImage() {
    const aspectRatio =
      this.modalContent.naturalWidth / this.modalContent.naturalHeight;
    const windowRatio = window.innerWidth / window.innerHeight;

    if (aspectRatio > windowRatio) {
      this.modalContent.style.width = "90vw";
      this.modalContent.style.height = "auto";
    } else {
      this.modalContent.style.width = "auto";
      this.modalContent.style.height = "90vh";
    }
  }
}
