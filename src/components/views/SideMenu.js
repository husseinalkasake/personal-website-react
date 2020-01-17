import React, { Component } from 'react';
import '../styles/SideMenu.css';
import { connect } from 'react-redux';
import { closeMenus } from '../../redux/actions';
import CustomIcon from './CustomIcon';

class SideMenuComponent extends Component {
    render() {
        if (!this.props.showSideMenu) {
            return null;
        } else {
            const menuTabs = [];
            tabs.forEach(tab => {
                menuTabs.push(
                    <span
                        className={this.linkClasses(tab)}
                        onClick={e => {
                            e.stopPropagation();
                            this.scrollToPosition(tab);
                        }}>
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                );
            });
            return (
                <div
                    className='side-menu'
                    onClick={e => {
                        e.stopPropagation();
                        this.props.closeMenus();
                    }}>
                    <CustomIcon name='times' size='2x' className='close' />
                    <div className='side-menu-body'>{menuTabs}</div>
                </div>
            );
        }
    }
    linkClasses(tab) {
        return (
            'link' +
            (window.location.hash.includes(tab) ? ' selected-link' : '')
        );
    }

    scrollToPosition(tab) {
        const el = document.querySelector(`#${tab}`);
        el && el.scrollIntoView({ behavior: 'smooth' });
        this.props.closeMenus();
    }
}

const tabs = ['about', 'experience', 'projects', 'education'];

const mapStateToProps = state => ({
    showSideMenu: state.showSideMenu
});

const mapDispatchToProps = dispatch => ({
    closeMenus: () => dispatch(closeMenus())
});

const SideMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideMenuComponent);
export default SideMenu;
