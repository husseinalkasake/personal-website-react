import React, { Component } from 'react';
import '../styles/SideMenu.css';
import { connect } from 'react-redux';
import { showSideMenu, closeMenus } from '../../redux/actions';

class SideMenuComponent extends Component {

    render() {
        if (!this.props.showSideMenu) {
            return(null);
        }
        else {
            const menuTabs = [];
            tabs.map(tab => {
                menuTabs.push(
                    <span className={this.linkClasses(tab)} to={'/' + tab} onClick={()=> this.scrollToPosition(tab)}>
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                );
            });
            return(
                <div className='side-menu' style={this.sideMenuStyle()}>
                    <div className='side-menu-body'>
                        {menuTabs}
                    </div>
                </div>
            );
        }
    }
    linkClasses(tab) {
        return 'link' + (window.location.hash.includes(tab) ? ' selected-link' : '');
    }

    sideMenuStyle() {
        return {
            width: window.innerWidth / 3 + 'px',
            height: window.innerHeight + 'px'
        }
    }

    scrollToPosition(tab) {
        const el = document.querySelector(`#${tab}`);
        el && el.scrollIntoView({ behavior: 'smooth' });
        this.props.closeMenus();
    }
}

const tabs = [
    'about',
    'experience',
    'projects',
    'education'
];

const mapStateToProps = state => ({
    showSideMenu: state.showSideMenu
});

const mapDispatchToProps = dispatch => ({
    closeMenus: () => dispatch(closeMenus())
});

const SideMenu = connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent);
export default SideMenu;