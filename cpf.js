//Função para consumir API
function buscar() {
    //carrega o JSON e processa os dados
    fetch(`https://raw.githubusercontent.com/asoferr/lala/refs/heads/main/cpf.json`).then(resposta => resposta.json()).then(corpo => {
        var identificador = document.getElementById('valor').value;
        var encontrado = false;

        corpo.forEach(pessoa => {

        if (identificador == pessoa.cpf) {
            document.getElementById('nome').innerHTML = pessoa.nome;
            document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
            document.getElementById('cidade').innerHTML = pessoa.cidade;
            document.getElementById('pais').innerHTML = pessoa.pais;
            encontrado = true; // Registro encontrado
        }
            });

            // Verifica se nenhum registro foi encontrado
            if (!encontrado) {
                document.getElementById('erro').innerHTML = "Registro inválido";
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('erro').innerHTML = "Erro ao carregar os dados.";
        });
}