const translations = {
 nl: {
  'title': 'HBO-ICT Student Cloud & Security Engineer \n & \n IT Specialist (MBO 4)',
  'about': 'Over Mij',
  'about-text': 'Welkom op mijn portfolio! Ik ben Henry, 22 jaar oud en studeer HBO-ICT aan Windesheim. Mijn passie ligt bij cybersecurity en ethical hacking. Ik haal energie uit het vinden van kwetsbaarheden en het verbeteren van digitale veiligheid. ',
  'skills': 'Vaardigheden',
  'skill-security': 'Cybersecurity',
  'skill-pentest': 'Penetration Testing',
  'skill-network': 'Network Security',
  'projects': 'Projecten',
  'project1-title': 'Datacenter',
  'project1-desc': 'Gedurende de laatste zes maanden van mijn schooljaar heb ik voor de IT- en technische afdelingen van mijn school een datacenter opgezet en gebouwd.',
  'project2-title': '',
  'project2-desc': '',
  'project3-title': '',
  'project3-desc': '',
  'certifications': 'Certificeringen',
  'cert1-desc': 'Momenteel nog niks',
  'cert2-desc': '',
  'cert3-desc': '',
  'education': 'Opleidingen',
  'edu1-period': '2024 - 2028 (verwacht)',
  'edu1-desc': 'Specialisatie in cybersecurity, ethical hacking en informatiebeveiliging',
  'edu2-period': '2021 - 2024',
  'edu2-desc': 'Gespecialiseerd in het beheren, onderhouden, ontwerpen en configureren van bedrijfsnetwerken',
  'edu3-period': '2019 - 2021',
  'edu3-desc': 'Gespecialiseerd in het installeren en monteren van elektrotechnische benodigdheden',
  'view-cv': 'Bekijk CV',
  'cv-title': 'Curriculum Vitae - Henry Elsinga',
  'cv-education': 'Opleiding',
  'cv-experience': 'Ervaring',
  'cv-skills': 'Technische Vaardigheden',
  'cv-achievements': 'Prestaties',
  'cv-contact': 'Contact'
 },
 en: {
  "title": "HBO-ICT Student Cloud & Security Engineer | IT Specialist (MBO 4)",
  "about": "About Me",
  "about-text": "Welcome to my portfolio! I'm Henry, 22 years old, and currently studying HBO-ICT at Windesheim University of Applied Sciences. I'm passionate about cybersecurity and ethical hacking. I enjoy discovering vulnerabilities and improving digital security.",
  "skills": "Skills",
  "skill-security": "Cybersecurity",
  "skill-pentest": "Penetration Testing",
  "skill-network": "Network Security",
  "projects": "Projects",
  "project1-title": "Data Center",
  "project1-desc": "During the last six months of my school year, I set up and built a data center for my school's IT and technical departments.",
  "project2-title": "",
  "project2-desc": "",
  "project3-title": "",
  "project3-desc": "",
  "certifications": "Certifications",
  "cert1-desc": "No certifications yet",
  "cert2-desc": "",
  "cert3-desc": "",
  "education": "Education",
  "edu1-period": "2024 - 2028 (expected)",
  "edu1-desc": "Specializing in cybersecurity, ethical hacking, and information security",
  "edu2-period": "2021 - 2024",
  "edu2-desc": "Specialized in managing, maintaining, designing, and configuring corporate networks",
  "edu3-period": "2019 - 2021",
  "edu3-desc": "Specialized in installing and assembling electrical systems",
  "view-cv": "View CV",
  "cv-title": "Curriculum Vitae - Henry Elsinga",
  "cv-education": "Education",
  "cv-experience": "Experience",
  "cv-skills": "Technical Skills",
  "cv-achievements": "Achievements",
  "cv-contact": "Contact"
}
};

let currentLanguage = 'nl';
let currentTheme = 'light';

// Theme toggle functionality
function toggleTheme() {
 const body = document.body;
 const themeIcon = document.getElementById('theme-icon');

 if (currentTheme === 'light') {
  body.setAttribute('data-theme', 'dark');
  themeIcon.className = 'fas fa-sun';
  currentTheme = 'dark';
 } else {
  body.setAttribute('data-theme', 'light');
  themeIcon.className = 'fas fa-moon';
  currentTheme = 'light';
 }
}

