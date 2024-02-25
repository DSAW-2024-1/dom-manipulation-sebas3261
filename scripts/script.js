document.addEventListener('DOMContentLoaded', function() {
    const myDay = document.getElementById('myDay');
    const box1 = document.getElementById('box1');
    const main = document.getElementById('main');
    const task = document.getElementById('task');
    const taskbuton = document.getElementById('taskbuton');
    const ret1 = document.getElementById('return1');
    const ret2 = document.getElementById('return2');

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
        } else {
            box1.style.display = 'none';
        }
    }

    ret1.addEventListener("click", handleClick);
    ret2.addEventListener("click", handleClick);
});
