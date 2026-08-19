export const brand = {
  name: 'Santhiya Makeovers',
  legalName: 'Santhiya Saree Draping, Makeup & Hairstyle Services',
  tagline: 'Where Every Face Tells a Beautiful Story',
  phone: '+91 7639139516',
  whatsapp: '917639139516',
  email: 'santhiya.ananthan94@gmail.com',
  address: '#9025, Prestige Tranquility, Bommenahalli Village, Karnataka, India 560049',
  googleMapsUrl: 'https://maps.app.goo.gl/ftmt6W2BiPqaWbfx8',
  rating: 5.0,
  category: 'Make-up Artist',
  hours: [
    { day: 'Monday - Saturday', time: '9:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 6:00 PM (By Appointment)' },
  ],
}

export const highlights = [
  { icon: 'bi-star-fill', label: '5.0 Rating on Google' },
  { icon: 'bi-gender-female', label: 'Women-Owned Business' },
  { icon: 'bi-patch-check-fill', label: 'Certified Make-up Artist' },
  { icon: 'bi-flower2', label: 'Saree Draping Specialist' },
]

export const socialLinks = [
  { name: 'Facebook', icon: 'bi-facebook', href: 'https://www.facebook.com/share/18HWg2Xfk2' },
  { name: 'Instagram', icon: 'bi-instagram', href: 'https://www.instagram.com/santhiyamakeoverartist?igsh=MXN2dGdzM3pqYjJ0ZQ==' },
  { name: 'YouTube', icon: 'bi-youtube', href: 'http://www.youtube.com/@SanthiyaAnanthan_offical' },
  { name: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/santhiya-a-makeup-artist' },
  { name: 'WhatsApp', icon: 'bi-whatsapp', href: 'https://wa.me/917639139516' },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export const services = [
  {
    id: 'Bridal-makeup',
    icon: 'bi-gem',
    title: 'Bridal Makeup',
    price: 'From ₹6,500',
    short: 'HD & airbrush bridal makeup crafted for your big day.',
    description:
      'A signature bridal experience combining long-lasting HD/airbrush makeup, trial sessions, and personalised looks that photograph beautifully in every light.',
    features: ['Pre-bridal consultation', 'HD & airbrush finish', 'Trial session included', 'Touch-up kit on the day'],
  },
  {
    id: 'Non-Bridal',
    icon: 'bi-flower1',
    title: 'Non-Bridal Makeup',
    price: 'From ₹3,500',
    short: 'Airbrush non-bridal makeup for special occasions.',
    description:
      'A signature non-bridal experience combining long-lasting airbrush makeup, trial sessions, and personalised looks that photograph beautifully in every light.',
    features: ['Pre-event consultation', 'Airbrush finish', 'Trial session included', 'Touch-up kit on the day'],
  },
  {
    id: 'Party-makeup',
    icon: 'bi-stars',
    title: 'Party & Event Makeup',
    price: 'From ₹3,500',
    short: 'Glam looks for engagements, receptions and celebrations.',
    description:
      'Bold or subtle, we tailor party makeup to your outfit and the occasion — perfect for engagements, sangeet, receptions and festive celebrations.',
    features: ['Custom glam styling', 'Long-wear formulas', 'False lashes included', 'On-location service'],
  },

    {
    id: 'Hair-styling',
    icon: 'bi-scissors',
    title: 'Hair Styling',
    price: 'From ₹1,000',
    short: 'Elegant updos, curls and braids by expert stylists.',
    description:
      'From soft curls to intricate bridal buns, our stylists craft hairstyles that complement your face shape, outfit and theme perfectly.',
    features: ['Bridal updos & braids', 'Hair accessories styling', 'Keratin blowouts', 'Trial available'],
  },
    {
    id: 'Draping',
    icon: 'bi-flower2',
    title: 'Saree Draping',
    price: 'From ₹500',
    short: 'Traditional & contemporary draping styles — our specialty.',
    description:
      'Expert draping for sarees, half-sarees and dupattas in traditional and modern styles that hold beautifully through the celebrations.',
    features: ['15+ drape styles', 'Pinning & pleating', 'Dupatta styling', 'Quick touch-ups'],
  },
    
  {
    id: 'Saree Pre-pleating',
    icon: 'bi-flower2',
    title: 'Saree Pre-Pleating',
    price: 'From ₹350',
    short: 'Expert saree pre-pleating for a flawless drape.',
    description:
      'Get your saree perfectly pre-pleated for weddings and special occasions, ensuring a neat and elegant look throughout the event.',
    features: ['Custom pleating styles', 'Secure pinning', 'Quick adjustments', 'On-location service'],
  },
]

export const testimonials = [
  {
    name: 'Priya Ramesh',
    role: 'Bride, Bengaluru',
    rating: 5,
    quote:
      'Santhiya made me feel like a queen on my wedding day! The makeup stayed flawless for over 12 hours through all the rituals.',
  },
  {
    name: 'Divya Karthik',
    role: 'Bride, Whitefield',
    rating: 5,
    quote:
      'The trial session helped me choose the perfect look. Every guest complimented my hairstyle and draping — absolutely worth it!',
  },
  {
    name: 'Anitha Suresh',
    role: 'Reception Guest, Bengaluru',
    rating: 5,
    quote:
      'I booked party makeup for my sister\'s reception and it was stunning. Professional, punctual, and so friendly throughout.',
  },
  {
    name: 'Meera Prakash',
    role: 'Bride, Bommenahalli',
    rating: 5,
    quote:
      'From the pre-bridal facials to the big day, the entire journey was seamless. My skin has never glowed this much!',
  },
  {
    name: 'Lakshmi Narayan',
    role: 'Sangeet Bride, Bengaluru',
    rating: 5,
    quote:
      'The mehendi artist was incredibly talented — intricate designs that lasted beautifully dark for weeks. Highly recommend!',
  },
  {
    name: 'Kavya Ashwin',
    role: 'Engagement Bride, Bengaluru',
    rating: 5,
    quote:
      'Booking was easy, the studio is gorgeous, and the draping and makeup exceeded my expectations. Santhiya Makeovers is simply the best around.',
  },
]

import sareeDraping from '../assets/gallery/saree-draping.jpg'
import sareePleating from '../assets/gallery/saree-pleating.jpeg'
import sareePleatingSanthiya from '../assets/gallery/saree-pleating-santhiya.jpeg'
import sareePleating1 from '../assets/gallery/saree-pleating1.jpeg'
import sareePlepleating from '../assets/gallery/saree-plepleating.jpeg'
import casualMakeup from '../assets/gallery/casual-makeup.jpeg'
import nonBridalMakeup from '../assets/gallery/non-bridal-makeup.jpeg'
import partyMakeup from '../assets/gallery/party-makeup.jpeg'
import hairStyle from '../assets/gallery/hair-style.jpeg'
import kidsHairStyle from '../assets/gallery/kids-hair-style.jpeg'
import kidsMakeup from '../assets/gallery/kids-makeup.jpeg'

export const galleryItems = [
  { id: 1, category: 'Draping', icon: 'bi-flower2', title: 'Silk Saree Draping', image: sareeDraping },
  { id: 2, category: 'Draping', icon: 'bi-gem', title: 'Half-Saree Draping', image: sareePleating },
  { id: 3, category: 'Bridal', icon: 'bi-gem', title: 'Classic Bridal Look', image: nonBridalMakeup },
  { id: 4, category: 'Bridal', icon: 'bi-flower1', title: 'Temple Jewellery Bride', image: sareePleatingSanthiya },
  { id: 5, category: 'Party', icon: 'bi-stars', title: 'Reception Glam', image: partyMakeup },
  { id: 6, category: 'Party', icon: 'bi-sparkle', title: 'Engagement Glow', image: casualMakeup },
  { id: 7, category: 'Hair', icon: 'bi-scissors', title: 'Bridal Braided Bun', image: hairStyle },
  { id: 8, category: 'Hair', icon: 'bi-wind', title: 'Soft Curls Updo', image: kidsHairStyle },
  { id: 9, category: 'Skin', icon: 'bi-flower1', title: 'Pre-Bridal Glow Facial', image: kidsMakeup },
  { id: 10, category: 'Mehendi', icon: 'bi-flower3', title: 'Bridal Mehendi Art', image: sareePleating1 },
  { id: 11, category: 'Bridal', icon: 'bi-gem', title: 'Contemporary Bride', image: sareePlepleating },
  { id: 12, category: 'Party', icon: 'bi-stars', title: 'Sangeet Night Look', image: partyMakeup },
  { id: 13, category: 'Hair', icon: 'bi-wind', title: 'Traditional Half-Up', image: hairStyle },
  { id: 14, category: 'Mehendi', icon: 'bi-flower3', title: 'Arabic Mehendi Design', image: sareePleating },
]

export const galleryCategories = ['All', 'Draping', 'Bridal', 'Party', 'Hair', 'Skin', 'Mehendi']

export const stats = [
  { label: 'Happy Clients', value: 210, suffix: '+' },
  { label: 'Weddings Styled', value: 2, suffix: '+' },
  { label: 'Years of Experience', value: 3, suffix: '+' },
  { label: 'Google Rating', value: 5, suffix: '.0 ★' },
]

export const team = [
  {
    name: 'Santhiya A',
    role: 'Founder — Saree Draping, Makeup & Hairstyle Artist',
    initials: 'SA',
    bio: 'Santhiya is a certified makeup artist and draping specialist based in Bengaluru, passionate about helping every client look and feel their absolute best for weddings, receptions and every celebration in between.',
  },
]
