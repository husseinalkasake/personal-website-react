import React, { Component } from 'react';
const media = {
    images: [
        require('./images/linkedin-logo.png'),
        require('./images/linkedin-logo-white.png'),
        require('./images/github-logo.png'),
        require('./images/github-logo-white.png'),
        require('./images/cv-icon.png'),
        require('./images/cv-icon-white.png'),
        require('./images/hussein-wideshot-cropped.jpg'),
        require('./images/hussein-headshot.jpg'),
        require('./images/globalive_logo.png'),
        require('./images/mhs-logo.png'),
        require('./images/trans-plan-logo.png'),
        require('./images/endless-charts-logo.png'),
        require('./images/hussein-alkasake-logo.png'),
        require('./images/robot-circuit-board.jpg'),
        require('./images/truss-bridge.jpg'),
        require('./images/nxt-coin-sorter.jpg'),
        require('./images/fuel-cell-car.jpg'),
        require('./images/uw-logo.png'),
        require('./images/bluevale-logo.png'),
        require('./images/robot-circuit-board-1.jpg'),
        require('./images/robot-circuit-board-2.jpg'),
        require('./images/truss-bridge-break.gif'),
        require('./images/truss-bridge-progress.jpg'),
        require('./images/truss-bridge-2.jpg'),
        require('./images/truss-bridge-aftermath.jpg'),
        require('./images/nxt-coin-sorter-1.jpg'),
        require('./images/nxt-coin-sorter-2.jpg'),
        require('./images/nxt-coin-sorter-3.jpg'),
        require('./images/fuel-cell-car.jpg')
    ],
    videos: [require('./images/endless-charts.mp4')]
};

class MediaLoad extends Component {
    render() {
        const mediaLoad = [];
        media.images.forEach(image => {
            mediaLoad.push(<img alt='' src={image} />);
        });
        media.videos.forEach(video => {
            mediaLoad.push(<video src={video} />);
        });
        return <div style={{ display: 'none' }}>{mediaLoad}</div>;
    }
}

export default MediaLoad;
