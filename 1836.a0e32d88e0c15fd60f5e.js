(window.webpackJsonp=window.webpackJsonp||[]).push([[1836],{"78U/":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {inRange} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-math-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample2 {\n    parametersForm = new FormGroup({\n        value: new FormControl(13),\n        fromInclude: new FormControl(5),\n        toExclude: new FormControl(42),\n    });\n\n    get ranged(): boolean {\n        const {value, fromInclude, toExclude} = this.parametersForm.value;\n\n        return inRange(value, fromInclude, toExclude);\n    }\n}\n"}}]);