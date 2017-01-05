<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html ng-app="guessMe">
<head >

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="description" content="">
    <meta name="author" content="">

<!-- Angular Library -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.2/angular.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>
<script src="<c:url value='https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.2/angular-ui-router.min.js' />"></script>

<!-- Angular Material Lib -->
<script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
<!-- App JS -->
<script type="text/javascript" src="<c:url value='/js/guessme.js'/>"></script>
<script src="<c:url value='/js/services/NumberGenService.js'/>"></script>
<script src="<c:url value='/js/controller/GuessMeController.js'/>"></script>
<script src="<c:url value='/js/constants/constants.js'/>"></script>


<!-- CSS -->
<link rel="stylesheet" href="css/backroundimg.css">
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">

</head>
<body>
<div ui-view></div>
<!-- Footer -->
<!-- <footer>
    <md-toolbar class="md-medium-tall">
        <div layout="row" layout-align="center center" flex>
            <p class="md-caption" style="margin-top: 0px;">GUESS ME GAME.</p>
        </div>
    </md-toolbar>
</footer>
 -->
</body>
</html>
