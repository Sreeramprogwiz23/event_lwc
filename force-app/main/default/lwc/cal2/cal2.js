import { LightningElement } from 'lwc';

export default class Cal2 extends LightningElement 
{
    number;
    sum;
    num1(event)
    {
        this.number = event.target.value;
        this.addition();
    }
    addition()
    {
        let count = 0;
        for(let i = 0;i<=this.number;i += 2)
        {
            count += i;
        }
        this.sum = count;
    }
}