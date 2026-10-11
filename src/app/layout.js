import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: `${portfolioData.personal.name} | ${portfolioData.personal.role} & Enterprise Logistics Specialist`,
  description: `${portfolioData.personal.name} is a .NET Developer with 3+ years of experience in C#, ASP.NET MVC, ASP.NET Web API, ADO.NET, and SQL Server, specializing in courier, logistics, ERP systems, eWay Bill, and IRN compliance.`,
  keywords: [
    "Manish Yadav",
    ".NET Developer",
    "C# Developer",
    "ASP.NET MVC",
    "ASP.NET Web API",
    "ADO.NET",
    "SQL Server",
    "Stored Procedures",
    "Courier Mitra",
    "Gracious Logistics",
    "AsianRoadways",
    "YuantaiLogistics",
    "eWay Bill API",
    "IRN Compliance",
    "REST APIs",
    "Logistics Software Developer",
  ],
  authors: [{ name: portfolioData.personal.name, url: portfolioData.personal.linkedin }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${portfolioData.personal.name} | .NET Developer & Backend Engineer`,
    description:
      "3+ years of hands-on experience developing enterprise logistics applications, C#, ASP.NET MVC, Web API, and Microsoft SQL Server.",
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: "/manish-yadav.jpg",
        width: 800,
        height: 800,
        alt: `${portfolioData.personal.name} - .NET Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} | .NET Developer`,
    description:
      "3+ years hands-on experience in C#, ASP.NET MVC, Web API, SQL Server, and enterprise logistics systems.",
    images: ["/manish-yadav.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#050807",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.role,
    worksFor: {
      "@type": "Organization",
      name: "Sagar Informatic Pvt. Ltd.",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Chandigarh University",
      },
      {
        "@type": "EducationalOrganization",
        name: "Jawaharlal Nehru Polytechnic",
      },
    ],
    knowsAbout: [
      "C#",
      ".NET Framework",
      "ASP.NET MVC",
      "ASP.NET Web API",
      "ADO.NET",
      "Microsoft SQL Server",
      "Stored Procedures",
      "Logistics Management Systems",
      "eWay Bill API",
      "IRN GST Compliance",
      "RESTful APIs",
      "jQuery",
    ],
    sameAs: [portfolioData.personal.linkedin].filter(Boolean),
    telephone: portfolioData.personal.phone,
    email: portfolioData.personal.email,
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-theme-bg text-theme-textPrimary selection:bg-theme-teal selection:text-theme-bg font-sans antialiased relative overflow-x-hidden">
        {/* Subtle decorative background gradients */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-theme-teal/5 blur-[140px] rounded-full" />
          <div className="absolute top-1/3 -left-48 w-[600px] h-[500px] bg-theme-tealLight/5 blur-[160px] rounded-full" />
          <div className="absolute bottom-1/4 -right-48 w-[700px] h-[600px] bg-theme-tealDark/5 blur-[160px] rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
