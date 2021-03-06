import { barraPorcentaje, btnAudio, btnMenu, btnRecargar, btnAtras, btnAdelante, menuLateral, cuadros, nombreTemas, titulo } from "./selectores.js"

//Arreglo con la información de las páginas--------------------------------------
export const paginas = [
    {
        noPagina: 1,
        ruta: 'pagina01.html'
    },
    {
        noPagina: 2,
        ruta: 'pagina02.html'
    },
    {
        noPagina: 3,
        ruta: 'pagina03.html'
    },
    {
        noPagina: 4,
        ruta: 'pagina04.html'
    },
    {
        noPagina: 5,
        ruta: 'pagina05.html'
    },
    {
        noPagina: 6,
        ruta: 'pagina06.html'
    },
    {
        noPagina: 7,
        ruta: 'pagina07.html'
    },
    {
        noPagina: 8,
        ruta: 'pagina08.html'
    },
    {
        noPagina: 9,
        ruta: 'pagina09.html'
    },
    {
        noPagina: 10,
        ruta: 'pagina10.html'
    },
    {
        noPagina: 11,
        ruta: 'pagina11.html'
    },
    {
        noPagina: 12,
        ruta: 'pagina12.html'
    },
    {
        noPagina: 13,
        ruta: 'pagina13.html'
    },
    {
        noPagina: 14,
        ruta: 'pagina14.html'
    },
    {
        noPagina: 15,
        ruta: 'pagina15.html'
    },
    {
        noPagina: 16,
        ruta: 'pagina16.html'
    },
    {
        noPagina: 17,
        ruta: 'pagina17.html'
    },
    {
        noPagina: 18,
        ruta: 'pagina18.html'
    },
    {
        noPagina: 19,
        ruta: 'pagina19.html'
    },
    {
        noPagina: 20,
        ruta: 'pagina20.html'
    },
    {
        noPagina: 21,
        ruta: 'pagina21.html'
    },
    {
        noPagina: 22,
        ruta: 'pagina22.html'
    },
    {
        noPagina: 23,
        ruta: 'pagina23.html'
    },
    {
        noPagina: 24,
        ruta: 'pagina24.html'
    },
    {
        noPagina: 25,
        ruta: 'pagina25.html'
    },
    {
        noPagina: 26,
        ruta: 'pagina26.html'
    },
    {
        noPagina: 27,
        ruta: 'pagina27.html'
    },
    {
        noPagina: 28,
        ruta: 'pagina28.html'
    },
    {
        noPagina: 29,
        ruta: 'pagina29.html'
    },
    {
        noPagina: 30,
        ruta: 'pagina30.html'
    },
    {
        noPagina: 31,
        ruta: 'pagina31.html'
    },
    {
        noPagina: 32,
        ruta: 'pagina32.html'
    },
    {
        noPagina: 33,
        ruta: 'pagina33.html'
    },
    {
        noPagina: 34,
        ruta: 'pagina34.html'
    },
    {
        noPagina: 35,
        ruta: 'pagina35.html'
    },
    {
        noPagina: 36,
        ruta: 'pagina36.html'
    },
    {
        noPagina: 37,
        ruta: 'pagina37.html'
    },
    {
        noPagina: 38,
        ruta: 'pagina38.html'
    },
    {
        noPagina: 39,
        ruta: 'pagina39.html'
    },
    {
        noPagina: 40,
        ruta: 'pagina40.html'
    },
    {
        noPagina: 41,
        ruta: 'pagina41.html'
    },
    {
        noPagina: 42,
        ruta: 'pagina42.html'
    },
    {
        noPagina: 43,
        ruta: 'pagina43.html'
    },
    {
        noPagina: 44,
        ruta: 'pagina44.html'
    },
    {
        noPagina: 45,
        ruta: 'pagina45.html'
    },
    {
        noPagina: 46,
        ruta: 'pagina46.html'
    },
    {
        noPagina: 47,
        ruta: 'pagina47.html'
    },
    {
        noPagina: 48,
        ruta: 'pagina48.html'
    },
    {
        noPagina: 49,
        ruta: 'pagina49.html'
    },
    {
        noPagina: 50,
        ruta: 'pagina50.html'
    },
]

//Valores de elementos-----------------------------------------------------------
export const pBarraProgreso = {
    top: parseInt(barraPorcentaje.css('top')),
    left: parseInt(barraPorcentaje.css('left')),
    width: barraPorcentaje.width(),
    heigth: barraPorcentaje.height()
}

export const pBotonMenu = {
    top: parseInt(btnMenu.css('top')),
    left: parseInt(btnMenu.css('left')),
    width: btnMenu.width(),
    heigth: btnMenu.height()
}

export const pBotonRecargar = {
    top: parseInt(btnRecargar.css('top')),
    left: parseInt(btnRecargar.css('left')),
    width: btnRecargar.width(),
    heigth: btnRecargar.height()
}

export const pBotonAudio = {
    top: parseInt(btnAudio.css('top')),
    left: parseInt(btnAudio.css('left')),
    width: btnAudio.width(),
    heigth: btnAudio.height()
}

export const pBotonAtras = {
    top: parseInt(btnAtras.css('top')),
    left: parseInt(btnAtras.css('left')),
    width: btnAtras.width(),
    heigth: btnAtras.height()
}

export const pBotonAdelante = {
    top: parseInt(btnAdelante.css('top')),
    left: parseInt(btnAdelante.css('left')),
    width: btnAdelante.width(),
    heigth: btnAdelante.height()
}

export const pMenuLateral = {
    top: 0,
    left: 0,
    width: menuLateral.width(),
    height: menuLateral.height()
}

export const pCuadros = {
    fontSize: 18
}

export const pTitulos = {
    fontSize: 32
}

export const pNombreTemas = {
    fontSize: 14
}