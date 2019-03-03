const ImageModel = {
    about: '../../images/hussein-headshot.jpg',
    experience: ['../images/globalive_logo.png', '', '', '']
};

const getImage = (section, key = 0) => {

    let image = '';
    switch(section){
        case 'about':
            image = ImageModel.about;
            break;
        case 'experience':
            image = ImageModel.experience[key];
            break;
        default:
            break;
    }
    return image; // !== '' ? require(`${ image }`) : image;
}

export default getImage;