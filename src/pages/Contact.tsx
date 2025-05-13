
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedText from '@/components/shared/AnimatedText';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
        service: ''
      });
    }, 1500);
  };
  
  const services = [
    { value: '', label: 'Select a service' },
    { value: 'branding', label: 'Brand Identity & Logo Design' },
    { value: 'social', label: 'Social Media Content & Reels' },
    { value: 'video', label: 'Video Storytelling & Ads' },
    { value: 'web', label: 'UI/UX Web Design' },
    { value: 'marketing', label: 'Influencer & Culture Marketing' },
    { value: 'other', label: 'Other Services' }
  ];
  
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-magenta" />,
      title: 'Visit Us',
      details: [
        '123 Creative Street,',
        'Design District,',
        'New York, NY 10001'
      ]
    },
    {
      icon: <Mail size={24} className="text-magenta" />,
      title: 'Email Us',
      details: [
        'hello@austracreatives.com',
        'info@austracreatives.com'
      ]
    },
    {
      icon: <Phone size={24} className="text-magenta" />,
      title: 'Call Us',
      details: [
        '+1 (234) 567-8901',
        '+1 (234) 567-8902'
      ]
    }
  ];
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-jetblack to-jetblack/90 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Get in <span className="gradient-text">Touch</span>
            </motion.h1>
            
            <AnimatedText
              text="Have a project in mind or want to learn more about our services? We'd love to hear from you."
              className="text-xl text-gray-300"
            />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-1" variant="slide-right">
              <div className="bg-gray-50 p-8 rounded-xl h-full">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="font-bold mb-2">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <h3 className="font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['Instagram', 'Twitter', 'LinkedIn'].map((platform) => (
                      <motion.a 
                        key={platform} 
                        href="#" 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-magenta hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {platform[0]}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Contact Form */}
            <ScrollReveal className="lg:col-span-2" variant="slide-left">
              <div className="p-8 rounded-xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-magenta transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-magenta transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-magenta transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-magenta transition-colors"
                      >
                        {services.map(service => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-magenta transition-colors"
                      placeholder="Tell us about your project, timeline, and budget..."
                    />
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      className="btn-primary w-full md:w-auto"
                      disabled={formStatus === 'submitting'}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {formStatus === 'submitting' ? (
                        <span>Sending...</span>
                      ) : formStatus === 'success' ? (
                        <span>Message Sent!</span>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </motion.button>
                    
                    {formStatus === 'success' && (
                      <p className="text-green-600 mt-4">
                        Thank you! Your message has been sent. We'll get back to you soon.
                      </p>
                    )}
                    
                    {formStatus === 'error' && (
                      <p className="text-red-600 mt-4">
                        There was a problem sending your message. Please try again.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-0">
          <div className="h-96 w-full relative bg-gray-200 overflow-hidden">
            {/* Map placeholder - would be replaced with an actual map integration */}
            <div className="absolute inset-0 bg-gray-300"></div>
            
            <motion.div
              className="absolute top-8 left-8 z-10 bg-white shadow-lg rounded-xl p-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-2">Our Studio</h3>
              <p className="text-gray-600">
                123 Creative Street, Design District,<br/>
                New York, NY 10001
              </p>
              <p className="text-gray-600 mt-2">
                Monday – Friday: 9AM – 6PM<br/>
                Weekends: By appointment only
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
