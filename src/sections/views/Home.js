import React, { Component } from 'react';
import '../styles/Home.css';
import Links from '../../components/views/Links';

class Home extends Component {
    render() {
        return (
            <div id='home' className='home-container'>
                <div className='text-container'>
                    <p className='name'>Hussein Alkasake</p>
                    <p className='no-margin-bottom'>software engineer</p>
                    <p className='subheader'>full stack developer</p>
                    <p className='subheader'>web&nbsp;&nbsp;•&nbsp;&nbsp;mobile&nbsp;&nbsp;•&nbsp;&nbsp;windows&nbsp;&nbsp;•&nbsp;&nbsp;backend</p>
                    <Links large={true} whiteLogo={true} />
                    <div className='contact-container'>
                        <p>
                            always interested in new opportunites 😊 &nbsp;
                            <a target='_blank' rel='noopener noreferrer' href='mailto:husseinalkasake@gmail.com'>
                                <img alt='' className='email-logo' src={require(`../../images/email-logo.png`)}/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
