<?php

$nome = $_POST['nome'];
$produto = $_POST['produto'];
$quantidade = $_POST['quantidade'];

// Conexão com o banco
$conn = new mysqli('localhost', 'root', '', 'doces_salgados');

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

$sql = "INSERT INTO pedidos (nome, produto, quantidade) VALUES ('$nome', '$produto', '$quantidade')";

if ($conn->query($sql) === TRUE) {
    echo "Pedido realizado com sucesso!";
} else {
    echo "Erro ao realizar pedido: " . $conn->error;
}

$conn->close();
?>