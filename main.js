const form = document.getElementById('form-agenda');
let linhas = '';
const imgConfere = '<img src="./images/verifica.png" alt="Selo verificação" />';
const nomes = []
const numeros = []
const inputNomeSalvo = document.getElementById('contact');
const inputNumeroSalvo = document.getElementById('phonenumber');

inputNumeroSalvo.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha () {
    
    if (inputNumeroSalvo.value.length === 11 && /^\d+$/.test(inputNumeroSalvo.value)) {
        alert(`Contato: ${inputNomeSalvo.value} salvo com sucesso!`)
        
        if (nomes.includes(inputNomeSalvo.value)) {
        } else {
            nomes.push(inputNomeSalvo.value);
            numeros.push(parseFloat(inputNumeroSalvo.value));
            
            let linha = '<tr>';
            linha += `<td>${inputNomeSalvo.value}</td>`;
            linha += `<td>${inputNumeroSalvo.value}</td>`;
            linha += `<td>${inputNumeroSalvo.value = imgConfere}</td>`;
            linha += '</tr>';
            
            linhas += linha;
        }
    } else {
        alert("O número de telefone deve conter 11 dígitos: (DDD) X.XXXX-XXXX ");
    }
    
    inputNomeSalvo.value = '';
    inputNumeroSalvo.value = '';
}

function atualizaTabela() {
    const corpotabela = document.querySelector('tfoot');
    corpotabela.innerHTML = linhas;
}

function atualizaListaContatos() {
    const listaContatos = salvarContatos();

    document.getElementById('nome-salvo').innerHTML = listaContatos
    document.getElementById('numero-salvo').innerHTML = listaContatos
}