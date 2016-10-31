function isInArray(array: any[], ...rest: any[]): boolean {
    for(let i = 0, count = rest.length; i < count; i++) {
        if(array.indexOf(rest[i]) === -1) {
            return false;
        }
    }

    return true;
}

function summator(...rest: number[]): number;
function summator(...rest: string[]): string;
function summator(...rest: any[]): any {
    if(rest.length) {
        if(typeof rest[0] === 'number'){
            let ret: number = 0;

            for(let i = 0, count = rest.length; i < count; i++) {
                ret += rest[i];
            }

            return ret;
        }

        if(typeof rest[0] === 'string'){
            let ret: string = '';

            for(let i = 0, count = rest.length; i < count; i++) {
                ret += rest[i];
            }

            return ret;
        }
    }
    
}

function getUnique(...rest: any[]): typeof rest {
    let ret: typeof rest = [];

    for(let i = 0, count = rest.length; i < count; i++) {
        if(ret.indexOf(rest[i]) === -1) {
            ret.push(rest[i]);
        }
    }

    return ret;
}