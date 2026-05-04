function verificar(){
    var fano = document.getElementById('nano')
    var agora = new Date()
    var hoje = agora.getFullYear()
    var res1 = document.getElementById('res')
    
    if(Number(fano.value.length)==0 || Number(fano.value)>hoje){
        alert('[Erro] verifique os campos')
    }else{
        var idade = hoje - Number(fano.value)
        var genero = ''
        var fsex = document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade>=0 && idade < 10){
                img.setAttribute('src', 'foto-crianca-mas.jpg')
            }else if(idade < 30){
                img.setAttribute('src', 'foto-jovem-mas.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-adult-m.jpg')
            }else{
                img.setAttribute('src', 'foto-idoso.jpg')
            }
        }else{
            genero = 'Feminino'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'foto-crianca-fem.jpg')
            }else if(idade < 30){
                img.setAttribute('src', 'foto-jovem-fem.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-adult-f.jpg')
            }else{
                img.setAttribute('src', 'foto-idosa.jpg')
            }
        }
        res1.style.textAlign = 'center'
        res1.innerHTML = `Voce tem ${idade} anos e seu genêro é ${genero}`
        res1.appendChild(img)
    }
}