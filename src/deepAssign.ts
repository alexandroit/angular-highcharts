var isObjectLike = function (x: any) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isMergeableContainer(value: any): boolean {
    if (Array.isArray(value)) {
        return true;
    }

    if (value === null || typeof value !== 'object') {
        return false;
    }

    var prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
}

function toObject(val: any): any {
    if (val === null || val === undefined) {
        throw new TypeError('Sources cannot be null or undefined');
    }

    return Object(val);
}

function isUnsafeKey(key: string): boolean {
    return key === '__proto__' || key === 'prototype' || key === 'constructor';
}

function cloneSanitized(value: any): any {
    if (!isMergeableContainer(value)) {
        return value;
    }

    return assign(Array.isArray(value) ? [] : {}, value);
}

function assignKey(to: any, from: any, key: string): void {
    if (isUnsafeKey(key)) {
        return;
    }

    var val = from[key];

    if (val === undefined || val === null) {
        return;
    }

    if (hasOwnProperty.call(to, key)) {
        if (to[key] === undefined || to[key] === null) {
            throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
        }
    }

    if (!hasOwnProperty.call(to, key) || !isObjectLike(val)) {
        to[key] = cloneSanitized(val);
    } else {
        to[key] = assign(Object(to[key]), from[key]);
    }
}

function assign(to: any, from: any): any {
    if (to === from) {
        return to;
    }

    from = Object(from);

    for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
            assignKey(to, from, key);
        }
    }

    return to;
}

export function deepAssign(target: any, ...args: any[]): any {
    target = toObject(target);

    for (var s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }

    return target;
}
