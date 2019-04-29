import React from 'react';

const TextModel = {
    about: {
        header: "Software Developer and Mechatronics Engineering student at the University of Waterloo",
        paragraph: ["Since I was a kid, I've always had a passion for creating. I used to love scribbling random drawings everywhere I can and eventually would start drawing countless floor plans for random building ideas I'd have. And despite how aful all those drawings were in hindsight (definitely not the artist in the family), I loved making them and it fueled my creativity and interest in everything around me from a very young age. By the time I made it to middle and high school, I started gravitating towards how everything around me worked, especially all the technology I was using. This passion for technology people can actually use on a daily basis lead me to Engineering.",
                    "While I do enjoy the hardware aspect of my program, I truly fell in love with the software aspect a lot more. So far in my journey in software development, I was able to learn many new different languages and technologies in my nearly 2 years of professional experience. For example, in my last position at MHS, I rebuilt two old PHP web applications into new progressive web apps using ReactJS. This was done after spending some time working with both Angular and React and figuring out a clean and scalable template for future applications. I also spend 8 months as the in developer in creating a new Windows 8 and 10 application from the ground up using at/HP-and was heavily involved in the planning, development and deployment of the project. This helped me gain a lot of insight into the importance of cede maintainability and implementing new technologies to ensure project functionality years after development.",
                    "During my time there, I also fixed hundreds of bugs and user stories while working within an Agile/Scrum environment and using TFS & Git to manage all the teamwork and source code. This showed me the importance of being actively involved in different aspects of the project development process, from early spec meetings to the very final sprints before deploying the project. for customers to use. As I was so heavily involved, I was able to take full ownership of all my work in shaping the app from the ground up as well as showing initiative in actively researching different methods and solutions to implement to ensure a clean and modern design. I've also displayed my fast learning skills by being able to quickly learn different languages and tools such as Objective C and Xamarin and use them effectively.",
                    "While I'm not working on work or side projects, I really enjoy working on my music production as it remains to be my main creative outlet nowadays. I make countless hip-hop/P8B/electronic beats as I always obsess over new synths, plug-ins and sounds I can use and manipulate. I also enjoy catching up on whatever TV shows I'm currently watching and whatever f ilms/albums that I might've missed during the year."
                ]
    },
    experience: [
        {
            organization: "Globalive Technology",
            title: "Software Developer (Frontend)",
            date: "January - April 2019",
            location: "Toronto, Ontario, Canada",
            summary: [
                "Heavily involved in the development of a utility billing web application in an Agile setting",
                "Mainly worked on the frontend side using VueJS as well as Vuex for state management",
                "Constantly worked with design team while implementing new features to ensure a simple and intuitive user experience; Ensured to follow Material design throughout",
                "Involved in code refactoring discussions as well as regular code reviews",
                "Participated in biweekly sprint end demos, retrospectives, planning sessions and bug bashes"
            ]
        },
        {
            organization: "Multi-Health Systems",
            title: "Software Developer (Web)",
            date: "May - August 2018",
            location: "Toronto, Ontario, Canada",
            summary: [
                "Developed a progressive web application based on an older business teamwork simulation",
                "Involved in frontend architecture discussions; Used ReactJS as well as Redux for state management",
                "Ensured an emphasis on component-based development so the app can be used as a template for future web applications",
            ]
        },
        {
            organization: "Multi-Health Systems",
            title: "Software Developer (.NET)",
            date: "September 2016 - December 2017",
            location: "Toronto, Ontario, Canada",
            summary: [
                "Created a Windows 8 &10 UWP/Metro application for a language learning child assessment using C#, .NET & Xamarin Forms, and shipped app to Microsoft Store to be used by company clients",
                "Communicated with company portal APIs using JSON and XML data",
                "Fixed hundreds of bugs and worked on new user stories within a timely manner in an Agile/Scrum environment; participated in daily standups and sprint planning sessions",
                "Completed an update to an existing iOS application, 4 weeks ahead of schedule, by adding new screens and calculating new data",
                "Developed a cross-platform template for future assessment Windows and mobile applications from existing code",
                "Managed multiple projects within a fast-paced environment; tracked workflow using TFS and Git repositories"
            ]
        },
        {
            organization: "Trans-Plan Inc.",
            title: "Software Developer (iOS)",
            date: "January - April 2016",
            location: "Toronto, Ontario, Canada",
            summary: [
                "Developed native iOS traffic analysis application for traffic count surveys using Objective C.",
                "Added new traffic count speed control feature to existing iOS traffic count app that wirelessly syncs with Windows VLC media player.",
                "Updated existing company applications with requested interface features by co-workers and traffic surveyors.",
                "Resolved app bugs that occurred to traffic surveyors during active studies to ensure all collected site data can be obtained and uploaded to company server as soon as possible."
            ]
        }
    ],
    projects: [{
            title: "Endless Charts",
            subtitle: "Album Chart Mobile Application",
            workInProgress: true,
            date: "2019",
            summary: [
                "Cross-platform mobile application currently building for Android using React Native",
                "Supports the ability to search for albums, view details, choose favorites and create simple lists",
                "Uses React Router for navigation and Axios for REST API calls; Last.fm API used to populate app data",
                "Uses NativeBase library to ensure consistent, reusable front-end components as well as Redux for state management"
            ],
            moreInfo: [
                "Test",
                "Test",
                "Test",
                "Test"
            ]
        },{
            title: "Personal Website",
            subtitle: "probably where you're reading this right now :)",
            date: "2018",
            summary: [
                "Simple Personal Portfolio Website to highlight personal skills and experience",
                "Front-end based web app built using ReactJS to create clean, reusable components",
                "Dynamically scale images and cards and use flexbox to ensure responsive design"
            ],
            moreInfo: [
                "The purpose of the project was to create a simple portfolio showcasing my personal skills and experience gained throughout my career. Considering that the website would basically just display text and images, no backend felt like it was needed. I initially thought to use vanilla JS/HTML/CSS, but I eventually decided to go with using ReactJS for the frontend. While it can be argued that React is sort of overkill in this case due to the simplicity of the project, reusability is a big advantage to the component-based approach React takes which makes updating the website with recent experience very simple and ensures consistency throughout the application.",
                "To properly organize the application, it was important to seperate it into different layers. The views layer contains the container components for the different sections of the website (About, Experience, Projects, etc..). The components layer contains smaller reusable components such as the main card used throughout to display information. The models layer contains the Text and Image models where the entire application pulls resources from. The final layer is the redux layer which holds the redux store, reducers and actions to manage the app's state. This ensures the entire application deals with a single, immutable source of truth.",
                "As far as third party libraries goes, the main ones used are React-Router to manage the navigation between different sections shown and Redux to manage the application's state."
            ],
            source: 'https://github.com/husseinalkasake/personal-website-react'
        },{
            title: "NXT Coin Sorter",
            date: "2016",
            summary: [
                "Worked as a team to design, build and code a Coin Sorting robot using a Lego Mindstorm kit",
                "Build the mechanical design to turn circular motion of a motor to linear motion, pushing each coin towards a touch sensor to measure their diameters",
                "Completed, tested and debugged the C++ code to operate the mechanical system efficiently"
            ],
            moreInfo: [
                "Test",
                "Test",
                "Test",
                "Test"
            ]
        },{
            title: "Fuel Cell Car",
            date: "2016",
            summary: [
                "Maintained Hydrogen fuel cell equipment provided by the university to develop a line following car that could travel through three different courses",
                "Completed a RobotC line following algorithm and tested it on each course to optimize the left and right bias of the code"
            ],
            moreInfo: [
                "Test",
                "Test",
                "Test",
                "Test"
            ]
        }
    ],
    education: [{
            institution: "University of Waterloo",
            title: "Candidate for Bachelors of Applied Science in Mechatronics Engineering",
            location: "Waterloo, Ontario, Canada",
            date: "Expected Graduation: 2021",
            sections: [{
                subtitle: 'Relevant Projects',
                summary: [
                    "Built a basic task scheduling real-time operating system using C and RTOS course material",
                    "Built and programmed a line following and magnet detecting robot using C and soldering skills",
                    "Designed, tested and debugged line following and coin sorting robots using C++ to meet constraints and fulfill project goals",
                    "Designed and built a 3D Truss Bridge Design using stress and force analysis and AutoCAD skills"
                ]
            },{
                subtitle: 'Relevant Courses',
                summary: [
                    "General Computation",
                    "Linear Systems & Signals",
                    "Calculus 1/2/3 for Engineers",
                    "Microprocessors Digital Logic",
                    "Algorithms and Data Structures",
                    "Computer Structures & Real-Time Systems"
                ]
            }]    
        },
        {
            institution: "Bluevale Collegiate Institute",
            title: "Ontario Secondary School Diploma",
            location: "Waterloo, Ontario, Canada",
            date: "Graduation: 2015",
            sections: [{
                subtitle: 'Relevant Courses/Projects',
                summary: [
                    "AP Calculus",
                    "Determined factors that affect the crime rate in Canada in a 30-page statistics research report, using analytical and Microsoft Excel skills."
                ]
            }]
        }
    ],
    extras: {
        note: 'Note: ',
        workInProgressMessage: 'This project is a work in progress.'
    }
};

