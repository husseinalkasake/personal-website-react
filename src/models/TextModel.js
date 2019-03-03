import React from 'react';

const TextModel = {
    about: {
        header: "Software Developer and Mechatronics Engineering student at the University of Waterloo",
        paragraph: ["Since I was a kid, I've always had a passion for creating. I used to love scribbling random drawings everywhere I can and eventually would start drawing countless floor plans for random building ideas I'd have. And despite how aful all those drawings were in hindsight (definitely not the artist in the family), I loved making them and it fueled my creativity and interest in everything around me from a very young age. By the time I made it to middle and high school, I started gravitating towards how everything around me worked, especially all the technology I was using. This passion for technology people can actually use on a daily basis lead me to Engineering.",
                    "While I do enjoy the hardware aspect of my program, I truly fell in love with the software aspect a lot more. So far in my journey in software development, I was able to learn many new different languages and technologies in my nearly 2 years of professional experience. For example, in my last position at MHS, I rebuilt two old PHP web applications into new progressive web apps using PeacUS. This was done after spending some time working with both Angular and React and figuring out a clean and scalable template for future applications. I also spend 8 months as the in developer in creating a new Windows 8 and 10 application from the ground up using at/HP-and was heavily involved in the planning, development and deployment of the project. This helped me gain a lot of insight into the importance of cede maintainability and implementing new technologies to ensure project functionality years after development.",
                    "During my time there, I also fixed hundreds of bugs and user stories while working within an Agile/Scrum environment and using TFS & Git to manage all the teamwork and source code. This showed me the importance of being actively involved in different aspects of the project development process, from early spec meetings to the very final sprints before deploying the project. for customers to use. As I was so heavily involved, I was able to take full ownership of all my work in shaping the app from the ground up as well as showing initiative in actively researching different methods and solutions to implement to ensure a clean and modern design. I've also displayed my fast learning skills by being able to quickly learn different languages and tools such as Objective C and Xamarin and use them effectively.",
                    "While I'm not working on work or side projects, I really enjoy working on my music production as it remains to be my main creative outlet nowadays. I make countless hip-hop/P8B/electronic beats as I always obsess over new synths, plug-ins and sounds I can use and manipulate. I also enjoy catching up on whatever TV shows I'm currently watching and whatever f ilms/albums that I might've missed during the year."
                ]
    },
    experience: {
        0: {
            organization: "Globalive Technology",
            title: "Software Developer (Frontend)",
            date: "Jan - April 2019",
            duration: "(4 Months)",
            summary: []
        },
        1: {
            organization: "Multi-Health Systems",
            title: "Software Developer (Web)",
            date: "May - August 2018",
            duration: "(4 Months)",
            summary: []
        },
        2: {
            organization: "Multi-Health Systems",
            title: "Software Developer (.NET)",
            date: "Sep 2016 - December 2017",
            duration: "(12 Months)",
            summary: []
        },
        0: {
            organization: "Trans-Plan Inc.",
            title: "Software Developer (iOS)",
            date: "Jan - April 2016",
            duration: "(4 Months)",
            summary: []
        },
    }
};

const getText = (section, styles = {}, key = 0) => {

    let texts = [];
    switch(section){
        case 'about':
            texts.push(<p style={styles}>{ TextModel.about.header}</p>);
            for (let text of TextModel.about.paragraph)
                texts.push(<p style={styles}>{ text }</p>);
            break;
        case 'experience':
            const position = TextModel.experience[key];
            texts.push(<p style={styles}>{ position.organization}</p>);
            texts.push(<p style={styles}>{ position.title}</p>);
            texts.push(<p style={styles}>{ position.date}</p>);
            texts.push(<p style={styles}>{ position.duration}</p>);
            for (let text of position.summary)
                texts.push(<p style={styles}>{ text }</p>);
            break;
        default:
            break;
    }
    return texts.slice();
}

export default getText;