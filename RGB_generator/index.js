function cor() {

    // pega o valor da cor vermelha
    var vermelho = document.getElementById('vermelho').value;

    // pega o valor da cor verde
    var verde = document.getElementById('verde').value;

    // pega o valor da cor azul
    var azul = document.getElementById('azul').value;

    // rgb() function e usado para criar a cor
    // para vermelho, verde , azul
    var corrgb = 'rgb(' + vermelho + ',' + verde + ',' + azul + ')';

    // Troca a cor do background
    // com o rgb function
    document.body.style.backgroundColor = corrgb;


    document.getElementById('resul').value = corrgb;

}


document.getElementById('vermelho')
    .addEventListener('input', cor);


document.getElementById('verde')
    .addEventListener('input', cor);


document.getElementById('azul')
    .addEventListener('input', cor);