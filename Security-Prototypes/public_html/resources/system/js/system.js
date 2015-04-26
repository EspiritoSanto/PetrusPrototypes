var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(obj) {
    var isEmpty = false;

    if (obj === null) {
        isEmpty = true;
    } else if (obj.length && obj.length <= 0) {
        isEmpty = true;
    } else {
        var index = 0;
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                index++;
            }
        }
        if (index === 0) {
            isEmpty = true;
        }
    }

    return isEmpty;
}


