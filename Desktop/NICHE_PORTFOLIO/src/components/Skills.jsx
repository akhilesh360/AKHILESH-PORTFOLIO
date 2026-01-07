import React from 'react';
import './Skills.css';

const skillsData = [
    {
        category: "Programming & Scripting",
        skills: ["Python", "SQL (Advanced)", "Scala", "Java", "Bash/Shell", "TypeScript"]
    },
    {
        category: "Cloud Platforms",
        skills: ["AWS (S3, Lambda, EMR, Redshift)", "GCP (BigQuery, Dataflow)", "Azure (Synapse, Functions)"]
    },
    {
        category: "AI & Machine Learning",
        skills: ["Cursor AI", "Claude (Anthropic)", "OpenAI APIs (GPT-4)", "GitHub Copilot", "Generative AI", "LLM Integration", "Agentic AI", "RAG", "Prompt Engineering"]
    },
    {
        category: "Enterprise Platforms",
        skills: ["Palantir Foundry", "Dataiku DSS", "Alteryx"]
    },
    {
        category: "Data Warehousing & Storage",
        skills: ["Snowflake", "BigQuery", "Redshift", "Azure Synapse", "Delta Lake", "Lakehouse", "Parquet/Avro"]
    },
    {
        category: "ETL / ELT & Orchestration",
        skills: ["Apache Airflow", "dbt (Core & Cloud)", "Apache NiFi", "AWS Glue", "Azure Data Factory", "Databricks Workflows", "Prefect"]
    },
    {
        category: "Data Processing Frameworks",
        skills: ["Apache Spark", "PySpark", "Apache Flink", "Pandas", "Polars", "Dask"]
    },
    {
        category: "Streaming & Event Pipelines",
        skills: ["Kafka", "Kafka Connect", "Kinesis", "Pub/Sub", "Debezium (CDC)"]
    },
    {
        category: "Data Modeling & Architecture",
        skills: ["Dimensional Modeling (Kimball)", "Data Vault 2.0", "OLTP vs OLAP", "Semantic Layer", "Data Contracts"]
    },
    {
        category: "Databases (SQL + NoSQL)",
        skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Cassandra", "Redis"]
    },
    {
        category: "DevOps, Infra & CI/CD",
        skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Prometheus/Grafana"]
    },
    {
        category: "APIs & Integration",
        skills: ["REST APIs", "gRPC", "Webhooks", "Microservices", "GraphQL"]
    }
];

const Skills = () => {
    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <h2 className="section-title">My <span className="gradient-text">Tech Stack</span></h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div className="skill-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3 className="skill-category">{category.category}</h3>
                            <div className="skill-tags">
                                {category.skills.map((item, i) => (
                                    <span className="skill-tag" key={i}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
