import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement 
{
        value;
        selectedOption;
        sum;
        options = [
            { label: 'Odd', value: 'odd' },
            { label: 'Even', value: 'even' },
        ];
    
        handleChange(event) {
            this.value = event.target.value;
            this.calculateSum();
        }
    
        handleRadioChange(event) {
            this.selectedOption = event.target.value;
            this.calculateSum();
        }
    
        calculateSum() {
            let sum = 0;
            let start = this.selectedOption === 'odd' ? 1 : 2;
            for (let i = start; i <= this.value; i += 2) {
                sum += i;
            }
            this.sum = sum;
        }
}
