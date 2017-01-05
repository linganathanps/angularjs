<div id="body">
<div id="welcomeHeader">
<h1>
{{welcomeMsg}}
</h1>
</div>
<div id="payedNote">
<h3>Played History </h3>
</div>
<div  onload-include="start()">
<div id="guessMe">
{{inputMsg}} :
<input class="input" ng-model="guessedValue" type="text" name="gussMe" placeholer="Please enter 4 digit no" />
</div>
<div id="playArea">
<div id="button1">
<input class="buttons" ng-click="input('0')" type="button" value="0"/>
<input class="buttons" type="button" ng-click="input('1')" value="1"/>
<input class="buttons" type="button" ng-click="input('2')" value="2"/>
</div>
<div id="button2">
<input class="buttons" type="button" ng-click="input('3')" value="3"/>
<input class="buttons" type="button" ng-click="input('4')" value="4"/>
<input class="buttons" type="button" ng-click="input('5')" value="5"/>
</div>
<div id="button3">
<input class="buttons" type="button" ng-click="input('6')" value="6"/>
<input class="buttons" type="button" ng-click="input('7')" value="7"/>
<input class="buttons" type="button" ng-click="input('8')" value="8"/>
</div>
<div id="button4">
<input class="buttons" type="button" ng-click="input('9')" value="9"/>
<input class="buttons" type="button" ng-click="input('0')" value="0"/>
<input class="buttons" type="button" ng-click="input()" value="<"/>
</div>
<div id="submit">
<input class="clear"  type="submit" value="submit" ng-click="submit()"/>
<input class="clear" type="submit" value="Restart" ng-click="start()"/>
<input class="submit blink_text" type="button" value="clear" ng-click="clear()"/>
</div>
</div>
<div id="footer">
&copy; {{copyRight}}
</div>
</div>