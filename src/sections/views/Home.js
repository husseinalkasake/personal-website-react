import React, { Component } from 'react';
import '../styles/Home.css';
import Links from '../../components/views/Links';
import CustomIcon from '../../components/views/CustomIcon';
import scrollToTab from '../../utils/scrollToTab';

class Home extends Component {
    render() {
        return (
            <div id='home' className='home-container'>
                <div className='text-container'>
                    <p>Software Developer</p>
                    <p className='subheader'>MECHATRONICS ENGINEERING</p>
                    <Links large={true} />
                    <CustomIcon
                        className='down'
                        name='angle-down'
                        onClick={e => {
                            e.stopPropagation();
                            scrollToTab('about');
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
