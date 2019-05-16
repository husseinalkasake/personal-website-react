import React, { Component } from 'react';
const media = {
    images: [
        require('./images/linkedin-logo.png'),
        require('./images/linkedin-logo-white.png'),
        require('./images/github-logo.png'),
        require('./images/github-logo-white.png'),
        require('./images/cv-icon.png'),
        require('./images/cv-icon-white.png'),
        require('./images/hussein-widepic.jpg'),
        require('./images/hussein-headshot.jpg'),
        require('./images/globalive_logo.png'),
        require('./images/mhs-logo.png'),
        require('./images/trans-plan-logo.png'),
        require('./images/endless-charts-logo.png'),
        require('./images/hussein-alkasake-logo.png'),
        require('./images/robot-circuit-board.png'),
        require('./images/truss-bridge.png'),
        require('./images/nxt-coin-sorter.png'),
        require('./images/fuel-cell-car.png'),
        require('./images/uw-logo.png'),
        require('./images/bluevale-logo.png'),
        require('./images/robot-circuit-board-1.png'),
        require('./images/robot-circuit-board-2.png'),
        require('./images/truss-bridge-break.gif'),
        require('./images/truss-bridge-progress.png'),
        require('./images/truss-bridge-2.png'),
        require('./images/truss-bridge-aftermath.png'),
        require('./images/nxt-coin-sorter-1.png'),
        require('./images/nxt-coin-sorter-2.png'),
        require('./images/nxt-coin-sorter-3.png'),
        require('./images/fuel-cell-car.png')
    ],
    videos: [
        require('./images/endless-charts.mp4')
    ]
};

class MediaLoad extends Component {
    render() {
        const mediaLoad = [];
        media.images.forEach(image => {
            mediaLoad.push(<img src={image}/>);
        });
        media.videos.forEach(video => {
            mediaLoad.push(<video src={video}/>);
        });
        return(
            <div style={{display: 'none'}}>
                { mediaLoad }
            </div>
        );
    }
}

export default MediaLoad;