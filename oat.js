// Array que armazenará as frutas
let frutas = [];
let proximoId = 1;

// CREATE – adicionar uma fruta
function createFruta(nome, preco, quantidade) {
  frutas.push({
    id: proximoId++,
    nome,
    preco,
    quantidade
  });
}

// READ – listar frutas ou filtrar (ex: preço acima de X)
function readFrutas(minPreco = 3.0) {
  return frutas.filter(f => f.preco >= minPreco);
}

// UPDATE – atualizar preço ou quantidade
function updateFruta(id, novoPreco, novaQuantidade) {
  const fruta = frutas.find(f => f.id === id);
  if (fruta) {
    if (novoPreco !== undefined) fruta.preco = novoPreco;
    if (novaQuantidade !== undefined) fruta.quantidade = novaQuantidade;
  } else {
    console.log(`Fruta com id ${id} não encontrada.`);
  }
}

// DELETE – remover fruta pelo id
function deleteFruta(id) {
  frutas = frutas.filter(f => f.id !== id);
}

createFruta("Maçã", 3.5, 10);
createFruta("Banana", 2.0, 20);
createFruta("Laranja", 4.0, 15);
updateFruta(2, 2.5, 25); 
deleteFruta(3); 
console.log(frutas);