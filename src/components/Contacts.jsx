import { SocialIcon } from 'react-social-icons';
import './Contacts.css'
import ContactForm from './Cards/ContactForm';

function Contacts() {
    return (
        <>
            <section id="contacts-section" className="contacts-section" >
                <div className='contacts-container'>
                    <h2 className='contacts-title'>Contact me</h2>
                    <div className='contacts-grid'>
                        <SocialIcon url="https://linkedin.com/in/clvnkylncn" />
                        <SocialIcon url="https://github.com/clvnkyl" />
                        <SocialIcon url="https://facebook.com/clvnkyl" />
                        <SocialIcon
                            url="https://mail.google.com/mail/?view=cm&fs=1&to=cknocon@gmail.com"
                            network="email"
                            bgColor="#D44638"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    </div>
                </div>
            </section>
        </>
    )

}

export default Contacts