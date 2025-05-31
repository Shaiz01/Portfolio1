import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/proj';
import {NavigationMixin} from 'lightning/navigation';
export default class QuickLinks extends NavigationMixin(LightningElement) {

    data = [
        {
            id: 1,
            image: Image_Url + '/proj/quick1.png',
            text: 'Project',
        },
        {
            id: 2,
            image: Image_Url + '/proj/quick2.jpeg',
            text: 'Skills',
        },
        {
            id: 3,
            image: Image_Url + '/proj/quick3.jpg',
            text: 'Certifications',
        },
    ];

    handleClick(event) {

        let selectedCard = event.currentTarget.dataset.id;
        console.log('Selected Card ID:' +JSON.stringify(selectedCard));

        if(selectedCard == 1){
            this.navigationToPages('project__c');
        }
        else if(selectedCard == 2){
            this.navigationToPages('skill__c');
        }
        else{
            this.navigationToPages('certification__c');
        }
    } 

    navigationToPages(pageApiName){
        console.log('pageApiName:'+JSON.stringify(pageApiName));

        this[NavigationMixin.Navigate]({
            type:'comm__namedPage',
            attributes:{
                name:pageApiName
            }
        })
    }
}
