(window.webpackJsonp=window.webpackJsonp||[]).push([[679],{FNJL:function(e,n,t){"use strict";t.r(n),n.default='<form\n    class="b-form"\n    [formGroup]="testForm"\n>\n    <label\n        i18n-label\n        tuiLabel\n        label="Type the ultimate answer"\n        class="tui-space_bottom-4"\n    >\n        <tui-input\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            to the Question of Life, the Universe, and Everything\n        </tui-input>\n\n        <tui-field-error formControlName="testValue2"></tui-field-error>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="Set a password"\n    >\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Latin letters only\n        </tui-input>\n\n        <tui-field-error formControlName="testValue1"></tui-field-error>\n    </label>\n\n    <p i18n>\n        If you need to show validation message as early as a user started to type something, subscribe on form value\n        changes and call markAsTouched on control on first value change\n    </p>\n</form>\n'}}]);