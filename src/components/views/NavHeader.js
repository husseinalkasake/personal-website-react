import React, { Component } from 'react';
import '../styles/NavHeader.css';
import CustomIcon from './CustomIcon';
import { connect } from 'react-redux';
import { showSideMenu } from '../../redux/actions';

class NavHeaderComponent extends Component {

    render(){
        const header = [];
        if (window.innerWidth > 640) {
            header.push(this.homeTab());
            tabs.map(tab => {
                header.push(
                    <span className='link' to={'/' + tab} onClick={(e) => { e.stopPropagation(); this.scrollToPosition(tab); } }>
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                );
            });
        } else { // mobile
            header.push(
                <CustomIcon
                    name="bars"
                    className="bars"
                    onClick={(e)=> {e.stopPropagation(); this.props.showSideMenu()}}
                />
            );
            header.push(this.homeTab());
        }

        return(
            <div className='nav-header'>
                {header}
            </div>
        );
    }

    homeTab() {
        return(
            <span className='link' to='/home' onClick={(e) => { e.stopPropagation(); this.scrollToPosition('home'); } }>
                <a className="home-link" style={{fontSize: window.innerWidth <= 900 ? '1.5em' : '2.25em'}}>Hussein Alkasake</a>
            </span>
        );
    }

    scrollToPosition(tab) {
        const el = document.querySelector(`#${tab}`);
        el && el.scrollIntoView({ behavior: 'smooth' });
    }
}

const tabs = [
    'about',
    'experience',
    'projects',
    'education'
];
  
const mapDispatchToProps = dispatch => ({
    showSideMenu: showMenu => dispatch(showSideMenu(showMenu))
});

const NavHeader = connect(null, mapDispatchToProps)(NavHeaderComponent);

export default NavHeader;

