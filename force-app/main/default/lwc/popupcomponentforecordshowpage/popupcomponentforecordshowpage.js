import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
import { getRecord } from 'lightning/uiRecordApi';
export default class Popupcomponentforecordshowpage extends LightningElement{
    message;
    fields = ['AccountId','FirstName','LastName','MobilePhone']
    connectedCallback()
    {
        this.register();
    };
    register()
    {
        pubsub.register('eventnotify',this.handleEvent.bind(this));
    };
    handleEvent(messagefromevt)
    {
        this.message = messagefromevt ;
        // ? JSON.stringify(messagefromevt,null,'/t'): 'no message payload' ;
    };
    // connectedCallback() {
    //     // Generate a URL to a User record page
    //     this[NavigationMixin.GenerateUrl]({
    //         type: 'standard__recordPage',
    //         attributes: {
    //             recordId: this.message,
    //             actionName: 'view',
    //         },
    //     }).then((url) => {
    //         this.recordPageUrl = url;
    //     });
    // }
}
