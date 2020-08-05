import { isObject } from "../shared/utils"
import { mutableHandle } from "./baseHandlers";

export function reactive(target) {
    return createReactiveObject(target, mutableHandle)
}

function createReactiveObject(target, handler) {
    if (!isObject(target)) {
        return target;
    }
    return new Proxy(target, handler);
}