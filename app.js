document.addEventListener('DOMContentLoaded', () => {
    // Array de colores
    let colors = [];

    // Referencias a los elementos del DOM
    const colorForm = document.getElementById('colorForm');
    const colorInput = document.getElementById('colorInput');
    const colorCheckbox = document.getElementById('colorCheckbox');
    const colorList = document.getElementById('colorList');

    // Manejar el evento de envío del formulario
    colorForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtener el valor del input y el estado del checkbox
        const newColor = colorInput.value.trim();
        const isSelected = colorCheckbox.checked;

        if (newColor) {
            // Agregar el nuevo color al array como un objeto
            colors.push({ color: newColor, selected: isSelected });

            // Actualizar la lista en el DOM
            updateColorList();

            // Limpiar el input y desmarcar el checkbox
            colorInput.value = '';
            colorCheckbox.checked = false;
        }
    });

    // Función para actualizar la lista en el DOM
    function updateColorList() {
        // Limpiar la lista actual
        colorList.innerHTML = '';

        // Recorrer el array y agregar cada color a la lista
        colors.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.color;

            // Agregar el checkbox a cada elemento de la lista
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.selected;
            checkbox.disabled = true;

            listItem.appendChild(checkbox);
            colorList.appendChild(listItem);
        });
    }
});
