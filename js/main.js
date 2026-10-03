/**
 * ===================================================================
 * YOUSSEF ELFAROUK — DATA ENGINEERING PORTFOLIO ENGINE
 * Handles Theme Toggling, Project Filtering, Case Study Modals,
 * and Dynamic Rendering from portfolio-data.js.
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA === 'undefined') {

    console.error('PORTFOLIO_DATA not found. Please ensure js/portfolio-data.js is loaded.');
    return;
  }

  initTheme();
  renderHeroAndPersonal();
  renderAbout();
  renderProjects();
  renderServices();
  renderSkills();
  renderEducation();
  renderLeadership();
  initContactForm();
  initNavigation();
  initCaseStudyModal();
});

/* ===================================================================
   1. THEME SWITCHER (Light / Dark)
   =================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('depi_portfolio_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('depi_portfolio_theme', next);
    });
  }
}

/* ===================================================================
   2. HERO & PERSONAL INFO
   =================================================================== */
function renderHeroAndPersonal() {
  const p = PORTFOLIO_DATA.personal;

  // Title, Brand & Role
  const navBrand = document.getElementById('nav-brand-name');
  const heroTitle = document.getElementById('hero-title');
  const heroRole = document.getElementById('hero-role');
  const heroDesc = document.getElementById('hero-description');
  const heroPhoto = document.getElementById('hero-photo');
  const cvBtn = document.getElementById('btn-download-cv');
  const footerName = document.getElementById('footer-name');
  const footerYear = document.getElementById('footer-year');

  if (navBrand) navBrand.textContent = p.name;
  if (heroRole) {
    heroRole.innerHTML = `
      <span style="display: inline-flex; align-items: center; gap: 0.45rem;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
        ${escapeHTML(p.role)} @ Zewail City
      </span>
    `;
  }
  if (heroDesc) heroDesc.textContent = p.headline;
  if (cvBtn && p.cvUrl) cvBtn.href = p.cvUrl;
  if (footerName) footerName.textContent = p.fullName || p.name;
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  // Avatar / Profile photo with fallback
  if (heroPhoto) {
    heroPhoto.src = p.avatar;
    heroPhoto.alt = `${p.name} — ${p.role}`;
    heroPhoto.onerror = () => {
      // Professional SVG fallback representing a Data Engineer
      heroPhoto.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 480' fill='none'><rect width='400' height='480' fill='%23181F27'/><circle cx='200' cy='180' r='75' fill='%23202833' stroke='%2345B0A8' stroke-width='2'/><path d='M100 390 C100 290, 300 290, 300 390' fill='%23202833' stroke='%2345B0A8' stroke-width='2'/><text x='200' y='190' font-family='sans-serif' font-size='38' font-weight='bold' fill='%2345B0A8' text-anchor='middle'>YE</text><text x='200' y='425' font-family='monospace' font-size='14' fill='%238E9BAE' text-anchor='middle'>Junior Data Engineer</text></svg>";
    };
  }

  // Core Tech Pills
  const pillsContainer = document.getElementById('hero-tech-list');
  if (pillsContainer && p.coreTechPills) {
    pillsContainer.innerHTML = p.coreTechPills.map(tech => `
      <span class="tech-pill">${escapeHTML(tech)}</span>
    `).join('');
  }

  // Contact Info & Footer Socials
  const emailVal = document.getElementById('contact-email-val');
  const emailLink = document.getElementById('contact-email-link');
  const ghLink = document.getElementById('contact-github-link');
  const footerGh = document.getElementById('footer-github-link');
  const footerEmail = document.getElementById('footer-email-link');

  if (emailVal) emailVal.textContent = p.email;
  if (emailLink) emailLink.href = `mailto:${p.email}`;
  if (ghLink) ghLink.href = p.github;
  if (footerGh) footerGh.href = p.github;
  if (footerEmail) footerEmail.href = `mailto:${p.email}`;
}

/* ===================================================================
   2.5. ABOUT SECTION (Engineering Pillars & Editorial Narrative)
   =================================================================== */
