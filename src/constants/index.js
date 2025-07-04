export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Birshu Sharma',
        position: 'Director, Kareng Technologies',
        img: 'assets/review1.png',
        website: 'https://www.linkedin.com/company/karengtechnologies/',
        review:
            'He has excellent conduct and character. His expertise in full-stack development, including proficiency in technologies such as HTML, CSS, JavaScript, React, Node.js, and MongoDB, greatly contributed to the success of our project. Due to his skills in designing responsive user interfaces, optimizing backend performance, and integrating APIs seamlessly, coupled with his commitment and continued hard work, we wish him all the best for his future.',
    },
    {
        id: 2,
        name: 'Ilina Sinha',
        position: 'Doctoral Student, Indian Institute of Technology',
        img: 'assets/review2.png',
        website:  'https://www.linkedin.com/in/ilina-sinha-a10598126/',
        review:
            'As a Supervisor of his Internship, I found his dedication and hardwork remarkable. He showed a commendable understanding, has a strong sense of professionalism and shares a cordial bond with his professors and peers alike. His curiosity, appetite for knowledge and interest is assorted fields of Computer Science makes him a valuable resource.',
    },
    {
        id: 3,
        name: 'Ritushree Dutta',
        position: 'Associate Professor, Girijananda Chowdhury University',
        img: 'assets/review3.png',
        website: 'mailto:ritushreegimt@gmail.com',
        review:
            'Bahnimaan demonstrated exceptional creativity and technical skill in their NFT project. Their innovative approach and dedication to learning were truly impressive. They showed a clear understanding of the NFT space, refining their work with great attention to detail. A bright future in digital innovation awaits him!"',
    },
    {
        id: 4,
        name: 'Sanjay Moulik',
        position: 'Assistant Professor, Indian Institute of Information Technology, CSE',
        img: 'assets/review4.png',
        website:'mailto:sanjay@iiitg.ac.in',
        review:
            'Bahnimaan showcased strong technical expertise during their internship on Scheduling in Real-Time Systems. They efficiently implemented advanced scheduling algorithms for heterogeneous multi-core systems, optimizing task allocation, latency, and resource utilization under strict timing constraints. Their work demonstrated a solid grasp of real-time scheduling, core affinity, and deadline-driven execution strategies.',
    },
];

export const myProjects = [
    {
        title: 'Leave Management System - Educational Assistance Platform',
        desc: 'Leave Management System is a user-friendly platform that empowers educational institutions to efficiently manage employee leave requests, ensuring a smooth and organized leave process.',
        subdesc:
            'Incorporating fundamentals of MERN stack, Leave Management System provides a secure and reliable solution for managing leave requests, allowing employees to easily submit and track their leave applications.',
        href: 'https://github.com/BkzWorld/Leave_Management_System_MERN',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/mongodb.svg',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/ejs.svg',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/nodejs.svg',
            },
        ],
    },
    {
        title: 'NFT Marketplace - NFT trading platform',
        desc: "Explores blockchain's transformative potential through a specialized Decentralized Application (DApp) that empowers users to buy, sell, and trade NFTs, a digital asset that represents ownership of unique digital items on the blockchain.",
        subdesc:
            'Any media design irrespective of file format, audio video etc can be uploaded as an NFT.',
        href: 'https://github.com/BkzWorld/NFT-Marketplace',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/solidity2.svg',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/metamask.png',
            },
        ],
    },
    {
        title: 'Game of Shelves - Book Profile App',
        desc: 'An innovative book profile app that allows users to create and manage their own book profiles, showcasing their favorite books and sharing them with others.',
        subdesc:
            'With a focus on efficiency, The application focuses on simplifying the process of creating and managing book profiles, making it easy for users to find and share their favorite books with others.',
        href: 'https://github.com/BkzWorld/Game-of-Shelves',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/ejs.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/css.svg',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/js.svg',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/mongoose.svg',
            },
        ],
    },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'GeeksforGeeks',
        pos: 'Data Analyst Intern',
        duration: 'November 2024 - March 2025',
        title: "Dashboard Development: Created interactive dashboards using tools like Tableau and Power BI to provide visual insights for tracking key performance metrics.\n" +
            " Applied SQL server and Python to analyze data, perform statistical computations, and automate routine tasks.\n" +
            "Implementing Microsoft Excel, Power BI in on going projects.",
        icon: '/assets/g4g.svg',
        animation: 'salute',
    },
    {
        id: 2,
        name: 'Kareng Technologies',
        pos: 'Web Developer',
        duration: 'September 2023 - December 2023',
        title: "Developed a custom Employee Leave Management System using MERN stack.\n" +
            " Incorporated 2 Streamlined leave request and approval processes, for diverse user roles.\n" +
            "Explored ways to visualize and send a daily report of test results to team members using Databases in real time.",
        icon: '/assets/framer.svg',
        animation: 'salute',
    },
    {
        id: 3,
        name: 'Indian Institute of Information Technology, Guwahati',
        pos: 'Research Intern',
        duration: 'November 2022- January 2023',
        title: `Designed energy-aware scheduling scheme for real-time systems using Java.
            \n Minimized energy consumption by 27% in high-performance clusters using Dynamic Power Management (DPM).
            \nImplemented fault-tolerant dual core clustering and scheduling for task allocation on heterogeneous platforms.`,
        icon: '/assets/figma.svg',
        animation: 'salute',
    },
    {
        id: 4,
        name: 'DAY-National Urban Livelihood Mission (Central Govt. of India)',
        pos: 'Junior Web Developer',
        duration: 'June - August 2021',
        title: " Led team of 3 to design and develop website for self-help groups (Mangaldai, Assam).\n" +
            "Increased sales by 7% and market reach for women-led products, empowering the community.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];