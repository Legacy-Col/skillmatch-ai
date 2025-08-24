
export type Courses = {
    id: string,
    title: string,
    thumbnail: string,
    description: string,
    videoUrl: string,
    lessons: string[]
};

export const courses: Courses[] = [
    {
        id: "1",
        title: "Web Development",
        description: "Guide to learning Web Development",
        thumbnail: "/images/Web Development.png",
        videoUrl: "https://youtu.be/ZxKM3DCV2kE?si=hmgVL7gK7L_Lnm3N",
        lessons: [
                "Introduction to the Web",
                "HTML Basics & Structure",
                "Styling with CSS",
                "JavaScript Essentials",
                "Responsive Design",
                "Intro to React & Frontend Frameworks",
                "Final Project: Portfolio Website",
        ],
    },
    {
        id: "2",
        title: "CyberSecurity Course",
        description: "Learn CyberSecurity in Hours",
        thumbnail: "/images/Cyber Sec.png",
        videoUrl: "https://youtu.be/h3PNK1pq2OA?si=Tx8MFEj_J8ROCSmU",
        lessons: [
            "Introduction to Cybersecurity",
      "Common Threats (Malware, Phishing, Ransomware)",
      "Network Security Fundamentals",
      "Encryption & Secure Communication",
      "System Hardening Basics",
      "Ethical Hacking Overview",
      "Best Practices & Career Paths",
        ],
    },
    {
        id: "3",
        title: "UI/UX Design",
        description: "Become and Expert UI/UX Designer",
        thumbnail: "/images/design.png",
        videoUrl: "https://youtu.be/pyQAiRuqUSM?si=sg0Cht4fPX9_iam8",
        lessons: [
             "What is UI/UX Design?",
      "Design Thinking Process",
      "Wireframing Fundamentals",
      "Prototyping with Figma",
      "Color Theory & Typography",
      "Accessibility in Design",
      "Case Study: Redesigning a Mobile App",
        ]
    },
]

