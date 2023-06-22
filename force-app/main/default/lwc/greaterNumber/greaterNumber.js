import { LightningElement } from 'lwc';

export default class GreaterNumber extends LightningElement 
{
    numb1;
    numb2;
    numb3;
    num1(event)
    {
        this.numb1 = event.target.value;
    }
    num2(event)
    {
        this.numb2 = event.target.value;
    }
    num3(event)
    {
        this.numb3 = event.target.value;
    }
    sub(event)
    {
        if(parseInt(this.numb1) > parseInt(this.numb2) && parseInt(this.numb1) > parseInt(this.numb3))
        {
            alert(this.numb1 + 'is the greater number');
        } 
        else if (parseInt(this.numb2) > parseInt(this.numb1) && parseInt(this.numb2) > parseInt(this.numb3))
        {
            alert(this.numb2 + 'is the greater number');
        }
        else
        {
            alert(this.numb3 + 'is the greater number');
        } 
    }
}