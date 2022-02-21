import Jq from "./jq";

function $(selector) {
    return new Jq(selector);
}

export default $;
