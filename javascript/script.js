function cadPessoa(nome, nota1, nota2, nota3) {
  pessoas = document.getElementById("tbody");
  var qtdlLinhas = pessoas.rows.length;
  var linha = pessoas.insertRow(qtdlLinhas);
  nota1 = parseFloat(nota1)
  nota2 = parseFloat(nota2)
  nota3 = parseFloat(nota3)

  var [media, situacao] = calculoMedia(nota1, nota2, nota3)


  var cellNome = linha.insertCell(0);
  var cellnota1 = linha.insertCell(1);
  var cellnota2 = linha.insertCell(2);
  var cellnota3 = linha.insertCell(3);
  var cellmedia = linha.insertCell(4);
  var cellsituacao = linha.insertCell(5);

  cellNome.innerHTML = nome;
  cellnota1.innerHTML = nota1;
  cellnota2.innerHTML = nota2;
  cellnota3.innerHTML = nota3;
  cellmedia.innerHTML = media;
  cellsituacao.innerHTML = situacao;

}



function calculoMedia(nota1, nota2, nota3) {
  media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7.0) {
    var situacao = "APROVADO"
  } else

    if (media < 4.0) {
      var situacao = "REPROVADO"
    } else

      if (media >= 4.0) {
        var situacao = "PROVA FINAL"
      } else

        if (media < 7) {
          var situacao = "PROVA FINAL"
        }



  return [media, situacao]

}

function mostrarDados() {
  var tbody = document.getElementById("tbody");

  var tr = tbody.childNodes;

  var busca = document.getElementById("busca").value.toLowerCase();

  for (var i = 1; i < tbody.childNodes.length; i++) {
    var tr = tbody.childNodes[i];
    var td = tr.childNodes;

    var nome = td[0].innerHTML.toLowerCase();
    if (nome.indexOf(busca) >= 0) {
      var nota1 = td[1].innerHTML
      var nota2 = td[2].innerHTML
      var nota3 = td[3].innerHTML
      var media = td[4].innerHTML
      var situacao = td[5].innerHTML
      tbodyBusca (nome, nota1, nota2, nota3, media,situacao)
    }
  }

}

function tbodyBusca(nome, nota1, nota2, nota3, media,situacao){
  document.querySelectorAll('#tbodyBuscar tr').forEach((tr) => {
        tr.remove()
    })
  pessoas = document.getElementById("tbodyBuscar");
  var qtdlLinhas = pessoas.rows.length;
  var linha = pessoas.insertRow(qtdlLinhas);
  nota1 = parseFloat(nota1)
  nota2 = parseFloat(nota2)
  nota3 = parseFloat(nota3)

  var [media, situacao] = calculoMedia(nota1, nota2, nota3)


  var cellNome = linha.insertCell(0);
  var cellnota1 = linha.insertCell(1);
  var cellnota2 = linha.insertCell(2);
  var cellnota3 = linha.insertCell(3);
  var cellmedia = linha.insertCell(4);
  var cellsituacao = linha.insertCell(5);

  cellNome.innerHTML = nome;
  cellnota1.innerHTML = nota1;
  cellnota2.innerHTML = nota2;
  cellnota3.innerHTML = nota3;
  cellmedia.innerHTML = media;
  cellsituacao.innerHTML = situacao;

}