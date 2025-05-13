
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedText from '@/components/shared/AnimatedText';
import ScrollReveal from '@/components/shared/ScrollReveal';
import PageTransition from '@/components/layout/PageTransition';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const clientLogos = [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    { id: 4, name: 'Client 4' },
    { id: 5, name: 'Client 5' },
  ];

  const services = [
    {
      id: 1,
      title: 'Brand Identity',
      description: 'Creating powerful visual identities that tell your brand story.',
      icon: '✦',
    },
    {
      id: 2,
      title: 'Digital Marketing',
      description: 'Strategic promotion to connect with your audience.',
      icon: '♦',
    },
    {
      id: 3,
      title: 'Content Creation',
      description: 'Compelling content that resonates with your market.',
      icon: '◇',
    },
  ];
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-jetblack via-jetblack/95 to-magenta/30 z-0"
        />
        
        {/* Animated Shapes */}
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-magenta/20 blur-[80px] top-1/4 -left-20"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-magenta/10 blur-[100px] bottom-1/4 right-0"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div 
          className="container mx-auto px-6 relative z-10 pt-20 md:pt-0"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="badge">We Are Austra Creatives</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Where <span className="gradient-text">Creativity</span> Sparks <span className="gradient-text">Identity</span>
              </motion.h1>
              
              <AnimatedText 
                text="We help brands find their voice through design, strategy, and innovation."
                className="text-xl text-gray-200 mb-10"
              />
              
              <div className="flex flex-wrap gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to="/portfolio" className="btn-primary inline-flex items-center">
                    Explore Our Work
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <Link to="/contact" className="btn-secondary">
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="hidden lg:block relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-magenta/10 backdrop-blur-sm flex items-center justify-center">
                {/* Placeholder for creative visuals or 3D elements */}
                <div className="relative w-64 h-64">
                  <motion.div 
                    className="absolute w-40 h-40 rounded-full border-2 border-magenta/40" 
                    style={{ left: '50%', top: '50%', marginLeft: -80, marginTop: -80 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute w-60 h-60 rounded-full border-2 border-magenta/30" 
                    style={{ left: '50%', top: '50%', marginLeft: -120, marginTop: -120 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute w-20 h-20 bg-magenta rounded-full opacity-80" 
                    style={{ left: '50%', top: '50%', marginLeft: -40, marginTop: -40 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          >
            <span className="text-sm mb-2">Scroll</span>
            <motion.div 
              className="w-[1px] h-10 bg-white/50"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h3 className="text-center text-gray-500 font-medium mb-10">Trusted by amazing brands</h3>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10">
            {clientLogos.map((client, index) => (
              <ScrollReveal key={client.id} delay={index * 0.1} variant="fade-in">
                <div className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="text-2xl font-bold text-gray-400">{client.name}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About/What We Do Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <ScrollReveal className="w-full md:w-1/2" variant="slide-right">
              <div className="aspect-video rounded-2xl overflow-hidden bg-jetblack relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-white">A</div>
                </div>
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-magenta/40 to-transparent"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </ScrollReveal>
            
            <div className="w-full md:w-1/2">
              <ScrollReveal delay={0.2}>
                <span className="badge">About Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  We create <span className="gradient-text">unforgettable</span> brand experiences
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <p className="text-gray-600 mb-8">
                  Austra Creatives is a full-service creative agency that specializes in helping brands 
                  tell their stories through compelling design and strategic thinking. We're passionate
                  about creating work that captivates, connects, and converts.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Strategic Thinking', 'Creative Design', 'Digital Excellence', 'Cultural Impact'].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-magenta mr-3"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.6}>
                <Link to="/about" className="mt-8 inline-flex items-center text-magenta font-medium group">
                  Learn more about us
                  <motion.span 
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              What We Can Do For You
            </h2>
            <p className="text-gray-600">
              We offer comprehensive creative solutions tailored to your brand's needs,
              helping you stand out in today's competitive landscape.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.2} variant="scale">
                <div className="border border-gray-100 hover:border-magenta/30 p-8 rounded-xl card-hover bg-white">
                  <div className="text-4xl mb-4 text-magenta">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="text-magenta font-medium inline-flex items-center"
                  >
                    Learn more 
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal className="text-center mt-12">
            <Link 
              to="/services" 
              className="btn-primary"
            >
              View All Services
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-jetblack z-0"></div>
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-magenta/30 blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">elevate</span> your brand?
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-gray-300 mb-8">
                Let's create something amazing together. We're just a click away.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <Link 
                to="/contact" 
                className="btn-primary text-lg px-10"
              >
                Get in Touch
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
