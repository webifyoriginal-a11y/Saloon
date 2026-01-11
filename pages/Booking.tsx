import React, { useState } from 'react';
import Button from '../components/Button';
import { BookingFormData } from '../types';
import { submitBooking } from '../services/bookingService';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Signature Cut & Blowdry',
    date: '',
    time: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await submitBooking(formData);
    setStatus('success');
    // Reset after showing success
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', phone: '', service: 'Signature Cut & Blowdry', date: '', time: '' });
    }, 5000);
  };

  if (status === 'success') {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center glass-card p-12 rounded-2xl fade-in shadow-[0_0_50px_rgba(231,200,160,0.1)]">
          <div className="w-20 h-20 bg-[#e7c8a0]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#e7c8a0] animate-pulse">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Request Sent</h2>
          <p className="text-stone-300 mb-8 font-light">
            Thank you, {formData.name}. We have received your booking request for {formData.date} at {formData.time}. We will confirm via email shortly.
          </p>
          <Button onClick={() => setStatus('idle')} variant="outline">Book Another</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 glass-card rounded-3xl overflow-hidden shadow-2xl fade-in ring-1 ring-white/10">
        
        {/* Info Side */}
        <div className="bg-stone-900/60 p-10 md:p-16 flex flex-col justify-center border-r border-white/5 backdrop-blur-xl">
          <h3 className="text-[#e7c8a0] uppercase tracking-widest text-sm mb-4">Reservations</h3>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">Secure Your Moment</h1>
          <p className="text-stone-300 leading-relaxed mb-10 font-light">
            Please fill out the details to request your appointment. Our concierge team will review your request and confirm availability instantly.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-stone-300">
              <span className="w-10 h-10 rounded-full bg-[#e7c8a0]/10 flex items-center justify-center text-[#e7c8a0]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              <span className="text-lg font-light">+971 4 123 4567</span>
            </div>
            <div className="flex items-center space-x-4 text-stone-300">
              <span className="w-10 h-10 rounded-full bg-[#e7c8a0]/10 flex items-center justify-center text-[#e7c8a0]">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              <span className="text-lg font-light">concierge@lumieresalon.ae</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-10 md:p-16 bg-white/[0.02] backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Name</label>
                <input 
                  required 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#e7c8a0] focus:ring-1 focus:ring-[#e7c8a0] outline-none transition-all placeholder-stone-600"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Phone</label>
                <input 
                  required 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#e7c8a0] focus:ring-1 focus:ring-[#e7c8a0] outline-none transition-all placeholder-stone-600"
                  placeholder="+971 ..."
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Email</label>
              <input 
                required 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#e7c8a0] focus:ring-1 focus:ring-[#e7c8a0] outline-none transition-all placeholder-stone-600"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Service</label>
              <div className="relative">
                <select 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#e7c8a0] focus:ring-1 focus:ring-[#e7c8a0] outline-none transition-all appearance-none cursor-pointer"
                >
                  <option className="bg-stone-900">Signature Cut & Blowdry</option>
                  <option className="bg-stone-900">Balayage & Color</option>
                  <option className="bg-stone-900">Gel Manicure</option>
                  <option className="bg-stone-900">Luxury Spa Pedicure</option>
                  <option className="bg-stone-900">Deep Tissue Massage</option>
                  <option className="bg-stone-900">Gold Radiance Facial</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-stone-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Date</label>
                <input 
                  required 
                  type="date" 
                  name="date" 
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#e7c8a0] focus:ring-1 focus:ring-[#e7c8a0] outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Time</label>
                <input 
                  required 
                  type="time" 
                  name="time" 
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#e7c8a0] focus:ring-1 focus:ring-[#e7c8a0] outline-none transition-all"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full py-4 text-base shadow-[0_0_20px_rgba(231,200,160,0.2)] hover:shadow-[0_0_30px_rgba(231,200,160,0.4)]" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Processing...' : 'Confirm Request'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;