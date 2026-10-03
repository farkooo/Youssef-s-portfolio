/**
 * ===================================================================
 * 🌟 YOUSSEF ELFAROUK — DATA ENGINEERING PORTFOLIO DATA
 * Freelance-oriented, moderate, honest, and grounded in verified CV facts.
 * Specialized in: Data Cleaning, ETL Pipelines, SQL, and Python.
 * ===================================================================
 */

const PORTFOLIO_DATA = {
  // -----------------------------------------------------------------
  // 👤 1. PERSONAL INFORMATION & FREELANCE PROFILE
  // -----------------------------------------------------------------
  personal: {
    name: "Youssef Elfarouk",
    fullName: "Youssef Mohamed Mahmoud Elfarouk Abdelrazek",
    role: "Junior Data Engineer",
    subRole: "ETL Pipelines · Data Cleaning · SQL Databases · Python Automation",
    headline: "Communication & Information Engineering student at Zewail City, building dependable data solutions. Specializing in Python, Pandas, and SQL Server to clean messy datasets, construct automated ETL pipelines, and structure relational databases for freelance clients.",
    location: "Assiut / Cairo, Egypt",
    email: "s-youssef.abdelrazek@zewailcity.edu.eg",
    phone: "+20 155 012 8400",
    linkedin: "www.linkedin.com/in/youssef-elfarouk-6767jk",
    github: "https://github.com/farkooo",
    cvUrl: "assets/cv/Youssef_Elfarouk_CV.pdf",
    avatar: "assets/images/profile.jpg",
    statusBadge: "Available for Data Engineering Gigs",
    coreTechPills: [
      "Python",
      "SQL (SQL Server)",
      "Pandas & NumPy",
      "ETL Pipelines",
      "Data Cleaning & Validation",
      "Star Schema Modeling",
      "Web Scraping",
      "Git & GitHub"
    ]
  },

  // -----------------------------------------------------------------
  // 📖 2. ABOUT ME & FREELANCE WORK ETHIC
  // -----------------------------------------------------------------
  about: {
    pillars: [
      {
        title: "Data Cleaning & Quality Assurance",
        description: "Eliminating duplicates, resolving nulls, enforcing consistent formats, and isolating bad records into quarantine tables so downstream analytics never crash.",
        icon: "database"
      },
      {
        title: "Automated ETL Pipelines",
        description: "Writing lightweight, automated Python & SQL scripts to extract from CSVs, APIs, or databases, transform business logic, and load into structured storage.",
        icon: "cpu"
      },
      {
        title: "Relational & Dimensional Modeling",
        description: "Designing clean database schemas, Medallion storage flows (Bronze → Silver → Gold), Star Schema fact & dimension tables, and optimized SQL queries.",
        icon: "code"
      }
    ],
    editorial: {
      lead: "I am an aspiring Junior Data Engineer and Communication & Information Engineering student at Zewail City, dedicated to delivering clean, reliable, and automated data solutions for freelance clients.",
      paragraphs: [
        "My analytical mindset was shaped at Assiut STEM School, where I graduated ranked 1st in the Mathematics Track in Grade 12. That rigorous mathematical and computational background provides me with the discipline needed to build solid ETL logic, diagnose data anomalies, and ensure numerical accuracy across complex pipelines.",
        "Through practical training in the Digital Egypt Pioneers Initiative (DEPI) Data Engineering track, university coursework, and competitive programming (ECPC), I develop reliable data workflows using Python (Pandas/NumPy) and SQL Server. I don't exaggerate my capabilities or hide behind buzzwords; I focus on readable code, transparent data transformations, and reliable execution.",
        "Whether you need messy spreadsheets normalized into a relational database, an automated web scraper to collect market listings, or an end-to-end data pipeline, I deliver neat, well-tested, and maintainable work on schedule."
      ]
    }
  },

  // -----------------------------------------------------------------
  // 🚀 3. DATA ENGINEERING PROJECTS (FREELANCE SHOWCASE)
  // -----------------------------------------------------------------
  projects: [
    {
      id: "data-warehouse-etl",
      index: "01 // DATA WAREHOUSING & MODELING",
      badge: "★ FEATURED GIG SHOWCASE",
      category: "warehousing-etl",
      categoryLabel: "Data Warehousing & ETL",
      title: "Enterprise Data Warehouse & Medallion ETL Pipeline",
      shortDesc: "A multi-layered data warehouse architecture implemented in SQL Server, transforming raw CRM and ERP transaction extracts into an analytics-ready Star Schema using Medallion Architecture (Bronze → Silver → Gold).",
      problem: "Disorganized, duplicate transactional CSV extracts from CRM and ERP systems with inconsistent dates, missing customer keys, and non-relational structures unfit for business reporting.",
      solution: "Architected a Medallion pipeline in SQL Server using stored procedures: raw staging in Bronze, deduplication and ISO date normalization in Silver, and Kimball Star Schema (Fact_Sales, Dim_Customer, Dim_Product) in Gold.",
      techStack: ["SQL Server", "T-SQL", "ETL Pipelines", "Data Modeling", "Star Schema", "Stored Procedures"],
      githubUrl: "https://github.com/youssefelfarouk/sql-data-warehouse-project",
      image: "assets/images/dwh-architecture-diagram.svg",
      imageTitle: "SQL Server · Medallion Data Architecture",
      caseStudy: {
        architecture: "Bronze Staging → Silver Cleaned & Conformed → Gold Star Schema (Kimball Methodology)",
        datasetDetails: "CRM and ERP transactional datasets with multi-table sales and customer entities.",
        keyAchievements: [
          "Automated duplicate elimination using ROW_NUMBER() window partitioning in T-SQL.",
          "Standardized customer registry attributes and enforced referential integrity across foreign keys.",
          "Designed dimension surrogate keys to handle historical record tracking efficiently.",
          "Encapsulated data flow into idempotent T-SQL stored procedures with full rollback on error."
        ]
      }
    },
    {
      id: "telecom-log-pipeline",
      index: "02 // DATA QUALITY & PIPELINES",
      badge: "★ DATA CLEANING & VALIDATION",
      category: "cleaning-quality",
      categoryLabel: "Data Cleaning & Quality",
      title: "Network Session Log Data Quality & Anomaly Quarantine Engine",
      shortDesc: "An automated Python and Pandas data cleaning and validation pipeline processing 250,000+ session logs, profiling anomalies, and quarantining corrupted records into an audit log without pipeline halts.",
      problem: "High-volume raw session records containing missing timestamps, placeholder strings ('UNKNOWN', 'ERR_NULL'), and corrupt packet metrics that repeatedly caused downstream BI dashboard crashes.",
      solution: "Constructed a modular Python & Pandas validation engine to profile data distributions, sanitize strings with regex, enforce custom business rule assertions, and isolate bad records into an audit table.",
      techStack: ["Python", "Pandas", "NumPy", "Data Quality", "Data Profiling", "Regex Validation"],
      githubUrl: "https://github.com/youssefelfarouk/network-data-quality-pipeline",
      image: "assets/images/telecom-pipeline-diagram.svg",
      imageTitle: "Python · Network Log Quality Engine",
      caseStudy: {
        architecture: "Raw Log Ingestion → Schema Profiling → Regex Sanitization → Assertion Rules → Partitioned Output",
        datasetDetails: "Over 250,000 multi-node network session logs.",
        keyAchievements: [
          "Automated detection and correction of 18,000+ corrupted string placeholders using vectorized Pandas operations.",
          "Quarantined 3.2% malformed records into a dedicated audit table with reason codes, achieving 100% downstream pipeline uptime.",
          "Reduced data cleansing execution time by 65% through vectorized logic replacing slow row-by-row loops."
        ]
      }
    },
    {
      id: "web-scraper-pipeline",
      index: "03 // WEB DATA EXTRACTION",
      badge: "★ FREELANCE WEB GIG",
      category: "scraping-ingestion",
      categoryLabel: "Web Scraping & Ingestion",
      title: "Automated Web Data Scraper & Relational Ingestion Pipeline",
      shortDesc: "A Python web scraping and data pipeline using Requests and BeautifulSoup to extract, clean, and persist structured product and market data into a query-ready relational database.",
      problem: "Manual copy-pasting of competitive market listings across dynamic web pages was slow, error-prone, and provided unstandardized pricing and specification text.",
      solution: "Engineered an automated Python crawler with polite rate limiting, user-agent headers, text cleaning regex, and automated SQLite / CSV relational export.",
      techStack: ["Python", "BeautifulSoup", "Requests", "SQLite / SQL", "Data Cleaning", "Automation"],
      githubUrl: "https://github.com/youssefelfarouk/web-scraping-data-pipeline",
      image: "assets/images/scraper-pipeline-diagram.svg",
      imageTitle: "Python · Automated Web Data Extractor",
      caseStudy: {
        architecture: "Target Web Pages → HTTP Request Engine → HTML Parser (BeautifulSoup) → Text Cleaning → Structured Database",
        datasetDetails: "Thousands of catalog product listings, pricing history, and attribute specifications.",
        keyAchievements: [
          "Implemented polite crawling with exponential backoff and status-code validation.",
          "Extracted and normalized messy text fields (currency symbols, measurement units) into clean numeric datatypes.",
          "Exported clean tables into relational SQLite and structured CSVs ready for immediate analytics."
        ]
      }
    },
    {
      id: "embedded-systems-arduino",
      index: "04 // HARDWARE TELEMETRY & IOT",
      badge: "★ STEM CAPSTONE PROJECT",
      category: "iot-telemetry",
      categoryLabel: "Hardware Telemetry & IoT",
      title: "IoT Sensor Telemetry Ingestion & Real-Time Monitoring",
      shortDesc: "An embedded sensor telemetry pipeline using Arduino and C++ to collect analog/digital readings, filter signal noise, and transmit time-series metrics over serial to a data logging workstation.",
      problem: "Raw hardware sensors suffer from noise fluctuations, calibration offsets, and unhandled serial disconnection errors when transmitting telemetry to host machines.",
      solution: "Programmed Arduino C++ firmware with moving-average noise filtering, interrupt-driven sampling, and formatted telemetry output streams for data logging and automated control.",
      techStack: ["Arduino C/C++", "C++", "Embedded Systems", "Sensor Integration", "Data Logging", "Circuit Simulation"],
      githubUrl: "https://github.com/youssefelfarouk/arduino-embedded-projects",
      image: "assets/images/embedded-project-diagram.svg",
      imageTitle: "Embedded Systems · Telemetry Stream",
      caseStudy: {
        architecture: "Sensor Probes → Signal Conditioning → Arduino MCU → Serial Protocol → Host Data Ingestion",
        datasetDetails: "Real-time time-series telemetry streams, environmental sensor voltages, and serial event logs.",
        keyAchievements: [
          "Developed for Grade 12 STEM capstone, ranking 1st in the Mathematics Track cohort.",
          "Implemented moving-average digital filtering directly on microcontroller to clean signal noise before ingestion.",
          "Built automated threshold alerts and fail-safe exception routines."
        ]
      }
    }
  ],

  // -----------------------------------------------------------------
  // 🛠️ 4. FREELANCE DATA ENGINEERING SERVICES (GIG OFFERINGS)
  // -----------------------------------------------------------------
  services: [
    {
      number: "01",
      title: "Data Cleaning & Preprocessing",
      description: "Transform messy, duplicate, or unformatted spreadsheets and CSVs into pristine, standardized datasets ready for analysis and reporting.",
      deliverables: [
        "Duplicate removal & missing value handling (Pandas)",
        "Standardizing dates, currencies, text casing & data types",
        "Data validation reports & quarantine audit tables"
      ]
    },
    {
      number: "02",
      title: "Automated ETL Pipelines",
      description: "Build automated workflows to extract data from APIs, CSV files, or databases, apply required business transformations, and load into target tables.",
      deliverables: [
        "Idempotent Python and SQL batch pipeline scripts",
        "Automated recurring execution & error logging",
        "Resilient exception handling that prevents crashes"
      ]
    },
    {
      number: "03",
      title: "SQL Database Design & Queries",
      description: "Design organized relational schemas, Star Schemas (fact & dimension tables), and write clean, efficient SQL queries in SQL Server or PostgreSQL.",
      deliverables: [
        "Relational table design & Star Schema dimensional modeling",
        "Complex SQL queries, joins, window functions & views",
        "Stored procedures with transaction rollback safeguards"
      ]
    },
    {
      number: "04",
      title: "Web Scraping & Data Extraction",
      description: "Extract public market data, product catalogs, or directory listings from websites using automated Python crawlers.",
      deliverables: [
        "Custom Python scrapers (BeautifulSoup & Requests)",
        "Polite rate limiting, error retries & user-agent headers",
        "Export directly to structured Excel, CSV, or SQL"
      ]
    },
    {
      number: "05",
      title: "Excel / CSV to Database Migration",
      description: "Migrate multi-tab Excel sheets into properly structured relational tables with primary/foreign keys and data validation constraints.",
      deliverables: [
        "Schema design & data normalization (3NF / Star Schema)",
        "Automated Python loading scripts for future updates",
        "Clear documentation of table relationships and columns"
      ]
    }
  ],

  // -----------------------------------------------------------------
  // ⚡ 5. SKILLS & TECHNOLOGIES (MODERATE & HONEST)
  // -----------------------------------------------------------------
  skills: [
    {
      category: "Data Engineering & Analysis",
      subtitle: "Core Data Stack",
      isLead: true,
      items: [
        { name: "Python", highlight: true },
        { name: "SQL (SQL Server / T-SQL)", highlight: true },
        { name: "Pandas", highlight: true },
        { name: "NumPy", highlight: true },
        { name: "Data Cleaning", highlight: true },
        { name: "ETL Pipelines", highlight: true },
        { name: "Star Schema Modeling", highlight: false },
        { name: "Data Validation & Profiling", highlight: false }
      ]
    },
    {
      category: "Programming & Problem Solving",
      subtitle: "Algorithms & Logic",
      isLead: false,
      items: [
        { name: "C++", highlight: true },
        { name: "Algorithms & Data Structures", highlight: true },
        { name: "Competitive Programming (ECPC)", highlight: true },
        { name: "Object-Oriented Programming (OOP)", highlight: false },
        { name: "Discrete Math & Logic", highlight: false }
      ]
    },
    {
      category: "Data Extraction & Scripting",
      subtitle: "Web & File Ingestion",
      isLead: false,
      items: [
        { name: "Web Scraping (BeautifulSoup)", highlight: true },
        { name: "Requests (HTTP Ingestion)", highlight: true },
        { name: "Automated Batch Scripts", highlight: false },
        { name: "CSV / Excel / JSON Ingestion", highlight: true },
        { name: "Regex Data Sanitization", highlight: false }
      ]
    },
    {
      category: "Developer Tools & Environment",
      subtitle: "Workflow & Engineering Tools",
      isLead: false,
      items: [
        { name: "Git & GitHub", highlight: true },
        { name: "VS Code", highlight: false },
        { name: "Jupyter Notebook", highlight: true },
        { name: "Arduino IDE", highlight: false },
        { name: "Microsoft Excel", highlight: false },
        { name: "Linux / Bash basics", highlight: false }
      ]
    }
  ],

  // -----------------------------------------------------------------
  // 🎓 6. ACADEMIC EDUCATION (CREDIBILITY FOR FREELANCING)
  // -----------------------------------------------------------------
  educationList: [
    {
      institution: "Zewail City of Science, Technology and Innovation",
      degree: "B.Sc. in Communication and Information Engineering",
      period: "2025 – Present",
      level: "Undergraduate Degree — Year 2",
      location: "Giza / Cairo, Egypt",
      logo: "assets/images/zewail-logo.jpg",
      highlights: [
        "Rigorous coursework in computational systems, discrete mathematics, network architectures, and algorithms.",
        "Active member in competitive programming and university technical communities."
      ]
    },
    {
      institution: "Assiut STEM School",
      degree: "High School Diploma, STEM Track",
      period: "Graduated 2025",
      level: "STEM High School Diploma",
      location: "Assiut, Egypt",
      logo: "assets/images/assiut-stem-logo.jpg",
      honor: "Ranked 1st in the Mathematics Track in Grade 12",
      highlights: [
        "Ranked 1st in the Mathematics Track across Grade 12, demonstrating exceptional quantitative and analytical problem solving.",
        "Engineered research-driven capstone projects integrating Arduino microcontroller solutions and sensor data telemetry.",
        "Conducted scientific research activities under university faculty mentorship during high school."
      ]
    }
  ],

  // -----------------------------------------------------------------
  // 🏆 7. TRAINING, INITIATIVES & COMPETITIONS
  // -----------------------------------------------------------------
  leadershipAndAchievements: [
    {
      title: "Digital Egypt Pioneers Initiative (DEPI)",
      issuer: "Ministry of Communications and Information Technology (MCIT)",
      date: "Active Trainee",
      badge: "Data Engineering Track",
      description: "Practical technical training in Data Engineering fundamentals: Python, SQL databases, ETL pipelines, and data storage architectures.",
      icon: "database"
    },
    {
      title: "Digital Egypt Cubs Initiative (DECI)",
      issuer: "Ministry of Communications and Information Technology (MCIT), Egypt",
      date: "Graduated",
      badge: "2nd Place Cohort Project",
      description: "Completed intensive technical program in technology and innovation. Contributed to a graduation project ranked 2nd within the physical cohort.",
      icon: "award"
    },
    {
      title: "Leaders of Tomorrow Program",
      issuer: "Leadership & Professional Development Program",
      date: "Certified",
      badge: "Student of the Module (3/5)",
      description: "Earned Student of the Module honors in 3 out of 5 modules. Developed strong client communication, project delivery, and collaborative problem-solving skills.",
      icon: "users"
    },
    {
      title: "Egyptian Collegiate Programming Contest (ECPC)",
      issuer: "ECPC / ACM-ICPC Community",
      date: "Participant",
      badge: "Competitive Programmer",
      description: "Tackled algorithmic and computational challenges under strict time constraints, sharpening algorithmic complexity analysis and edge-case handling.",
      icon: "code"
    }
  ],

  // Languages
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional Working Proficiency" }
  ]
};

// Expose globally
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
