import img1 from '../assets/products/e-samarthya/1.png';
import img2 from '../assets/products/e-samarthya/2.png';
import img3 from '../assets/products/e-samarthya/3.png';
import img4 from '../assets/products/e-samarthya/4.png';
import img5 from '../assets/products/e-samarthya/5.png';
import img6 from '../assets/products/e-samarthya/6.png';
import pmis1 from '../assets/products/pmis/1.png';
import pmis2 from '../assets/products/pmis/2.png';
import pmis3 from '../assets/products/pmis/3.png';
import cms1 from '../assets/products/tourism-cms/1.jpeg';
import cms2 from '../assets/products/tourism-cms/2.jpeg';
import cms3 from '../assets/products/tourism-cms/3.jpeg';
import buzz1 from '../assets/products/ey-buzz/web.png';
import buzz2 from '../assets/products/ey-buzz/mobile1.jpeg';
import buzz3 from '../assets/products/ey-buzz/mobile2.jpeg';
import survey1 from '../assets/products/survey-platform/1.jpeg';
import survey2 from '../assets/products/survey-platform/2.jpeg';
import survey3 from '../assets/products/survey-platform/3.jpeg';
import rag1 from '../assets/products/rag-platform/1.jpeg';
import rag2 from '../assets/products/rag-platform/2.jpeg';
import rag3 from '../assets/products/rag-platform/3.jpeg';

