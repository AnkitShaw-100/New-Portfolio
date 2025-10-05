import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ankitshaw6933@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Ankit, I am reaching out to you because...'
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/AnkitShaw-100' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ankit-shaw-884b0728a/' },
    { name: 'twitter', url: 'https://x.com/AnkitShaw750' }
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'GSAP', icon: '/logo/gsap.png' },
        { name: 'Framer Motion', icon: '/logo/framer-motion.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
    ],
    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'Prisma', icon: '/logo/prisma.png' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'AWS', icon: '/logo/aws.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Apni Dukan — E‑commerce',
        slug: 'apni-dukan',
        liveUrl: 'https://ankit-ecommerce.vercel.app/',
        year: 2025,
        description: `Apni Dukan is a full-stack e‑commerce demo showcasing a responsive Tailwind + React (Vite) frontend paired with a Node/Express backend. The project demonstrates product listing and detail pages, a shopping cart and order flow, role-based signup/login (buyer & seller), and token-based authentication. It is designed as a modular example to learn full-stack development and ship a small commerce workflow quickly.`,
        role: `Full‑stack developer — implemented the frontend UI with React + Vite and Tailwind CSS, and built a lightweight Express API for authentication, product management, and orders. Responsibilities included:
            <ul>
                <li>Auth: JWT-based signup/login with role (buyer/seller) handling</li>
                <li>Frontend: Responsive product listing, product details, cart and checkout flows</li>
                <li>Backend: Express routes for products, cart, orders and auth; simple token validation</li>
                <li>Deployment: Deployed the frontend to Vercel (live URL included)</li>
            </ul>`,
        techStack: [
            'React (Vite)',
            'Tailwind CSS',
            'Node.js',
            'Express',
            'JWT Authentication',
            'MongoDB (optional)',
            'Cloudinary (uploads helper)',
        ],
        images: ['/projects/images/dukan-home.png', '/projects/images/dukan-about.png', '/projects/images/dukan-cart.png'],
    },
    {
        title: 'Gmail Clone (Full‑stack)',
        slug: 'gmail-clone',
        techStack: [
            'React (Vite)',
            'Node.js',
            'Express',
            'MongoDB (Mongoose)',
            'JWT Authentication',
            'Axios',
            'CSS Modules',
        ],
        liveUrl: 'https://gmail-clone-fullstack.vercel.app/',
        year: 2025,
        description: `A full‑stack Gmail clone showcasing user signup/login with JWT, compose/send/receive email flows, and inbox/sent/trash views. Built to learn end-to-end application architecture, protected routes, and modern frontend patterns with React (Vite).`,
        role: `Sole developer for the demo project. Implemented:
        <ul>
          <li>JWT-based authentication (signup/login) and protected API routes</li>
          <li>Express API for email CRUD operations and user management</li>
          <li>Frontend UI with React (Vite), Axios for API calls, and responsive layouts</li>
          <li>Inbox, Sent and Trash flows, compose modal, and basic validation/error handling</li>
        </ul>`,
        images: [
            '/projects/images/gmail-login-page.png',
            '/projects/images/gmail-home-page.png',
            '/projects/images/gmail-home-page2.png',
        ],
    },
    {
        title: 'ChatApp — Real-time Group Chat',
        slug: 'chat-app',
        techStack: [
            'Node.js',
            'Express',
            'Socket.IO',
            'React (Vite)',
            'Tailwind CSS',
        ],
        liveUrl: 'https://chat-app-ankit.vercel.app/',
        year: 2025,
        description: `A small real-time group chat application using Node/Express + Socket.IO for the backend and React + Vite for the frontend. Features include joining a room with a display name, live user list, typing indicators, and message history in the session. The app is a compact demo of websockets and real-time UI patterns.`,
        role: `Full-stack developer — implemented the backend Socket.IO server (Node + Express) and the React (Vite) frontend. Highlights:
        <ul>
          <li>Socket events: joinRoom, userList, sendMessage/receiveMessage, typing/userTyping, userJoined/userLeft</li>
          <li>Simple room-based grouping and broadcast updates to connected clients</li>
          <li>Lightweight frontend UI with message list, input, and typing indicator</li>
          <li>Deployed frontend to Vercel and backend to a Node-friendly host (server origin configured to allow the Vite dev server)</li>
        </ul>`,
        images: ['/projects/images/chat-loginPage.png', '/projects/images/chat-window.png'],
    },
];
