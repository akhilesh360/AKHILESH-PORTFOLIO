
import React from 'react';
import './Projects.css';

const projectsData = [
    {
        title: "Fintech ETL & BI Data Pipeline",
        description: "Production-grade ETL and BI pipeline for fintech data. Features modular ETL scripts, data warehouse integration (SQLite/Snowflake), interactive Streamlit dashboard, and robust testing. Built with Python, pandas, SQLAlchemy, Streamlit, and pytest.",
        tags: ["Python", "ETL", "Snowflake", "Streamlit", "Pytest"],
        github: "https://github.com/akhilesh360/Fintech-ETL-Datapipeline",
        demo: "https://github.com/akhilesh360/Fintech-ETL-Datapipeline"
    },
    {
        title: "Customer Activation Analytics",
        description: "Enterprise-grade platform combining AI-powered analytics, modern data stack, and live CRM workflows. Features GPT-4 risk scoring, real-time segmentation, automated Salesforce workflows, and dbt data quality testing.",
        tags: ["DuckDB", "Airflow", "dbt", "GPT-4", "Streamlit"],
        github: "https://github.com/akhilesh360/customer-activation-analytics",
        demo: "https://customer-activation-analytics-doswappppyzzduxxhwrd8gux.streamlit.app/"
    },
    {
        title: "Palantir - LexFoundry",
        description: "Modern data engineering approach to managing complex legal data lifecycles. Prototype simulating legal data ingestion, transformation, ontology modeling, and access control using Palantir Foundry. Demonstrates end-to-end legal data pipelines.",
        tags: ["Palantir Foundry", "Data Governance", "Ontology", "Rest API"],
        github: "https://github.com/akhilesh360/LexFoundry",
        demo: "https://github.com/akhilesh360/LexFoundry"
    },
    {
        title: "Predictive Heat Pump Adoption",
        description: "Production-style ML pipeline for predicting household adoption of electric heat pumps. Features end-to-end workflow, multiple models (XGBoost, Random Forest), SHAP explainability, and fairness analysis.",
        tags: ["ML Pipeline", "XGBoost", "SHAP", "Docker", "Python"],
        github: "https://github.com/akhilesh360/predictive-heatpump-adoption",
        demo: "https://github.com/akhilesh360/predictive-heatpump-adoption"
    },
    {
        title: "AI Document Intelligence",
        description: "Streamlit-based system that ingests PDFs, extracts text via PyMuPDF, summarizes content with GPT-4 (LangChain), classifies by category, and provides an AI chatbot for Q&A. Integrates with Zapier webhooks.",
        tags: ["GenAI", "LangChain", "GPT-4", "Streamlit", "Automation"],
        github: "https://github.com/akhilesh360/Automation",
        demo: "https://automation-ddwvwyexfe56f6s6bcowz5.streamlit.app/"
    },
    {
        title: "AI Brand Visibility Tracker",
        description: "Comprehensive platform tracking mental health brand performance across AI platforms like ChatGPT and Claude. Features proprietary AI Visibility Score (AVS) algorithm and ML-powered question clustering.",
        tags: ["NLP", "Scikit-learn", "Streamlit", "Python", "Analytics"],
        github: "https://github.com/akhilesh360/ai-brand-visibility-tracker",
        demo: "https://ai-brand-visibility-tracker-28juw59dgwu24whpl6shr2.streamlit.app/"
    },
    {
        title: "AI Video Insight Assistant",
        description: "AI Assistant leveraging DeepSeek LLM to summarize YouTube transcripts and answer user queries. Utilized YouTube Transcript API for extraction and deployed via Streamlit for seamless user access.",
        tags: ["LLM", "DeepSeek", "YouTube API", "Streamlit"],
        github: "https://github.com/akhilesh360/youtubevideoassistant",
        demo: "https://saiyoutubeassistant.streamlit.app/"
    },
    {
        title: "Algeria Wildfires Prediction",
        description: "Predictive model using Ridge regression to assess wildfire risks in Algeria with 98.4% accuracy. Deployed via Flask and AWS Elastic Beanstalk with CI/CD pipeline.",
        tags: ["Python", "Flask", "AWS", "Ridge Regression"],
        github: "https://github.com/akhilesh360/ForestFiresPrediction",
        demo: "http://forestfiresprediction-env-1.eba-djbn9yjg.us-east-2.elasticbeanstalk.com/"
    },
    {
        title: "Customer Review Sentiment Analysis",
        description: "Sentiment analysis model using Logistic Regression to assess customer sentiments in car rental reviews. Deployed using Dataiku DSS for real-time analysis.",
        tags: ["Dataiku DSS", "NLP", "Logistic Regression", "Python"],
        github: "https://github.com/akhilesh360/Sentiment-Analysis-in-Dataiku-DSS/tree/main",
        demo: "https://github.com/akhilesh360/Sentiment-Analysis-in-Dataiku-DSS/tree/main"
    },
    {
        title: "Customer Segmentation",
        description: "Customer segmentation model using KMeans Clustering to group customers based on spending behavior, annual income, and age. Visualized with 3D scatter plots.",
        tags: ["KMeans", "Clustering", "Python", "Scikit-learn"],
        github: "https://github.com/akhilesh360/Customer_Segmentation",
        demo: "https://github.com/akhilesh360/Customer_Segmentation"
    }
];

const Projects = () => {
    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span className="tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                        GitHub
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
