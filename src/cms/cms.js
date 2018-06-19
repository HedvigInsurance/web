import CMS from 'netlify-cms';
import AboutPagePreview from './preview-templates/about-page-preview';
import ContactPagePreview from './preview-templates/contact-page-preview';
import LandingPagePreview from './preview-templates/landing-page-preview';
import GivingBackPagePreview from './preview-templates/giving-back-preview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about-us', AboutPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
CMS.registerPreviewTemplate('landing', LandingPagePreview);
CMS.registerPreviewTemplate('giving-back', GivingBackPagePreview);
