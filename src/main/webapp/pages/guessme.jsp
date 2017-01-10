<div id="body">
<div id="welcomeHeader">
<h1 style="margin-bottom: 0px">
{{welcomeMsg}}
</h1>
</div>
<div id="headerMsg" ng-show="maxCount">
{{ERRORMSG}}
</div>
<div id="payedNote">
<h3>Played History </h3>
<div id="history">
</div>
</div>
<div  onload-include="start()">
<div id="guessMe">
{{inputMsg}} :
<input class="input" ng-model="guessedValue" type="text" name="gussMe" maxlength="4" ng-required="true" ngmaxlength="maxDigit" placeholder="4 digit No " ng-keypress="keyPress($event)" ng-change="guessedValueChangeEvent(guessedValue)"/>
</div>
<div id="playArea">
<div id="button1">
<input class="buttons" ng-click="input('0')" type="button" ng-disabled="zero" value="0"/>
<input class="buttons" type="button" ng-click="input('1')" ng-disabled="one" value="1"/>
<input class="buttons" type="button" ng-click="input('2')" ng-disabled="two" value="2"/>
</div>
<div id="button2">
<input class="buttons" type="button" ng-click="input('3')" ng-disabled="three" value="3"/>
<input class="buttons" type="button" ng-click="input('4')" ng-disabled="four" value="4"/>
<input class="buttons" type="button" ng-click="input('5')" ng-disabled="five" value="5"/>
</div>
<div id="button3">
<input class="buttons" type="button" ng-click="input('6')" ng-disabled="six" value="6"/>
<input class="buttons" type="button" ng-click="input('7')" ng-disabled="seven" value="7"/>
<input class="buttons" type="button" ng-click="input('8')" ng-disabled="eight" value="8"/>
</div>
<div id="button4">
<input class="buttons" type="button" ng-click="input('9')" ng-disabled="nine" value="9"/>
<input class="buttons" type="button" ng-click="input('0')" ng-disabled="zero" value="0"/>
<input class="buttons" type="button" ng-click="input()" value="<"/>
</div>
<div id="submit">
<input class="clear"  type="submit" value="submit"  ng-disabled="maxCount||maxInp" ng-click="submit()"/>
<input class="clear" type="submit" value="Restart" ng-click="start()"/>
<input class="submit blink_text" type="button" value="clear" ng-click="clear()"/>
</div>
</div>
<div id="footer">
&copy; {{copyRight}}
</div>
</div>