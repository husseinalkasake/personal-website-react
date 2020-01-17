const scrollToTab = tab => {
    const el = document.querySelector(`#${tab}`);
    el && el.scrollIntoView({ behavior: 'smooth' });
};

export default scrollToTab;
