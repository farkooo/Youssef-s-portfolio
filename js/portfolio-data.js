/**
 * ===================================================================
 * 🌟 YOUSSEF ELFAROUK — DATA ENGINEERING PORTFOLIO DATA CONFIGURATION
 * ===================================================================
 * 
 * Edit this file to add or update any of your projects, skills, education, 
 * or contact information. All changes will instantly update on your website!
 */

const PORTFOLIO_DATA = {
  // -----------------------------------------------------------------
  // 👤 1. PERSONAL INFORMATION
  // -----------------------------------------------------------------
  personal: {
    name: "Youssef Elfarouk",
    role: "Junior Data Engineer",
    headline: "I build reliable data pipelines that turn messy data into clean, structured information businesses can trust.",
    location: "Cairo, Egypt",
    email: "youssef.elfarouk.data@gmail.com", // Replace with your real email
    github: "https://github.com/youssefelfarouk", // Replace with your GitHub profile
    linkedin: "https://linkedin.com/in/youssefelfarouk", // Replace with your LinkedIn profile
    cvUrl: "assets/cv/Youssef_Elfarouk_CV.pdf", // Path to your CV file
    avatar: "assets/images/profile.jpg", // Photo or placeholder
    coreTechPills: [
      "SQL",
      "Python",
      "ETL / ELT",
      "Data Cleaning",
      "Data Quality",
      "Data Warehousing",
      "Dimensional Modeling",
      "Star Schema"
    ]
  },

  // -----------------------------------------------------------------
  // 📖 2. ABOUT ME & ENGINEERING PILLARS
  // -----------------------------------------------------------------
  about: {
    pillars: [
      {
        title: "Reliable Data Solutions",
        description: "Turning raw, messy data into trustworthy, production-grade information that business stakeholders can depend upon.",
        icon: "shield"
      },
      {
        title: "End-to-End Warehousing",
        description: "Hands-on architecture in SQL Server & PostgreSQL using Kimball dimensional modeling, Star Schema designs, and Medallion layered storage.",
        icon: "database"
      },
      {
        title: "Practical Engineering",
        description: "Isolating anomalies, resolving corrupted records, and engineering resilient automated workflows with Python and SQL.",
        icon: "activity"
      }
    ],
    editorial: {
      lead: "I'm a Junior Data Engineer and Communication & Information Engineering student (Year 2) focused on building reliable data solutions and turning raw data into dependable business assets.",
      paragraphs: [
        "I work mainly with Python and SQL for data cleaning, data quality validation, ETL/ELT pipelines, data warehousing, and dimensional modeling. Drawing on my academic foundation in communication, networks, and algorithms, I approach data engineering from a practical perspective.",
        "Through hands-on projects, I've applied these skills to real-world data challenges, including designing an end-to-end data warehouse using SQL Server and working with multi-source, messy datasets containing missing values, duplicates, invalid records, and inconsistent formats.",
        "My goal is simple: understand the business domain, identify data bottlenecks, and build reliable workflows that make data clean, consistent, structured, and ready for analytics and reporting."
      ]
    }
  },

  // -----------------------------------------------------------------
  // 🚀 3. PRACTICAL DATA ENGINEERING PROJECTS
  // -----------------------------------------------------------------
  projects: [
    {
      id: "data-warehouse-etl",
      index: "01 // FEATURED DWH",
      badge: "★ PRIMARY CASE STUDY",
      category: "warehousing-etl",
      categoryLabel: "Data Warehousing & ETL",
      title: "End-to-End Data Warehouse & ETL Pipeline",
      shortDesc: "A multi-layered data warehouse architecture implemented in SQL Server, transforming raw CRM and ERP data into an analytics-ready Star Schema using Medallion Architecture (Bronze → Silver → Gold).",
      problem: "Siloed, inconsistent transactional CSV files from CRM and ERP sources with duplicate entries, missing relationships, and formats not suitable for analytics.",
      solution: "Built a Bronze → Silver → Gold pipeline using SQL Server stored procedures: raw ingestion, T-SQL cleaning and transformation, and Star Schema dimensional modeling in the Gold layer.",
      techStack: ["SQL Server", "T-SQL", "ETL", "Data Warehousing", "Data Modeling", "Star Schema"],
      githubUrl: "https://github.com/youssefelfarouk/sql-data-warehouse-project",
      image: "assets/images/dwh-architecture-diagram.png",
      imageTitle: "SQL Server · Medallion Data Architecture",
      // Deep-dive details for Case Study modal:
      caseStudy: {
        architecture: "Medallion Architecture (Bronze Staging → Silver Cleaned & Conformed → Gold Star Schema Marts)",
        datasetDetails: "ERP & CRM transactional datasets, customer registries, and sales ledgers.",
        keyAchievements: [
          "Eliminated duplicate transactional records using ROW_NUMBER() window partitions.",
          "Standardized ISO datetime formats and normalized foreign key relationships.",
          "Constructed Dim_Customer, Dim_Product, and Fact_Sales tables with surrogate keys.",
          "Encapsulated ETL logic into idempotent T-SQL stored procedures with full transaction rollback."
        ]
      }
    },
    {
      id: "telecom-log-pipeline",
      index: "02 // DATA QUALITY & PIPELINES",
      badge: "CASE STUDY 02",
      category: "cleaning-quality",
      categoryLabel: "Data Cleaning & Quality",
      title: "Network Log Data Cleaning & Quality Pipeline",
      shortDesc: "A Python and Pandas data cleaning and quality validation pipeline for 250,000+ telecommunication network session logs, profiling anomalies and quarantining corrupted records.",
      problem: "High-volume raw session records containing missing timestamps, duplicate session UUIDs, placeholder strings ('UNKNOWN', 'ERR_NULL'), and out-of-bounds packet metrics.",
      solution: "Engineered an automated Python & Pandas pipeline to profile statistical distributions, standardize categorical statuses, enforce business rule assertions, and quarantine invalid entries into a dedicated audit table.",
      techStack: ["Python", "Pandas", "NumPy", "Data Quality", "Data Profiling", "Logging"],
      githubUrl: "https://github.com/youssefelfarouk/network-data-quality-pipeline",
      image: "assets/images/telecom-pipeline-diagram.png",
      imageTitle: "Python · Network Log Quality Engine",
      caseStudy: {
        architecture: "Automated Ingestion → Schema Profiling → Regex Sanitization → Rule Assertion → Partitioned Export",
        datasetDetails: "Over 250,000 multi-node network traffic session records.",
        keyAchievements: [
          "Detected and resolved 18,000+ corrupted placeholder fields using vectorized string operations.",
          "Quarantined 3.2% invalid records violating foreign key constraints without breaking pipeline execution.",
          "Reduced end-to-end dataset cleansing execution time by 65% through optimized Pandas vectorization."
        ]
      }
    },
    {
      id: "customer-data-cleaning",
      index: "03 // DATA CLEANING & VISUALIZATION",
      badge: "CASE STUDY 03",
      category: "cleaning-quality",
      categoryLabel: "Data Cleaning & Quality",
      title: "Customer Sales Data Cleaning & Analytical Exploration",
      shortDesc: "A Python-based data cleaning and exploratory analysis project transforming messy customer e-commerce data into a clean, analysis-ready dataset and extracting meaningful sales insights.",
      problem: "Transactional data with duplicate customer IDs, inconsistent gender categorizations, invalid ratings, negative order quantities, and unparseable purchase dates.",
      solution: "Developed an end-to-end cleaning script using Python: deduplication, categorical standardization, date normalization, outlier treatment, and visual sales distribution reporting.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/youssefelfarouk/customer-data-cleaning",
      image: "assets/images/customer-sales-cleaning.png",
      imageTitle: "Python · Sales Cleaning & Visualizations",
      caseStudy: {
        architecture: "Raw CSV Ingestion → Data Profiling → Outlier Imputation → Clean Parquet & Visuals",
        datasetDetails: "Multi-year e-commerce sales and customer registry records.",
        keyAchievements: [
          "Standardized messy categorical labels into clean enumerable dimensions.",
          "Normalized order dates into standard ISO-8601 formatting for downstream time-series analysis.",
          "Produced exploratory distribution charts highlighting sales trends across customer demographics."
        ]
      }
    }
  ],

  // -----------------------------------------------------------------
  // 🛠️ 4. PRACTICAL DATA ENGINEERING SERVICES
  // -----------------------------------------------------------------
  services: [
    {
      number: "01",
      title: "Data Cleaning",
      description: "Clean messy, corrupted datasets, eliminate invalid placeholder values, remove duplicate entities, and prepare reliable, structured data for operations.",
      deliverables: [
        "Duplicate resolution & key normalization",
        "Corrupt placeholder & null handling strategies"
      ]
    },
    {
      number: "02",
      title: "ETL & Data Pipelines",
      description: "Build structured workflows for extracting data from disparate CSV/database sources, applying business transformations, and loading into structured stores.",
      deliverables: [
        "Automated batch Python / SQL execution",
        "Idempotent pipeline logic & audit logging"
      ]
    },
    {
      number: "03",
      title: "Data Transformation",
      description: "Transform raw, nested, or fragmented datasets into clean, standardized, and usable relational schemas optimized for consumption.",
      deliverables: [
        "Schema standardization & type casting",
        "Standardized date & string formatting"
      ]
    },
    {
      number: "04",
      title: "Data Quality & Validation",
      description: "Implement comprehensive data profiling, identify missing or corrupted records, and enforce rigorous automated data quality validation rules.",
      deliverables: [
        "Automated constraint assertions & business rule checks",
        "Comprehensive profiling reports & quarantine logic"
      ]
    },
    {
      number: "05",
      title: "Data Warehousing",
      description: "Design and build structured relational data warehouses using dimensional modeling (Star Schema) to support analytics, reporting, and BI dashboards.",
      deliverables: [
        "Fact & Dimension table modeling (Kimball methodology)",
        "Medallion Bronze → Silver → Gold layered flows"
      ]
    }
  ],

  // -----------------------------------------------------------------
  // ⚡ 5. SKILLS & TOOLS (Grouped by domain without arbitrary % ratings)
  // -----------------------------------------------------------------
  skills: [
    {
      category: "Data Engineering",
      subtitle: "Pipelines & Storage Architectures",
      isLead: true,
      items: [
        { name: "ETL / ELT", highlight: true },
        { name: "Data Cleaning", highlight: true },
        { name: "Data Quality", highlight: true },
        { name: "Data Transformation", highlight: false },
        { name: "Data Warehousing", highlight: true },
        { name: "Data Modeling", highlight: false },
        { name: "Dimensional Modeling", highlight: false },
        { name: "Star Schema", highlight: true }
      ]
    },
    {
      category: "Programming & Data",
      subtitle: "Core Transformation Engines",
      isLead: false,
      items: [
        { name: "Python", highlight: true },
        { name: "SQL", highlight: true },
        { name: "Pandas", highlight: true },
        { name: "NumPy", highlight: false },
        { name: "Matplotlib", highlight: false }
      ]
    },
    {
      category: "Databases",
      subtitle: "Relational & Analytical Stores",
      isLead: false,
      items: [
        { name: "SQL Server (T-SQL)", highlight: true },
        { name: "PostgreSQL", highlight: true },
        { name: "MySQL", highlight: false },
        { name: "SQLite", highlight: false }
      ]
    },
    {
      category: "Development & Tools",
      subtitle: "Environment & Version Control",
      isLead: false,
      items: [
        { name: "Git & GitHub", highlight: true },
        { name: "Jupyter Notebook", highlight: false },
        { name: "VS Code", highlight: false },
        { name: "Linux / Bash", highlight: false }
      ]
    }
  ],

  // -----------------------------------------------------------------
  // 🎓 6. EDUCATION
  // -----------------------------------------------------------------
  education: {
    degree: "Bachelor's Degree in Communication and Information Engineering",
    level: "Undergraduate Degree — Year 2",
    faculty: "Faculty of Engineering",
    university: "Communication and Information Engineering Department",
    period: "2024 – 2028",
    dateRange: "Oct 2024 – Jun 2028",
    location: "Cairo, Egypt",
    coursework: [
      "Database Management Systems (DBMS)",
      "Data Structures & Algorithms",
      "Computer Communication Networks",
      "Probability & Engineering Statistics",
      "Signals & Systems",
      "Object-Oriented Programming (OOP)"
    ]
  },

  // -----------------------------------------------------------------
  // 🏆 7. CERTIFICATIONS & PROFESSIONAL TRAINING
  // -----------------------------------------------------------------
  training: {
    title: "Digital Egypt Pioneers Initiative (DEPI)",
    subtitle: "AI & Data Science — Microsoft Data Engineer",
    status: "Feb 2026 – Present",
    description: [
      "Practical training in Data Engineering, Python, SQL, database management, and data pipelines.",
      "Developing skills in Big Data Processing, Microsoft Azure, deployment, and AI for Data Engineers.",
      "Hands-on learning through projects and real-world data engineering applications."
    ],
    skills: [
      "Data Engineering",
      "Python",
      "SQL",
      "Database Management",
      "Data Pipelines",
      "Big Data Processing",
      "Microsoft Azure",
      "AI for Data Engineers"
    ]
  },

  certifications: [
    {
      title: "Data Engineering Associate",
      issuer: "DataCamp",
      date: "Apr 2026",
      image: "assets/images/cert-data-engineering.png",
      description: "Demonstrates verified capability in Data Engineering fundamentals, SQL and data processing, designing robust ETL / ELT workflows, constructing scalable data pipelines, and implementing data warehousing models to deliver reliable, high-quality data for analytics.",
      topics: [
        "Data Engineering Fundamentals",
        "SQL & Data Processing",
        "ETL / ELT",
        "Data Pipelines",
        "Data Warehousing",
        "Reliable Analytics Data"
      ],
      verifyUrl: "#"
    },
    {
      title: "Associate Data Engineer in SQL",
      issuer: "DataCamp",
      date: "Jan 2026",
      image: "assets/images/cert-sql-engineer.png",
      description: "Demonstrates practical knowledge in writing complex SQL queries, managing relational databases, building data warehouses, designing dimensional models and schemas, automating data pipelines, and preparing clean, analytics-ready datasets for decision-making.",
      topics: [
        "SQL & Stored Procedures",
        "Relational Databases",
        "Data Warehouses",
        "Dimensional Modeling",
        "Data Pipelines",
        "Analytics-Ready Data"
      ],
      verifyUrl: "#"
    }
  ]
};

// Expose globally
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
