<!DOCTYPE html>
<html lang="en" ng-app="CGrid">
<head>
    <meta charset="UTF-8">
    <title>CGrid</title>
    <% _.forEach(csss, function(css) { %><link rel="stylesheet" href="<%- css %>"><%- "\n" %><% }); %>
</head>
<body>
    
    <div class="panel panel-default">
        <div class="panel-heading">
            <ul class="nav nav-pills" c-infoswitch>
                <li class="active"><a href="#/basic">Basic</a></li>
                <li><a href="#/colDefine">Column Definitions</a></li>
                <li><a href="#/grouping">Grouping</a></li>
                <li><a href="#/celltemplating">Cell Templating</a></li>
                <li><a href="#/rowtemplating">Row Templating</a></li>
                <li><a href="#/theme">JQuery.UI Theme</a></li>
                <li><a href="#/serverpaging">Paging</a></li>
            </ul>
        </div>
        <div class="panel-body">
           <div ng-view></div>
        </div>
        <div class="panel-footer text-center" c-pagesize>
            <div class="btn-group">
                <button type="button" class="btn btn-default active">100</button>
                <button type="button" class="btn btn-default">1000</button>
                <button type="button" class="btn btn-default">10000</button>
            </div>
        </div>
    </div>

</body>
</html>
<% _.forEach(scripts, function(script) { %><script type="text/javascript" src="<%- script %>"></script><%- "\n" %><% }); %>