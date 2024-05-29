(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[81325],{81325:n=>{n.exports="import {JsonPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiBooleanHandler} from '@taiga-ui/cdk';\nimport {TuiFilterComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [ReactiveFormsModule, TuiFilterComponent, JsonPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly form = new FormGroup({\n        filters: new FormControl(['Food']),\n    });\n\n    protected readonly items = [\n        'News',\n        'Food',\n        'Clothes',\n        'Popular',\n        'Goods',\n        'Furniture',\n        'Tech',\n        'Building materials',\n    ];\n\n    protected disabledItemHandler: TuiBooleanHandler<string> = item => item.length < 7;\n}\n"}}]);