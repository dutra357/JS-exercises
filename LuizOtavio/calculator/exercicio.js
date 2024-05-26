//FABRIC Model
function startCalc() {
    //returns a calc object
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        start() {
            this.clickBtn();
            this.enterKey();
        },

        clickBtn() {
            document.addEventListener('click', function(event) {
                const element = event.target;

                if (element.classList.contains('btn-num')) {
                    this.btnStopDisplay(element.innerText);
                }
                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('btn-del')) {
                    this.delOne();
                }

                if (element.classList.contains('btn-eq')) {
                    this.makeCalc();
                }
                
            }.bind(this));
        },

        makeCalc() {
            let problem = this.display.value;

            try {
                problem = eval(problem);

                if (!problem) {
                    alert('Invalid value!')
                    return;
                }
                this.display.value = String(problem);

            } catch (e) {
                alert('Invalid value!');
                return;
            }
        },

        enterKey() {
            this.display.addEventListener('keyup', (key) => {
                if (key.keyCode === 13) {
                    this.makeCalc();
                }
            })
        },

        btnStopDisplay(value) {
            this.display.value += value;
        },

        clearDisplay() {
            this.display.value = "";
        },

        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
    }
}



const calcOne = startCalc();
calcOne.start();