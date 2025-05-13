
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto flex justify-between items-center py-5 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RouterLink to="/" className="text-2xl font-bold gradient-text">
            AUSTRA
          </RouterLink>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              variants={linkVariants}
            >
              <RouterLink
                to={link.path}
                className="font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-magenta group-hover:w-full transition-all duration-300"></span>
              </RouterLink>
            </motion.div>
          ))}
          <motion.div
            variants={linkVariants}
            custom={navLinks.length}
          >
            <RouterLink
              to="/contact"
              className="btn-primary"
            >
              Start a Project
            </RouterLink>
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-jetblack p-2 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        transition={{ damping: 20, stiffness: 300 }}
        className="md:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-md z-40"
      >
        <nav className="flex flex-col h-full p-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <RouterLink
                to={link.path}
                className="py-4 text-xl font-medium border-b border-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </RouterLink>
            </motion.div>
          ))}
          <div className="mt-6">
            <RouterLink 
              to="/contact" 
              className="btn-primary w-full text-center block"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </RouterLink>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
