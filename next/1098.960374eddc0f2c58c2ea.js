(window.webpackJsonp=window.webpackJsonp||[]).push([[1098],{"2QQA":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-pagination-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample1 {\n    length = 64;\n\n    index = 10;\n\n    goToPage(index: number): void {\n        this.index = index;\n        console.info(`New page:`, index);\n    }\n}\n"}}]);