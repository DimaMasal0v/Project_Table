<!DOCTYPE html>
<html>
<head>
  <title>Вход в систему</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="index.php">Запись на соревнования</a></li>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <h1>Вход в систему</h1>
    
      <?php
    // проверяем, была ли отправлена форма
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      // получаем данные из формы
      $username = $_POST['username'];
      $password = $_POST['password'];
      
      // подключаемся к базе данных
      $conn = mysqli_connect('localhost', 'h92140hy_sport', 'dulabar1337+', 'h92140hy_sport');
      
      // проверяем соединение с базой данных
      if (!$conn) {
        die('Ошибка подключения к базе данных: ' . mysqli_connect_error());
      }
      
      // формируем запрос для получения данных пользователя
      $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
      
      // отправляем запрос на сервер базы данных
      $result = mysqli_query($conn, $sql);
      
      // проверяем результат запроса
      if (mysqli_num_rows($result) == 1) {
        // получаем данные пользователя
        $user = mysqli_fetch_assoc($result);
        
        // сохраняем данные пользователя в сессию
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_role'] = $user['role'];
        
        // перенаправляем пользователя на главную страницу
        header('Location: index.php');
        exit;
      } else {
        // выводим сообщение об ошибке
        echo '<p class="error">Неверные имя пользователя или пароль</p>';
      }
      
      // закрываем соединение с базой данных
      mysqli_close($conn);
    }
    ?>
      <?php if (isset($error)): ?>
        <p><?php echo $error; ?></p>
      <?php endif; ?>
    
        <form method="post">
          <label for="username">Имя пользователя:</label>
          <input type="text" name="username" required>
          <br>
          <label for="password">Пароль:</label>
          <input type="password" name="password" required>
          <br>
          <button type="submit">Войти</button>
        </form>
    
      <p>Еще не зарегистрированы? <a href="register-user.php">Зарегистрироваться</a></p>
  </main>
</body>
</html>
