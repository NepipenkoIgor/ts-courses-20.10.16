
function isArray(arr: any[], ...rest: any[]): boolean {
    for (let i: number = 0; i < rest.length; i++) {
        if (arr.indexOf(rest[i]) == -1) {
            return false;
        }
    }

    return true;
}

console.log(isArray([1, 2], 1));
console.log(isArray([1, 2], 3));
console.log(isArray([1, 2], 1, 2));
console.log(isArray([1, 2, 'string'], 'string'));
