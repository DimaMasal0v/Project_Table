<?php

// Подключение к базе данных
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "h92140hy_sport";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Получение данных из формы регистрации
$username = $_POST["username"];
$password = $_POST["password"];
$email = $_POST["email"];

// Проверка, что пользователь с таким именем не существует
$sql = "SELECT * FROM users WHERE username='$username'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // Если пользователь уже существует, выводим сообщение об ошибке
  echo "Пользователь с таким именем уже существует!";
} else {
  // Если пользователь не существует, добавляем его в базу данных
  $sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";

  if (mysqli_query($conn, $sql)) {
    // Если данные успешно добавлены в базу данных, перенаправляем пользователя на главную страницу
    header("Location: index.php");
  } else {
    // Если произошла ошибка при добавлении данных в базу данных, выводим сообщение об ошибке
    echo "Ошибка: " . $sql . "<br>" . mysqli_error($conn);
  }
}

mysqli_close($conn);

?>
