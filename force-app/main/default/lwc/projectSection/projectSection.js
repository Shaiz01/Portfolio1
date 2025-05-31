import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/proj';
import Description from '@salesforce/schema/Account.Description';
import Website from '@salesforce/schema/Account.Website';

export default class ProjectSection extends LightningElement {

    projectImage = Image_Url + '/proj/hero3.png';

    projectData = [
        {
            id : 1,
            name : 'Customer Portal',
            description : 'Self service portal built in salesforce experience cloud, using custom LWC',
            technology : 'LWC, Apex, Salesforce Experience Cloud',
            website : 'www.google.com',
        },
        {
            id : 2,
            name : 'Portfolio',
            description : 'Portfolio website built using LWC and Apex',
            technology : 'LWC, Apex, Salesforce Experience Cloud',
            website : 'www.google.com',
        }
    ]
}
