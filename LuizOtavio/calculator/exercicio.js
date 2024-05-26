function startCalc() {
    //returns a calc object
    return {
        display: document.querySelector('.display'),






        start() {
            this.clickBtn();
        },

        clickBtn() {
            document.addEventListener('click', function(event) {
                const element = event.target;

                if (element.classList.contains('btn-num')) {
                    this.btnStopDisplay(element.innerText);
                }
            }.bind(this));
        },

        btnStopDisplay(valor) {

        }
    }
}



const calcOne = startCalc();
calcOne.start();