import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/proj';
export default class CertificationSection extends LightningElement {

    certData = [
        {
            id : 1,
            name : 'Salesforce Administrator',
            image : Image_Url + '/proj/Administrator.png',
            date : '2023-01-01',
            certId : '1234'
        },
        {
            id : 2,
            name : 'Platform App Builder',
            image : Image_Url + '/proj/Administrator.png',
            date : '2023-02-01',
            certId : '1235'
        },
        {
            id : 3,
            name : 'Platform Developer I',
            image : Image_Url + '/proj/Administrator.png',
            date : '2023-03-01',
            certId : '1236'
        },
        {
            id : 4,
            name : 'JavaScript Developer I',
            image : Image_Url + '/proj/Administrator.png',
            date : '2023-04-01',
            certId : '1237'
        }
    ];
}