import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiRippleDirective} from '@taiga-ui/addon-mobile/directives';
import type {TuiPopover} from '@taiga-ui/cdk';
import {TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import type {TuiMobileDialogOptions} from './mobile-dialog.options';

@Component({
    standalone: true,
    selector: 'tui-mobile-dialog',
    imports: [NgIf, PolymorpheusModule, NgForOf, TuiButtonDirective, TuiRippleDirective],
    templateUrl: './mobile-dialog.template.html',
    styleUrls: ['./mobile-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._ios]': 'isIOS',
    },
})
export class TuiMobileDialogComponent<I> {
    protected readonly isIOS = inject(TUI_IS_IOS);
    protected readonly context =
        inject<TuiPopover<TuiMobileDialogOptions<I>, number>>(POLYMORPHEUS_CONTEXT);

    protected onAction(index: number): void {
        this.context.completeWith(index);
    }
}
