const ImageModel = {
    home: require('../images/hussein-widepic.jpg'),
    about: require('../images/hussein-headshot.jpg'),
    experience: [ 
        require('../images/globalive_logo.png'),
        require('../images/mhs-logo.png'),
        require('../images/mhs-logo.png'),
        require('../images/trans-plan-logo.png')
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
        debugger
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
        default:
            break;
    }
    return image;
}

export default getImage;