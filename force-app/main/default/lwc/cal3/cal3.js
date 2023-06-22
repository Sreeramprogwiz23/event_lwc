import { LightningElement } from 'lwc';

export default class Cal3 extends LightningElement 
{
    opt= [
        {label:'Odd',value:'odd'},
        {label:'Even',value:'even'}
    ];
    selectedoptionvalue;
    num;
    add;
    sum(event)
    {
        this.num = event.target.value;
        this.addition();
    }
    option(event)
    {
        this.selectedoptionvalue = event.target.value;
        this.addition();
    }
    addition()
    {
        let answer = 0;
        let start = this.selectedoptionvalue === 'odd' ? 1 : 2;
        for (let i = start ;i <= this.num;i += 2)
        {
            answer += i;
        }
        this.add = answer;    
    }
}