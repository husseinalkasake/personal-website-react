import React, { Component } from 'react';
import '../styles/SideMenu.css';
import { Link } from "react-router-dom";
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
                    <Link className={this.linkClasses(tab)} to={'/' + tab} onClick={()=> this.props.closeMenus()}>
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </Link>
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