function renderAbout() {
  const pillarsContainer = document.getElementById('about-pillars');
  const textContainer = document.getElementById('about-text-content');
  if (!PORTFOLIO_DATA.about) return;

  // Render Pillars
  if (pillarsContainer && PORTFOLIO_DATA.about.pillars) {
    const iconMap = {
      cpu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
      database: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
      code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
    };

    pillarsContainer.innerHTML = PORTFOLIO_DATA.about.pillars.map(pillar => `
      <div class="about-pillar-card">
        <div class="pillar-icon-box">
          ${iconMap[pillar.icon] || iconMap.cpu}
        </div>
        <div>
          <h3 class="pillar-title">${escapeHTML(pillar.title)}</h3>
          <p class="pillar-text">${escapeHTML(pillar.description)}</p>
        </div>
      </div>
    `).join('');
  }

  // Render Editorial Narrative
  if (textContainer && PORTFOLIO_DATA.about.editorial) {
    const ed = PORTFOLIO_DATA.about.editorial;
    textContainer.innerHTML = `
      <p class="about-lead">${escapeHTML(ed.lead)}</p>
      ${ed.paragraphs.map(p => `<p>${escapeHTML(p)}</p>`).join('')}
    `;
  }
}

/* ===================================================================
   3. PRACTICAL DATA ENGINEERING PROJECTS (Filtering & Case Studies)
   =================================================================== */
let currentFilter = 'all';

function renderProjects() {
  const container = document.getElementById('projects-container');
  const filterBar = document.getElementById('projects-filter-bar');
  if (!container || !PORTFOLIO_DATA.projects) return;

  // Filter Buttons Listener
  if (filterBar) {
    filterBar.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentFilter = e.currentTarget.dataset.filter;
        renderProjectList();
      });
    });
  }

  renderProjectList();
}

