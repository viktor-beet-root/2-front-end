function getHtmlSelect(optionsList, options) {
    return `<div class="${options.defaultClass} ${options.customClass}">
        <div class="${options.elementBlockClass} ${options.defaultClass}__select">
            <div class="${options.elementBlockClass}__main">
                ${getVisibleSelect(optionsList, options.elementBlockClass)}
            </div>
            <ul class="${options.elementBlockClass}__options-list">
                ${getHtmlOption(optionsList, options.elementBlockClass)}
            </ul>
        </div>
    </div>`;
}

function getVisibleSelect(optionsList, elementBlockClass) {
    let selectedOption = null;

    for (let i = 0; i < optionsList.length; i++) {
        if (optionsList[i].selected) {
            selectedOption = optionsList[i];
            break;
        }
    }

    if (!selectedOption) {
        selectedOption = optionsList[0];
    }

    return `<div class="${elementBlockClass}__text">${selectedOption.textContent}</div>
    <div class="${elementBlockClass}__btn"></div>`;
}

function getHtmlOption(optionsList, elementBlockClass) {
    let html = '';

    for (let i = 0; i < optionsList.length; i++) {
        html += `<li data-value="${optionsList[i].value}" class="${elementBlockClass}__option${getAttr(optionsList[i])}">${optionsList[i].textContent}</li>`
    }

    return html;
}

function getAttr(option) {
    let attr = option.attributes.selected ? ' selected' : '';
    attr += option.attributes.hidden ? ' hidden' : '';
    attr += option.attributes.disabled ? ' disabled' : '';

    return attr;
}

export default getHtmlSelect;
