import { SocialIcon } from 'react-social-icons';
import './Contacts.css'

function Contacts() {
    return (
        <>
            <section id="contacts-section" className="contacts-section" >
                <h2 className='contacts-title'>Contact me</h2>
                <div className='contacts-grid'>
                    <SocialIcon url="www.linkedin.com/in/clvnkylncn" />
                    <SocialIcon url="https://github.com/clvnkyl" />
                    <SocialIcon url="https://facebook.com/clvnkyl" />
                    <SocialIcon url="mailto:cknocon@gmail.com" />
                </div>
            </section>
        </>
    )

}

export default Contacts