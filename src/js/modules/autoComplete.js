import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./../helpers/countyList";


function autoCompleteFunc() {
    const autoCompleteJS = new autoComplete({
        selector: '#autoCompleteContry',
        placeHolder: "e.g Bali, Indonesia",
        data: {
            src: countryList,
            caches: true,
        },
        resultItem: {
            highlight: true,
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS.input.value = selection;
                }
            }
        },

        searEngine: 'strict',
    });

}
export default autoCompleteFunc;