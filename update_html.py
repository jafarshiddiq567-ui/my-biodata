import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Insert KRTI 2026 achievement
krti_html = """
        <div class="achievement-item reveal">
          <div class="ach-icon">✈️</div>
          <div class="ach-body">
            <div class="ach-meta">
              <span class="ach-year">2026</span>
              <span class="ach-badge ach-purple">Finalist</span>
            </div>
            <h3>KRTI 2026 - Divisi Fixed Wing</h3>
            <p>Menjadi finalis pada Kontes Robot Terbang Indonesia (KRTI) 2026 divisi Fixed Wing, bertugas dalam perancangan dan operasional wahana terbang tanpa awak.</p>
            <img src="assets/piagam-krti.jpg" alt="KRTI 2026" class="ach-img">
          </div>
        </div>
"""
# insert before </div></div></section> of achievements
html = html.replace('      </div>\n    </div>\n  </section>\n\n  <!-- ── EDUCATION ── -->', krti_html + '      </div>\n    </div>\n  </section>\n\n  <!-- ── EDUCATION ── -->')

# 2. Update Education section
education_html = """      <div class="timeline">
        <div class="timeline-item reveal">
          <div class="timeline-dot"></div>
          <div class="timeline-card glass-card">
            <div class="timeline-header">
              <div class="edu-icon">🎓</div>
              <div>
                <h3>S1 Pendidikan Teknik Mekatronika</h3>
                <p class="institution">Universitas Negeri Yogyakarta (UNY) — Sleman, DIY</p>
              </div>
            </div>
            <div class="timeline-period">Aug 2025 — Sekarang</div>
            <p class="timeline-desc">Mempelajari keseimbangan antara ilmu agama dan ilmu dunia, serta memadukan mekanika, elektronika, dan software.</p>
            <div class="edu-tags">
              <span>Robotika</span><span>Mekatronika</span><span>Fixed Wing</span>
            </div>
          </div>
        </div>
        <div class="timeline-item reveal">
          <div class="timeline-dot"></div>
          <div class="timeline-card glass-card">
            <div class="timeline-header">
              <div class="edu-icon">🏫</div>
              <div>
                <h3>Madrasah Aliyah (MA)</h3>
                <p class="institution">MA Amtsilati — Bangsri, Jepara</p>
              </div>
            </div>
            <div class="timeline-period">Jul 2022 — May 2025</div>
            <p class="timeline-desc">Lulusan pesantren. Meraih Medali Emas Bahasa Arab Nasional, Juara 2 Bahasa Arab Kab. Jepara, dan Juara 1 Fiqih Kab. Jepara.</p>
            <div class="edu-tags">
              <span>Agama</span><span>Bahasa Arab</span><span>Prestasi</span>
            </div>
          </div>
        </div>
        <div class="timeline-item reveal">
          <div class="timeline-dot"></div>
          <div class="timeline-card glass-card">
            <div class="timeline-header">
              <div class="edu-icon">🏫</div>
              <div>
                <h3>Madrasah Tsanawiyah (MTs)</h3>
                <p class="institution">MTs Amtsilati — Bangsri, Jepara</p>
              </div>
            </div>
            <div class="timeline-period">Aug 2019 — Jun 2022</div>
            <p class="timeline-desc">Meraih Juara 1 Ilmu Fiqih tingkat Kabupaten Jepara dan Sekretaris PK IPNU MTs Amtsilati.</p>
          </div>
        </div>
      </div>"""

# Replace education timeline block
html = re.sub(r'<div class="timeline">.*?</div>\s*</div>\s*</section>\s*<!-- ── EXPERIENCE ── -->', education_html + '\n    </div>\n  </section>\n\n  <!-- ── EXPERIENCE ── -->', html, flags=re.DOTALL)


# 3. Update Experience section (combining work and org)
experience_html = """      <div class="timeline">
        <div class="timeline-item reveal">
          <div class="timeline-dot"></div>
          <div class="timeline-card glass-card">
            <div class="timeline-header">
              <div class="edu-icon">👨‍🏫</div>
              <div>
                <h3>Pengajar & Sekretaris Akademisi</h3>
                <p class="institution">Ponpes Darul Falah Amtsilati — Jepara</p>
              </div>
            </div>
            <div class="timeline-period">Jul 2024 — May 2025</div>
            <p class="timeline-desc">Mengajar banyak disiplin ilmu seperti faroidh, bahasa arab serta ilmu fiqh dengan metode cepat membaca kitab kuning. Menjadi pengajar terdisiplin.</p>
          </div>
        </div>
        <div class="timeline-item reveal">
          <div class="timeline-dot"></div>
          <div class="timeline-card glass-card">
            <div class="timeline-header">
              <div class="edu-icon">📋</div>
              <div>
                <h3>Ketua Pelaksana Metode Amtsilati</h3>
                <p class="institution">Ponpes Darul Ishlah — Tangerang</p>
              </div>
            </div>
            <div class="timeline-period">Jun 2023 — Jul 2024</div>
            <p class="timeline-desc">Berhasil mewisuda santri dalam metode Amtsilati, memenuhi target pengasuh, dan menjadi guru tugas terbaik.</p>
          </div>
        </div>
        <div class="timeline-item reveal">
          <div class="timeline-dot"></div>
          <div class="timeline-card glass-card">
            <div class="timeline-header">
              <div class="edu-icon">🤝</div>
              <div>
                <h3>Pengalaman Organisasi</h3>
                <p class="institution">Berbagai Institusi</p>
              </div>
            </div>
            <div class="timeline-period">2020 — 2025</div>
            <p class="timeline-desc">
              • <strong>Bendahara Hilpamt</strong> Ponpes Darul Falah Amtsilati (Aug 2024 - May 2025)<br>
              • <strong>Sekretaris Badan Akademisi</strong> Ponpes Darul Falah Amtsilati (Jul 2024 - May 2025)<br>
              • <strong>Sekretaris PK IPNU</strong> MTs Amtsilati (May 2020 - May 2021)
            </p>
          </div>
        </div>
      </div>"""

# Replace experience timeline block
html = re.sub(r'<div class="timeline">.*?</div>\s*</div>\s*</section>\s*<!-- ── SKILLS ── -->', experience_html + '\n    </div>\n  </section>\n\n  <!-- ── SKILLS ── -->', html, flags=re.DOTALL)


# 4. Fix CV link
html = html.replace('href="assets/cv.pdf"', 'href="assets/cv-jafar.pdf"')
html = html.replace('href="#" id="btn-download-cv"', 'href="assets/cv-jafar.pdf" id="btn-download-cv"')


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
