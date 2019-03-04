const ImageModel = {
    home: require('../images/hussein-widepic.jpg'),
    about: require('../images/hussein-headshot.jpg'),
    experience: [require('../images/globalive_logo.png'), '', '', '']
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
        default:
            break;
    }
    return image;
}

export default getImage;