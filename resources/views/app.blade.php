<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Jobs Stats</title>
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
          integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
          crossorigin="anonymous">
</head>
<body>
<div id="app" v-cloak>
    <div class="container-fluid">
        <stats></stats>
        <config></config>
        <div class="card mb-3 text-center">
            <h3 class="card-header">Jobs Stats Chart</h3>
            <div class="card-block">
                <chart></chart>
            </div>
        </div>
        <div class="card mb-3 text-center">
            <h3 class="card-header">Jobs list</h3>
            <div class="card-block">
                <list></list>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('vendor/queue-stats/app.js') }}"></script>
</body>
</html>
