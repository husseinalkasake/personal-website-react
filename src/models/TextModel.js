import React from 'react';

const TextModel = {
    about: {
        header:
            'Software Developer and 4th year Mechatronics Engineering student at the University of Waterloo - graduating April 2021 🙏',
        paragraph: [
            "Since I was a kid, I've always had a passion for creating. I used to love scribbling random drawings everywhere I could and eventually would start drawing countless floor plans for random building ideas I'd have. And despite how awful all those drawings were in hindsight (definitely not the artist in the family), I loved making them and it fueled my creativity and interest in everything around me from a very young age. By the time I made it to middle and high school, I started gravitating towards how everything around me worked, especially all the technology I was using. This passion for technology people use on a daily basis lead me to pursue Engineering.",
            'While I do enjoy the hardware aspect of my program, I truly fell in love with the software side. So far in my journey, I was able to learn many different languages and technologies in my over 2 years of professional experience. For example, in my last position, I was responsible of developing and iterating on core features of a motion capture solution with a WPF frontend and Python backend. Before that, I was involved in developing an ecommerce web application using Typescript, Vue, Nuxt, GraphQL & NodeJS within a continuous deployment setting. In all my projects, I was heavily involved in their planning, development and deployment processes. This helped me gain a lot of insight into the importance of code maintainability and scalability to ensure functionality years down the line.',
            'In most of my experience, I worked on hundreds of bugs and user stories within an Agile/Scrum environment and used TFS & Git to manage teamwork and source code accordingly. This showed me the importance of being actively involved in different aspects of the development process, from early design meetings to the very final sprints before deploying the project. In my last position especially, I was heavily involved by participating in biweekly sprint planning sessions, retrospectives, backlog grooming and bug bashes.',
            "While I'm not working on work or side projects, I really enjoy working on my music production as it remains my main creative outlet nowadays. I make countless hip-hop/R&B/electronic/latino beats as I always obsess over new synths, plug-ins and sounds/instruments I can use and manipulate. I also enjoy catching up on whatever TV shows I'm currently watching and whatever films/albums that I might've missed during the year."
        ]
    },
    experience: [
        {
            organization: 'Ubisoft',
            title: 'Software Developer',
            date: 'January - April 2020',
            location: 'Toronto, Ontario, Canada',
            summary: [
                'Heavily involved in the developement of a motion capture software solution using .NET (WPF) & Python for frontend and backend respectively',
                'Took ownership of major full-stack features and participated in regular software architecture discussions and code reviews witin an agile setting',
                'Quickly developed a facial motion capture solution (using a Python service and a WPF frontend) to meet sudden social distancing requirements',
                'Wrote extensive Pytest backend and XUnit frontend unit and integration tests to ensure feature functionality throughout development'
            ]
        },
        {
            organization: 'Hubba',
            title: 'Software Developer',
            date: 'September - December 2019',
            location: 'Toronto, Ontario, Canada',
            summary: [
                'Fully developed and shipped core functionality features for an ecommerce web application using Typescript, NodeJS, React, Vue, Nuxt, GraphQL & Apollo Client',
                'Heavily involved in development of a responsive frontend rewrite using Vue & Nuxt; Modified GraphQL and NodeJS / MongoDB backend so data is handled properly',
                'Worked within an agile continuous deployment environment by using LaunchDarkly feature flags to confidently roll out new features',
                'Wrote extensive Jest unit tests and Cypress end to end tests for all new features; Used Percy snapshots to keep track of visual changes'
            ]
        },
        {
            organization: 'Globalive Technology',
            title: 'Software Developer (Frontend)',
            date: 'January - April 2019',
            location: 'Toronto, Ontario, Canada',
            summary: [
                'Heavily involved in the development of a utility billing web application in an Agile setting',
                'Mainly worked on the frontend side using VueJS as well as Vuex for state management',
                'Constantly worked with design team while implementing new features to ensure a simple and intuitive user experience; Ensured to follow Material design throughout',
                'Involved in code refactoring discussions as well as regular code reviews',
                'Participated in biweekly sprint end demos, retrospectives, planning sessions and bug bashes'
            ]
        },
        {
            organization: 'Multi-Health Systems',
            title: 'Software Developer (Web)',
            date: 'May - August 2018',
            location: 'Toronto, Ontario, Canada',
            summary: [
                'Developed a progressive web application based on an older business teamwork simulation',
                'Involved in frontend architecture discussions; Used ReactJS as well as Redux for state management',
                'Ensured an emphasis on component-based development so the app can be used as a template for future web applications'
            ]
        },
        {
            organization: 'Multi-Health Systems',
            title: 'Software Developer (.NET)',
            date: 'September 2016 - December 2017',
            location: 'Toronto, Ontario, Canada',
            summary: [
                'Created a Windows 8 &10 UWP/Metro application for a language learning child assessment using C#, .NET & Xamarin Forms, and shipped app to Microsoft Store to be used by company clients',
                'Communicated with company portal APIs using JSON and XML data',
                'Fixed hundreds of bugs and worked on new user stories within a timely manner in an Agile/Scrum environment; participated in daily standups and sprint planning sessions',
                'Completed an update to an existing iOS application, 4 weeks ahead of schedule, by adding new screens and calculating new data',
                'Developed a cross-platform template for future assessment Windows and mobile applications from existing code',
                'Managed multiple projects within a fast-paced environment; tracked workflow using TFS and Git repositories'
            ]
        },
        {
            organization: 'Trans-Plan Inc.',
            title: 'Software Developer (iOS)',
            date: 'January - April 2016',
            location: 'Toronto, Ontario, Canada',
            summary: [
                'Developed native iOS traffic analysis application for traffic count surveys using Objective C',
                'Added new traffic count speed control feature to existing iOS traffic count app that wirelessly syncs with Windows VLC media player',
                'Updated existing company applications with requested interface features by co-workers and traffic surveyors',
                'Resolved app bugs that occurred to traffic surveyors during active studies to ensure all collected site data can be obtained and uploaded to company server as soon as possible'
            ]
        }
    ],
    projects: [
        {
            title: 'Backyarders',
            subtitle: 'Home Workout Application',
            date: '2020',
            summary: [
                'Cross-platform mobile application for iOS and Android built with React Native',
                'Provides users of all backgrounds with a customized home workout schedule (with videos for each workout) as well as a food plan with calorie count',
            ],
            moreInfo: [
                'This project was created with a friend to meet the sudden demand of home solutions due to the quarantine times of the COVID-19 pandemic. After discussing with friends with medical studies backgrounds, we decided to create a cross-platform mobile application as a solution to provide customized home workout plans for users.',
                "React Native was chosen given team familiarity with the platform along with Redux and React Router for state management and app navigation respectively. The application consisted of collecting user information through an inital survey (with information available to edit later with a personal profile page) to customize the user's workout plan accordingly. The algorithm to customize workout plans were determined through research and consultation with friends with medical studies backgrounds who recorded videos of the different workouts to provide users with an easy to follow reference. A suggested food plan is also provided based on the user's information to provide a reference of what's expected to help the user achieve their goals. Due to time limitations, the team was not able to create a backend for the app and is something to be added in the future to ensure seperation of app logic down the line 🙏"
            ],
            source: 'https://github.com/husseinalkasake/backyarders',
            deploymentLink: 'https://play.google.com/store/apps/details?id=com.backyarders.backyarders',
            video: {
                web: true,
                source: 'https://www.youtube.com/embed/cBDs3vc7h1c?autoplay=1&loop=1&mute=1&controls=0&playlist=cBDs3vc7h1c'
            }
        },
        {
            title: 'Autonomous Search and Rescue Robot',
            date: '2020',
            summary: [
                'Designed, built and programmed an autonomous search and rescue robot able to traversal multiple types of terrain (sand, pebbles & holes)',
                'Executed countless unit and integration tests (with and without robot and sensors) to ensure robot is able to traverse random variations of terrain as expected'
            ],
            moreInfo: [
                'This project was a major 3rd year engineering project where every group was responsible for designing, building and iterating on an autonomous vehicle able to traverse random obstacles (sand, pebbles and holes) while following a specific path. The mechanical aspect of the design was very difficult and took many iterations and tests with different motor and chassis combinations before finalizing the design shown below. To overcome the changing terrain, big wheels and powerful motors were used in the design. The mechanical parts were created using laser cutting pieces and relying on a gear ratio to handle motor torque as needed.',
                "From the software side, a C++ program was created to be used with an Arduino board connected to multiple sensors (2 light sensors and an IMU/angle sensor). Software design and development was done in parallel with the mechanical design with unit and integration tests with the sensors done before testing with the entire setup (connected to the robot and motors). Overall, the project was a sucess and the robot was able to finish the course with the obstacles as expected. The full demo of the robot can be seen below."
            ],
            source: 'https://github.com/husseinalkasake/autonomous-rescue-vehicle',
            images: [require('../images/s&r-robot.jpg')],
            video: {
                web: true,
                source: 'https://www.youtube.com/embed/VT_WfBGKOkA?mute=1'
            }
        },
        {
            title: 'Personal Website Backend',
            subtitle: 'Go GraphQL Backend for this website 😊',
            date: '2019',
            summary: [
                'Backend developed for personal website using Go and PostgreSQL database',
                'Created schemas & resolvers for all data objects to only pass desired data to frontend and provide built-in API documentation'
            ],
            moreInfo: [
                "This project was inspired by my recent experience of working with GraphQL. At one of my recent positions, I worked extensively with GraphQL and Apollo Client with both React and Vue applications and was really taken by its possibilites as an alternative to traditional REST APIs. While for a project like this where most of the data is fetched together, the benefits of only passing desired data is not fully appreciated, but the benefits of built in schema documentation and specific errors are still valuable. This was also an opportunity to work with Go which is a language I've been interested in and wanting to get famailiar with. For the database, both MySQL and PostgreSQL seemed like viable options but I was generally more familiar with Postgres.",
                'In terms of packages, the most significant one is graphql-go which provides a simple implementation of GraphQL, providing a straightforward template to declare needed schemas, resolvers and queries for all data objects. Other important ones are go-chi as a simple and lightweight router for HTTP services as well as database/sql and lib/pq to handle the database. This project is in the process of being deployed.'
            ],
            source:
                'https://github.com/husseinalkasake/personal-website-graphql'
        },
        {
            title: 'Endless Charts',
            subtitle: 'Album Chart Mobile Application',
            workInProgress: true,
            date: '2019',
            summary: [
                'Cross-platform mobile application currently building for Android using React Native',
                'Supports the ability to search for albums, view details, choose favorites and create simple lists'
            ],
            moreInfo: [
                'The purpose of this project is to build a music album chart/list creating mobile application. The project is inspired by popular chart rendering tools such as Neverending Charts which allow users to create drag and drop charts of their favorite albums and movies. It is currently being built for Android and will allow users to search and favorite albums as well as adding them to their own shareable drag and drop lists.',
                "Before starting on the application, alot of time was spent exploring different options. While doing it natively would've been the best option in terms of performance, I was interested in exploring existing cross-platform development options considering my previous experience with Xamarin. I eventually decided to use React Native due to how much I enjoy working with ReactJS. One runner up option, Flutter was very interesting to me due to their approach to rendering components and their Dart language, but it was still very new and lacked in terms of support and community despite their excellent documentation.",
                'The application uses the Last.fm public API to fetch album information. In terms of third-party libraries used, the NativeBase component library was used to provide consistent, reusable basic components. Other ones include Redux for state management, React Router for navigation and Axios to handle REST API calls.'
            ],
            source: 'https://github.com/husseinalkasake/endlesscharts',
            video: {
                web: false,
                source: require('../images/endless-charts.mp4')
            }
        },
        {
            title: 'Personal Website',
            subtitle: "probably where you're reading this right now 😊",
            date: '2018',
            summary: [
                'Simple Personal Portfolio Website to highlight personal skills and experience',
                'Front-end based web app built using ReactJS to create clean, reusable components'
            ],
            moreInfo: [
                'The purpose of the project was to create a simple portfolio showcasing my personal skills and experience gained throughout my career. Considering that the website would basically just display text and images, no backend felt like it was needed. I initially thought to use vanilla JS/HTML/CSS, but I eventually decided to go with using ReactJS for the frontend. While it can be argued that React is sort of overkill in this case due to the simplicity of the project, reusability is a big advantage to the component-based approach React takes which makes updating the website with recent experience very simple and ensures consistency throughout the application.',
                "To properly organize the application, it was important to seperate it into different layers. The views layer contains the container components for the different sections of the website (About, Experience, Projects, etc..). The components layer contains smaller reusable components such as the main card used throughout to display information. The models layer contains the Text and Image models where the entire application pulls resources from. The final layer is the redux layer which holds the redux store, reducers and actions to manage the app's state. This ensures the entire application deals with a single, immutable source of truth.",
                "As far as third party libraries goes, the main one used is Redux to manage the application's state. Currently the project is auto deployed using Heroku. A backend was created for this project using Go and GraphQL and is in the process of being deployed."
            ],
            source: 'https://github.com/husseinalkasake/personal-website-react'
        },
        {
            title: 'Magnet detecting line following robot',
            date: '2018',
            summary: [
                'Built a line following and magnet detecting robot using a programmable circuit board and motors',
                'Wrote and debugged magnet detecting and line following algorithms using C as well as configured sensors accordingly'
            ],
            moreInfo: [
                'This project was a term long project for our 2nd year Circuits course that was done over 10 lab sessions. The project involved analyzing circuit schematics, writing and flashing C alogirthms and manually soldering components onto a programmable circuit board accordingly.',
                'The line following and magnet detecting of the robot was done by writing, compiling and flashing C algorithms onto the microcontroller of the board using a universal port connector. Magnet detecting and light detecting sensors were soldered on and calibration hardware issues were corrected through testing and defining tolerances through software. The robot was then tested on different tracks where it must follow a black line on a white board as well as stop and flash an LED when it detects a magnet within a specific range.',
                'While the project was more mechanical than software based, alot of software debugging and calibration still went into it to match design constraints. The project was a success as it followed the line perfectly and most of the magnets were detected, earning a near perfect mark. Unfortunately no recording was allowed in the lab session but the finished board with all soldered circuit components is showed below.'
            ],
            images: [
                require('../images/robot-circuit-board-1.jpg'),
                require('../images/robot-circuit-board-2.jpg')
            ]
        },
        {
            title: '3D Truss Bridge',
            date: '2017',
            summary: [
                'Designed and built 3D Truss Bridge using stress and force analysis as well as AutoCAD skills',
                'Created and analyzed multiple bridge designs using force analysis and engineering skills'
            ],
            moreInfo: [
                'This project was for our 2nd year material design course where we had to design a truss bridge that can hold as many weights as possible before breaking. The bridge was designed using AutoCAD and built using laser cut wooden pieces. Force and stress analysis was used to predict and improve bridge designs as well as a couple of test runs with weights.',
                "The project was mainly mechanical with not much software besides creating AutoCAD schematics. However, as a standard assignment, it still provided some great engineering design experience. The project was a success as it ended up being one of the longest standing bridges before failure. The bridge's building progress, final design, breaking and aftermath can be seen below."
            ],
            images: [
                require('../images/truss-bridge-break.gif'),
                require('../images/truss-bridge-2.jpg')
            ],
            video: {
                web: true,
                source:
                    'https://www.youtube.com/embed/QjMBVHinv8c?start=80&mute=1'
            }
        },
        {
            title: 'NXT Coin Sorter',
            date: '2016',
            summary: [
                'Worked within a team to design, build and code (using C++) a Coin Sorting robot using a Lego Mindstorm kit',
                'Completed, tested and debugged the C++ code to operate the mechanical system efficiently'
            ],
            moreInfo: [
                'This was the major first year engineering design project for my program, where we had to design and build a mechanical system using an NXT Lego Mindstorm Kit. We decided to create a robot that would sort different coins based on their size. We decided to use the RobotC to program our robot to perform its functionality.',
                'The project was mainly mechanical as building the physical hardware was the major challenge. The design was to load each coin on a conveyor belt that moved each coin to the measurement arm. For each coin the measurement arm moves at the same pace. We were able to utilise this design by measuring the time it took for each coin to be pushed into the touch sensor. This gave us a range of values for each size and allowed us to differentiate between sizes of coins. After concluding the size of the coin the wheel then turns to the correct cup by stopping at the right colour (different colour for each size of coin) using a colour sensor. The conveyor belt would then simultaneously move the measured coin into the correct cup and move the next coin to the measurement arm.'
            ],
            images: [
                require('../images/nxt-coin-sorter-1.jpg'),
                require('../images/nxt-coin-sorter-2.jpg'),
                require('../images/nxt-coin-sorter-3.jpg')
            ]
        },
        {
            title: 'Fuel Cell Car',
            date: '2016',
            summary: [
                'Maintained Hydrogen fuel cell equipment provided by the university to develop a line following car that could travel through three different courses',
                'Completed a RobotC line following algorithm and tested it on each course to optimize the left and right bias of the code'
            ],
            moreInfo: [
                'The purpose of this project was to design and program the code for a hydrogen fuel cell powered car to follow lines on several different tracks.',
                'Our group designed our own chassis for the car which involved space to hold the fuel cells and water containers. The code was designed to follow lines so the code base could be reused for each course. The project was generally a success as we completed all courses and recieved an award for best design in our class.'
            ],
            images: [require('../images/fuel-cell-car.jpg')]
        }
    ],
    education: [
        {
            institution: 'University of Waterloo',
            title: 'Bachelors of Applied Science in Mechatronics Engineering',
            location: 'Waterloo, Ontario, Canada',
            date: 'Expected Graduation: 2021',
            sections: [
                {
                    subtitle: 'Relevant Projects',
                    summary: [
                        'Designed, built and programmed an autonomous multi-terrain search and rescue robot that follows a course with random obstacles',
                        'Built a task scheduling real-time operating system using C and RTOS course material',
                        'Built a line following and magnet detecting robot using C and soldering skills',
                        'Designed, tested and debugged line following and coin sorting robots using C++ to meet constraints and fulfill project goals',
                        'Designed and built a 3D Truss Bridge Design using stress and force analysis and AutoCAD skills'
                    ]
                },
                {
                    subtitle: 'Relevant Courses',
                    summary: [
                        'General Computation',
                        'Linear Systems & Signals',
                        'Calculus 1/2/3 for Engineers',
                        'Microprocessors Digital Logic',
                        'Algorithms and Data Structures',
                        'Computer Structures & Real-Time Systems'
                    ]
                }
            ]
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
    switch (section) {
        case 'about':
            texts.push(<p style={styles}>{TextModel.about.header}</p>);
            for (let text of TextModel.about.paragraph)
                texts.push(<p style={styles}>{text}</p>);
            break;
        case 'experience':
            const position = TextModel.experience[key];
            texts.push(<p style={styles}>{position.title}</p>);
            texts.push(<p style={styles}>{position.organization}</p>);
            texts.push(<p style={styles}>{position.date}</p>);
            texts.push(<p style={styles}>{position.location}</p>);
            list = [];
            position.summary.forEach(text => {
                list.push(<li style={styles}>{text}</li>);
            });
            texts.push(<ul>{list}</ul>);
            break;
        case 'projects':
            const project = TextModel.projects[key];
            texts.push(<p style={styles}>{project.title}</p>);
            if (project.subtitle)
                texts.push(<p style={styles}><span>{project.subtitle}</span></p>);
            list = [];
            project.summary.forEach(text => {
                list.push(<li style={styles}>{text}</li>);
            });
            texts.push(<ul>{list}</ul>);
            break;
        case 'projectItem':
            const projectItem = TextModel.projects[key];
            if (projectItem.subtitle)
                texts.push(<p style={styles}>{projectItem.subtitle}</p>);
            if (projectItem.workInProgress)
                texts.push(workInProgressMessage(styles));
            projectItem.moreInfo.forEach(text => {
                texts.push(<p style={styles}>{text}</p>);
            });
            break;
        case 'education':
            const institution = TextModel.education[key];
            texts.push(<p style={styles}>{institution.institution}</p>);
            texts.push(<p style={styles}>{institution.title}</p>);
            texts.push(<p style={styles}>{institution.location}</p>);
            texts.push(<p style={styles}>{institution.date}</p>);
            institution.sections.forEach(section => {
                texts.push(<p style={styles}>{section.subtitle}</p>);
                list = [];
                section.summary.forEach(text => {
                    list.push(<li style={styles}>{text}</li>);
                });
                texts.push(<ul>{list}</ul>);
            });
            break;
        default:
            break;
    }
    return texts.slice();
};

const workInProgressMessage = (styles = {}) => {
    return [
        <p style={styles}>
            <span style={{ fontWeight: 'bold' }}>{TextModel.extras.note}</span>
            {TextModel.extras.workInProgressMessage}
        </p>,
        <br />
    ];
};

export const getProjectDate = (key = 0) => {
    return TextModel.projects[key].date;
};

export const getProjectTitle = (key = 0) => {
    return TextModel.projects[key].title;
};

export const projectHasMoreInfo = (key = 0) => {
    return (
        TextModel.projects[key].moreInfo &&
        TextModel.projects[key].moreInfo !== null
    );
};

export const getProjectSource = (key = 0) => {
    const project = TextModel.projects[key];
    return project.source && project.source !== null ? project.source : null;
};

export const getProjectDeploymentLink = (key = 0) => {
    const project = TextModel.projects[key];
    return project.deploymentLink && project.deploymentLink !== null ? project.deploymentLink : null;
}

export const getProjectVideo = (key = 0) => {
    const project = TextModel.projects[key];
    return project.video && project.video !== null ? project.video : null;
};

export const getProjectImages = (key = 0) => {
    const project = TextModel.projects[key];
    return project.images && project.images !== null ? project.images : null;
};

export const projectCount = TextModel.projects.length;
export const experienceCount = TextModel.experience.length;
export const educationCount = TextModel.education.length;

export default getText;
