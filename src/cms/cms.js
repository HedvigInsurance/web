import CMS from 'netlify-cms';
import AboutPagePreview from './preview-templates/about-page-preview';
import ContactPagePreview from './preview-templates/contact-page-preview';
import LandingPagePreview from './preview-templates/landing-page-preview';
import GivingBackPagePreview from './preview-templates/giving-back-page-preview';
import DownloadPagePreview from './preview-templates/download-page-preview';
import StudentPagePreview from './preview-templates/student-page-preview';
import FAQPagePreview from './preview-templates/faq-page-preview';
import PrivacyPagePreview from './preview-templates/privacy-page-preview';
import LegalPagePreview from './preview-templates/legal-page-preview';
import TermsPagePreview from './preview-templates/terms-page-preview';
import HeaderPreview from './preview-templates/header-preview';
import FooterPreview from './preview-templates/footer-preview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about-us', AboutPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
CMS.registerPreviewTemplate('landing', LandingPagePreview);
CMS.registerPreviewTemplate('giving-back', GivingBackPagePreview);
CMS.registerPreviewTemplate('download', DownloadPagePreview);
CMS.registerPreviewTemplate('student', StudentPagePreview);
CMS.registerPreviewTemplate('faq', FAQPagePreview);
CMS.registerPreviewTemplate('privacy', PrivacyPagePreview);
CMS.registerPreviewTemplate('legal', LegalPagePreview);
CMS.registerPreviewTemplate('terms', TermsPagePreview);
CMS.registerPreviewTemplate('header', HeaderPreview);
CMS.registerPreviewTemplate('footer', FooterPreview);
