export const portfolioData = {
  personal: {
    name: "Manish Yadav",
    role: ".NET Developer",
    headline: "Building Robust Backend Architectures & Enterprise Logistics Systems",
    subheadline:
      "3+ years of hands-on engineering experience developing high-volume web applications, RESTful APIs, and mission-critical ERP workflows with C#, ASP.NET MVC, Web API, and Microsoft SQL Server.",
    phone: "+91 9451697870",
    phoneDisplay: "+91 9451697870",
    phoneHref: "tel:+919451697870",
    email: "manish.sp2060@gmail.com",
    emailHref: "mailto:manish.sp2060@gmail.com",
    linkedin: "https://linkedin.com/in/mr-dev123",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
    location: "New Delhi / NCR, India",
    experienceYears: "3+",
    availability: "Available for Full-time Roles & Technical Interviews",
    cvFileName: "Manish_Yadav_DotNet_Developer_CV.pdf",
    cvPath: "/Manish_Yadav_DotNet_Developer_CV.pdf",
    avatarPath: "/manish-yadav.jpg",
  },

  summary: {
    primary:
      ".NET Developer with 3+ years of hands-on experience developing and supporting web-based enterprise applications across courier, logistics, and ERP domains.",
    details: [
      "Specialized in backend engineering with C#, ASP.NET MVC, ASP.NET Web API, ADO.NET, and Microsoft SQL Server.",
      "Proven track record in engineering business-critical workflows including shipment booking & tracking, dispatch pipelines, billing, invoicing, commercial accounting, Proof of Delivery (POD), and operational analytics.",
      "Deep practical experience with statutory compliance integrations, notably Government eWay Bill APIs and IRN (Invoice Reference Number) generation.",
      "Committed to clean architecture, SOLID principles, and proactive database query optimization for high-throughput enterprise systems.",
      "Currently expanding modern frontend capabilities with React.js (basic knowledge & active learning), complementing strong jQuery and JavaScript engineering skills.",
    ],
    honestNote:
      "Professional expertise is grounded in 3+ years of .NET, SQL Server, and enterprise logistics systems. Modern frontend technologies like React.js are actively being learned, while this portfolio itself is architected with modern web standards.",
  },

  stats: [
    { label: "Hands-on Experience", value: "3+ Years", helper: "Enterprise .NET & SQL" },
    { label: "Core Enterprise Platforms", value: "4 Major", helper: "Courier, Logistics & ERP" },
    { label: "Compliance & API Workflows", value: "100%", helper: "eWay Bill, IRN & Android APIs" },
    { label: "Highest Qualification", value: "MCA (Pursuing)", helper: "Chandigarh University" },
  ],

  skillCategories: [
    {
      id: "backend",
      title: "Backend & Frameworks",
      description: "Core server-side engineering, enterprise business logic, and data access layers.",
      skills: [
        { name: "C#", level: "Expertise", status: "Primary Language", percent: 92 },
        { name: "ASP.NET MVC", level: "Expertise", status: "Core Architecture", percent: 90 },
        { name: "ASP.NET Web API", level: "Expertise", status: "REST Services", percent: 88 },
        { name: "ADO.NET", level: "Proficient", status: "High-Performance Data Access", percent: 86 },
        { name: "ASP.NET Web Forms", level: "Proficient", status: "Legacy Maintenance", percent: 80 },
        { name: "ASP.NET Core", level: "Working Knowledge", status: "Modern .NET Ecosystem", percent: 75 },
      ],
    },
    {
      id: "database",
      title: "Databases & Optimization",
      description: "Relational schema design, complex query crafting, and high-throughput execution.",
      skills: [
        { name: "Microsoft SQL Server", level: "Expertise", status: "Primary RDBMS", percent: 90 },
        { name: "Stored Procedures & Triggers", level: "Expertise", status: "Transactional Logic", percent: 92 },
        { name: "Complex Queries & Optimization", level: "Expertise", status: "Performance Tuning", percent: 88 },
        { name: "Database Indexing & Normalization", level: "Proficient", status: "Schema Design", percent: 85 },
        { name: "MySQL", level: "Proficient", status: "Secondary RDBMS", percent: 80 },
      ],
    },
    {
      id: "api",
      title: "API Integration & Compliance",
      description: "Connecting mobile clients, external government portals, and third-party gateways.",
      skills: [
        { name: "RESTful Web APIs", level: "Expertise", status: "Custom Service Design", percent: 90 },
        { name: "Android App API Integration", level: "Expertise", status: "Field Ops & Scans", percent: 88 },
        { name: "eWay Bill API Workflows", level: "Specialized", status: "Govt Compliance", percent: 92 },
        { name: "IRN (Invoice Reference Number)", level: "Specialized", status: "GST Invoicing", percent: 90 },
        { name: "KYC Verification APIs", level: "Proficient", status: "Customer Onboarding", percent: 85 },
        { name: "Third-Party API Consumption", level: "Proficient", status: "External Services", percent: 86 },
      ],
    },
    {
      id: "frontend",
      title: "Frontend & UI",
      description: "Client-side interactivity, responsive layouts, and user workflows.",
      skills: [
        { name: "JavaScript (ES6+)", level: "Proficient", status: "Dynamic Client Logic", percent: 80 },
        { name: "jQuery & AJAX", level: "Expertise", status: "Enterprise Asynchronous UI", percent: 88 },
        { name: "HTML5 & CSS3", level: "Proficient", status: "Semantic Structure & Styling", percent: 85 },
        { name: "Bootstrap (4/5)", level: "Proficient", status: "Responsive Layouts", percent: 86 },
        { name: "React.js", level: "Basic / Currently Learning", status: "Active Upskilling", percent: 60 },
      ],
    },
    {
      id: "tools",
      title: "Tools, Practices & SDLC",
      description: "Engineering methodologies, source control, and debugging environments.",
      skills: [
        { name: "Visual Studio", level: "Proficient", status: "Primary IDE", percent: 92 },
        { name: "Postman", level: "Proficient", status: "API Testing & Debugging", percent: 88 },
        { name: "SVN & Git", level: "Proficient", status: "Version Control", percent: 82 },
        { name: "OOP & SOLID Principles", level: "Proficient", status: "Software Architecture", percent: 88 },
        { name: "SDLC & Root Cause Analysis", level: "Proficient", status: "Issue Troubleshooting", percent: 88 },
      ],
    },
  ],

  experience: [
    {
      role: ".NET Developer",
      company: "Sagar Informatic Pvt. Ltd.",
      period: "March 2024 – Present",
      type: "Full-Time",
      location: "India",
      description:
        "Developing and maintaining multi-tiered enterprise web applications across presentation, business-logic, and data-access layers with a strong focus on courier and logistics management systems.",
      highlights: [
        "Architect and maintain mission-critical modules using C#, ASP.NET MVC, and Microsoft SQL Server across distributed logistics environments.",
        "Design, build, and integrate RESTful Web APIs consumed by Android mobile applications for parcel pickups, manifest generation, and live delivery updates.",
        "Author and fine-tune complex SQL Server stored procedures, views, and indexes to support high-throughput shipment operations, financial reporting, and rate calculation.",
        "Implement and support end-to-end logistics operations including parcel booking, real-time shipment tracking, dispatch run sheets (DRS), billing, and commercial invoicing.",
        "Perform root cause analysis and resolve critical bugs across application and database layers while upholding strict SDLC standards and clean coding principles.",
      ],
      technologies: [
        "C#",
        "ASP.NET MVC",
        "ASP.NET Web API",
        "SQL Server",
        "Stored Procedures",
        "jQuery",
        "REST APIs",
        "Bootstrap",
      ],
    },
  ],

  featuredProjects: [
    {
      id: "courier-mitra",
      title: "Courier Mitra",
      category: "Courier & Logistics Management System",
      image: "/images/projects/courier-mitra.png",
      techStack: ["ASP.NET MVC", "C#", "ASP.NET Web API", "SQL Server", "jQuery", "Bootstrap"],
      summary:
        "Comprehensive web platform for parcel booking, automated rate calculation, multi-branch operations, and real-time shipment tracking.",
      highlights: [
        "Engineered core modules for parcel booking, real-time shipment tracking, dynamic weight-based rate calculation, and multi-branch management.",
        "Developed resilient RESTful Web APIs consumed by Android mobile applications for parcel pickup, live status updates, and field delivery verification.",
        "Crafted optimized SQL Server stored procedures ensuring rapid execution for high-concurrency operational workflows and automated report generation.",
        "Designed dynamic, responsive web interfaces using ASP.NET MVC, jQuery, HTML5, and CSS3.",
      ],
      architecture: [
        "Multi-tier MVC architecture with dedicated Data Access Layer",
        "Mobile-backend contract using secure JSON REST endpoints",
        "Stored procedure-driven transactional updates for tracking states",
      ],
    },
    {
      id: "gracious-logistics",
      title: "Gracious Logistics",
      category: "Courier ERP & Financial Operations Platform",
      image: "/images/projects/gracious-logistics.png",
      techStack: [
        "ASP.NET MVC",
        "ADO.NET",
        "SQL Server",
        "jQuery",
        "eWay Bill API",
        "IRN Compliance",
      ],
      summary:
        "Enterprise ERP handling end-to-end pickup workflows, commercial accounting, automated invoicing, and statutory tax compliance.",
      highlights: [
        "Contributed to pickup and shipment processing modules, management dashboards, master records, and operational reports.",
        "Built automated invoicing, commercial accounting, COD (Cash on Delivery) reconciliation, role-based user permissions, and bulk Excel data import.",
        "Integrated statutory compliance modules including Government eWay Bill API, IRN (Invoice Reference Number) generation, KYC verification, and channel order management.",
      ],
      architecture: [
        "High-performance ADO.NET data access for bulk ledger operations",
        "Direct integration with NIC eWay Bill & Invoice Registration Portal",
        "Audit-trailed role-based access control (RBAC) security model",
      ],
    },
    {
      id: "asian-roadways",
      title: "AsianRoadways",
      category: "Transport, Consignment Tracking & Finance Suite",
      image: "/images/projects/asian-roadways.png",
      techStack: [
        "ASP.NET MVC",
        "ASP.NET Web API",
        "SQL Server",
        "ASP.NET Web Forms",
        "jQuery",
      ],
      summary:
        "Transport management suite driving consignment booking, Air Waybill (AWB) generation, Delivery Run Sheets (DRS), and digital Proof of Delivery.",
      highlights: [
        "Built modules for consignment booking, Air Waybill (AWB) management, dispatch scheduling, delivery-status updates, and manifest generation.",
        "Implemented Proof of Delivery (POD) scan upload and tracking pipeline, DRS (Delivery Run Sheet) management, invoice generation, and IRN compliance.",
        "Developed interactive dispatch dashboard, automated manifest printing, and client/forwarding-number updates.",
      ],
      architecture: [
        "Hybrid ASP.NET MVC and Web Forms maintenance architecture",
        "Binary file handling pipeline for signed Proof of Delivery documents",
        "Automated batch printing for thermal label and dispatch manifests",
      ],
    },
    {
      id: "yuantai-logistics",
      title: "YuantaiLogistics",
      category: "International Logistics & Transportation Management",
      image: "/images/projects/yuantai-logistics.png",
      techStack: [
        "ASP.NET MVC",
        "SQL Server",
        "jQuery",
        "HTML5 / CSS3",
        "Print Documentation",
      ],
      summary:
        "International shipping and fleet operations platform covering client/vendor portals, shipment lifecycles, and deviation audit reports.",
      highlights: [
        "Handled end-to-end pickup and shipment lifecycle operations, client and vendor portals, and managerial dashboards.",
        "Constructed automated invoicing, ledger accounting, deviation reports, and customer query/complaint tracking.",
        "Implemented eWay Bill processing, trip-expense tracking, manifest documentation, and batch printing features.",
      ],
      architecture: [
        "Comprehensive ledger & billing automation with tax rule engines",
        "Trip expense tracking & driver advance settlement workflows",
        "Structured discrepancy detection algorithms for deviation reports",
      ],
    },
  ],

  additionalProjects: [
    { name: "Art Express", focus: "Courier & express cargo routing workflows" },
    { name: "BCM Supply Chain", focus: "Warehouse dispatch and chain tracking" },
    {
      name: "Everest Logistics",
      focus: "Government eWay Bill, IRN compliance, billing & commercial accounting",
    },
    { name: "Kambson Logistics", focus: "Consignment tracking and line-haul dispatch" },
    { name: "Khimji Poonja", focus: "Freight operations and vendor management" },
    { name: "RE Logistics", focus: "Branch parcel intake and manifest processing" },
    { name: "Team Logistics", focus: "Route optimization and driver assignment" },
    { name: "ULCC", focus: "Cargo scheduling and weight-reconciliation modules" },
    { name: "Universal Express", focus: "Fast-track parcel tracking and status APIs" },
    { name: "ePortal", focus: "Customer self-service portal with React integration" },
    { name: "Decan Dart", focus: "Express freight and POD verification" },
    { name: "4A Express", focus: "Hub-and-spoke transfer management" },
    { name: "Unitrack", focus: "Fleet monitoring and trip logbook records" },
    { name: "Unitrack BKU", focus: "University transport and student logistics management" },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Chandigarh University",
      status: "Currently Pursuing",
      period: "Enrolled / In Progress",
      details:
        "Advanced computing coursework focusing on Software Engineering, Advanced Database Systems, and Cloud-native application design.",
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Jawaharlal Nehru Polytechnic, Mahmudabad, Sitapur",
      status: "Completed",
      period: "Graduated: 2019",
      details:
        "Core foundational studies in Object-Oriented Programming, Data Structures, Relational Database Systems, and Web Technologies.",
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "BRIC Rampur Pokhrapar, Deoria",
      status: "Completed",
      period: "Completed: 2016",
      details:
        "Science & Mathematics stream preparing analytical and algorithmic thinking foundations.",
    },
  ],
};
