import { BookingFormData } from '../types';

// Simulate an API call to a backend like Resend
export const submitBooking = async (data: BookingFormData): Promise<boolean> => {
  return new Promise((resolve) => {
    console.log("Submitting booking to API...", data);
    
    // Simulate network delay
    setTimeout(() => {
      // In a real app, this would be:
      // await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(data) ... })
      console.log("Booking confirmed!");
      resolve(true);
    }, 1500);
  });
};