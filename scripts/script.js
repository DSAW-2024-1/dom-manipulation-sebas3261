document.addEventListener('DOMContentLoaded', function() {
    const myDay = document.getElementById('myDay');
    const box1 = document.getElementById('box1');
    const main = document.getElementById('main');
    const task = document.getElementById('task');
    const taskbuton = document.getElementById('taskbuton');
    const ret1 = document.getElementById('return1');
    const ret2 = document.getElementById('return2');
    const add1 = document.getElementById('add1');
    const add2 = document.getElementById('add2');
    const newtask1 = document.getElementById('newtask1');
    const newtask2 = document.getElementById('newtask2');
    let taskText = '';

    myDay.addEventListener('click', function(event){
        const ancho = window.innerWidth;
        if(ancho < 768)
        {
            box1.style.display = 'none';
            main.style.display = 'flex';
        }
        else
        {
            task.style.display = 'none';
            main.style.display = 'flex';
        }
    });

    taskbuton.addEventListener('click', function(event){
        const ancho = window.innerWidth;
        if(ancho < 768)
        {
            box1.style.display = 'none';
            task.style.display = 'flex';
        }
        else
        {
            main.style.display = 'none';
            task.style.display = 'flex';
        }
    });

    function handleClick(event) {
        const ancho = window.innerWidth;
        if (ancho < 768) {
            box1.style.display = 'flex';
            task.style.display = 'none';
            main.style.display = 'none';
        } else 
        {
            if(box1.style.display == 'none')
            {
                box1.style.display = 'flex';
            }
            else
            {
                box1.style.display = 'none';
            }  
        }
    }

    function newtask(event, a) {
        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('id', 'taskInput');
        inputElement.setAttribute('placeholder', 'Add a Task');
        inputElement.style.width = '100%'; // Input ocupa todo el espacio del contenedor
        
        if (a == 1) {
            add1.innerHTML = '';
            add1.appendChild(inputElement);
        } else {
            add2.innerHTML = '';
            add2.appendChild(inputElement);
        }

        inputElement.focus();

        inputElement.addEventListener('keydown', function(e) {
            if (e.keyCode === 13) {
                // Verificar que el input no esté vacío
                if (inputElement.value.trim() !== '') {
                    // Guardar el texto ingresado en la variable global
                    taskText = inputElement.value.trim();
                    // Crear un nuevo div con el texto ingresado
                    const newDiv = document.createElement('div');
                    const checkBox = document.createElement('input');
                    checkBox.type = 'checkbox';
                    newDiv.appendChild(checkBox);
                    const textSpan = document.createElement('span');
                    textSpan.textContent = taskText;
                    newDiv.appendChild(textSpan);
                    newDiv.className = "new";
                    // Agregar el nuevo div al contenedor correspondiente
                    if (a == 1) {
                        newtask1.appendChild(newDiv);
                    } else {
                        newtask2.appendChild(newDiv);
                    }
                    checkBox.addEventListener('change', function() {
                        if (checkBox.checked) {
                            textSpan.style.textDecoration = 'line-through';
                        } else {
                            textSpan.style.textDecoration = 'none';
                        }
                    });
                    newDiv.addEventListener('dblclick', function() {
                        newDiv.remove();
                    });
                    // Agregar evento para eliminar al arrastrar a la izquierda
                    let initialX = null;
                    newDiv.addEventListener('touchstart', function(e) {
                        initialX = e.touches[0].clientX;
                    });
                    newDiv.addEventListener('touchmove', function(e) {
                        if (initialX !== null) {
                            const currentX = e.touches[0].clientX;
                            const diffX = currentX - initialX;
                            if (diffX < -50) { // Se considera como arrastrar hacia la izquierda
                                newDiv.style.transform = `translateX(${diffX}px)`;
                            }
                        }
                    });
                    newDiv.addEventListener('touchend', function(e) {
                        if (initialX !== null) {
                            const currentX = e.changedTouches[0].clientX;
                            const diffX = currentX - initialX;
                            if (diffX < -50) {
                                newDiv.remove(); // Eliminar el elemento si se ha arrastrado lo suficiente hacia la izquierda
                            } else {
                                newDiv.style.transform = ''; // Volver al estado original si no se ha arrastrado lo suficiente
                            }
                            initialX = null;
                        }
                    });
                }
                
                // Restaurar el contenido original en el contenedor
                if (a == 1) {
                    add1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg><p>Add a Task</p>';
                } else {
                    add2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg><p>Add a Task</p>';
                }
            }
        });
    }

    ret1.addEventListener("click", handleClick);
    ret2.addEventListener("click", handleClick);
    add1.addEventListener('click', function(event){newtask(event, 1)});
});