// Language change functionality
function changeLanguage(lang) {
 currentLanguage = lang;

 // Update active language button
 document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.classList.remove('active');
  if (btn.getAttribute('data-lang') === lang) {
   btn.classList.add('active');
  }
 });

 // Update all translatable elements
 document.querySelectorAll('[data-translate]').forEach(element => {
  const key = element.getAttribute('data-translate');
  if (translations[lang] && translations[lang][key]) {
   element.textContent = translations[lang][key];
  }
 });

 // Update HTML lang attribute
 document.documentElement.lang = lang;
}

// Modal functionality
function openModal() {
 const modal = document.getElementById('cvModal');
 modal.style.display = 'block';
 setTimeout(() => {
  modal.classList.add('show');
 }, 10);
 document.body.style.overflow = 'hidden';
}

function closeModal() {
 const modal = document.getElementById('cvModal');
 modal.classList.remove('show');
 setTimeout(() => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
 }, 300);
}

// Close modal when clicking outside
window.onclick = function (event) {
 const modal = document.getElementById('cvModal');
 if (event.target === modal) {
  closeModal();
 }
}

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
 if (event.key === 'Escape') {
  closeModal();
 }
});

// Smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function () {
 // Add smooth entrance animation
 const portfolioCard = document.querySelector('.portfolio-card');
 portfolioCard.style.opacity = '0';
 portfolioCard.style.transform = 'translateY(50px)';

 setTimeout(() => {
  portfolioCard.style.transition = 'all 0.8s ease';
  portfolioCard.style.opacity = '1';
  portfolioCard.style.transform = 'translateY(0)';
 }, 100);

 // Add hover effects to skill items
 const skillItems = document.querySelectorAll('.skill-item');
 skillItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;
 });

 // Add entrance animation to project items
 const projectItems = document.querySelectorAll('.project-item');
 projectItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(30px)';
  setTimeout(() => {
   item.style.transition = 'all 0.6s ease';
   item.style.opacity = '1';
   item.style.transform = 'translateY(0)';
  }, 200 + (index * 100));
 });

 // Add entrance animation to certification items
 const certItems = document.querySelectorAll('.cert-item');
 certItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-30px)';
  setTimeout(() => {
   item.style.transition = 'all 0.6s ease';
   item.style.opacity = '1';
   item.style.transform = 'translateX(0)';
  }, 400 + (index * 100));
 });

 // Add entrance animation to education items
 const educationItems = document.querySelectorAll('.education-item');
 educationItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(30px)';
  setTimeout(() => {
   item.style.transition = 'all 0.6s ease';
   item.style.opacity = '1';
   item.style.transform = 'translateX(0)';
  }, 600 + (index * 100));
 });
});

// Add dynamic typing effect to name (optional enhancement)
function typeWriter(element, text, speed = 100) {
 let i = 0;
 element.innerHTML = '';

 function type() {
  if (i < text.length) {
   element.innerHTML += text.charAt(i);
   i++;
   setTimeout(type, speed);
  }
 }

 type();
}

// Initialize portfolio
document.addEventListener('DOMContentLoaded', function () {
 // Set initial theme based on user preference
 if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toggleTheme();
 }

 // Add particle animation to background
 createParticles();
});

// Create floating particles for enhanced visual effect
function createParticles() {
 const container = document.querySelector('.floating-shapes');
 const particleCount = 15;

 for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.className = 'shape';
  particle.style.width = Math.random() * 8 + 4 + 'px';
  particle.style.height = particle.style.width;
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 6 + 's';
  particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
  particle.style.opacity = Math.random() * 0.1 + 0.05;

  container.appendChild(particle);
 }
}

// Add intersection observer for scroll animations
const observerOptions = {
 threshold: 0.1,
 rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
  if (entry.isIntersecting) {
   entry.target.style.opacity = '1';
   entry.target.style.transform = 'translateY(0)';
  }
 });
}, observerOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', function () {
 const sections = document.querySelectorAll('.about-section, .skills-section, .projects-section, .certifications-section, .education-section');
 sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 0.8s ease';
  observer.observe(section);
 });
});
