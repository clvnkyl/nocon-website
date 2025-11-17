import { useState } from "react";
import './ContactForm.css'
import './../../index.css'

function ContactForm() {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    // TODO: connect this to your backend or email service (like EmailJS)
    console.log("Form submitted:", formData);

    setStatus("Message sent successfully!");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });

    // Clear status after 3s
    setTimeout(() => setStatus(""), 3000);
  };

return (
    <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send me a Message</h2>

        <div className="contact-grid">
            {/* First Name */}
            <div className="field-first-name">
                <label>
                First Name<span>*</span>
                </label>
                <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />
            </div>

            {/* Last Name */}
            <div className="field-last-name">
                <label>
                Last Name<span>*</span>
                </label>
                <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />
            </div>

            {/* Email */}
            <div className="field-email">
                <label>
                Email<span>*</span>
                </label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>

            {/* Phone */}
            <div className="field-phone">
                <label>Phone (Optional)</label>
                <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                />
            </div>

            {/* Message */}
            <div className="field-message">
                <label>
                Message<span>*</span>
                </label>
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                />
            </div>
        </div>

        {/* Submit */}
        <button className="submit-btn" type="submit">Send Message</button>

        {/* Status */}
        {status && <p>{status}</p>}
    </form>
);

}
export default ContactForm
