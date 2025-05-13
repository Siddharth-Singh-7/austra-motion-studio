
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-jetblack text-white pt-20 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="text-2xl font-bold text-white mb-6 inline-block">
              AUSTRA CREATIVES<span className="text-magenta">.</span>
            </Link>
            <p className="text-gray-300 mb-6">
              We help brands find their voice through design, strategy, and innovation.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#C71585" }}
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#C71585" }}
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#C71585" }}
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-magenta"></span>
            </h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-magenta transition-colors hover:pl-1 duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 relative">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-magenta"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'Brand Identity', 
                'Social Media Content', 
                'Video Storytelling',
                'UI/UX Design',
                'Marketing'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services" 
                    className="text-gray-400 hover:text-magenta transition-colors hover:pl-1 duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-magenta"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-magenta mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Creative Street, Design District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-magenta mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-magenta transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-magenta mr-3 flex-shrink-0" />
                <a href="mailto:hello@austracreatives.com" className="text-gray-400 hover:text-magenta transition-colors">
                  hello@austracreatives.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Austra Creatives. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-magenta transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-magenta transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
