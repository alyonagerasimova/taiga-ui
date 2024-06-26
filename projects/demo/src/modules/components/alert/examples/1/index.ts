import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButtonDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButtonDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly alerts = inject(TuiAlertService);

    protected showNotification(): void {
        this.alerts
            .open('Basic <strong>HTML</strong>', {label: 'With a heading!'})
            .subscribe();
    }
}
