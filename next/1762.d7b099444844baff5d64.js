(window.webpackJsonp=window.webpackJsonp||[]).push([[1762],{fk3H:function(n,e,t){"use strict";t.r(e),e.default="```ts\nimport formatDistance from 'date-fns/formatDistance';\n\n@Injectable()\nexport class FormatService extends TuiFormatDateService {\n  format(timestamp: number): Observable<string> {\n    return timer(0, 1000).pipe(map(() => formatDistance(timestamp, Date.now())));\n  }\n}\n\n@Component({\n  // ...\n  providers: [\n    {\n      provide: TuiFormatDateService,\n      useClass: FormatService,\n    },\n  ],\n})\nexport class MyComponent {}\n```\n"}}]);