import getHtmlSelect from "./getHtmlSelect";
import stingToHtml from "./stingToHtml";

class CustomSelect {
    constructor(nativeSelect, options) {
        this.options = {
            defaultClass: 'custom-select',
            elementBlockClass: 'select',
            ...options,
        }

        this.hasOpen = false;

        this.element = nativeSelect;

        this.optionsList = this.getOptionsList();

        this.selectHtml = getHtmlSelect(this.optionsList, this.options);

        this.renderHtmlSelect();

        this.addEvents();
    }

    addEvents() {
        this.customElement.addEventListener('click', (e) => {
            let hasOpen = false;
            let hasNewSelect = false;

            for (let i = 0; i < e.path.length; i++) {
                if (e.path[i] && e.path[i].classList) {
                    hasOpen = e.path[i].classList.contains(this.options.elementBlockClass + '__main');
                    hasNewSelect = e.path[i].classList.contains(this.options.elementBlockClass + '__options-list');
                }

                if (hasNewSelect) {
                    this.selectedOption(e.target);
                }

                if (hasOpen) {
                    this.toggleSelect();
                    break;
                }
            }
        });

        document.body.addEventListener('click', (e) => {
            let hasSelect = false;

            for (let i = 0; i < e.path.length; i++) {
                if (e.path[i] && e.path[i].classList) {
                    hasSelect = e.path[i].classList.contains(this.options.defaultClass);
                }

                if (hasSelect) break;
            }

            if (this.hasOpen && !hasSelect) this.toggleSelect();
        });
    }

    selectedOption(optionElem) {
        this.optionsList

        for (let i = 0; i < this.optionsList.length; i++) {
            let hasSelected = this.optionsList[i].selected;
            this.optionsList[i].removeAttribute('selected');
            if (hasSelected) break;
        }

        for (let i = 0; i < this.optionsList.length; i++) {
            if (this.optionsList[i].value === optionElem.dataset.value) {
                this.optionsList[i].setAttribute('selected', true);
            }
        }

        this.changeSelectHtmlValue(optionElem.textContent);

        this.toggleClassSelected(optionElem);

        this.toggleSelect();
    }

    toggleClassSelected(optionElem) {
        optionElem
            .parentElement
            .querySelector('.selected')
            .classList
            .remove('selected');
        optionElem.classList.add('selected');
    }

    changeSelectHtmlValue(text) {
        this.selectText.textContent = text;
    }

    toggleSelect() {
        this.customElement.classList.toggle('open');
        this.hasOpen = !this.hasOpen;
    }

    renderHtmlSelect() {
        this.customElement = stingToHtml(this.selectHtml);
        this.element.after(this.customElement);
        this.customElement.prepend(this.element);
        this.selectText = this
            .customElement
            .querySelector('.' + this.options.elementBlockClass + '__text');
    }

    getOptionsList() {
        return [...this.element.querySelectorAll('option')];
    }
}

export default CustomSelect;
