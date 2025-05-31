import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/proj';
export default class FooterSection extends LightningElement {

    youtubeLogo = Image_Url + '/proj/yt.png';
    instaLogo = Image_Url + '/proj/insta.jpeg';
    linkedinLogo = Image_Url + '/proj/linkedin.png';
    logo = Image_Url + '/proj/logo-salesforce.svg';
}