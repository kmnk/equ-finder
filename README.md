# equ-finder

*Equ Finder* is node finder implementation using *Equ*

## INSTALL

    npm install equ-finder


## USAGE

    var readAndParse = require('equ').readAndParse,
        findFunctionCall = require('equ-finder').findFunctionCall,
        SCRIPT_PATH = '/path/to/anyscript.js',
        $equ = readAndParse(SCRIPT_PATH),
        functionCalls = findFunctionCall($equ)
    ;

    console.log(functionCalls);


## REQUIREMENTS

* [Equ][equ]


[equ]: https://npmjs.org/package/equ "Equ"
