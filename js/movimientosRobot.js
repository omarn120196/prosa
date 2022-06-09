gsap.registerPlugin(MotionPathPlugin);

export function robots(robot){

    const brazoI = robot.find('#brazoIzquierdo');
    const brazoD = robot.find('#brazoDerecho');
    const sombra = robot.find('#sombra');
    const cabeza = robot.find('#cabeza');
    const torso = robot.find('#torso');
    const ojos = robot.find('#ojos');
    const boca = robot.find('#boca');

    const tl1 = gsap.timeline({
        repeat: -1,
        yoyo: true
    });
    
    tl1.to(brazoI, {
        duration: 1.5,
        y: '-65px',
        x: '15px',
        rotate: '20deg',
        ease: "power1.inOut"
    })
    tl1.to(brazoD, {
        duration: 1.5,
        y: '-60px',
        x: '5px',
        rotate: '20deg',
        ease: "power1.inOut"
    }, '<')
    tl1.to(cabeza, {
        duration: 1.5,
        y: '-50px',
        ease: "power1.inOut"
    }, '<')
    tl1.to(torso, {
        duration: 1.5,
        y: '-50px',
        ease: "power1.inOut"
    }, '<')
    tl1.to(ojos, {
        duration: 1.5,
        y: '-50px',
        ease: "power1.inOut"
    }, '<')
    tl1.to(boca, {
        duration: 1.5,
        y: '-50px',
        ease: "power1.inOut"
    }, '<')
    .to(sombra, {
        duration: 1.5,
        opacity: .5,
        scale: .7,
        x: 15,
        ease: "power1.inOut"
    }, '<')
}