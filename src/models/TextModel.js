import React from 'react';

const TextModel = {
    about: {
        header: "Software Developer and Mechatronics Engineering student at the University of Waterloo",
        paragraph: ["Since I was a kid, I've always had a passion for creating. I used to love scribbling random drawings everywhere I could and eventually would start drawing countless floor plans for random building ideas I'd have. And despite how awful all those drawings were in hindsight (definitely not the artist in the family), I loved making them and it fueled my creativity and interest in everything around me from a very young age. By the time I made it to middle and high school, I started gravitating towards how everything around me worked, especially all the technology I was using. This passion for technology people actually use on a daily basis lead me to Engineering.",
                    "While I do enjoy the hardware aspect of my program, I truly fell in love with the software side. So far in my journey in software development, I was able to learn many different languages and technologies in my 2 years of professional experience. For example, in my last position, I worked on building a utility billing web application using VueJS all the way up to shipping it to users and incrementally improving it in an agile setting. I also have previous experience working on a ReactJS web app as well as a Windows 8 and 10 application from the ground up using C#/Xamarin. In all those projects, I was heavily involved in their planning, development and deployment. This helped me gain a lot of insight into the importance of code maintainability and scalability to ensure functionality years down the line.",
                    "In most of my experience, I worked on hundreds of bugs and user stories while working within an Agile/Scrum environment and used TFS & Git to manage teamwork and source code accordingly. This showed me the importance of being actively involved in different aspects of the development process, from early design meetings to the very final sprints before deploying the project. In my last position especially, I was heavily involved by participating in biweekly sprint planning sessions, retrospectives, backlog grooming and bug bashes.",
                    "While I'm not working on work or side projects, I really enjoy working on my music production as it remains my main creative outlet nowadays. I make countless hip-hop/R&B/electronic beats as I always obsess over new synths, plug-ins and sounds I can use and manipulate. I also enjoy catching up on whatever TV shows I'm currently watching and whatever f ilms/albums that I might've missed during the year."
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
                "Developed native iOS traffic analysis application for traffic count surveys using Objective C",
                "Added new traffic count speed control feature to existing iOS traffic count app that wirelessly syncs with Windows VLC media player",
                "Updated existing company applications with requested interface features by co-workers and traffic surveyors",
                "Resolved app bugs that occurred to traffic surveyors during active studies to ensure all collected site data can be obtained and uploaded to company server as soon as possible"
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
                "The purpose of this project is to build a music album chart/list creating mobile application. The project is inspired by popular chart rendering tools such as Neverending Charts which allow users to create drag and drop charts of their favorite albums and movies. It is currently being built for Android and will allow users to search and favorite albums as well as adding them to their own shareable drag and drop lists.",
                "Before starting on the application, alot of time was spent exploring different options. While doing it natively would've been the best option in terms of performance, I was interested in exploring existing cross-platform development options considering my previous experience with Xamarin. I eventually decided to use React Native due to how much I enjoy working with ReactJS. One runner up option, Flutter was very interesting to me due to their approach to rendering components and their Dart language, but it was still very new and lacked in terms of support and community despite their excellent documentation.",
                "The application uses the Last.fm public API to fetch album information. In terms of third-party libraries used, the NativeBase component library was used to provide consistent, reusable basic components. Other ones include Redux for state management, React Router for navigation and Axios to handle REST API calls."
            ],
            source: 'https://github.com/husseinalkasake/endlesscharts',
            video: {
                web: false,
                source: require('../images/endless-charts.mp4')
            }
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
            title: "Magnet detecting line following robot",
            date: "2018",
            summary: [
                "Built a line following and magnet detecting robot using programmable circuit board and motors",
                "Soldered circuit components onto PCB following circuit schematics",
                "Wrote and debugged magnet detecting and line following algorithms using C",
                "Configured tolerances of magentic and light detecting sensors through rigorous testing"
            ],
            moreInfo: [
                "This project was a term long project for our 2nd year Circuits course that was done over 10 lab sessions. The project involved analyzing circuit schematics, writing and flashing C alogirthms and manually soldering components onto a programmable circuit board accordingly.",
                "The line following and magnet detecting of the robot was done by writing, compiling and flashing C algorithms onto the microcontroller of the board using a universal port connector. Magnet detecting and light detecting sensors were soldered on and calibration hardware issues were corrected through testing and defining tolerances through software. The robot was then tested on different tracks where it must follow a black line on a white board as well as stop and flash an LED when it detects a magnet within a specific range.",
                "While the project was more mechanical than software based, alot of software debugging and calibration still went into it to match design constraints. The project was a success as it followed the line perfectly and most of the magnets were detected, earning a near perfect mark. Unfortunately no recording was allowed in the lab session but the finished board with all soldered circuit components is showed below."
            ],
            images: [
                require('../images/robot-circuit-board-1.jpg'),
                require('../images/robot-circuit-board-2.jpg')
            ]
        },{
            title: "3D Truss Bridge",
            date: "2017",
            summary: [
                "Designed and built 3D Truss Bridge using stress and force analysis as well as AutoCAD skills",
                "Created and analyzed multiple bridge designs using force analysis and engineering skills",
                "Designed all required pieces using AutoCAD; Created them using laser cutter",
                "Tested multiple versions of design with loads; Analyzed failures to improve design"
            ],
            moreInfo: [
                "This project was for our 2nd year material design course where we had to design a truss bridge that can hold as many weights as possible before breaking. The bridge was designed using AutoCAD and built using laser cut wooden pieces. Force and stress analysis was used to predict and improve bridge designs as well as a couple of test runs with weights.",
                "The project was mainly mechanical with not much software besides creating AutoCAD schematics. However, as a standard assignment, it still provided some great engineering design experience. The project was a success as it ended up being one of the longest standing bridges before failure. The bridge's building progress, final design, breaking and aftermath can be seen below."
            ],
            images: [
                require('../images/truss-bridge-break.gif'),
                require('../images/truss-bridge-progress.jpg'),
                require('../images/truss-bridge-2.jpg'),
                require('../images/truss-bridge-aftermath.jpg')
            ],
            video: {
                web: true,
                source: 'https://www.youtube.com/embed/QjMBVHinv8c'
            }
        },{
            title: "NXT Coin Sorter",
            date: "2016",
            summary: [
                "Worked as a team to design, build and code a Coin Sorting robot using a Lego Mindstorm kit",
                "Build the mechanical design to turn circular motion of a motor to linear motion, pushing each coin towards a touch sensor to measure their diameters",
                "Completed, tested and debugged the C++ code to operate the mechanical system efficiently"
            ],
            moreInfo: [
                "This was the major first year engineering design project for my program, where we had to design and build a mechanical system using an NXT Lego Mindstorm Kit. We decided to create a robot that would sort different coins based on their size. We decided to use the RobotC to program our robot to perform its functionality.",
                "The project was mainly mechanical as building the physical hardware was the major challenge. The design was to load each coin on a conveyor belt that moved each coin to the measurement arm. For each coin the measurement arm moves at the same pace. We were able to utilise this design by measuring the time it took for each coin to be pushed into the touch sensor. This gave us a range of values for each size and allowed us to differentiate between sizes of coins. After concluding the size of the coin the wheel then turns to the correct cup by stopping at the right colour (different colour for each size of coin) using a colour sensor. The conveyor belt would then simultaneously move the measured coin into the correct cup and move the next coin to the measurement arm."
            ],
            images: [
                require('../images/nxt-coin-sorter-1.jpg'),
                require('../images/nxt-coin-sorter-2.jpg'),
                require('../images/nxt-coin-sorter-3.jpg')
            ]
        },{
            title: "Fuel Cell Car",
            date: "2016",
            summary: [
                "Maintained Hydrogen fuel cell equipment provided by the university to develop a line following car that could travel through three different courses",
                "Completed a RobotC line following algorithm and tested it on each course to optimize the left and right bias of the code"
            ],
            moreInfo: [
                "The purpose of this project was to design and program the code for a hydrogen fuel cell powered car to follow lines on several different tracks.",
                "Our group designed our own chassis for the car which involved space to hold the fuel cells and water containers. The code was designed to follow lines so the code base could be reused for each course. The project was generally a success as we completed all courses and recieved an award for best design in our class."
            ],
            images: [
                require('../images/fuel-cell-car.jpg')
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

export const getProjectVideo = (key = 0) => {
    const project = TextModel.projects[key];
    return (project.video && project.video !== null) ? project.video : null;
}

export const getProjectImages = (key = 0) => {
    const project = TextModel.projects[key];
    return (project.images && project.images !== null) ? project.images : null;
}

export default getText;