const getText = (section, styles = {}, key = 0) => {

    let texts = [];
    let list = [];
    switch(section){
        case 'about':
            texts.push(<p style={styles}>{ TextModel.about.header}</p>);
            for (let text of TextModel.about.paragraph)
                texts.push(<p style={styles}>{ text }</p>);
            break;
        case 'experience':
            const position = TextModel.experience[key];
            texts.push(<p style={styles}>{ position.title}</p>);
            texts.push(<p style={styles}>{ position.organization}</p>);
            texts.push(<p style={styles}>{ position.date}</p>);
            texts.push(<p style={styles}>{ position.location}</p>);
            list = [];
            position.summary.map(text => {
                list.push(<li style={styles}>{ text }</li>);
            });
            texts.push(<ul>{ list }</ul>);
            break;
        case 'projects':
            const project = TextModel.projects[key];
            texts.push(<p style={styles}>{ project.title}</p>);
            if (project.subtitle) texts.push(<p style={styles}>{ project.subtitle}</p>);
            list = [];
            project.summary.map(text => {
                list.push(<li style={styles}>{ text }</li>);
            });
            texts.push(<ul>{ list }</ul>);
            break;
        case 'projectItem':
            const projectItem = TextModel.projects[key];
            if (projectItem.subtitle) texts.push(<p style={styles}>{ projectItem.subtitle}</p>);
            if (projectItem.workInProgress) texts.push(workInProgressMessage(styles));
            projectItem.moreInfo.map(text => {
                texts.push(<p style={styles}>{text}</p>);
            });
            break;
        case 'education':
            const institution = TextModel.education[key];
            texts.push(<p style={styles}>{ institution.institution}</p>);
            texts.push(<p style={styles}>{ institution.title}</p>);
            texts.push(<p style={styles}>{ institution.location}</p>);
            texts.push(<p style={styles}>{ institution.date}</p>);
            institution.sections.map(section => {
                texts.push(<p style={styles}>{ section.subtitle}</p>);
                list = [];
                section.summary.map(text => {
                    list.push(<li style={styles}>{ text }</li>);
                });
                texts.push(<ul>{ list }</ul>);
            });
            break;
        default:
            break;
    }
    return texts.slice();
}

const workInProgressMessage = (styles = {}) => {
    return [
        <p style={styles}>
            <span style={{fontWeight: 'bold'}}>{TextModel.extras.note}</span>
            { TextModel.extras.workInProgressMessage }
        </p>,
        <br/>
    ];
}

export const getProjectDate = (key = 0) => {
    return TextModel.projects[key].date;
}

export const getProjectTitle = (key = 0) => {
    return TextModel.projects[key].title;
}

export const projectHasMoreInfo = (key = 0) => {
    return TextModel.projects[key].moreInfo && TextModel.projects[key].moreInfo !== null;
}

export const getProjectSource = (key = 0) => {
    const project = TextModel.projects[key];
    return (project.source && project.source !== null) ? project.source : null;
}

export default getText;