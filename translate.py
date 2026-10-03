import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = [
    (r'Juara II', r'2nd Place'),
    (r'Juara I', r'1st Place'),
    (r'Olimpiade Bahasa Arab \(OBA\) Ke-7', r'7th Arabic Language Olympiad (OBA)'),
    (r'Meraih Juara II tingkat Kabupaten/Kota pada Olimpiade Bahasa Arab ke-7 Nasional mewakili MA Amtsilati.', r'Won 2nd Place at the Regency/City level in the 7th National Arabic Language Olympiad representing MA Amtsilati.'),
    (r'Olimpiade Ma\'arif NU \(OMNU\) XIV - Fikih', r'Ma\'arif NU Olympiad (OMNU) XIV - Fiqh'),
    (r'Meraih Juara 1 tingkat Madrasah Aliyah se-Kabupaten Jepara pada mata pelajaran Fikih, OMNU XIV 2024.', r'Won 1st Place at the Madrasah Aliyah level across Jepara Regency in Fiqh subject, OMNU XIV 2024.'),
    (r'Peserta', r'Participant'),
    (r'Olimpiade Sains Plus - Matematika SD/MI', r'Science Plus Olympiad - Elementary Math'),
    (r'Menjadi perwakilan sekolah dan kabupaten/kota pada Olimpiade Sains Plus tingkat Provinsi Riau, Kepulauan\s+Riau, dan Sumatera Barat.', r'Represented the school and regency in the Science Plus Olympiad for Riau, Riau Islands, and West Sumatra provinces.'),
    (r'TSAMACO 2022 - Fiqih MTs', r'TSAMACO 2022 - MTs Fiqh'),
    (r'Meraih Juara 1 pada Lomba Mata Pelajaran Fiqih jenjang MTs Ma\'arif NU tingkat KKMTs 02 Jepara.', r'Won 1st Place in the Fiqh Subject Competition for MTs Ma\'arif NU at KKMTs 02 Jepara level.'),
    (r'KRTI 2026 - Divisi Fixed Wing', r'KRTI 2026 - Fixed Wing Division'),
    (r'Menjadi finalis pada Kontes Robot Terbang Indonesia \(KRTI\) 2026 divisi Fixed Wing, bertugas dalam\s+perancangan dan operasional wahana terbang tanpa awak.', r'Became a finalist in the 2026 Indonesia Flying Robot Contest (KRTI) Fixed Wing division, tasked with designing and operating unmanned aerial vehicles.'),
    (r'Riwayat <span class="accent">Pendidikan</span>', r'Education <span class="accent">History</span>'),
    (r'03 — Pendidikan', r'03 — Education'),
    (r'Menempuh studi di program Pendidikan Teknik Mekatronika — salah satu program interdisipliner yang\s+mengintegrasikan mekanika, elektronika, dan pemrograman sistem kontrol. Aktif terlibat dalam tim kompetisi\s+UAV <strong>THUNDERWING</strong> dan pengembangan proyek-proyek teknologi berbasis mikrokontroler dan\s+embedded system.', r'Currently pursuing Mechatronics Engineering Education — an interdisciplinary program integrating mechanics, electronics, and control system programming. Actively involved in the <strong>THUNDERWING</strong> UAV competition team and developing projects based on microcontrollers and embedded systems. <strong>GPA: 3.92/4.00</strong>'),
    (r'Agu 2025 — Sekarang', r'Aug 2025 — Present'),
    (r'Menyelesaikan pendidikan tingkat atas di lingkungan pesantren berbasis <strong>Metode Amtsilati</strong> —\s+metode akselerasi membaca kitab kuning. Mendalami ilmu fiqh, nahwu, shorof, dan bahasa Arab secara\s+intensif di bawah bimbingan para kiai. Terlibat aktif sebagai pengurus organisasi santri dan mewakili\s+lembaga dalam berbagai kompetisi akademik.', r'Completed high school education in a boarding school environment based on the <strong>Amtsilati Method</strong> — an accelerated method for reading classical texts. Intensively studied fiqh, Arabic grammar, and Arabic language under the guidance of scholars. Actively involved in student organization management and representing the institution in academic competitions.'),
    (r'Jul 2022 — Mei 2025', r'Jul 2022 — May 2025'),
    (r'Menempuh pendidikan menengah pertama di lingkungan pondok pesantren. Membentuk karakter disiplin,\s+kemandirian, dan semangat belajar. Aktif dalam keorganisasian santri sebagai Sekretaris PK IPNU dan\s+mewakili lembaga pada lomba mata pelajaran tingkat kabupaten.', r'Completed junior high education in an Islamic boarding school. Developed disciplined character, independence, and a strong passion for learning. Actively involved in student organization as Secretary of PK IPNU and represented the institution in regency-level subject competitions.'),
    (r'Agu 2019 — Jun 2022', r'Aug 2019 — Jun 2022'),
    (r'Sekolah Dasar \(SD\)', r'Elementary School (SD)'),
    (r'Menempuh pendidikan dasar di sekolah Islam terpadu yang menanamkan nilai akhlak, Al-Quran, dan akademik\s+sejak dini. Menjadi perwakilan sekolah dan kabupaten dalam olimpiade sains tingkat provinsi.', r'Completed elementary education at an integrated Islamic school that instilled moral values, Al-Quran reading, and early academics. Became a representative of the school and regency in the provincial science olympiad.'),
    (r'Jul 2013 — Jun 2019', r'Jul 2013 — Jun 2019'),
    (r'04 — Pengalaman', r'04 — Experience'),
    (r'Pengalaman <span class="accent">Kerja &amp; Organisasi</span>', r'<span class="accent">Work &amp; Organization</span> Experience'),
    (r'Pengalaman <span class="accent">Kerja & Organisasi</span>', r'<span class="accent">Work &amp; Organization</span> Experience'),
    (r'Tim Kompetisi UAV — Universitas Negeri Yogyakarta', r'UAV Competition Team — Universitas Negeri Yogyakarta'),
    (r'2025 — Sekarang', r'2025 — Present'),
    (r'Memimpin tim <strong>THUNDERWING</strong> divisi Fixed Wing dalam perancangan, fabrikasi, dan\s+pengoperasian wahana terbang otonom. Mengelola alur kerja mulai dari desain aerodinamika, konfigurasi\s+<em>ArduPilot</em>, kalibrasi sensor IMU/GPS, hingga perencanaan misi autonomous. Bertanggung jawab penuh\s+sebagai <em>Pilot in Command</em> saat uji terbang dan kompetisi. Membawa tim ke final <strong>KRTI\s+2026</strong> divisi Fixed Wing.', r'Led the <strong>THUNDERWING</strong> Fixed Wing division team in the design, fabrication, and operation of autonomous aerial vehicles. Managed workflows from aerodynamic design, <em>ArduPilot</em> configuration, IMU/GPS sensor calibration, to autonomous mission planning. Took full responsibility as <em>Pilot in Command</em> during test flights and competitions. Led the team to the finals of <strong>KRTI 2026</strong>.'),
    (r'Pengajar Ilmu Agama &amp; Sekretaris Akademisi', r'Religious Teacher &amp; Academic Secretary'),
    (r'Jul 2024 — Mei 2025', r'Jul 2024 — May 2025'),
    (r'Mengampu mata pelajaran faroidh, bahasa Arab, dan fiqh menggunakan <strong>Metode Amtsilati</strong>.\s+Menyusun jadwal akademik, merekap laporan perkembangan santri, dan berkoordinasi dengan pengasuh dalam\s+pengelolaan kurikulum harian. Diakui sebagai pengajar dengan kedisiplinan dan dedikasi tertinggi di\s+angkatan.', r'Taught faroidh, Arabic, and fiqh using the <strong>Amtsilati Method</strong>. Prepared academic schedules, summarized student progress reports, and coordinated with caretakers in managing the daily curriculum. Recognized as the teacher with the highest discipline and dedication in the cohort.'),
    (r'Ketua Pelaksana Program Amtsilati', r'Head of Amtsilati Program Implementation'),
    (r'Ditugaskan sebagai guru piket sekaligus ketua pelaksana implementasi Metode Amtsilati di pondok mitra.\s+Berhasil mewisuda santri sesuai target yang ditetapkan pengasuh, membangun sistem belajar terstruktur, dan\s+meraih predikat <strong>Guru Tugas Terbaik</strong> periode tersebut.', r'Assigned as a duty teacher and chief executor for the implementation of the Amtsilati Method at a partner boarding school. Successfully graduated students according to targets, built a structured learning system, and achieved the title of <strong>Best Duty Teacher</strong> for that period.'),
    (r'05 — Keahlian', r'05 — Skills'),
    (r'Skills &amp; <span class="accent">Teknologi</span>', r'Skills &amp; <span class="accent">Technologies</span>'),
]

for old, new in replacements:
    html = re.sub(old, new, html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
