export const uiDrag = {
    init: (selectorContainers, selectorCards) => {
        document.querySelectorAll(selectorContainers).forEach((container) => {
            container.addEventListener("dragover", (event) => {
                var data = JSON.parse(event.dataTransfer.getData("text"));
                var draggedElement = document.getElementById(data.id);

                var cardPalo = draggedElement.dataset.palo;
                var containerPalo = container.dataset.palo;

                // Permitir arrastrar solo si el palo coincide o es la baraja
                if (containerPalo === cardPalo || container.classList.contains('baraja')) {
                    event.preventDefault();
                    event.dataTransfer.dropEffect = "move";
                } else {
                    // No permitir soltar
                    event.dataTransfer.dropEffect = "none";
                }
            });

            container.addEventListener("drop", (event) => {
                var data = JSON.parse(event.dataTransfer.getData("text"));
                var draggedElement = document.getElementById(data.id);

                var cardPalo = draggedElement.dataset.palo;
                var containerPalo = container.dataset.palo;

                if (containerPalo === cardPalo || container.classList.contains('baraja')) {
                    event.preventDefault();
                    var rect = container.getBoundingClientRect();
                    var offsetX = event.clientX - rect.left;
                    var offsetY = event.clientY - rect.top;

                    draggedElement.style.position = "absolute";
                    draggedElement.style.left = offsetX - (draggedElement.offsetWidth / 2) + "px";
                    draggedElement.style.top = offsetY - (draggedElement.offsetHeight / 2) + "px";

                    if (!container.contains(draggedElement)) {
                        container.appendChild(draggedElement);
                    }
                } else {
                    // No hacer nada, impide el drop
                }
            });
        });

        document.querySelectorAll(selectorCards).forEach((item) => {
            item.setAttribute("draggable", "true");
            item.addEventListener("dragstart", (event) => {
                const sendData = {
                    id: event.target.id,
                    mensaje: "Esto es una prueba"
                }
                event.dataTransfer.setData("text", JSON.stringify(sendData));
                console.log(event);
            })
        })
    }
}