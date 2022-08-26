(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{"0QPO":function(n,e,t){"use strict";t.r(e),e.default="import {Component, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    tiptapEditorStyles,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_STYLES,\n    TuiEditorTool,\n} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-editor-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import(`@taiga-ui/addon-editor/extensions/starter-kit`).then(\n                    m => m.StarterKit,\n                ),\n                import(`@taiga-ui/addon-editor/extensions/image-editor`).then(m =>\n                    m.createImageEditorExtension(injector),\n                ),\n            ],\n        },\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample3 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];\n\n    control = new FormControl(``);\n\n    constructor() {\n        this.control.patchValue(`\n                <p>Small image</p><img data-type=\"image-editor\" src=\"assets/images/lumberjack.png\" width=\"300\"><p>Big image</p><img data-type=\"image-editor\" src=\"assets/images/big-wallpaper.jpg\" width=\"500\">\n            `);\n    }\n}\n"}}]);