(window.webpackJsonp=window.webpackJsonp||[]).push([[664],{VOG0:function(t,n,i){"use strict";i.r(n),n.default='<tui-select class="b-form" [(ngModel)]="value">\n    Country\n    <cdk-virtual-scroll-viewport\n        *tuiDataList\n        tuiScrollable\n        class="scroll"\n        [itemSize]="44"\n    >\n        <tui-data-list>\n            <button\n                *cdkVirtualFor="let item of countries"\n                tuiOption\n                [value]="item"\n            >\n                {{item}}\n            </button>\n        </tui-data-list>\n    </cdk-virtual-scroll-viewport>\n</tui-select>\n'}}]);