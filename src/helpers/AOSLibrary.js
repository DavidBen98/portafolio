import AOS from 'aos';

const AOSFunction = () => {
    AOS.init({
        duration: 800,
        disable: "tablet",
        disable: "mobile",
    });
    
    // AOS.init({
    //     duration: 800,
    //     disable: "mobile",
    // });
}

export default AOSFunction;