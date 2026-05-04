function carregar(){
    //var img = document.getElementById('foto1')
    var foto = document.getElementById('img')
    var agora = new Date()
    var hora = agora.getHours()
    txt.innerHTML = `Agora sao ${hora} horas`

    if(hora >= 0 && hora < 12){
        foto.src = 'manha-200.jpg'
        document.body.style.background = '#e1e6e4'
    }else if(hora >= 12 && hora < 18){
        foto.src = 'tarde-200.jpg'
        document.body.style.background = '#ded1c8'
    }else{
        foto.src = 'noite-200.jpg'
        document.body.style.background = '#1b1e23'
    }
}