import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [notRobot, setNotRobot] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!notRobot) {
      alert("Please confirm you're not a robot.");
      return;
    }

    try {
      const res = await fetch(
        "https://vedenduitsolutions1.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Combine first/last name into "name" so the existing backend
          // (which expects { name, email, message }) keeps working
          // unchanged. Phone is included as an extra field in case you
          // want to log/read it later.
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        }
      );

      const data = await res.json();
      if (data.success) {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setNotRobot(false);
      } else {
        alert("Message failed: " + data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Message failed. Please try again later.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div>
        <div className="eyebrow">START THE CONVERSATION</div>
        <h2>Have a platform, process, or integration challenge?</h2>
        <p>
          Tell us a bit about what you're working on and our team will get
          back to you shortly.
        </p>
      </div>

      <form className="contact-card" onSubmit={handleSubmit}>
        <div className="contact-row">
          <div className="contact-field">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-field">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="contact-row">
          <div className="contact-field">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-field">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="contact-field">
          <label>Message *</label>
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={3}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <label className="contact-captcha">
          <input
            type="checkbox"
            checked={notRobot}
            onChange={(e) => setNotRobot(e.target.checked)}
          />
          <span>I'm not a robot</span>
        </label>

        <button className="btn primary" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
