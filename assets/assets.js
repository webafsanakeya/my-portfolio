import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import react from './react.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import performance_icon from './performance-icon.png'
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import typescript from './typescript.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    react,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    performance_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    typescript
};

export const workData = [
    {
        title: 'Real-Time Chat App',
        description: 'Built with Socket.io, Node.js, and React',
        bgImage: '/work-1.png',
    },
      {
        title: 'E-Commerce Website',
        description: 'Full-featured online store with cart & checkout',
        bgImage: '/work-2.png',
    },
    {
        title: 'Perfume E-Commerce Website',
        description: 'Specialized online shop for perfumes',
        bgImage: '/work-3.png',
    },
    {
        title: 'Lost & Found Website',
        description: 'Platform to report and find lost items',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
  { 
    icon: assets.web_icon, 
    title: 'Modern Web Applications', 
    description: 'Developing high-performance web apps with React, Next.js, and TypeScript, following best practices in scalability and maintainability.', 
    link: '' 
  },
  { 
    icon: assets.ui_icon, 
    title: 'UI/UX Engineering', 
    description: 'Implementing pixel-perfect, component-driven UIs with Tailwind CSS, styled-components, and modern design systems.', 
    link: '' 
  },
  { 
    icon: assets.graphics_icon, 
    title: 'API Integration & State Management', 
    description: 'Connecting RESTful APIs and GraphQL with advanced state management tools like Redux Toolkit, Zustand, or React Query.', 
    link: '' 
  },
  { 
    icon: assets.performance_icon, 
    title: 'Performance Optimization', 
    description: 'Improving Core Web Vitals, load time, and overall frontend performance with code-splitting, lazy loading, and caching strategies.', 
    link: '' 
  },
]


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React JS, Next JS' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Pharm & Web Development Course' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Completed 20+ web development projects' }
];


export const toolsData = [
       assets.vscode,   // editor
  assets.react,    // frontend framework
  assets.firebase, // backend / auth
  assets.mongodb,  // database
  assets.git,      // version control
  assets.figma,
  assets.typescript
];