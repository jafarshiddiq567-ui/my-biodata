/**
 * ╔══════════════════════════════════════════════════════╗
 * ║           BIODATA CONFIG — config.js                 ║
 * ║  ✏️  Ganti data di sini, semua halaman auto update!  ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * Cara pakai:
 *  1. Edit bagian-bagian di bawah sesuai data kamu
 *  2. Simpan file ini
 *  3. Refresh browser — semua halaman langsung update otomatis!
 */

const CONFIG = {

  /* ─────────────────────────────────────────
     01. IDENTITAS UTAMA
  ───────────────────────────────────────── */
  name: {
    full:     'Jafar Shiddiq',       // Nama lengkap
    short:    'Jafar',               // Nama pendek untuk navbar & logo
    initials: 'JS',                  // Inisial (fallback jika foto gagal load)
    taglines: [                      // Teks typed animation (boleh tambah)
      'Mechatronics Engineering Student 🤖',
      'Software Engineer 💻',
      '3D Designer 🎨',
      'UAV / Drone Pilot 🚁',
      'Tech Enthusiast 🚀',
    ],
  },

  /* ─────────────────────────────────────────
     02. FOTO PROFIL
  ───────────────────────────────────────── */
  photo: 'assets/profile.png',    // Taruh foto kamu di folder assets/
                                  // Bisa juga pakai URL: 'https://...'

  /* ─────────────────────────────────────────
     03. BIO / DESKRIPSI DIRI
  ───────────────────────────────────────── */
  bio: `I am an undergraduate student in <strong>Mechatronics Engineering Education</strong> with a deep passion for blending software, hardware, and design. 
Additionally, my educational background from the Islamic boarding school <strong>Ponpes Amtsilati Bangsri Jepara</strong> has deeply shaped my discipline and character. 
I have experience as a Software Engineer, 3D Designer, and UAV Pilot. I am accustomed to solving complex problems and always enthusiastic about learning new technologies.`,

  statusBadge: 'Student & Tech Enthusiast',  // Badge di bawah foto

  /* ─────────────────────────────────────────
     04. STATISTIK HERO
  ───────────────────────────────────────── */
  stats: [
    { number: 10,  label: 'Tech Projects' },
    { number: 5,   label: 'Competitions' },
    { number: 3,   label: 'Years Active' },
  ],

  /* ─────────────────────────────────────────
     05. TENTANG (ABOUT) — Visi/Misi/Passion/Nilai
  ───────────────────────────────────────── */
  about: [
    { icon: '🎯', title: 'Vision',    text: 'To become an innovative engineer capable of creating practical technological solutions for the advancement of society.' },
    { icon: '💡', title: 'Mission',    text: 'Integrating software, electronics, and mechanical expertise to produce highly functional and valuable creations.' },
    { icon: '🔥', title: 'Passion', text: 'Robotics, software development, 3D design, and unmanned aerial vehicle (UAV) operations.' },
    { icon: '🌱', title: 'Values',   text: 'Discipline, fast learner, collaborative, while always maintaining spiritual values and integrity.' },
  ],

  /* ─────────────────────────────────────────
     06. PENCAPAIAN / PRESTASI
  ───────────────────────────────────────── */
  achievements: [
    {
      icon:  '🏆',
      year:  '2024',
      badge: { text: '1st Place MA', style: 'ach-gold' },
      title: '1st Place at Madrasah Aliyah (MA) Level',
      desc:  'Achieved a proud accomplishment in a competition at the MA level, proving dedication and consistency in learning.',
    },
    {
      icon:  '🎖️',
      year:  '2022',
      badge: { text: '1st Place MTs', style: 'ach-silver' },
      title: '1st Place at Madrasah Tsanawiyah (MTs) Level',
      desc:  'Successfully won a competition at the MTs level thanks to the discipline forged during boarding school.',
    },
    {
      icon:  '📜',
      year:  '2023',
      badge: { text: 'Certification', style: 'ach-blue' },
      title: 'Mechatronics Expertise Certification',
      desc:  'Obtained recognition for skills in designing and programming basic automation and robotics systems.',
    },
    {
      icon:  '🚁',
      year:  '2022',
      badge: { text: 'Skill', style: 'ach-purple' },
      title: 'UAV Pilot License/Proficiency',
      desc:  'Experienced in operating and assembling unmanned aerial vehicles (UAVs) for various mapping and documentation purposes.',
    },
  ],

  /* ─────────────────────────────────────────
     07. PENDIDIKAN
  ───────────────────────────────────────── */
  education: [
    {
      icon:        '🎓',
      degree:      'B.Ed. in Mechatronics Engineering',
      institution: 'Universitas Negeri Yogyakarta (UNY)',
      period:      'Present',
      desc:        'Studying the integration of mechanics, electronics, and computer control systems. <strong>GPA: 3.92/4.00</strong>',
      tags:        ['Robotics', 'PLC', 'Microcontroller', 'IoT'],
    },
    {
      icon:        '🕌',
      degree:      'Islamic Boarding School Education',
      institution: 'Ponpes Amtsilati Bangsri, Jepara',
      period:      'Graduated',
      desc:        'Deepened religious knowledge, independence, and discipline using the fast and effective Amtsilati method.',
      tags:        ['Nahwu Shorof', 'Amtsilati', 'Discipline'],
    },
    {
      icon:        '🏫',
      degree:      'Madrasah Aliyah (MA) - High School',
      institution: 'MA Amtsilati',
      period:      'Graduated',
      desc:        'Actively participated in various competitions and won several school-level awards.',
      tags:        ['Science/Religion', 'Organization'],
    },
  ],

  /* ─────────────────────────────────────────
     08. PENGALAMAN KERJA
  ───────────────────────────────────────── */
  experience: [
    {
      icon:    '💻',
      role:    'Software Engineer',
      company: 'Freelance / Personal Projects',
      period:  '2022 — Present',
      tasks: [
        'Developing web-based applications and IoT integrated systems',
        'Designing control algorithms for microcontroller devices',
        'Collaborating on projects to design software architectures',
      ],
      tech: ['C++', 'Python', 'JavaScript', 'Arduino'],
    },
    {
      icon:    '🚁',
      role:    'UAV / Drone Pilot',
      company: 'Independent Projects & Team',
      period:  '2022 — Present',
      tasks: [
        'Operating drones for documentation, mapping, and research purposes',
        'Maintaining and calibrating UAV control systems',
      ],
      tech: ['Drone', 'Betaflight', 'ArduPilot'],
    },
    {
      icon:    '🎨',
      role:    '3D Designer',
      company: 'Freelance',
      period:  '2021 — Present',
      tasks: [
        'Designing mechanical components using 3D CAD software',
        'Preparing models for 3D printing and manufacturing processes',
      ],
      tech: ['SolidWorks', 'Fusion 360', 'AutoCAD'],
    },
  ],

  /* ─────────────────────────────────────────
     09. SKILLS
  ───────────────────────────────────────── */
  skills: {
    technical: [
      { name: 'C++ / Arduino',           level: 85 },
      { name: 'Python / IoT Dev',        level: 80 },
      { name: 'JavaScript / Web',        level: 75 },
      { name: 'PLC & Control Systems',   level: 80 },
    ],
    tools: [
      { name: 'SolidWorks/Fusion 360', level: 85 },
      { name: 'VS Code / Git',         level: 80 },
      { name: 'UAV / Drone Control',   level: 88 },
      { name: '3D Printing',           level: 85 },
    ],
    soft: [
      'Problem Solving', 'Adaptability', 'Discipline',
      'Teamwork', 'Critical Thinking', 'Analytical Skills',
    ],
  },

  /* ─────────────────────────────────────────
     10. PORTOFOLIO
  ───────────────────────────────────────── */
  portfolio: [
    {
      emoji:   '🤖',
      bg:      'linear-gradient(135deg, #6366f1, #8b5cf6)',
      cat:     'Robotics & IoT',
      title:   'IoT-Based Automatic Control System',
      desc:    'Designed a prototype for a remote control system using microcontrollers integrated with a web application.',
      tech:    ['ESP32', 'C++', 'Firebase'],
      links:   [{ label: '🔗 Details', url: '#' }],
    },
    {
      emoji:   '🚁',
      bg:      'linear-gradient(135deg, #0ea5e9, #06b6d4)',
      cat:     'UAV Project',
      title:   'Custom Drone Build & Mapping',
      desc:    'Assembled a custom drone and programmed the flight controller for high-accuracy aerial mapping.',
      tech:    ['ArduPilot', 'Hardware', 'Sensors'],
      links:   [{ label: '🔗 Documentation', url: '#' }],
    },
    {
      emoji:   '⚙️',
      bg:      'linear-gradient(135deg, #f59e0b, #ef4444)',
      cat:     '3D Design',
      title:   'Mechanical Component Design',
      desc:    'Created 3D designs for robotic components specifically prepared for 3D printing.',
      tech:    ['SolidWorks', '3D Printing'],
      links:   [{ label: '🔗 View 3D Model', url: '#' }],
    },
  ],

  /* ─────────────────────────────────────────
     11. GALERI MOMEN (opsional)
  ───────────────────────────────────────── */
  gallery: [
    { bg: 'linear-gradient(135deg,#6366f1,#a855f7)', label: '🕌 Times at Ponpes Amtsilati', wide: true },
    { bg: 'linear-gradient(135deg,#0ea5e9,#06b6d4)', label: '🏆 MTs/MA Competitions',                 wide: false },
    { bg: 'linear-gradient(135deg,#10b981,#059669)', label: '🚁 UAV Operations',            wide: false },
    { bg: 'linear-gradient(135deg,#f59e0b,#ef4444)', label: '⚙️ Mechatronics Projects',      wide: false },
    { bg: 'linear-gradient(135deg,#ec4899,#8b5cf6)', label: '💻 Coding & Development',   wide: true },
  ],

  /* ─────────────────────────────────────────
     12. SOSIAL MEDIA
  ───────────────────────────────────────── */
  social: [
    {
      id:      'instagram',
      name:    'Instagram',
      handle:  '@jafarshiddiq1',
      url:     'https://instagram.com/jafarshiddiq1',
      bgStyle: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
      svg:     `<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    },
    {
      id:      'email',
      name:    'Email',
      handle:  'jafarshiddiq567@gmail.com',
      url:     'mailto:jafarshiddiq567@gmail.com',
      bgStyle: '#D44638',
      svg:     `<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M20.5 4h-17A2.5 2.5 0 0 0 1 6.5v11A2.5 2.5 0 0 0 3.5 20h17a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 20.5 4zm-17 1.5h17c.18 0 .34.05.49.12l-8.99 6.33L2.01 5.62a1 1 0 0 1 .49-.12zm17 13h-17a1 1 0 0 1-1-1v-9.66l8.43 5.92a1 1 0 0 0 1.14 0l8.43-5.92V17.5a1 1 0 0 1-1 1z"/></svg>`,
    }
  ],

  /* ─────────────────────────────────────────
     13. KONTAK
  ───────────────────────────────────────── */
  contact: {
    email:    'jafarshiddiq567@gmail.com',
    whatsapp: '6285938592536',
    location: 'Perumahan Pondok Graha, Batam',
    status:   'Undergraduate Mechatronics Student',
  },

  /* ─────────────────────────────────────────
     14. CV / RESUME
  ───────────────────────────────────────── */
  cvUrl: 'assets/cv-jafar.pdf',  // Taruh CV kamu di folder assets/, atau pakai Google Drive link

  /* ─────────────────────────────────────────
     15. LINKTREE — Link-in-Bio Page
         (Tampil di halaman linktree.html)
  ───────────────────────────────────────── */
  linktree: {
    greeting: 'Hello! I am',
    tagline:  'Mechatronics Student & Software Engineer',
    links: [
      {
        emoji: '📋',
        label: 'Full Portfolio',
        url:   'index.html',        // Ganti jika sudah di-host online
        style: 'primary',           // 'primary' = warna ungu highlight
      },
      {
        emoji: '📱',
        label: 'Instagram',
        url:   'https://instagram.com/jafarshiddiq1',
        style: 'social',
      },
      {
        emoji: '✉️',
        label: 'Email',
        url:   'mailto:jafarshiddiq567@gmail.com',
        style: 'social',
      },
    ],
  },

};
