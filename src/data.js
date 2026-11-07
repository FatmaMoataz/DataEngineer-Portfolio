export const links = {
  email: "fatmamoataz65@gmail.com",
  linkedin: "https://www.linkedin.com/in/fatma-moataz-31a457264/",
  github: "https://github.com/FatmaMoataz",
  kaggle: "https://www.kaggle.com/fatmamoataz",
  leetcode: "https://leetcode.com/u/fatmamoataz65/",
};

export const pipeline = ["Kafka", "Spark", "Delta Lake", "Airflow", "Power BI"];

export const stats = [
  { value: 2, suffix: "M", prefix: "1–", label: "events processed in FunnelStream" },
  { value: 10, suffix: "+", label: "quarantine error codes handled" },
  { value: 2, suffix: "%", prefix: "≤", label: "reconciliation tolerance" },
  { value: 4, suffix: "th", label: "NASA Space Apps 2025" },
];

export const skills = [
  { title: "Pipelines & Big Data", items: ["Apache Spark / PySpark", "Structured Streaming", "Kafka", "Airflow", "Hadoop (HDFS)", "Hive", "Databricks", "Informatica", "SSIS"] },
  { title: "Warehousing & Modeling", items: ["Star schema", "SCD2", "Medallion architecture", "Data marts", "Delta Lake", "Parquet", "Unity Catalog"] },
  { title: "Databases & SQL", items: ["Oracle", "PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis", "Window functions", "Query tuning"] },
  { title: "DataOps & Reliability", items: ["Git", "GitHub Actions", "CI/CD", "Docker", "Grafana alerting", "ETL audit logging", "Reconciliation", "Quarantine pipelines"] },
  { title: "Languages & Systems", items: ["Python", "SQL", "Bash", "Linux", "Java", "TypeScript"] },
  { title: "Also Familiar With", items: ["Power BI", "React", "Node.js / NestJS", "REST APIs", "OpenAI API", "Hugging Face"] },
];

// TODO: replace each `repo` with the real repository URL.
export const projects = [
  {
    title: "FunnelStream",
    subtitle: "Real-Time E-Commerce Analytics Platform",
    flagship: true,
    tech: ["PySpark", "Structured Streaming", "Kafka", "Delta Lake", "Airflow", "Databricks", "PostgreSQL", "Grafana", "Power BI", "Docker"],
    summary: "End-to-end batch and near real-time ELT pipeline for 1–2M transactional events.",
    flow: ["Kafka", "Spark Streaming", "Bronze", "Silver", "Gold", "Power BI"],
    points: [
      "Checkpoint recovery and exactly-once delivery via Delta MERGE.",
      "Event deduplication, quarantine pipeline (10+ error codes), bot detection, 10-minute watermark for late events, reconciliation within 2% tolerance.",
      "Airflow DAGs for SCD2 loads, Gold builds and a SQL quality gate before publication.",
      "Unity Catalog lineage, PostgreSQL fallback and Grafana alerting on pipeline health.",
      "5-page Power BI dashboard (funnel, ROAS, CPA) for business stakeholders.",
    ],
    repo: links_placeholder(),
  },
  {
    title: "Olympics Data Warehouse ETL",
    tech: ["Informatica PowerCenter", "Oracle", "SQL"],
    points: [
      "Oracle star schema: 6 dimensions plus a participation fact.",
      "Reusable mapplets (Joiner, Aggregator, DECODE) monitored in Workflow Monitor.",
      "ETL_AUDIT_LOG table (rows read, written, rejected, status, errors) and a safe-rerun recovery plan.",
    ],
    repo: links_placeholder(),
  },
  {
    title: "Sales Data Pipeline on Hadoop",
    tech: ["HDFS", "Spark", "Hive", "Parquet", "Python", "Bash"],
    points: [
      "Ingested synthetic sales data into HDFS and converted it to Snappy-compressed Parquet with Spark.",
      "Hive star schema (4 dimensions plus a sales fact) with HiveQL analytics and 4-way star joins.",
      "Automated ingestion of a 577 MB CSV and 477 MB JSON with Bash validation scripts.",
    ],
    repo: links_placeholder(),
  },
  {
    title: "Flowio",
    subtitle: "AI-Powered Project Management Platform (graduation project)",
    tech: ["NestJS", "PostgreSQL", "REST APIs", "LLM"],
    points: ["REST APIs with secure authentication and role-based authorization in an Agile Scrum team, with LLM integration."],
  },
];
function links_placeholder() { return "https://github.com/FatmaMoataz"; }

export const experience = [
  { role: "DataOps Engineering Intern", org: "National Telecommunication Institute (NTI)", date: "Jul 2026 – Oct 2026", text: "Built and automated batch and real-time pipelines with Hadoop, Spark, Hive, Kafka, Informatica, SSIS, Python and SQL on Linux. Implemented CI/CD for data workflows." },
  { role: "AI Agent Intern", org: "Orange Digital Center", date: "Jul 2026", text: "Built automation workflows integrating LLMs (OpenAI API) into business processes, plus backend services for document and text processing." },
  { role: "LLM Intern", org: "Tips Hindawi", date: "Mar 2026 – Apr 2026", text: "Developed LLM applications with Hugging Face; applied prompt engineering and model evaluation." },
  { role: "Software Engineering Intern", org: "Microsoft", date: "Jul 2024", text: "Built a Carpool Management System in an Agile team (React, .NET REST APIs); managed SQL Server databases and data integration." },
];

export const education = [
  "BSc Computer and Information Science, Alexandria University (Excellent with Honors), 2026",
  "DataOps Engineering Training Program, NTI (2026)",
  "Big Data & Data Engineering, Egyptian Engineers Syndicate (2025)",
  "AI Fundamentals with Capstone Project, IBM (2026)",
  "AWS Educate: Introduction to Generative AI, AWS (2025)",
];
