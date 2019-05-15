import React from 'react';

const media = {
    images: [
        './images/linkedin-logo.png',
        './images/linkedin-logo-white.png',
        './images/github-logo.png',
        './images/github-logo-white.png',
        './images/cv-icon.png',
        './images/cv-icon-white.png',
        './images/hussein-widepic.jpg',
        './images/hussein-headshot.jpg',
        './images/globalive_logo.png',
        './images/mhs-logo.png',
        './images/trans-plan-logo.png',
        './images/endless-charts-logo.png',
        './images/hussein-alkasake-logo.png',
        './images/robot-circuit-board.png',
        './images/truss-bridge.png',
        './images/nxt-coin-sorter.png',
        './images/fuel-cell-car.png',
        './images/uw-logo.png',
        './images/bluevale-logo.png',
        './images/robot-circuit-board-1.png',
        './images/robot-circuit-board-2.png',
        './images/truss-bridge-break.gif',
        './images/truss-bridge-progress.png',
        './images/truss-bridge-2.png',
        './images/truss-bridge-aftermath.png',
        './images/nxt-coin-sorter-1.png',
        './images/nxt-coin-sorter-2.png',
        './images/nxt-coin-sorter-3.png',
        './images/fuel-cell-car.png'
    ],
    videos: [
        './images/endless-charts.mp4'
    ]
};

const preloadMedia = () => {
    media.images.forEach(image => {
        const img = new Image();
        img.src = image;
      });
      media.videos.forEach(video => {
        const vid =[<video src={video}/>];
      });
};

export default preloadMedia;