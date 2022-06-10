// Función flotar del lado derecho------------------------------------------

export function flotar(robot, lado){

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

    if(lado == 'i'){
        tl1.to(brazoI, {
            duration: 1.5,
            y: '-50px',
            x: '-15px',
            rotate: '-20deg',
            ease: "power1.inOut"
        })
        tl1.to(brazoD, {
            duration: 1.5,
            y: '-45px',
            x: '-5px',
            rotate: '-20deg',
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
            y: '-52px',
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
    else if(lado == 'd'){
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
    
    
}

// Función Hablar-----------------------------------------------------------

let tlHablar;

export function hablar(robot, lado){
    const boca = robot.find('#boca');

    tlHablar = gsap.timeline({
        repeat: -1,
        yoyo: true
    });

    if(lado == 'd'){
        tlHablar.to(boca, {
            duration: .4,
            x: '5px',
            scaleY: 3,
            scaleX: .9,
            ease: "power1.inOut"
        })
        tlHablar.to(boca, {
            duration: .4,
            x: '5px',
            scaleX: .8,
            ease: "power1.inOut"
        }, '>')
    }
    else if('i'){
        tlHablar.to(boca, {
            duration: .4,
            x: '5px',
            scaleY: 3,
            rotate: '-20deg',
            ease: "power1.inOut"
        })
        tlHablar.to(boca, {
            duration: .4,
            x: '5px',
            scaleX: .8,
            ease: "power1.inOut"
        }, '>')
    }
}

export function pausarHablar(){
    tlHablar.pause();
}

export function reanudarHablar(){
    tlHablar.play();
}

export function pararHablar(){
    tlHablar.kill();
}