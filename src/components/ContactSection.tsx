// src/components/ContactSection.tsx
import { Mail, Phone, Clock } from 'lucide-react';
import Button from "./button.jsx"; // Default import
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data to the console (optional)
    console.log('Form submitted:', formData);

    // Send the form data to Formspree
    fetch('https://formspree.io/f/xvgkgpab', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Get in Touch</h2>
          <p className="text-secondary-light text-lg">
            Have questions about our AI course? We're here to help you start your journey in AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-accent/40 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-secondary mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-secondary">Email</p>
                  <p className="text-secondary-light">neuratech.pk@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-secondary">Phone</p>
                  <p className="text-secondary-light">+92 (345) 343-2496</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-secondary">Office Hours</p>
                  <p className="text-secondary-light">Monday - Friday: 9AM - 5PM</p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary-dark text-white" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactSection;