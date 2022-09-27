# BASED ON TUTORIAL
https://www.youtube.com/playlist?list=PL6AdzyjjD5HBbt9amjf3wIVMaobb28ZYN

## HOW TO LAUNCH TESTS =========================================================================================================
npx wdio wdio.conf.js

### If browserstack is used, also send the credentials
BROWSERSTACK_USERNAME=leosanchez_DRiXbN BROWSERSTACK_ACCESS_KEY=LfW14St7267rUq4zdbqo npx wdio wdio.conf.js

## ABOUT TEST SPECS(SCRIPTS)====================================================================================================

### basic.js
Basic script type 'Hellow World!'

### search.js
Simple Google search script

### amazon_chai.js
Script that shows the 'chai' assertions integration

### amazon.js
Main demo script with most of the key features 

## SUPPORTED SVCS ==============================================================================================================

### About SVCS
The one easier is the selenium stand alone

### chromedriver 
Single Driver support. - service AUTO started

### firefox (gecko) 
Single Driver support. - service require MANUAL start

### selenium-standalone
Has integrated the chrome/FF/Edge/IE11/Safari - service AUTO started

### browserstack
Integrated that has DESKTOP/MOBILE but with $

## SUPPORTED BROWSERS ==============================================================================================================

### Mix(Multibrowser) 
Left active the entry for the browsers you want to execute.

### chrome 
OK - with multiple intances supported

### firefox
OK - With single instance (session) supported as gecko by default only support single intance (If used with direct svc, then you need to spin up the svc manually:

Open console and start the driver
./test/drivers/geckodriver.exe

*Perhaps also needs the path to the browser, if so add the path similar to :
./test/drivers/geckodriver.exe --binary 'C:/Program Files/Mozilla Firefox/firefox.exe'

OK - with multiple intances supported - Workaround for this is to use the SeleniumStandAlone

IMPORTANT: In my sistem - Seems to be an issue wiht the gecko version and the wdio versions 6..probably will work with 7

### MicrosoftEdge 
OK - with multiple intances supported

### internet explorer (IE11) 
(Not supported in  W11 directy anymore) but it opnes Edge in IE mode.

## REPORTERS ==============================================================================================================
### About Screenshots
-Debug and preffer only on ERROR

### ALLURE REPORTER
-How to generate:
1)Activate the reporter inthe config
-Delete the 2 folders (allure-report / allure-results) before each execution (as precondition)
2)Execute tests, once completed then 
3)Execute command:
allure generate allure-results/ --clean && allure open
4)Report ready.
