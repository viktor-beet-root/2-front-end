class Modal {
    constructor(options) {
        this.modal = document.querySelector(options.modal);
        this.overlay = this.modal.querySelector(options.overlay);
        this.openBtn = document.querySelector(options.openBtn);
        this.overlay.addEventListener('click', function (e) {
            if (e.target === e.currentTarget || e.target.classList.contains('close')) {
                e.currentTarget.style.display = 'none';
            }
        });

        this.openBtn.addEventListener('click', () => {
            this.overlay.style.display = '';
        });
        document.addEventListener("DOMContentLoaded", () => {
            this.overlay.style.display = 'none';
        });
    }
}

export default Modal;
