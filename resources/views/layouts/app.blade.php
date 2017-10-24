<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Jobs Stats</title>
</head>
<body>
<div id="app" v-cloak>
    <chart></chart>
    <list></list>
</div>
@section('scripts')
    <script src="{{ asset('vendor/jobs-stats/app.js') }}"></script>
@show
</body>
</html>
