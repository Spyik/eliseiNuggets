let syrnykyarea = document.querySelectorAll(".syrnyky-area")

for (let i = 0; i < syrnykyarea.length; i++) {
    syrnykyarea[i].onclick = function () {
        console.log
        // let syrnyky = syrnykyarea[i].firstElementChild
        let syrnykyhidden = syrnykyarea[i].lastElementChild
        syrnykyhidden.classList.toggle("hidden")

        //

        for (let k = 0; k < syrnykyarea.length; k++) {
            if (syrnykyarea[i] !== syrnykyarea[k]) {
                syrnykyarea[k].lastElementChild.classList.add("hidden")
            }
        }
    }



}