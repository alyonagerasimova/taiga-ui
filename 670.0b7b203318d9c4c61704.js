(window.webpackJsonp=window.webpackJsonp||[]).push([[670],{zxRs:function(t,n,e){"use strict";e.r(n),n.default='<div class="example">\n    <tui-select\n        tuiTextfieldSize="l"\n        [tuiTextfieldLabelOutside]="true"\n        [formControl]="account"\n        [valueContent]="value"\n    >\n        <ng-template tuiDataList>\n            <tui-data-list>\n                <button *ngFor="let item of accounts" tuiOption [value]="item">\n                    <my-account [account]="item"></my-account>\n                </button>\n            </tui-data-list>\n        </ng-template>\n    </tui-select>\n\n    <tui-select\n        tuiTextfieldSize="m"\n        class="tui-space_top-2"\n        [tuiTextfieldLabelOutside]="true"\n        [formControl]="account"\n        [valueContent]="value"\n    >\n        <ng-template tuiDataList>\n            <tui-data-list>\n                <button *ngFor="let item of accounts" tuiOption [value]="item">\n                    <my-account [account]="item"></my-account>\n                </button>\n            </tui-data-list>\n        </ng-template>\n    </tui-select>\n</div>\n\n<ng-template #value let-account>\n    <my-account [account]="account"></my-account>\n</ng-template>\n'}}]);