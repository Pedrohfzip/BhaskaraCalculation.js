var resultado, valor, verificar_formularios, delta, resultado_x1, resultado_x2, resultado_vx, resultado_vy
resultado = document.querySelector('div.resultado')

function start() {
    // Atribuir valores de A, B e C
    valor = {
        a: document.querySelector('input.valor-a').value,
        b: document.querySelector('input.valor-b').value,
        c: document.querySelector('input.valor-c').value,
    }

    // Encontrar valor de delta e x' e x"
    delta = (valor.b ** 2) - (4 * valor.a * valor.c)
    resultado_x1 = ((valor.b * -1) + Math.sqrt(delta)) / (2 * valor.a)
    resultado_x2 = ((valor.b * -1) - Math.sqrt(delta)) / (2 * valor.a)

    // Encontrar valor de Vx e Vy"
    resultado_vx = valor.b * -1 / 2 * valor.a
    resultado_vy = delta * -1 / 4 * valor.a

    verificar_formularios = 0

    // Verificar se os campos de formulário foram preenchidos corretamente
    for (pos in valor) {
        if (valor[pos].length == 0) {
            resultado.innerHTML = `
                <div>
                   [!] Os campos de formulário não foram preenchidos corretamente.
                </div>
            `
        } else {
            verificar_formularios++
        }

        if (verificar_formularios == 3) {
            // Adicionar o valor de delta na div resultado
            resultado.innerHTML = `
                    <p>
                        Equação: ${valor.a}x² + ${valor.b}x + ${valor.c}
                    </p>

                    <p> Conta delta: </p>
                    <ol>
                        <li> &Delta; = ${valor.b}² - 4 &times; ${valor.a} &times; ${valor.c} </li>
                        <li> &Delta; = ${valor.b ** 2} - 4 &times; ${valor.a * valor.c} </li>
                        <li> &Delta; = ${valor.b ** 2} - ${valor.a * valor.c * 4} </li>
                        <li> &Delta; = ${delta} </li>
                    </ol>
                `

            if (delta < 0) {
                // Equação sem solução
                resultado.innerHTML += `
                    <div class="alert alert-danger py-1 px-2 my-1">
                        • Equação sem solução <br>
                        • Motivo: &Delta; < 0
                    </div>
                `

            } else {
                // Equação com solução
                resultado.innerHTML += `
                <ul>
                    <p class="alert alert-success py-1 px-2 my-1">
                    <li>  x' = ${resultado_x1} </li> 
                    <li>  x" = ${resultado_x2} </li> 
                    <li>  Vx = ${resultado_vx}</li> 
                    <li>  Vy = ${resultado_vy}</li> 
                </ul><br>
                `
            }
        }
    }
}

// Salva em txt
function salvar() {
        let a= document.getElementById('input.valor-a').value;

    let blob = Blob([a],
        {
            type: "text/plain;charset=utf-8"
        });
    //
    saveAs(blob, blob+".txt");
}

// Resetar a calculadora
function resetar() {
    resultado.innerHTML = ``
}
