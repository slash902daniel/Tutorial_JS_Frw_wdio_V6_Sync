Launch test:
npx wdio wdio.conf.js


ABOUT TEST SPECS ++++++++++++++++++++++++++++

## basic.js
Basic script type 'Hellow World!'

## search.js
Simple Google search script

## amazon_chai.js
Script that shows the 'chai' assertions integration

## amazon.js
Main demo script with most of the key features 

BROWSERS ++++++++++++++++++++++++++++

## Mix(Multibrowser) 
Chrome (ok - with multiple intances)
Firefox (ok - ** wiht single session as gecko by default only support single intance) Probably a workaound can be done here to be investigated

## Chrome 
default supported

## Firefox
Open console and start the driver
./test/drivers/geckodriver.exe

*Perhaps also needs the path to the browser, if so add the path similar to :
./test/drivers/geckodriver.exe --binary 'C:/Program Files/Mozilla Firefox/firefox.exe'

NOTES: Seems to be an issue wiht the gecko version and the wdio versions 6..probably will work with 7
