/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

/**
 * Normalizes any number to an integer within inclusive range
 *
 * @param value
 * @param min lower inclusive integer
 * @param max upper inclusive integer
 * @return an integer between min and max inclusive
 */
export function tuiNormalizeToIntNumber(value: number, min: number, max: number): number {
    ngDevMode && console.assert(Number.isInteger(min));
    ngDevMode && console.assert(Number.isInteger(max));
    ngDevMode && console.assert(min <= max);

    if (Number.isNaN(value) || value <= min) {
        return min;
    }

    if (value >= max) {
        return max;
    }

    return Math.round(value);
}
