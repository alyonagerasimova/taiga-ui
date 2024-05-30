(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53581],{53581:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport type {OnInit} from '@angular/core';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';\nimport {TuiErrorComponent} from '@taiga-ui/core';\nimport {TuiFieldErrorPipe} from '@taiga-ui/kit';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent5\",\n    imports: [\n        ReactiveFormsModule,\n        TuiInputModule,\n        TuiErrorComponent,\n        TuiFieldErrorPipe,\n        AsyncPipe,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent implements OnInit {\n    protected userDetailsForm = new FormGroup({\n        name: new FormControl('', Validators.required),\n        address: new FormGroup({\n            street: new FormControl('', Validators.required),\n            city: new FormControl('', Validators.required),\n            zipCode: new FormControl('', Validators.required),\n        }),\n    });\n\n    public ngOnInit(): void {\n        tuiMarkControlAsTouchedAndValidate(this.userDetailsForm);\n    }\n}\n"}}]);