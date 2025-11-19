
import React from 'react';
import './Experience.css';

const experienceData = [
    {
        company: "Bank of America",
        role: "Data Engineer",
        location: "Plano, TX",
        period: "Jul 2023 – Present",
        logo: "/bofa.png",
        summary: "Engineered real-time Spark pipelines and data models supporting financial risk and compliance systems, improving data availability, and reducing latency by 30%.",
        highlights: [
            "Designed scalable ETL pipelines in Apache Spark/Python, integrating multiple upstream systems into a centralized Hadoop-based data lake.",
            "Built real-time ingestion frameworks with Kafka to enable faster credit risk scoring and financial transaction monitoring.",
            "Automated workflows using Apache Airflow and Ab Initio, ensuring SLA compliance and reducing manual intervention.",
            "Optimized cloud resources on AWS EMR with auto-scaling, significantly reducing operational costs while maintaining performance."
        ]
    },
    {
        company: "CVS Health",
        role: "Data Engineer",
        location: "Irving, TX",
        period: "Dec 2020 – Aug 2022",
        logo: "/cvs.png",
        summary: "Developed HIPAA-compliant pipelines processing 1M+ claims per day, cutting processing time by 40% and automating key validation checks.",
        highlights: [
            "Developed high-throughput data ingestion pipelines using Azure Data Factory and Databricks (PySpark) for patient claims analytics.",
            "Integrated Snowflake data warehousing to accelerate query performance and support complex clinical insights.",
            "Implemented real-time streaming for HL7/EDI feeds using Kafka and Spark Structured Streaming for live dashboards.",
            "Established robust data quality frameworks to validate schema consistency and detect anomalies across healthcare datasets."
        ]
    },
    {
        company: "Walmart",
        role: "Data Engineer",
        location: "Bentonville, AR",
        period: "Jun 2019 – Dec 2020",
        logo: "/walmart.png",
        summary: "Built cloud-native retail data pipelines using Hadoop, Airflow, and BigQuery, enabling real-time supply chain analytics across millions of transactions.",
        highlights: [
            "Engineered cloud-native data pipelines in Databricks to process large-scale customer behavior and transaction data.",
            "Deployed real-time stream processing with Apache Flink and Kafka, enabling near-live product interaction metrics.",
            "Orchestrated reliable ETL workflows with Airflow, utilizing dynamic partitioning and automated retries for high availability.",
            "Supported machine learning initiatives by building feature engineering pipelines that improved recommendation model accuracy."
        ]
    }
];

const Experience = () => {
    return (
        <section className="section experience-section" id="experience-section">
            <div className="container">
                <h2 className="section-title">Professional <span className="gradient-text">Journey</span></h2>

                <div className="timeline">
                    {experienceData.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="experience-header">
                                    <div className="company-info">
                                        <div className="company-logo-wrapper">
                                            <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                                        </div>
                                        <div>
                                            <h3 className="company-name">{exp.company}</h3>
                                            <h4 className="role-title">{exp.role}</h4>
                                        </div>
                                    </div>
                                    <div className="experience-meta">
                                        <span className="period">{exp.period}</span>
                                        <span className="location">{exp.location}</span>
                                    </div>
                                </div>
                                <p className="experience-summary">{exp.summary}</p>
                                <ul className="experience-highlights">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
