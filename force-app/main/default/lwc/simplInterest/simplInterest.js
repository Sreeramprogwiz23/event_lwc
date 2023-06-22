import { LightningElement } from 'lwc';

export default class SimplInterest extends LightningElement 
{
    principle=0;
    rate=0;
    time=0;
    si=0;
    p(event)
    {
        this.principle = event.target.value;
    }
    r(event)
    {
        this.rate = event.target.value;
    }
    t(event)
    {
        this.time = event.target.value;
    }
    cal(event)
    {
        this.si = (this.principle*this.rate*this.time)/100;
    }
};