function renderProjectList() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = PORTFOLIO_DATA.projects.filter(p => {
    return currentFilter === 'all' || p.category === currentFilter;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p>No projects in this category currently.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <article class="project-card" data-category="${p.category}" id="card-${p.id}">
      <div class="project-card-info">
        <div class="project-header-meta">
          <span class="project-index">${escapeHTML(p.index)}</span>
          <span class="${p.badge.includes('PRIMARY') ? 'project-featured-badge' : 'project-secondary-badge'}">
            ${escapeHTML(p.badge)}
          </span>
          <span class="project-meta-tag">${escapeHTML(p.categoryLabel)}</span>
        </div>

        <h3 class="project-title">${escapeHTML(p.title)}</h3>
        <p class="project-short-desc">${escapeHTML(p.shortDesc)}</p>

        <!-- Problem vs Solution Comparative Grid -->
        <div class="project-problem-solution">
          <div class="ps-card ps-problem">
            <div class="ps-card-header">
              <span class="ps-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </span>
              <span class="ps-label">The Problem</span>
            </div>
            <p class="ps-text">${escapeHTML(p.problem)}</p>
          </div>

          <div class="ps-card ps-solution">
            <div class="ps-card-header">
              <span class="ps-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span class="ps-label">The Solution</span>
            </div>
            <p class="ps-text">${escapeHTML(p.solution)}</p>
          </div>
        </div>

        <!-- Tech Stack Tags -->
        <div class="project-tech-stack">
          ${p.techStack.map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('')}
        </div>

        <!-- Action Buttons -->
        <div class="project-actions">
          <button type="button" class="btn btn-primary btn-sm" onclick="openCaseStudy('${p.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>View Case Study</span>
          </button>
          ${p.githubUrl ? `
            <a href="${p.githubUrl}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub Repository</span>
            </a>
          ` : ''}
        </div>
      </div>

      <!-- Visual Slot Preview -->
      <div class="project-visual-container">
        <div class="project-preview-window">
          <div class="preview-window-bar">
            <div class="preview-window-dots">
              <span></span><span></span><span></span>
            </div>
            <span class="preview-window-title">${escapeHTML(p.imageTitle || 'Pipeline Architecture')}</span>
          </div>
          <div class="project-main-image-slot" onclick="openCaseStudy('${p.id}')">
            <img src="${p.image}" alt="${escapeHTML(p.title)}" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 500 280\\' fill=\\'none\\'><rect width=\\'500\\' height=\\'280\\' fill=\\'%23151B22\\'/><text x=\\'250\\' y=\\'130\\' font-family=\\'monospace\\' font-size=\\'15\\' fill=\\'%2345B0A8\\' text-anchor=\\'middle\\'>[ ${escapeHTML(p.title)} ]</text><text x=\\'250\\' y=\\'165\\' font-family=\\'sans-serif\\' font-size=\\'12\\' fill=\\'%238E9BAE\\' text-anchor=\\'middle\\'>Click to view pipeline case study</text></svg>'">
            <span class="project-zoom-hint">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Click for Details
            </span>
          </div>
        </div>
        <div class="project-thumbnails-row">
          <div class="project-thumb-slot active">1. Architecture</div>
          <div class="project-thumb-slot">2. Data Flow</div>
          <div class="project-thumb-slot">3. Schema Design</div>
        </div>
      </div>
    </article>
  `).join('');
}

/* ===================================================================
   4. PRACTICAL DATA ENGINEERING SERVICES
   =================================================================== */
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container || !PORTFOLIO_DATA.services) return;

  container.innerHTML = PORTFOLIO_DATA.services.map((s, idx) => `
    <div class="service-card ${idx === 4 ? 'service-card-wide' : ''}">
      <div class="service-card-top">
        <span class="service-number">${escapeHTML(s.number)}</span>
        <div class="service-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
        </div>
      </div>
      <h3>${escapeHTML(s.title)}</h3>
      <p>${escapeHTML(s.description)}</p>
      <ul class="service-deliverables">
        ${s.deliverables.map(d => `
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            ${escapeHTML(d)}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

/* ===================================================================
   5. SKILLS & TOOLS (Grouped without arbitrary percentage ratings)
   =================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container || !PORTFOLIO_DATA.skills) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map(group => `
    <div class="skill-category-card ${group.isLead ? 'skill-lead-card' : ''}">
      <div class="category-header">
        <div class="category-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
        </div>
        <div>
          <h3 class="category-title">${escapeHTML(group.category)}</h3>
          <span class="category-subtitle">${escapeHTML(group.subtitle)}</span>
        </div>
      </div>
      <div class="skills-badge-list">
        ${group.items.map(item => `
          <span class="skill-badge ${item.highlight ? 'badge-highlight' : ''}">
            <svg class="skill-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${escapeHTML(item.name)}</span>
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ===================================================================
   6. ACADEMIC EDUCATION (Zewail City & Assiut STEM School)
   =================================================================== */
function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container || !PORTFOLIO_DATA.educationList) return;

  container.innerHTML = PORTFOLIO_DATA.educationList.map(edu => `
    <div class="education-credential-card">
      <div class="credential-crest-col">
        <div class="education-crest-box" style="background: #fff; padding: 6px; overflow: hidden;">
          ${edu.logo
            ? `<img src="${edu.logo}" alt="${escapeHTML(edu.institution)} logo"
                 style="width: 100%; height: 100%; object-fit: contain; border-radius: 8px;"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
               <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" style="display:none; align-items:center; justify-content:center;">
                 <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                 <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
               </svg>`
            : `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                 <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
               </svg>`
          }
        </div>
        <span class="credential-year-pill">${escapeHTML(edu.period)}</span>
      </div>

      <div class="credential-info-col" style="flex-grow: 1;">
        <span class="credential-level-badge">${escapeHTML(edu.level)}</span>
        <h3 class="education-degree">${escapeHTML(edu.degree)}</h3>
        <div class="education-faculty">${escapeHTML(edu.institution)}</div>

        ${edu.honor ? `
          <div style="display: inline-flex; align-items: center; gap: 0.45rem; margin-top: 0.5rem; background: var(--accent-gold-soft); border: 1px solid var(--accent-gold-border); padding: 0.35rem 0.85rem; border-radius: var(--radius-full); width: fit-content;">
            <span style="font-size: 1rem;">🏆</span>
            <span style="color: var(--accent-gold); font-size: 0.88rem; font-weight: 700;">${escapeHTML(edu.honor)}</span>
          </div>
        ` : ''}

        <div class="education-meta-row">
          <span class="education-period">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${escapeHTML(edu.period)}
          </span>
          <span class="education-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${escapeHTML(edu.location)}
          </span>
        </div>

        ${edu.highlights && edu.highlights.length > 0 ? `
          <ul style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.45rem; list-style: none;">
            ${edu.highlights.map(h => `
              <li style="font-size: 0.93rem; color: var(--text-secondary); display: flex; gap: 0.5rem; align-items: flex-start;">
                <span style="color: var(--accent-blue-light); font-weight: bold; line-height: 1.4;">▹</span>
                <span>${escapeHTML(h)}</span>
              </li>
            `).join('')}
          </ul>
        ` : ''}
      </div>
    </div>
  `).join('');
}

/* ===================================================================
   7. LEADERSHIP, INITIATIVES & COMPETITIONS
   =================================================================== */
function renderLeadership() {
  const container = document.getElementById('leadership-container');
  if (!container || !PORTFOLIO_DATA.leadershipAndAchievements) return;

  const iconMap = {
    award: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    users: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    cpu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.leadershipAndAchievements.map(item => `
    <div class="training-card" style="display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div class="training-card-header">
          <div class="training-logo-wrapper">
            ${iconMap[item.icon] || iconMap.award}
          </div>
          <div class="training-title-block">
            <div class="training-header-top">
              <h3 class="training-title">${escapeHTML(item.title)}</h3>
              <span class="training-badge-status">
                <span class="training-pulse-dot"></span>
                ${escapeHTML(item.badge)}
              </span>
            </div>
            <div class="training-subtitle">
              ${escapeHTML(item.issuer)} · <span style="color: var(--text-muted); font-size: 0.85rem;">${escapeHTML(item.date)}</span>
            </div>
          </div>
        </div>
        <div class="training-body">
          <p class="training-desc">${escapeHTML(item.description)}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* ===================================================================
   7. CASE STUDY MODAL
   =================================================================== */
let activeProjectId = null;

function initCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const nextBtn = document.getElementById('modal-next-project-btn');

  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener('click', closeCaseStudy);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCaseStudy();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCaseStudy();
    }
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const projects = PORTFOLIO_DATA.projects;
      const idx = projects.findIndex(p => p.id === activeProjectId);
      const nextIdx = (idx + 1) % projects.length;
      openCaseStudy(projects[nextIdx].id);
    });
  }
}

function openCaseStudy(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  activeProjectId = projectId;
  const modal = document.getElementById('case-study-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalBody = document.getElementById('modal-case-study-content');
  const modalGhBtn = document.getElementById('modal-github-btn');

  if (!modal || !modalBody) return;

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalGhBtn && project.githubUrl) {
    modalGhBtn.href = project.githubUrl;
    modalGhBtn.style.display = 'inline-flex';
  } else if (modalGhBtn) {
    modalGhBtn.style.display = 'none';
  }

  const cs = project.caseStudy || {};

  modalBody.innerHTML = `
    <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
      <span class="project-featured-badge">${escapeHTML(project.badge)}</span>
      <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-primary);">${escapeHTML(project.categoryLabel)}</span>
    </div>

    <div>
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Project Overview</h3>
      <p style="font-size: 0.98rem; color: var(--text-secondary); line-height: 1.65;">
        ${escapeHTML(project.shortDesc)}
      </p>
    </div>

    <!-- Problem vs Solution in Modal -->
    <div class="project-problem-solution" style="margin: 0;">
      <div class="ps-card ps-problem">
        <div class="ps-card-header">
          <span class="ps-label">The Core Problem</span>
        </div>
        <p class="ps-text">${escapeHTML(project.problem)}</p>
      </div>

      <div class="ps-card ps-solution">
        <div class="ps-card-header">
          <span class="ps-label">Engineered Solution</span>
        </div>
        <p class="ps-text">${escapeHTML(project.solution)}</p>
      </div>
    </div>

    ${cs.architecture ? `
      <div style="background-color: var(--bg-surface-elevated); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <h4 style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--accent-primary); text-transform: uppercase; margin-bottom: 0.4rem;">Pipeline Architecture</h4>
        <p style="font-size: 0.92rem; color: var(--text-primary); font-family: var(--font-mono);">${escapeHTML(cs.architecture)}</p>
      </div>
    ` : ''}

    ${cs.keyAchievements && cs.keyAchievements.length > 0 ? `
      <div>
        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">Technical Implementation Highlights:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
          ${cs.keyAchievements.map(ach => `
            <li style="display: flex; gap: 0.6rem; font-size: 0.9rem; color: var(--text-secondary);">
              <span style="color: var(--accent-primary); font-weight: bold;">▹</span>
              <span>${escapeHTML(ach)}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    ` : ''}

    <div>
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Technologies & Frameworks:</h4>
      <div class="project-tech-stack" style="margin-bottom: 0;">
        ${project.techStack.map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
  const modal = document.getElementById('case-study-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.openCaseStudy = openCaseStudy;
window.closeCaseStudy = closeCaseStudy;

/* ===================================================================
   8. NAVIGATION & MOBILE DRAWER
   =================================================================== */
function initNavigation() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (mobileBtn && drawer) {
    mobileBtn.addEventListener('click', () => {
      drawer.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('active');
      });
    });
  }

  // Scroll spy
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === `#${id}`) {
            l.classList.add('active');
          }
        });
      }
    });
  });
}

/* ===================================================================
   9. CONTACT FORM
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-inquiry-form');
  const alertBox = document.getElementById('form-status-alert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const service = form.elements['service']?.value;
    const message = form.elements['message']?.value.trim();

    if (!name || !email || !message) return;

    const submitBtn = document.getElementById('btn-submit-inquiry');
    const origHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending Inquiry...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = origHTML;
      submitBtn.disabled = false;
      form.reset();

      if (alertBox) {
        alertBox.textContent = `Thank you, ${name}! Your inquiry regarding "${service}" has been received. I will review your requirements and get in touch with you shortly.`;
        alertBox.style.display = 'block';

        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 6000);
      }
    }, 900);
  });
}

// XSS Prevention Utility
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
