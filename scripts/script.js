document.addEventListener('DOMContentLoaded', function() {
    const myDay = document.getElementById('myDay');
    const box1 = document.getElementById('box1');
    const main = document.getElementById('main');

    myDay.addEventListener('click', function(event){
        const ancho = window.innerWidth;
        if(ancho < 768)
        {
            box1.style.display = 'none';
            main.style.display = 'flex';
        }
        else
        {
            console.log("desktop");
        }
    });
});
