(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[10960],{10960:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDropdownModule, TuiIconComponent, TuiTextfieldModule} from '@taiga-ui/core';\nimport {TuiTooltipModule} from '@taiga-ui/experimental';\nimport {\n    TuiChevronDirective,\n    TuiDataListWrapper,\n    TuiFilterByInputPipe,\n} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        FormsModule,\n        TuiDropdownModule,\n        TuiTextfieldModule,\n        TuiIconComponent,\n        TuiTooltipModule,\n        TuiChevronDirective,\n        TuiDataListWrapper,\n        TuiFilterByInputPipe,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected value = '';\n\n    protected readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Michael Palin',\n        'Graham Chapman',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n}\n"}}]);