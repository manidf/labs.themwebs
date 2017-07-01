<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ajax form</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
    <style>
        body { font-family:  'Arial Narrow', Arial, sans-serif; }
        .field {
            border-bottom: 1px solid #EEE;
            padding: .5em;
        }
        #formMessage {
            border: 2px solid red;
            background-color: #EEE;
        }
        .is-hidden {
            opacity: 0;
            -webkit-transition: all 0.5 ease-in;
            transition: all 0.5 ease-in;
            transform:  translateY(-100px);
            -webkit-transform: translateY(-100px);
        }
        .is-visible {
            opacity: 1;
            transition: all 0.5 ease-in;
            -webkit-transition: all 0.5 ease-in;
            transform: translateY(0);
            -webkit-transform: translateY(0); 
        }
    </style>
</head>
<body>
    <div id="formMessage" class="is-hidden"></div>
    <form id="subscriptionForm" action="mail.php">
        <div class="field">
             <label aria-labelledby="name" for="name">Name</label>
             <input type="text" name="name">
        </div>
        <div class="field">
             <label aria-labelledby="email" for="email">Email</label>
             <input type="text" name="email">
        </div>
        <div class="field">
             <label aria-labelledby="message" for="message">Message</label>
             <textarea aria-labelledby="message" name="message" id="message"></textarea>
        </div>
        <div class="field">
             <input type="submit" name="submit">
        </div>
    </form>
    <script src="./node_modules/jquery/dist/jquery.js"></script>
    <script src="app.js"></script>
</body>
</html>