import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  imagePath = 'background.jpeg'; // Using image from public folder
  
  // Form data
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  constructor() {
    // Initialize EmailJS with your public key
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key from https://www.emailjs.com/
    emailjs.init('YOUR_PUBLIC_KEY'); // You'll need to replace this
  }

  scrollToContact() {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  async sendEmail(event: Event) {
    event.preventDefault();
    
    try {
      const templateParams = {
        from_name: this.contactForm.name,
        from_email: this.contactForm.email,
        message: this.contactForm.message,
        to_email: 'sachinjeyakumar7@gmail.com'
      };

      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      console.log('Email sent successfully!', response);
      alert('Thank you! Your message has been sent successfully.');
      
      // Reset form
      this.contactForm = {
        name: '',
        email: '',
        message: ''
      };
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  }
}