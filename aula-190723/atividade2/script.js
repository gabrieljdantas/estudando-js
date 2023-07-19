var tarefas = [];

function adicionarTarefa() {
    var descricao = document.getElementById("descricao").value;
    var prioridade = document.getElementById("prioridade").value;
    var prazo = new Date(document.getElementById("prazo").value);

    var tarefa = {
        descricao: descricao,
        prioridade: prioridade,
        status: "Pendente",
        prazo: prazo,
    };

    tarefas.push(tarefa);
    exibirTarefas();
    limparCampos();
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    exibirTarefas();
}

function marcarConcluida(index) {
    tarefas[index].status = "Concluída";
    exibirTarefas();
}

function exibirTarefas() {
    var tabela = document.getElementById("tabelaTarefas");

    // Limpar a tabela
    while (tabela.rows.length > 1) {
        tabela.deleteRow(1);
    }

    // Preencher a tabela com as tarefas
    for (var i = 0; i < tarefas.length; i++) {
        var tarefa = tarefas[i];

        var row = tabela.insertRow();
        var descricaoCell = row.insertCell(0);
        var prioridadeCell = row.insertCell(1);
        var statusCell = row.insertCell(2);
        var prazoCell = row.insertCell(3);
        var acoesCell = row.insertCell(4);
        

        descricaoCell.innerHTML = tarefa.descricao;
        prioridadeCell.innerHTML = tarefa.prioridade;
        statusCell.innerHTML = tarefa.status;
        prazoCell.innerHTML = tarefa.prazo.toLocaleDateString();

        var removerButton = document.createElement("button");
        removerButton.innerHTML = "Remover";
        removerButton.onclick = (function (i) {
            return function () {
                removerTarefa(i);
            };
        })(i);

        var marcarConcluidaButton = document.createElement("button");
        marcarConcluidaButton.innerHTML = "Concluir";
        marcarConcluidaButton.onclick = (function (index) {
            return function () {
                marcarConcluida(index);
            };
        })(i);

        acoesCell.appendChild(removerButton);
        acoesCell.appendChild(marcarConcluidaButton);
    }
}

function limparCampos() {
    document.getElementById("descricao").value = "";
    document.getElementById("prioridade").value = "";
    document.getElementById("prazo").value = "";
}
