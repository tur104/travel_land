// import autoCompleteFunc from "./modules/autoComplete";

// autoCompleteFunc();

import { easepick, TimePlugin} from '@easepick/bundle';
const picker = new easepick.create({
    element: "#datePicker",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
    ],
    format: "HH:mm, DD/MM/YY",
    plugins: [TimePlugin],
})


// import mobileNav from './modules/mobile-nav.js';
// mobileNav();