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
        
        if (a == 1) {
            add1.innerHTML = '';
            add1.appendChild(inputElement);
        } else {
            add2.innerHTML = '';
            add2.appendChild(inputElement);
        }
    
        inputElement.focus();
        if(a ==1)
        {
            inputElement.addEventListener('keydown', function(e) {
                if (e.keyCode === 13) {
                    // Verificar que el input no esté vacío
                    if (inputElement.value.trim() !== '') {
                        // Guardar el texto ingresado en la variable global
                        taskText = inputElement.value.trim();
                        // Crear un nuevo div con el texto ingresado
                        const newDiv = document.createElement('div');
                        newDiv.textContent = taskText;
                        // Agregar el nuevo div al contenedor "newtask1"
                        newtask1.appendChild(newDiv);
                    }
                    
                    // Restaurar el contenido original en el contenedor
                    add1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg><p>Add a Task</p>';
                }
            });
        }
        else
        {
            inputElement.addEventListener('keydown', function(e) {
                if (e.keyCode === 13) {
                    // Verificar que el input no esté vacío
                    if (inputElement.value.trim() !== '') {
                        // Guardar el texto ingresado en la variable global
                        taskText = inputElement.value.trim();
                        // Crear un nuevo div con el texto ingresado
                        const newDiv = document.createElement('div');
                        newDiv.textContent = taskText;
                        // Agregar el nuevo div al contenedor "newtask1"
                        newtask2.appendChild(newDiv);
                    }
                    
                    // Restaurar el contenido original en el contenedor
                    add2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg><p>Add a Task</p>';
                }
            });
        }
        
    }

    ret1.addEventListener("click", handleClick);
    ret2.addEventListener("click", handleClick);
    add1.addEventListener('click', function(event){newtask(event,1)});
    add2.addEventListener('click', function(event){newtask(event,2)});
});
