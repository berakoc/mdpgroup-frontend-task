export type EmptyObject = Record<string, never>;
export type EmptyProps = EmptyObject;
export type MaybeEmpty<T> = T | EmptyObject;
export type Nullable<T> = T | null;
