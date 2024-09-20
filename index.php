<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MefTok</title>
</head>
<body>
<?php
    $files = scandir('\images\meme');
    foreach($files as $file) {
        if($file !== "." && $file !== "..") {
            echo "<img src='$file' />";
        }
    }
?>

hi
</body>
</html>