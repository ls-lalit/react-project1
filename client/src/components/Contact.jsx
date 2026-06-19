import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });
    // console.log(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://vedenduitsolutions1.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json();
      console.log(data);
      if (data.success) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
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
        <p>Use this static form as a friendly call-to-action.
          For GitHub Pages, connect it later to Formspree,
          Google Forms, or your own backend when you want
          real submissions.</p>
      </div>

      <form className="contact-card" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button className="btn primary" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;