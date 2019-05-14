A Personal Portfolio Website built using ReactJS. Will be updated throughout development. 
The develop branch contains the more recent work.
A link to the final website will be posted once project is finished.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The purpose of the project was to create a simple portfolio showcasing my personal skills and experience gained throughout my career. Considering that the website would basically just display text and images, no backend felt like it was needed. I initially thought to use vanilla JS/HTML/CSS, but I eventually decided to go with using ReactJS for the frontend. While it can be argued that React is sort of overkill in this case due to the simplicity of the project, reusability is a big advantage to the component-based approach React takes which makes updating the website with recent experience very simple and ensures consistency throughout the application.

To properly organize the application, it was important to seperate it into different layers. The views layer contains the container components for the different sections of the website (About, Experience, Projects, etc..). The components layer contains smaller reusable components such as the main card used throughout to display information. The models layer contains the Text and Image models where the entire application pulls resources from. The final layer is the redux layer which holds the redux store, reducers and actions to manage the app's state. This ensures the entire application deals with a single, immutable source of truth.

As far as third party libraries goes, the main ones used are React-Router to manage the navigation between different sections shown and Redux to manage the application's state.
