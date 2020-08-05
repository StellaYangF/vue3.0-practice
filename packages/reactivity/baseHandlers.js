const get = createGetter();
const set = createSetter();

function createGetter() {
    return function get(target, key, receiver) {
        console.log('取值', target, key);
        return Reflect.get(target, key, receiver);
    }
}

function createSetter() {
    return function set(target, key, value, receiver) {
        console.log('赋值');
        return Reflect.set(target, key, value, receiver);
    }
}

// proxy normal object & array
export const mutableHandle = {
    get,
    set,
}