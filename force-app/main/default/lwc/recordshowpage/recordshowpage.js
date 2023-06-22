import { LightningElement, api, wire } from 'lwc';
import getRelatedContacts from '@salesforce/apex/recordshowapexclass.getRelatedContacts';
import getRelatedOpportuity from '@salesforce/apex/recordshowapexopportunity.getRelatedOpportuity';
import getRelatedCases from '@salesforce/apex/recordshowapexcases.getRelatedCases';
import pubsub from 'c/pubsub';
export default class Recordshowpage extends LightningElement 
{
    contacts;
    opportunities;
    cases;
    name;
    active;
    recordid = '0015g00000xVaVVAA0';
    messagefromlayout;
    @wire(getRelatedContacts,{accountId:'$recordid'}) mydata1({ error, data }) {
        if (data) {
            this.contacts = data;
        } else if (error) {
            alert(error);
        }
     }
    @wire(getRelatedOpportuity,{accountId:'$recordid'}) mydata2({ error, data }) {
        if (data) {
            this.opportunities = data;
        } else if (error) {
            console.error(error);
        }
    }
    @wire(getRelatedCases,{accountId:'$recordid'}) mydata3({ error, data }) {
        if (data) {
            this.cases = data;
        } else if (error) {
            console.error(error);
        }
    }
    contactopen(event)
    {
        this.messagefromlayout = event.currentTarget.dataset.contactId;
        //alert(event.currentTarget.dataset.contactId);
        let message = this.messagefromlayout;
        pubsub.fire('eventnotify',message);
    }
    fieldsToDisplay1 = ['Name','AccountNumber','Site'];
    fieldsToDisplay2 = ['AccountSource','Active__c','AnnualRevenue'];
    fieldsToDisplay3 = ['Industry','Phone','Rating'];
    fieldsToDisplay4 = ['Type'];
}