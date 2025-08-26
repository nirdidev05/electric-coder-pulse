import React, { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactMethod {
  id: string;
  label: string;
  value: string;
  icon: string;
  link: string;
  description: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactMethods: ContactMethod[] = [
    {
      id: 'email',
      label: 'Email',
      value: 'nirdidev05@gmail.com',
      icon: '📧',
      link: 'mailto:nirdidev05@gmail.com',
      description: 'For research collaboration and professional inquiries'
    },
    {
      id: 'github',
      label: 'GitHub',
      value: '@nirdidev05',
      icon: '💻',
      link: 'https://github.com/nirdidev05',
      description: 'Open source projects and research implementations'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'nirdidev05',
      icon: '💼',
      link: 'https://linkedin.com/in/nirdidev05',
      description: 'Professional network and career updates'
    },
    {
      id: 'twitter',
      label: 'Twitter',
      value: '@nirdidev05',
      icon: '🐦',
      link: 'https://twitter.com/nirdidev05',
      description: 'AI research discussions and latest updates'
    },
    {
      id: 'scholar',
      label: 'Google Scholar',
      value: 'Research Profile',
      icon: '🎓',
      link: 'https://scholar.google.com/citations?user=nirdidev05',
      description: 'Academic publications and citations'
    },
    {
      id: 'orcid',
      label: 'ORCID',
      value: '0000-0000-0000-0000',
      icon: '🔬',
      link: 'https://orcid.org/0000-0000-0000-0000',
      description: 'Research identity and scholarly contributions'
    }
  ];

  const researchInterests = [
    'Neural Architecture Design',
    'Memory-Augmented Models',
    'Neuro-Symbolic AI',
    'Out-of-Distribution Generalization',
    'Transformer Architectures',
    'Code Understanding & Generation',
    'Distributed Training Systems',
    'Mechanistic Interpretability'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Let's Collaborate
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interested in collaborating on cutting-edge AI research? 
              Let's discuss breakthrough opportunities in neural-symbolic systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              {/* Research Interests */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-6">Research Interests</h3>
                <div className="grid grid-cols-2 gap-3">
                  {researchInterests.map((interest, index) => (
                    <div
                      key={interest}
                      className="flex items-center gap-2 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
                      <span className="text-sm text-muted-foreground">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
                {contactMethods.map((method, index) => (
                  <a
                    key={method.id}
                    href={method.link}
                    target={method.id !== 'email' ? '_blank' : undefined}
                    rel={method.id !== 'email' ? 'noopener noreferrer' : undefined}
                    className="glass-card p-4 rounded-xl hover-lift flex items-center gap-4 group transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl">{method.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {method.label}
                      </h4>
                      <p className="text-sm text-primary font-technical">{method.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                    </div>
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      →
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <h4 className="font-semibold text-foreground">Currently Available</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Open to research collaborations, consulting opportunities, and academic partnerships.
                </p>
                <div className="text-xs text-muted-foreground">
                  <p>📅 Response time: Usually within 24-48 hours</p>
                  <p>🌍 Location: Remote (UTC timezone)</p>
                  <p>💼 Status: Available for new projects</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted/10 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted/10 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/10 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Research Collaboration / Job Opportunity / etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-muted/10 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell me about your project, research idea, or collaboration opportunity..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-muted text-muted-foreground cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-green-600 text-white'
                      : submitStatus === 'error'
                      ? 'bg-red-600 text-white'
                      : 'btn-primary'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </div>
                  ) : submitStatus === 'success' ? (
                    <div className="flex items-center justify-center gap-2">
                      ✅ Message Sent Successfully!
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="flex items-center justify-center gap-2">
                      ❌ Failed to Send Message
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span>Send Message</span>
                      <span>→</span>
                    </div>
                  )}
                </button>

                {/* Form Status Messages */}
                {submitStatus === 'success' && (
                  <div className="text-center text-sm text-green-400">
                    Thank you for reaching out! I'll get back to you within 24-48 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-center text-sm text-red-400">
                    Sorry, there was an error sending your message. Please try again or contact me directly via email.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Push the Boundaries of AI?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're interested in collaborative research, need expertise in neural-symbolic systems, 
              or want to discuss the future of AI architecture design, I'm here to help turn ambitious ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:nirdidev05@gmail.com" className="btn-primary">
                Start a Conversation
              </a>
              <a href="https://github.com/nirdidev05" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Explore My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;