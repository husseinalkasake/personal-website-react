const ImageModel = {
    about: require('../images/about-me.jpg'),
    experience: [ 
        require('../images/ubisoft-logo2.png'),
        require('../images/hubba-logo.png'),
        require('../images/globalive_logo.png'),
        require('../images/mhs-logo.png'),
        require('../images/mhs-logo.png'),
        require('../images/trans-plan-logo.png')
    ],
    projects: [
        require('../images/backyarders-logo2.png'),
        require('../images/s&r-robot.jpg'),
        require('../images/personal-website-backend-logo.png'),
        require('../images/endless-charts-logo.png'),
        require('../images/hussein-alkasake-logo.png'),
        require('../images/robot-circuit-board.jpg'),
        require('../images/truss-bridge.jpg'),
        require('../images/nxt-coin-sorter.jpg'),
        require('../images/fuel-cell-car.jpg')
    ],
    education: [
        require('../images/uw-logo.png'),
        require('../images/bluevale-logo.png')
    ]
};

const getImage = (section, key = 0) => {
    let image = '';
    switch(section){
        case 'home':
            image = ImageModel.home;
            break;
        case 'about':
            image = ImageModel.about;
            break;
        case 'experience':
            image = ImageModel.experience[key];
            break;
        case 'education':
            image = ImageModel.education[key];
            break;
        case 'projects':
            image = ImageModel.projects[key];
            break;
        default:
            break;
    }
    return image;
}

export default getImage;