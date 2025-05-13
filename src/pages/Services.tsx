
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/layout/PageTransition';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedText from '@/components/shared/AnimatedText';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const services = [
    {
      id: 1,
      title: 'Brand Identity & Logo Design',
      description: 'We craft distinctive visual identities that convey your brand's personality and values at a glance.',
      category: 'branding',
      icon: '✦',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
    },
    {
      id: 2,
      title: 'Social Media Content & Reels',
      description: 'Engaging social content that builds community and drives meaningful engagement with your audience.',
      category: 'content',
      icon: '♦',
      features: ['Content Strategy', 'Social Media Management', 'Video Production', 'Performance Analytics'],
    },
    {
      id: 3,
      title: 'Video Storytelling & Ads',
      description: 'Compelling video content that captures attention and communicates your message effectively.',
      category: 'video',
      icon: '⬙',
      features: ['Commercial Production', 'Brand Films', 'Motion Graphics', 'Social Media Ads'],
    },
    {
      id: 4,
      title: 'UI/UX Web Design',
      description: 'Intuitive, beautiful digital experiences that delight users and drive conversion.',
      category: 'digital',
      icon: '◇',
      features: ['Website Design', 'User Interface Design', 'User Experience Strategy', 'Prototyping'],
    },
    {
      id: 5,
      title: 'Influencer & Culture Marketing',
      description: 'Strategic partnerships that connect your brand with authentic voices in your industry.',
      category: 'marketing',
      icon: '◈',
      features: ['Influencer Strategy', 'Partnership Management', 'Campaign Development', 'Performance Tracking'],
    },
    {
      id: 6,
      title: 'Creative Direction',
      description: 'Cohesive creative vision across all brand touchpoints to ensure consistency and impact.',
      category: 'branding',
      icon: '◉',
      features: ['Art Direction', 'Campaign Development', 'Brand Evolution', 'Creative Strategy'],
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);
  
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'branding', name: 'Branding' },
    { id: 'content', name: 'Content' },
    { id: 'video', name: 'Video' },
    { id: 'digital', name: 'Digital' },
    { id: 'marketing', name: 'Marketing' },
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
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            
            <AnimatedText
              text="We offer a comprehensive suite of creative services designed to help your brand stand out in today's competitive landscape."
              className="text-xl text-gray-300"
            />
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === category.id 
                      ? 'bg-magenta text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: index * 0.1 } 
                  }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-gray-100 rounded-xl overflow-hidden"
                >
                  <div className="p-8">
                    <div className="text-4xl text-magenta mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-magenta transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">WHAT WE OFFER:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-magenta mr-2"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      to="/contact?service=${service.title}" 
                      className="text-magenta font-medium hover:text-magenta-dark transition-colors"
                    >
                      Inquire About This Service →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              How we <span className="gradient-text">work</span>
            </h2>
            <p className="text-gray-600">
              Our approach combines strategic thinking with creative execution, ensuring that every project delivers measurable results.
            </p>
          </ScrollReveal>
          
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0 relative">
              {[
                {
                  step: 1,
                  title: 'Discovery',
                  description: 'We dive deep into your brand, audience, and objectives to build a foundation for success.'
                },
                {
                  step: 2,
                  title: 'Strategy',
                  description: 'We develop a tailored approach to meet your goals, informed by research and experience.'
                },
                {
                  step: 3,
                  title: 'Creation',
                  description: 'Our team of specialists brings the strategy to life with compelling creative executions.'
                },
                {
                  step: 4,
                  title: 'Implementation',
                  description: 'We execute the plan across selected channels to reach and engage your audience.'
                },
                {
                  step: 5,
                  title: 'Analysis',
                  description: 'We measure results against KPIs and optimize based on performance data.'
                }
              ].map((item, index) => (
                <div 
                  key={item.step} 
                  className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} relative`}
                >
                  <ScrollReveal 
                    className="md:w-1/2 md:pr-12 md:text-right"
                    variant={index % 2 === 0 ? 'slide-right' : 'slide-left'}
                  >
                    <div className={`mb-6 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="badge inline-block mb-2">Step {item.step}</span>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </ScrollReveal>
                  
                  {/* Circle marker */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-10">
                    <motion.div 
                      className="w-12 h-12 bg-magenta rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", bounce: 0.6 }}
                    >
                      {item.step}
                    </motion.div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-jetblack text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to bring your <span className="gradient-text">vision</span> to life?
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-gray-300 mb-10">
                Let's create something extraordinary together. Reach out to discuss your project and how we can help your brand stand out.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <Link 
                to="/contact" 
                className="btn-primary inline-block text-lg px-10 py-4"
              >
                Get Started
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
