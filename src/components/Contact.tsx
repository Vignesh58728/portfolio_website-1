import React, { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Dribbble, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    subject: '',
    message: ''
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const text = `*Name:* ${formData.name}%0a*Email:* ${formData.email}%0a*Location:* ${formData.location}%0a*Budget:* ${formData.budget}%0a*Subject:* ${formData.subject}%0a*Message:* ${formData.message}`;

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/919360826971?text=${text}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">

          {/* Left Info */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
              <p className="text-neutral-400 text-lg leading-relaxed font-sans">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to drop a message.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-neutral-900 text-white group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-sans uppercase tracking-wider mb-1">Address</p>
                  <p className="text-white font-medium font-sans">Peravurnani, Thanjavur, Tamilnadu, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-neutral-900 text-white group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-sans uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:saivigneshas@arcpairstudio.com" className="text-white font-medium font-sans hover:text-primary transition-colors">
                    saivigneshas@arcpairstudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-neutral-900 text-white group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-sans uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white font-medium font-sans">9360826971 / 8106009864</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              {[Facebook, Dribbble, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="p-3 rounded-full bg-neutral-900 text-white hover:bg-white hover:text-black transition-all duration-300 border border-neutral-800"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-2/3 bg-neutral-900/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-neutral-400 text-sm font-medium uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-neutral-700 hover:border-neutral-700"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-neutral-400 text-sm font-medium uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-neutral-700 hover:border-neutral-700"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-neutral-400 text-sm font-medium uppercase tracking-wide">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-neutral-700 hover:border-neutral-700"
                  placeholder="Where are you based?"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-neutral-400 text-sm font-medium uppercase tracking-wide">Budget</label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-neutral-700 hover:border-neutral-700"
                    placeholder="Project Budget"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-neutral-400 text-sm font-medium uppercase tracking-wide">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-neutral-700 hover:border-neutral-700"
                    placeholder="What's this about?"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-neutral-400 text-sm font-medium uppercase tracking-wide">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-neutral-700 hover:border-neutral-700 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <div className="flex flex-col items-start pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-3 transition-all duration-300 bg-[#25D366] text-white hover:bg-[#20bd5a] hover:shadow-[0_0_20px_-5px_#25D366]"
                >
                  Chat on WhatsApp <MessageCircle size={20} />
                </button>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
