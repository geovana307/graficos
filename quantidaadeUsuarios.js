import { getCss, tickconfig } from "./common.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch (url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCss('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCss('--bg-color'),
        paper_bgcolor: getCss('--bg-color'),
        title: {
            text: 'Redes sociais com mais uruários do mundo',
            x: 0,
            font: {
                color: getCss('--primary-color'),
                family: getCss('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickconfig,
            title: {
                texto: 'nome das redes sociais',
                font: {
                    color: getCss('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickconfig,
            title: {
                text: 'bilhões de usuários ativos',
                font: {
                    color: getCss('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuarios()