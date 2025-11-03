import './Certificates.css'
import CertificateCards from './Cards/CertificateCard'
import myCertFrontEnd from '../Certificates/Computer Engineering Introduction to Front End Development.png'
import myCertCybersecurity from '../Certificates/Calvin-Kyle-Nocon–Cybersecurity–Cybersecurity–ADBI-E-Learning.jpg'
import myCertAI6g from '../Certificates/AI & 6G Technology - Pioneering the possibilities of Digital Innovation.png'
import myCertSAP from '../Certificates/Equipping students using SAP to Business world.png'


export default function Certificate() {
  return (
    <> 
      <section id='certificate-section' className="certificate-container">
        <h1>Certificate</h1>
          <div className="certificate-grid">
            <CertificateCards image={myCertFrontEnd} name="Computer Engineering Introduction to Front End Development"/>
            <CertificateCards image={myCertAI6g} name="AI & 6G Technology - Pioneering the possibilities of Digital Innovation"/>
            <CertificateCards image={myCertSAP} name="Equipping students using SAP to Business world"/>
            <CertificateCards image={myCertCybersecurity} name="Cybersecurity"/>
          </div>
      </section>
    </>
  )
}
