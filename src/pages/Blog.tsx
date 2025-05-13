
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/layout/PageTransition';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedText from '@/components/shared/AnimatedText';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
    author: string;
    authorImage: string;
    readTime: string;
    slug: string;
  }
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Psychology of Color in Brand Identity',
      excerpt: 'How strategic color choices can influence perception and drive brand recognition.',
      date: 'May 15, 2023',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600',
      author: 'Alex Morgan',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100',
      readTime: '5 min read',
      slug: 'psychology-of-color',
    },
    {
      id: 2,
      title: 'Building a Social Media Strategy That Actually Converts',
      excerpt: 'Beyond vanity metrics: how to create content that drives real business results.',
      date: 'April 22, 2023',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600',
      author: 'Jamie Wilson',
      authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100',
      readTime: '8 min read',
      slug: 'social-media-strategy',
    },
    {
      id: 3,
      title: 'The Rise of Minimalist Design in Digital Spaces',
      excerpt: 'Why less is more in the age of information overload and digital fatigue.',
      date: 'March 10, 2023',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600',
      author: 'Jordan Smith',
      authorImage: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100',
      readTime: '6 min read',
      slug: 'minimalist-design',
    },
    {
      id: 4,
      title: 'Storytelling through Video: Capturing Audience Attention',
      excerpt: 'How narrative structure and visual techniques can create powerful brand stories.',
      date: 'February 28, 2023',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600',
      author: 'Taylor Reed',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100',
      readTime: '7 min read',
      slug: 'video-storytelling',
    },
    {
      id: 5,
      title: 'Sustainable Branding: More Than Just a Trend',
      excerpt: 'How to authentically integrate sustainability into your brand's identity and messaging.',
      date: 'January 15, 2023',
      category: 'strategy',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600',
      author: 'Alex Morgan',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100',
      readTime: '10 min read',
      slug: 'sustainable-branding',
    },
    {
      id: 6,
      title: 'Measuring ROI in Creative Projects',
      excerpt: 'Frameworks for quantifying the impact of design and creative work on business outcomes.',
      date: 'December 5, 2022',
      category: 'strategy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600',
      author: 'Jamie Wilson',
      authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100',
      readTime: '9 min read',
      slug: 'creative-roi',
    },
  ];
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'video', name: 'Video' },
    { id: 'strategy', name: 'Strategy' },
  ];
  
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
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
              Blog & <span className="gradient-text">Insights</span>
            </motion.h1>
            
            <AnimatedText
              text="Thoughts, ideas, and insights from our team on design, branding, marketing, and creativity."
              className="text-xl text-gray-300"
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id 
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1} variant="fade-up">
                <motion.article 
                  className="bg-white rounded-xl overflow-hidden card-hover h-full flex flex-col"
                  whileHover={{ y: -10 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </Link>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-medium text-magenta">
                        #{post.category}
                      </span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`} className="block mb-3">
                      <h3 className="text-xl font-bold hover:text-magenta transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <img 
                          src={post.authorImage} 
                          alt={post.author}
                          className="w-8 h-8 rounded-full mr-2 object-cover"
                        />
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal className="text-center mt-16">
            <button className="btn-secondary">
              Load More Articles
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join our <span className="gradient-text">newsletter</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-gray-600 mb-8">
                Get the latest insights and inspiration delivered straight to your inbox.
                We'll never spam, only share content we believe adds value.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-6 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-magenta"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
