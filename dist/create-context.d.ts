import { default as React } from 'react';
declare const NullCtx: unique symbol;
export declare class ContextError extends Error {
}
export declare function createContext<C = any>(p: {
    errorMsg?: string;
    initialValue?: C;
    initializer: () => C;
}): [
    React.Context<C | typeof NullCtx>,
    () => C,
    (p: React.PropsWithChildren) => JSX.Element
];
export declare function createContext<C = any>(p?: {
    errorMsg?: string;
    initialValue?: C;
    initializer?: never;
}): [
    React.Context<C | typeof NullCtx>,
    () => C,
    (p: React.PropsWithChildren<{
        value: C;
    }>) => JSX.Element
];
export {};
