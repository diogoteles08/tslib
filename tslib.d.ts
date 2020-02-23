/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/**
 * Used to shim class extends.
 *
 * @param d The derived class.
 * @param b The base class.
 */
export declare function __extends(d: Function, b: Function): void;

/**
 * Copy the values of all of the enumerable own properties from one or more source objects to a
 * target object. Returns the target object.
 *
 * @param t The target object to copy to.
 * @param sources One or more source objects from which to copy properties
 */
export declare function __assign(t: any, ...sources: any[]): any;

/**
 * Performs a rest spread on an object.
 *
 * @param t The source value.
 * @param propertyNames The property names excluded from the rest spread.
 */
export declare function __rest(t: any, propertyNames: (string | symbol)[]): any;

/**
 * Applies decorators to a target object
 *
 * @param decorators The set of decorators to apply.
 * @param target The target object.
 * @param key If specified, the own property to apply the decorators to.
 * @param desc The property descriptor, defaults to fetching the descriptor from the target object.
 * @experimental
 */
export declare function __decorate(decorators: Function[], target: any, key?: string | symbol, desc?: any): any;

/**
 * Creates an observing function decorator from a parameter decorator.
 *
 * @param paramIndex The parameter index to apply the decorator to.
 * @param decorator The parameter decorator to apply. Note that the return value is ignored.
 * @experimental
 */
export declare function __param(paramIndex: number, decorator: Function): Function;

/**
 * Creates a decorator that sets metadata.
 *
 * @param metadataKey The metadata key
 * @param metadataValue The metadata value
 * @experimental
 */
export declare function __metadata(metadataKey: any, metadataValue: any): Function;

/**
 * Converts a generator function into a pseudo-async function, by treating each `yield` as an `await`.
 *
 * @param thisArg The reference to use as the `this` value in the generator function
 * @param _arguments The optional arguments array
 * @param P The optional promise constructor argument, defaults to the `Promise` property of the global object.
 * @param generator The generator function
 */
export declare function __awaiter(thisArg: any, _arguments: any, P: Function, generator: Function): any;

/**
 * Creates an Iterator object using the body as the implementation.
 *
 * @param thisArg The reference to use as the `this` value in the function
 * @param body The generator state-machine based implementation.
 *
 * @see [./docs/generator.md]
 */
export declare function __generator(thisArg: any, body: Function): any;

/**
 * Creates bindings for all enumerable properties of `m` on `exports`
 *
 * @param m The source object
 * @param exports The `exports` object.
 */
export declare function __exportStar(m: any, o: any): void;

/**
 * Creates a value iterator from an `Iterable` or `ArrayLike` object.
 *
 * @param o The object.
 * @throws {TypeError} If `o` is neither `Iterable`, nor an `ArrayLike`.
 */
export declare function __values(o: any): any;

/**
 * Reads values from an `Iterable` or `ArrayLike` object and returns the resulting array.
 *
 * @param o The object to read from.
 * @param n The maximum number of arguments to read, defaults to `Infinity`.
 */
export declare function __read(o: any, n?: number): any[];

/**
 * Creates an array from iterable spread.
 *
 * @param args The Iterable objects to spread.
 * @deprecated since TypeScript 4.2 - Use `__spreadArray`
 */
export declare function __spread(...args: any[][]): any[];

/**
 * Creates an array from array spread.
 *
 * @param args The ArrayLikes to spread into the resulting array.
 * @deprecated since TypeScript 4.2 - Use `__spreadArray`
 */
export declare function __spreadArrays(...args: any[][]): any[];

/**
 * Spreads the `from` array into the `to` array.
 */
export declare function __spreadArray(to: any[], from: any[]): any[];

/**
 * Creates an object that signals to `__asyncGenerator` that it shouldn't be yielded,
 * and instead should be awaited and the resulting value passed back to the generator.
 *
 * @param v The value to await.
 */
export declare function __await(v: any): any;

/**
 * Converts a generator function into an async generator function, by using `yield __await`
 * in place of normal `await`.
 *
 * @param thisArg The reference to use as the `this` value in the generator function
 * @param _arguments The optional arguments array
 * @param generator The generator function
 */
export declare function __asyncGenerator(thisArg: any, _arguments: any, generator: Function): any;

/**
 * Used to wrap a potentially async iterator in such a way so that it wraps the result
 * of calling iterator methods of `o` in `__await` instances, and then yields the awaited values.
 *
 * @param o The potentially async iterator.
 * @returns A synchronous iterator yielding `__await` instances on every odd invocation
 *          and returning the awaited `IteratorResult` passed to `next` every even invocation.
 */
export declare function __asyncDelegator(o: any): any;

/**
 * Creates a value async iterator from an `AsyncIterable`, `Iterable` or `ArrayLike` object.
 *
 * @param o The object.
 * @throws {TypeError} If `o` is neither `AsyncIterable`, `Iterable`, nor an `ArrayLike`.
 */
export declare function __asyncValues(o: any): any;

/**
 * Creates a `TemplateStringsArray` frozen object from the `cooked` and `raw` arrays.
 *
 * @param cooked The cooked possibly-sparse array.
 * @param raw The raw string content.
 */
export declare function __makeTemplateObject(cooked: string[], raw: string[]): TemplateStringsArray;

/**
 * Used to shim default and named imports in ECMAScript Modules transpiled to CommonJS.
 *
 * ```js
 * import Default, { Named, Other } from "mod";
 * // or
 * import { default as Default, Named, Other } from "mod";
 * ```
 *
 * @param mod The CommonJS module exports object.
 */
export declare function __importStar<T>(mod: T): T;

/**
 * Used to shim default imports in ECMAScript Modules transpiled to CommonJS.
 *
 * ```js
 * import Default from "mod";
 * ```
 *
 * @param mod The CommonJS module exports object.
 */
export declare function __importDefault<T>(mod: T): T | { default: T };

/**
 * Used to shim private class fields using a WeakMap.
 *
 * @param receiver The object to get the private field of.
 * @param privateMap The WeakMap map of private fields.
 *
 * @throws {TypeError} If `privateMap` doesn't have an entry for `receiver`.
 */
export declare function __classPrivateFieldGet<T extends object, V>(receiver: T, privateMap: { has(o: T): boolean, get(o: T): V | undefined }): V;

/**
 * Used to shim private class fields using a WeakMap
 *
 * @param receiver The object to set the private field of.
 * @param privateMap The WeakMap map of private fields.
 * @param value The new value.
 *
 * @throws {TypeError} If `privateMap` doesn't have an entry for `receiver`.
 */
export declare function __classPrivateFieldSet<T extends object, V>(receiver: T, privateMap: { has(o: T): boolean, set(o: T, value: V): any }, value: V): V;

/**
 * Creates a re-export binding on `object` with key `objectKey` that references `target[key]`.
 *
 * @param object The local `exports` object.
 * @param target The object to re-export from.
 * @param key The property key of `target` to re-export.
 * @param objectKey The property key to re-export as. Defaults to `key`.
 */
export declare function __createBinding(object: object, target: object, key: PropertyKey, objectKey?: PropertyKey): void;
