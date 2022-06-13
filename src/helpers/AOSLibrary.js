import AOS from 'aos';

const AOSFunction = (a) => {
    var {width} = a;

    AOS.init({
        duration: 300,
        disable: width <= 1300 ? true : false, 
    });
}

export default AOSFunction;