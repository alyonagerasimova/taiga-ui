(window.webpackJsonp=window.webpackJsonp||[]).push([[1762],{"0eqi":function(e,n,o){"use strict";o.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiFormatDateService} from '@taiga-ui/core';\n\nimport {FormatService} from './service';\n\n@Component({\n    selector: `tui-format-date-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TuiFormatDateService,\n            useClass: FormatService,\n        },\n    ],\n})\nexport class TuiFormatDateExample1 {\n    readonly now = Date.now();\n}\n"}}]);