import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
export default class InputPage extends LightningElement 
{
    name;
    number;
    sit;
    source;
    active;
    revenue;
    ind;
    pho;
    rat;
    type;
    nm(event)
    {
        this.name = event.target.value;
    }
    num(event)
    {
        this.number = event.target.value;
    }
    site(event)
    {
        this.sit = event.target.value;
    }
    accsor(event)
    {
        this.source = event.target.value;
    }
    act(event)
    {
        this.active = event.target.value;
    }
    annrev(event)
    {
        this.revenue = event.target.value;
    }
    industry(event)
    {
        this.ind = event.target.value;
    }
    phone(event)
    {
        this.pho = event.target.value;
    }
    rating(event)
    {
        this.rat = event.target.value;
    }
    typ(event)
    {
        this.type = event.target.value;
    }
    save(event)
    {
        const fields = {'Name':this.name,'AccountNumber': this.number,'Site':this.sit,'AccountSource':this.source,'Active__c':this.active,'AnnualRevenue':this.revenue,'Industry':this.ind,'Phone':this.pho,'Rating':this.rat,'Type':this.type};
        const recordData = {apiName:'Account',fields};
     createRecord(recordData).then(response=>{alert("ACCOUNT CREATED")}).catch(error=>{alert("Account creation failed with the following error"+error)});

    }
    
}