export const products = [
  {
    id: 1,
    slug: "e-samarthya",
    name: "E-Samarthya",
    tagline: "Configurable drag-and-drop evaluation form builder for government workflows",
    category: "GovTech · Forms & Evaluation",
    icon: "ClipboardList",
    tags: ["Form Builder", "Drag & Drop", "Scoring Engine", "Government"],
    description: "A powerful, configurable drag-and-drop evaluation form builder designed specifically for government workflows. Enables teams to create complex, multi-page forms with dynamic logic and structured scoring.",
    whatItDoes: [
      "Drag-and-drop builder for creating multi-page input forms",
      "Supports MCQ, yes/no, weighted scoring, and rule-based evaluation question types",
      "Configurable fields, properties, and evaluation criteria with weightage rules",
      "Dynamic form logic and structured scoring for application screening"
    ],
    builtFor: [
      "Government departments",
      "Organizations needing configurable screening forms",
      "Teams requiring structured Q&A with scoring rules"
    ],
    coreStrengths: [
      "Rule-based Evaluation",
      "Weighted Scoring",
      "Dynamic Forms",
      "Multi-page Support",
      "Admin Configurable"
    ],
    screenshots: [img1, img2, img3, img4, img5, img6]
  },
  {
    id: 2,
    slug: "pmis",
    name: "PMIS",
    tagline: "Multi-tenant project management platform with SLA-aware ticketing and tenant controls",
    category: "Enterprise · Project Management",
    icon: "LayoutDashboard",
    tags: ["Multi-tenant", "SaaS", "Ticketing", "Project Management"],
    description: "A comprehensive multi-tenant project management platform featuring SLA-aware ticketing, granular tenant controls, and modular capabilities for platform admins, tenant admins, support teams, and end users.",
    whatItDoes: [
      "Unified platform for platform admins, tenant admins, support teams, and project users",
      "Modular capabilities: projects, tickets, assets, agency programs, customer onboarding",
      "Client setup wizard for fast customer onboarding",
      "SLA-aware ticketing, assignment workflows, and analytics",
      "Brandable, client-aware UI with feature toggles"
    ],
    builtFor: [
      "SaaS platform operators",
      "Customer success teams",
      "Product and delivery organizations"
    ],
    coreStrengths: [
      "Multi-role Architecture",
      "Tenant Segmentation",
      "SLA Ticketing",
      "Brandable UI",
      "Modular Codebase"
    ],
    screenshots: [pmis1, pmis2, pmis3]
  },
  {
    id: 3,
    slug: "tourism-cms",
    name: "Tourism CMS",
    tagline: "No-code tourism portal builder for government departments and cultural boards",
    category: "GovTech · CMS & Portals",
    icon: "Globe",
    tags: ["No-Code", "Tourism", "Portal Builder", "Government"],
    description: "A no-code solution for building beautiful tourism portals. Create and manage multiple destination portals with unique branding, visual drag-and-drop page building, and real-time live editing.",
    whatItDoes: [
      "Create and manage multiple destination portals with unique domains and branding",
      "Visual drag-and-drop page builder: hero banners, galleries, stories, destination profiles",
      "Real-time live editing with preview",
      "Section-by-section organization — header, footer, about, gallery, and more",
      "Template-based portal deployment for rapid launch"
    ],
    builtFor: [
      "Government tourism departments",
      "Tourism boards",
      "Cultural institutions"
    ],
    coreStrengths: [
      "No-Code Portal Creation",
      "Live Preview Editing",
      "Multi-portal Management",
      "Template Deployment",
      "Domain Branding"
    ],
    screenshots: [cms1, cms2, cms3]
  },
  {
    id: 4,
    slug: "ey-buzz",
    name: "EY Buzz",
    tagline: "Unified social media campaign management with AI sentiment analysis",
    category: "Marketing · Social Media",
    icon: "Megaphone",
    tags: ["Campaign Management", "AI Sentiment", "Social Media", "Web & Mobile"],
    description: "A centralized platform for managing multi-platform social media campaigns with AI-powered sentiment analysis, content publishing, and integrated ticketing for issue tracking.",
    whatItDoes: [
      "Centralized dashboard for multi-platform social media campaign management",
      "AI-driven sentiment analysis and engagement insights",
      "Content publishing with pre-approved asset libraries",
      "Automated and scheduled social media publishing",
      "Issue tracking, ticketing, and event management alongside marketing initiatives"
    ],
    builtFor: [
      "Marketing teams",
      "Brand managers",
      "Corporate communications teams"
    ],
    coreStrengths: [
      "AI Sentiment Analysis",
      "Multi-platform Campaigns",
      "Content Automation",
      "Integrated Ticketing",
      "Event Management"
    ],
    screenshots: [buzz1, buzz2, buzz3]
  },
  {
    id: 5,
    slug: "survey-platform",
    name: "Survey Platform",
    tagline: "Configurable survey ecosystem with AI-generated insights for web and mobile",
    category: "Analytics · Surveys",
    icon: "BarChart2",
    tags: ["Survey Builder", "Analytics", "AI Insights", "Web & Mobile"],
    description: "A flexible survey platform with configurable question types, real-time analytics, and AI-generated insights. Supports both public and authenticated surveys across web and mobile.",
    whatItDoes: [
      "Dynamic survey builder with configurable question types",
      "Supports both authenticated and publicly accessible surveys",
      "Real-time response tracking, reporting, and analytics dashboards",
      "AI-generated summaries and insights from collected responses",
      "Role-based distribution across web and mobile"
    ],
    builtFor: [
      "Government and public sector",
      "Enterprises",
      "Research teams",
      "Program managers"
    ],
    coreStrengths: [
      "Dynamic Survey Builder",
      "Public & Private Surveys",
      "AI Summaries",
      "Response Analytics",
      "Scalable Architecture"
    ],
    screenshots: [survey1, survey2, survey3]
  },
  {
    id: 6,
    slug: "rag-platform",
    name: "Custom RAG Platform",
    tagline: "Configurable RAG acceleration platform for rapid AI knowledge solution deployment",
    category: "AI · Knowledge Management",
    icon: "Brain",
    tags: ["RAG", "AI", "LLM", "Knowledge Management", "Enterprise"],
    description: "A configurable platform for rapidly deploying RAG (Retrieval-Augmented Generation) solutions. Supports multiple LLMs, vector databases, and enterprise knowledge sources with reusable deployment templates.",
    whatItDoes: [
      "Rapid setup of RAG solutions using configurable AI models and knowledge sources",
      "Supports multiple document repositories, datasets, and enterprise information systems",
      "Configurable retrieval and generation workflows for specific business scenarios",
      "Integrates with multiple LLMs, vector databases, and embedding models",
      "Automates knowledge ingestion, indexing, retrieval, and response generation",
      "Reusable configurations and deployment templates to reduce dev effort"
    ],
    builtFor: [
      "Enterprises implementing AI knowledge management",
      "Dev teams building AI assistants",
      "Consulting organizations"
    ],
    coreStrengths: [
      "Model-agnostic Architecture",
      "Multi-source Ingestion",
      "Rapid RAG Deployment",
      "Vector DB Support",
      "Reusable Templates"
    ],
    screenshots: [rag1, rag2, rag3]
  }
];
