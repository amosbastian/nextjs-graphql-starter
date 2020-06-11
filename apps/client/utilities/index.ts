export function fromEntries<T>(entries: [keyof T, T[keyof T]][]): T {
  return entries.reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {} as T,
  );
}

export function toEntries<T>(obj: T): [keyof T, T[keyof T]][] {
  const entries: [string, any][] = Object.entries(obj);
  const entriesWithKeysLookedUp: [
    keyof T,
    T[keyof T],
  ][] = entries.map((item) => {
    const keyString = item[0];
    const value = item[1];
    return [keyString as keyof T, value];
  });
  return entriesWithKeysLookedUp;
}

export function updatedObject<T>(obj1: T, obj2: T) {
  const updatedEntries = toEntries(obj1).filter(
    ([key, value]) => obj1[key] !== obj2[key],
  );

  return fromEntries(updatedEntries);
}
