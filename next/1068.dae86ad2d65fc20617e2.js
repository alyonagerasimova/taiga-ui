(window.webpackJsonp=window.webpackJsonp||[]).push([[1068],{IKTY:function(t,n,e){"use strict";e.r(n),n.default='<tui-multi-select\n    *tuiLet="items$ | async as items"\n    #component\n    tuiTextfieldExampleText="Find by ..."\n    class="control"\n    [formControl]="testValue"\n    [tuiTextfieldLabelOutside]="true"\n    [expandable]="false"\n    (searchChange)="onSearchChange($event)"\n>\n    Rock Star Frontend Developers\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]="items | tuiHideSelected: component"\n        [itemContent]="itemContent"\n    ></tui-data-list-wrapper>\n</tui-multi-select>\n\n<ng-template\n    #itemContent\n    let-data\n>\n    <div class="template">\n        <tui-avatar\n            size="xs"\n            class="avatar"\n            [avatarUrl]="data.avatarUrl"\n            [text]="data.toString()"\n        ></tui-avatar>\n        {{ data }}\n    </div>\n</ng-template>\n'}}]);