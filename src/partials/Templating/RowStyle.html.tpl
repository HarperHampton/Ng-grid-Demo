<div style="height: 100%" ng-class="{green: row.getProperty('age') < 30}">
    <div ng-style="{ 'cursor': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">
        <div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible:!$last }">
            
        </div>
        <div ng-cell></div>
    </div>
</div>