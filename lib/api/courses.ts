
export type Courses = {
    id: string,
    title: string,
    thumbnail: string,
    description: string,
    videoUrl: string
};

export const courses: Courses[] = [
    {
        id: "1",
        title: "Web Development",
        description: "Guide to learning Web Development",
        thumbnail: "/images/Web Development.png",
        videoUrl: "https://youtu.be/ZxKM3DCV2kE?si=hmgVL7gK7L_Lnm3N"
    },
    {
        id: "2",
        title: "CyberSecurity Course",
        description: "Learn CyberSecurity in Hours",
        thumbnail: "/images/Cyber Sec.png",
        videoUrl: "https://www.youtube.com/live/U-fpEHLIzQE?si=9gEUGLTQt3_oMyXg"
    },
    {
        id: "3",
        title: "UI/UX Design",
        description: "Become and Expert UI/UX Designer",
        thumbnail: "/images/design.png",
        videoUrl: "https://youtu.be/pyQAiRuqUSM?si=sg0Cht4fPX9_iam8"
    },
]

