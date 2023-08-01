
<?php
session_start();

if(isset($_POST['name']) && isset($_POST['sport']) && isset($_POST['birthday']) && isset($_POST['email'])) {

  if(isset($_SESSION['user'])) {
    $user_id = $_SESSION['user']['id'];
  } else {
    $user_id = null;
  }
  
  $number = generate_number();
  $to = $_POST['email'];
  $subject = 'Регистрация на соревнования';
  $message = 'Вы успешно зарегистрировались на соревнования. Номер вашей записи: '.$number;
  $headers = 'From: admin@example.com' . "\r\n" .
    'Reply-To: admin@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  mail($to, $subject, $message, $headers);
  
  echo '<p>Вы успешно зарегистрировались на соревнования. Номер вашей записи: '.$number.'</p>';
    }

    function generate_number() {
    $number = rand(1000, 9999);

    while(check_number($number)) {
    $number = rand(1000, 9999);
    }

    return $number;
    }

    function check_number($number) {
    return false;
    }
