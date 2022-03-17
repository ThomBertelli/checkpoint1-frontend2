let inputTitulo = document.querySelector('#titulo')
let inputDescricao = document.querySelector('#descricao')
let inputImagem = document.querySelector('#imagem')
let botaoEnviar = document.querySelector('#enviar')

let cardsReference = document.querySelector('#cards')

let posts = [
]

botaoEnviar.addEventListener('click',function(event){
    
    let inputTituloAtual = document.querySelector('#titulo').value
    let inputDescricaoAtual = document.querySelector('#descricao').value
    let inputImagemAtual = document.querySelector('#imagem').value

    posts.push ({
        titulo: inputTituloAtual,
        descricao: inputDescricaoAtual,
        imagem: inputImagemAtual
    })
    event.preventDefault()
    console.log(posts)

    for(let post of posts){
        cardsReference.innerHTML+=`
        <div class="item">
                <img src="${post.imagem}">
                <h2> ${post.titulo}</h2>
                <p>${post.descricao}</p>
            </div>
        `
    }
})

