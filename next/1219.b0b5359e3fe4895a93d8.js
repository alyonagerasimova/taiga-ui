(window.webpackJsonp=window.webpackJsonp||[]).push([[1219],{DGpW:function(t,n,i){"use strict";i.r(n),n.default='<div class="tui-row">\n    <div class="tui-col_md-4">\n        <form [formGroup]="testForm">\n            <tui-radio-list\n                formControlName="tariff"\n                [items]="items"\n                [itemContent]="tariff1ItemContent"\n            ></tui-radio-list>\n            <ng-template\n                #tariff1ItemContent\n                let-data\n            >\n                <div>Option &laquo;{{ data.name }}&raquo;.</div>\n                <div class="description">{{ data.description }}</div>\n            </ng-template>\n        </form>\n    </div>\n    <div class="tui-col_md-4">\n        <form [formGroup]="testForm">\n            <tui-radio-list\n                formControlName="tariff"\n                orientation="horizontal"\n                [items]="items"\n                [itemContent]="tariff2ItemContent"\n            ></tui-radio-list>\n            <ng-template\n                #tariff2ItemContent\n                let-data\n            >\n                &laquo;{{ data.name }}&raquo;\n            </ng-template>\n        </form>\n    </div>\n</div>\n'}}]);