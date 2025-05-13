
import { motion } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedText from '@/components/shared/AnimatedText';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      id: 1,
      name: 'Alex Morgan',
      title: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300',
      bio: 'Over 10 years of experience creating iconic brands.',
    },
    {
      id: 2,
      name: 'Jordan Smith',
      title: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=300',
      bio: 'Award-winning designer with a passion for typography.',
    },
    {
      id: 3,
      name: 'Taylor Reed',
      title: 'Marketing Strategist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300',
      bio: 'Data-driven marketer with a creative edge.',
    },
    {
      id: 4,
      name: 'Jamie Wilson',
      title: 'Content Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300',
      bio: 'Storyteller with a background in journalism and film.',
    },
  ];

  const values = [
    {
      id: 1,
      title: 'Creativity',
      description: 'We believe in the power of imagination and innovative thinking to solve problems.',
      icon: '✦',
    },
    {
      id: 2,
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we create and deliver.',
      icon: '♦',
    },
    {
      id: 3,
      title: 'Integrity',
      description: 'We build relationships based on trust, respect, and transparency.',
      icon: '⬙',
    },
    {
      id: 4,
      title: 'Adaptability',
      description: 'We embrace change and continuously evolve our approach to stay ahead.',
      icon: '◇',
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-gradient-to-b from-jetblack to-jetblack/90">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              We are <span className="gradient-text">Austra</span>
            </motion.h1>
            
            <AnimatedText
              text="A collective of thinkers, designers, and storytellers on a mission to create bold, memorable brand experiences."
              className="text-xl text-gray-300 mb-8"
            />
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-square max-w-lg bg-gray-100 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 to-transparent"></div>
                </div>
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(199, 21, 133, 0)",
                      "0 0 0 20px rgba(199, 21, 133, 0.3)",
                      "0 0 0 0 rgba(199, 21, 133, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-4xl font-bold gradient-text">A</span>
                </motion.div>
              </div>
            </ScrollReveal>
            
            <div>
              <ScrollReveal>
                <span className="badge">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  Born from passion,<br/>driven by <span className="gradient-text">purpose</span>
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <p className="text-gray-700 mb-6">
                  Austra Creatives was founded in 2018 with a simple yet powerful mission: to help brands cut through the noise with authenticity and creativity. We noticed that too many brands were following the same playbook, resulting in forgettable experiences that failed to connect with their audience.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <p className="text-gray-700 mb-8">
                  Starting with just a team of three, we've grown into a collective of passionate creatives who are dedicated to pushing boundaries and challenging conventions. Every project we take on is approached with fresh eyes and a commitment to creating work that makes an impact.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row gap-6">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">120+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">15</div>
                  <p className="text-gray-600">Awards Won</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              What drives our <span className="gradient-text">approach</span>
            </h2>
            <p className="text-gray-600">
              Our values aren't just words on a wall—they're the principles that guide every decision we make and every project we undertake.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.id} delay={index * 0.15} variant="scale">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl text-magenta mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              The minds behind <span className="gradient-text">Austra</span>
            </h2>
            <p className="text-gray-600">
              We're a diverse team of creative professionals united by our passion for design and storytelling.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 0.15} variant="fade-up">
                <motion.div 
                  className="bg-white rounded-xl overflow-hidden"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-jetblack/70 to-transparent flex flex-col justify-end p-6 opacity-0"
                      whileHover={{ opacity: 1 }}
                    >
                      <p className="text-white text-sm">{member.bio}</p>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-magenta text-sm">{member.title}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal className="text-center mt-12">
            <Link 
              to="/contact" 
              className="btn-primary"
            >
              Work With Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
