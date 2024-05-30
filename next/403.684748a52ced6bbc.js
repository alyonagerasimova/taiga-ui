(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[403],{403:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport type {OnInit} from '@angular/core';\nimport {Component, ViewChild} from '@angular/core';\nimport type {AbstractControl, ValidationErrors} from '@angular/forms';\nimport {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiMarkControlAsTouchedAndValidate, TuiValidationError} from '@taiga-ui/cdk';\nimport {\n    TuiButtonDirective,\n    TuiErrorComponent,\n    TuiLabelDirective,\n    TuiTextfieldControllerModule,\n} from '@taiga-ui/core';\nimport {TuiCheckboxComponent, TuiFieldErrorPipe} from '@taiga-ui/kit';\nimport {TuiInputModule} from '@taiga-ui/legacy';\nimport type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\nconst secretRegexTen = /^\\d{10}$/;\nconst secretRegexTwelve = /^\\d{12}$/;\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        ReactiveFormsModule,\n        TuiLabelDirective,\n        TuiInputModule,\n        TuiTextfieldControllerModule,\n        TuiErrorComponent,\n        TuiFieldErrorPipe,\n        AsyncPipe,\n        TuiCheckboxComponent,\n        TuiButtonDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent implements OnInit {\n    @ViewChild('errorContent')\n    protected errorContent: PolymorpheusContent;\n\n    @ViewChild('bigErrorContent')\n    protected bigErrorContent: PolymorpheusContent;\n\n    protected readonly testValue2 = new FormControl('');\n\n    protected readonly testForm = new FormGroup({\n        testValue1: new FormControl('', [Validators.required, this.getSecretValidator()]),\n        testValue2: this.testValue2,\n        testValue3: new FormControl(false, [Validators.requiredTrue]),\n    });\n\n    public ngOnInit(): void {\n        this.testValue2.setValidators([Validators.required, this.companyValidator]);\n    }\n\n    protected onSubmit(): void {\n        tuiMarkControlAsTouchedAndValidate(this.testForm);\n    }\n\n    private readonly companyValidator = (\n        field: AbstractControl,\n    ): ValidationErrors | null =>\n        field.value\n            ? {\n                  inn: new TuiValidationError(this.bigErrorContent),\n              }\n            : null;\n\n    private getSecretValidator(): (field: AbstractControl) => ValidationErrors | null {\n        return (field: AbstractControl): ValidationErrors | null =>\n            field.value &&\n            (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))\n                ? null\n                : {\n                      secret: new TuiValidationError(this.errorContent),\n                  };\n    }\n}\n"}}]);