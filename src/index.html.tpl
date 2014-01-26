<!doctype html>
<html lang="en" ng-app="CGrid">
<head>
    <meta charset="UTF-8">
    <title>CGrid</title>
    <% _.forEach(csss, function(css) { %><link rel="stylesheet" href="<%- css %>"><%- "\n" %><% }); %>
</head>
<body>
    
    <div ng-view></div>

</body>
</html>
<% _.forEach(scripts, function(script) { %><script type="text/javascript" src="<%- script %>"></script><%- "\n" %><% }); %>