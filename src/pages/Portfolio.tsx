
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedText from '@/components/shared/AnimatedText';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);
  
  interface Project {
    id: number;
    title: string;
    client: string;
    category: string;
    thumbnail: string;
    tags: string[];
    description: string;
  }
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Lunar Rebrand',
      client: 'Lunar Tech',
      category: 'branding',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=500',
      tags: ['Brand Identity', 'Logo Design', 'Guidelines'],
      description: 'A complete rebrand for Lunar Tech, a fintech startup looking to position itself as a leader in the digital payment space.'
    },
    {
      id: 2,
      title: 'Bloom Social Campaign',
      client: 'Bloom Cosmetics',
      category: 'social',
      thumbnail: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?auto=format&fit=crop&q=80&w=500',
      tags: ['Social Media', 'Content Creation', 'Strategy'],
      description: "A targeted social media campaign that increased Bloom's engagement rate by 40% and led to a 25% increase in direct sales from social channels."
    },
    {
      id: 3,
      title: 'Meridian Website',
      client: 'Meridian Hotels',
      category: 'digital',
      thumbnail: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&q=80&w=500',
      tags: ['Web Design', 'UX/UI', 'Development'],
      description: 'A luxury hotel chain website redesign focused on creating an immersive booking experience that increased conversion rates by 35%.'
    },
    {
      id: 4,
      title: 'Everest Video Series',
      client: 'Everest Outdoor',
      category: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=500',
      tags: ['Video Production', 'Storytelling', 'Campaign'],
      description: "A series of adventure documentaries that showcased Everest's products in real-world expeditions, building brand authenticity and consumer trust."
    },
    {
      id: 5,
      title: 'Pulse Annual Report',
      client: 'Pulse Healthcare',
      category: 'print',
      thumbnail: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=500',
      tags: ['Print Design', 'Data Visualization', 'Layout'],
      description: 'A visually compelling annual report that transformed complex healthcare data into accessible visual stories for stakeholders.'
    },
    {
      id: 6,
      title: 'Neon Launch Campaign',
      client: 'Neon Footwear',
      category: 'branding',
      thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500',
      tags: ['Product Launch', 'Brand Identity', 'Campaign'],
      description: "A comprehensive launch campaign for Neon's revolutionary running shoe, including brand identity, packaging, and go-to-market strategy."
    },
  ];
  
  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'branding', label: 'Branding' },
    { id: 'social', label: 'Social' },
    { id: 'digital', label: 'Digital' },
    { id: 'video', label: 'Video' },
    { id: 'print', label: 'Print' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
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
              Our <span className="gradient-text">Portfolio</span>
            </motion.h1>
            
            <AnimatedText
              text="Explore our collection of work across various industries and disciplines, showcasing our creative approach and strategic thinking."
              className="text-xl text-gray-300"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {filters.map(filter => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.id 
                      ? 'bg-magenta text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ScrollReveal
                  key={project.id}
                  delay={index * 0.1}
                  variant="scale"
                >
                  <motion.div 
                    className="group bg-white rounded-xl overflow-hidden cursor-pointer card-hover"
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg group-hover:text-magenta transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">
                        {project.client}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 30 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="aspect-video w-full">
                <img 
                  src={selectedProject.thumbnail} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <p className="text-magenta">{selectedProject.client}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-black"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">About the Project</h3>
                  <p className="text-gray-700">{selectedProject.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Services Provided</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6 mt-6">
                  <button 
                    className="btn-primary"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Portfolio;
