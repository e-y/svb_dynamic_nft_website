import ReactContactForm from 'react-mail-form';
import SectionTop from '../components/section-top'

const ContactForm = () => {
    return (
        <section className="section contact-form" id="contact">
            <SectionTop title='Contact Us' subtitle="Get in touch" badge={true} badge_icon='icon-mail4' />
            <ReactContactForm 
                to="sander.denny@gmx.de" 
                className="contact-form__element" 
                titleMaxLength="30"
                titlePlaceholde="Title"
                contentsRows="8"
                contentsMaxLength="1000"
                contentsPlaceholder="Get in touch."
                buttonText="Submit your Message"
            />
        </section>
    )
}

export default ContactForm
