function start() {
  const fundo = prompt("Insira o nome do fundo:");
  const taxa = Number(prompt("Insira a taxa oferecida pelo fundo:"));
  const teto = 13;
  let risco = false;

  if (taxa > teto) {
    risco = true;
    document.body.innerHTML += `<p>O fundo ${fundo} possui taxa acima do teto, portanto é considerado de alto risco.</p>`;
  } else {
    document.body.innerHTML += `<p>O fundo ${fundo} possui taxa dentro do teto, portanto é considerado de baixo risco.</p>`;
  }

  if (risco === true) {
    document.body.innerHTML += "<p>Parecer do Auditor: Ativo bloqueado para novas emissões.</p>";
  } else {
    document.body.innerHTML += "<p>Parecer do Auditor: Ativo liberado para comercialização.</p>";
  }
}

start();