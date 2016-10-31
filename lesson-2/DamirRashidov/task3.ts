
function getUnique(...rest: any[]): any[] {
    let result: any[] = [];

    for (let i: number = 0; i < rest.length; i++) {
        if (result.indexOf(rest[i]) == -1) {
            result.push(rest[i]);
        }
    }

    return result;
}

console.log(getUnique(1, 2, 2, 3));
console.log(getUnique(1, '2', 2, 3, 1));