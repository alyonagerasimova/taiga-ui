(window.webpackJsonp=window.webpackJsonp||[]).push([[1640],{8610:function(n,e,a){"use strict";a.r(e),e.default='<p\n    i18n\n    (tuiHoveredChange)="onHovered($event)"\n>\n    Hover\n    <span\n        [class.hidden]="!hovered"\n        (tuiPresentChange)="onCSS($event)"\n    >\n        I am a component hidden with CSS\n    </span>\n    <span\n        *ngIf="hovered"\n        (tuiPresentChange)="onIf($event)"\n    >\n        I am a component hidden with *ngIf\n    </span>\n</p>\n<p i18n>Counter of component appearance minus counter of its disappearance:</p>\n<p>\n    CSS:\n    <tui-badge [value]="counterCSS"></tui-badge>\n</p>\n<p>\n    ngIf:\n    <tui-badge [value]="counterIf"></tui-badge>\n</p>\n'}}]);