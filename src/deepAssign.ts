var isObjectLike = function (x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
var hasOwnProperty = Object.prototype.hasOwnProperty;

function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Sources cannot be null or undefined');
    }

    return Object(val);
}

function assignKey(to, from, key) {
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
        to[key] = val;
    } else {
        to[key] = assign(Object(to[key]), from[key]);
    }
}

function assign(to, from) {
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

export function deepAssign(target, ...args) {
    target = toObject(target);

    for (var s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }

    return target;
}
