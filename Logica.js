var canvas = document.getElementById("meuCanvas");
var ctx = canvas.getContext('2d');
//  função que exibe oque foi digitado pelo usuario
//  ( document.getElementById("Numero1").value ) usar isso para receber o valor digitado em alguma variavel
function exibir(ctx) {
    ctx.clearRect(0, 0, 1000, 500); // limpa tela quando a funçao é chamada
    let x = 0;                 // posição x é a horizontal
    let y = 250;                 // posição y  é a vertical
    let Nd = parseInt(document.getElementById("Numero1").value, 10);  // oque for digitado sera depositado na variavel recebe  
    ctx.font = "100px Arial";

    
    var Vp[np];
    // ctx.fillText(resultado, x, y);
    primo();
    
}

function primo(N1){
    let contador = 3;

    if (N1 < 2 || (N1 % 2 == 0 && N1 != 2)) {
        return false;
    } else {
        while (contador <= Math.sqrt(N1)) {
            if (N1 % contador == 0) {
                return false;
                break;
            }
            contador = contador + 2;
        }
    }
    return true;
}