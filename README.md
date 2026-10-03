# 🌟 Youssef Elfarouk — Junior Data Engineer Portfolio

A clean, executive, and high-performance Data Engineering portfolio tailored for academic and initiative evaluation rubrics (such as the **Digital Egypt Pioneers Initiative — DEPI**).

Built using pure modern web standards (**HTML5, Vanilla CSS, and JavaScript**) with **zero external heavy frameworks or dependencies**, ensuring instantaneous page loads, full responsive fidelity, and total ease of maintenance.

---

## 📁 Directory Structure

```text
Youssef's portfolio/
├── index.html              # Clean semantic layout & section architecture
├── css/
│   └── style.css           # Executive Slate & Teal design tokens, components & responsive queries
├── js/
│   ├── portfolio-data.js   # 🎯 ALL YOUR DATA & CONTENT (Edit this file to update everything!)
│   └── main.js             # Engine that renders projects, filters, and case study modals
└── README.md               # Customization guide (this file)
```

---

## 🎯 How to Customize Your Portfolio Information

All your personal details, project case studies, services, skills, education, and DEPI training details are cleanly separated inside:
👉 **[`js/portfolio-data.js`](js/portfolio-data.js)**

### 1. Update Personal Info & Contact
Edit the `personal` object at the top:
```javascript
personal: {
  name: "Youssef Elfarouk",
  role: "Junior Data Engineer",
  headline: "I build reliable data pipelines that turn messy data into clean, structured information businesses can trust.",
  email: "your.real.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  avatar: "assets/images/profile.jpg", // Replace with your photo
  cvUrl: "assets/cv/Youssef_Elfarouk_CV.pdf" // Link to your CV PDF
}
```

### 2. Add or Edit Practical Data Engineering Projects
Each project has an explicit **The Problem** vs. **The Solution** comparison, tech tags, and a detailed **Case Study** modal view:
```javascript
{
  id: "my-new-etl-pipeline",
  index: "04 // ETL & STREAMING",
  badge: "CASE STUDY 04",
  category: "warehousing-etl", // or "cleaning-quality"
  categoryLabel: "Data Warehousing & ETL",
  title: "Real-Time Streaming & Transformation Pipeline",
  shortDesc: "Brief overview of what this pipeline accomplishes.",
  problem: "The specific data quality or silo issue that needed fixing.",
  solution: "The exact pipeline architecture and tooling implemented to solve it.",
  techStack: ["Python", "PySpark", "Kafka", "PostgreSQL"],
  githubUrl: "https://github.com/your-username/project-repo",
  caseStudy: {
    architecture: "Ingestion -> Cleaning -> Analytical Star Schema",
    keyAchievements: [
      "Handled 100k+ records per second with 99.9% uptime.",
      "Reduced processing latency by 45% using partition pruning."
    ]
  }
}
```

### 3. Add or Modify Skills
Skills are grouped by **functional domain without arbitrary percentages** (aligned with engineering evaluation standards):
- **Data Engineering** (ETL/ELT, Data Cleaning, Data Quality, Data Warehousing, Star Schema, etc.)
- **Programming & Data** (Python, SQL, Pandas, NumPy, Matplotlib)
- **Databases** (SQL Server / T-SQL, PostgreSQL, MySQL)
- **Development & Tools** (Git, GitHub, Jupyter, VS Code, Linux)

### 4. Update Education & DEPI Training
- Education is configured for **Bachelor's Degree in Communication and Information Engineering (Year 2 student)**.
- Training is spotlighted for the **Digital Egypt Pioneers Initiative (DEPI)** — AI & Data Science (Microsoft Data Engineer track).

---

## 🎨 Design Tokens & Customization

The design tokens are located in [`css/style.css`](css/style.css) under `:root`:
- `--bg-primary: #12161C` (Deep Slate Gray foundation)
- `--bg-surface: #181F27` (Card & Elevated Surface)
- `--accent-primary: #45B0A8` (Soft Teal)
- `--accent-gold: #D4B483` (Selective Accent Badge)
- `--text-primary: #F8F9FA` (Crisp Off-White)

Includes full support for both **Dark Mode** and **Light Mode** with persistence in `localStorage`.

---

## 🚀 How to Run Locally & Publish

### Running Locally
You can simply double-click `index.html` to open it in your browser!
Or run a local server:
```powershell
python -m http.server 8080
```
Then open `http://localhost:8080`.

### Deploy Online for Free
1. **GitHub Pages**:
   - Push this repo to GitHub and enable Pages in **Settings > Pages**.
2. **Vercel**:
   - Import your GitHub repo on [Vercel](https://vercel.com) for instant deployment with custom domain support.
