import React, { Component } from 'react';
import '../styles/About.css';
import '../../styles/App.css';
import Image from 'react-image-resizer';
import getImage from '../../models/ImageModel';
import Links from '../../components/views/Links';
import Text from '../../components/views/Text';
import SectionHeader from '../../components/views/SectionHeader';

class About extends Component {
    render() {
        return (
            <div className='about-container' id='about'>
                <SectionHeader text='About Me' />
                <div className='inner-container'>
                    <div className='image-container'>
                            <Image
                                src={`${getImage('about')}`}
                                height={500}
                                width={250}
                            />
                        </div>
                    <div>
                        <Text fontfamily='Montserrat' section='about' />
                        <Links whiteLogo={true} />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
