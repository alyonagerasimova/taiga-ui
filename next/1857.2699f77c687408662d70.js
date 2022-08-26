(window.webpackJsonp=window.webpackJsonp||[]).push([[1857],{P5SX:function(n,t,i){"use strict";i.r(t),t.default='<table\n    tuiTable\n    [columns]="columns"\n>\n    <thead>\n        <tr tuiThGroup>\n            <th\n                *tuiHead="\'name\'"\n                tuiTh\n            >\n                Name\n            </th>\n            <th\n                *tuiHead="\'email\'"\n                tuiTh\n            >\n                E-mail\n            </th>\n            <th\n                *tuiHead="\'status\'"\n                tuiTh\n            >\n                Status\n            </th>\n            <th\n                *tuiHead="\'tags\'"\n                tuiTh\n                [sorter]="null"\n            >\n                Tags\n            </th>\n            <th\n                *tuiHead="\'actions\'"\n                tuiTh\n                [sorter]="null"\n            ></th>\n        </tr>\n    </thead>\n    <tbody\n        tuiTbody\n        [data]="users"\n    >\n        <tr\n            *tuiRow="let item of users; let index = index"\n            tuiTr\n        >\n            <td\n                *tuiCell="\'name\'"\n                tuiTd\n            >\n                {{ index + 1 }}. {{ item.name }}\n            </td>\n            <td\n                *tuiCell="\'email\'"\n                tuiTd\n            >\n                <a\n                    *ngIf="item.email"\n                    tuiLink\n                    [href]="\'mailto:\' + item.email"\n                >\n                    {{ item.email }}\n                </a>\n            </td>\n            <td\n                *tuiCell="\'status\'"\n                tuiTd\n            >\n                <div [class]="item.status">{{ item.status }}</div>\n            </td>\n            <td\n                *tuiCell="\'tags\'"\n                tuiTd\n            >\n                <tui-tag\n                    *ngFor="let tag of item.tags"\n                    class="tui-space_right-1"\n                    [value]="tag"\n                    [autoColor]="true"\n                ></tui-tag>\n            </td>\n            <td\n                *tuiCell="\'actions\'"\n                tuiTd\n            >\n                <button\n                    tuiIconButton\n                    appearance="flat"\n                    size="s"\n                    icon="tuiIconTrash"\n                    title="Remove"\n                    shape="rounded"\n                    class="remove"\n                    (click)="remove(item)"\n                ></button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n'}}]);