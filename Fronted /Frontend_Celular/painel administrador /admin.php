<?php
// Conexão com banco
$conn = new mysqli('localhost', 'root', '', 'meu_site');

// Verificar erro
if ($conn->connect_error) {
    die("Erro: " . $conn->connect_error);
}

$nome_site = $_POST['nome_site'];

$sql = "UPDATE configuracao SET nome_site='$nome_site' WHERE id=1";

if ($conn->query($sql) === TRUE) {
    echo "Nome do site atualizado com sucesso!";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>