import React, { Component } from 'react';
import '../styles/Links.css';

export default class Links extends Component {
    render() {
        const white = this.props.whiteLogo ? '-white' : '';
        const imageSize = this.props.large ? 'large-image' : 'small-image';
        return (
            <div className='links-container'>
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/hussein-alkasake/'>
                    <img
                        alt=''
                        className={imageSize}
                        src={require(`../../images/linkedin-logo${white}.png`)}
                    />
                </a>
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/husseinalkasake'>
                    <img
                        alt=''
                        className={imageSize}
                        src={require(`../../images/github-logo${white}.png`)}
                    />
                </a>
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/file/d/1dnkRJBeu8RrL0Ov_-HGme0dIk_IIyaOD'>
                    <img
                        alt=''
                        className={imageSize}
                        src={require(`../../images/cv-icon${white}.png`)}
                    />
                </a>
            </div>
        );
    }
}
