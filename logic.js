document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.container');

    // Función para crear la cuadrícula
    function createGrid(size) {
        opacidad += 0.1;

        for (let i = 0; i < size * size; i++) {
            let randomRed = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
            let randomGreen = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
            let randomBlue = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
            let divItem = document.createElement('div');
            const gridWidth = 960 / size;
            divItem.style.cssText = `
                width: ${gridWidth}px;
                height: ${gridWidth}px;
                background-color: #${randomRed}${randomGreen}${randomBlue};
                flex: 0 0 ${gridWidth}px;
                opacity: ${opacidad};
            `;
            divItem.className = "Paint";
            console.table(divItem.style)
            container.appendChild(divItem);
        }
    }

    // Función para eliminar la cuadrícula actual
    function deleteActualGrid() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    // Función para resetear y crear una nueva cuadrícula
    function resetPaintedButtons(number) {
        deleteActualGrid();
        createGrid(number);
    }

    // Inicializar la cuadrícula por defecto
    let opacidad = 0;
    createGrid(16);

    let resetButton = document.querySelector('#btn');
    resetButton.addEventListener('click', (event) => {
        let res = 0;
        do {
            res = parseInt(prompt('Ingrese la cantidad de filas y columnas a dibujar (maximo 100):'));
        } while (0 > res || res > 100);

        resetPaintedButtons(res);
    });

    // Delegación de eventos para los divs con clase "Paint"
    container.addEventListener('mousemove', (event) => {
        if (event.target.classList.contains('Paint')) {
            event.target.style.backgroundColor = '#f00';
        }
    });
});
