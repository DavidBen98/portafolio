import AOS from 'aos';

const AOSFunction = () => {
    AOS.init({
        duration: 800,
        disable: () => { return ("tablet","mobile")},
    });
    
    // AOS.init({
    //     duration: 800,
    //     disable: "mobile",
    // });
}

export default AOSFunction;