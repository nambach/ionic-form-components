type KeyExtractor<T = any, V = any> = (o: T) => V;

export const distinctBy =
  <T>(keyExtractor: KeyExtractor<T> = (o) => o) =>
  (value: T, index: number, self: T[]) => {
    const id = keyExtractor(value);
    const firstAppear = self.find((o) => keyExtractor(o) === id);
    return self.indexOf(firstAppear) === index;
  };

export const stringComparator =
  <T = any>(valueExtractor: KeyExtractor<T, string> = (o) => o + '') =>
  (o1: T, o2: T) => {
    const s1 = valueExtractor(o1);
    const s2 = valueExtractor(o2);
    return s1.localeCompare(s2);
  };

export const numberComparator =
  <T = any>(valueExtractor: KeyExtractor<T, number>) =>
  (o1: T, o2: T) => {
    const s1 = valueExtractor(o1);
    const s2 = valueExtractor(o2);
    return s1 - s2;
  };

export const removeFrom = <T = any>(
  list: T[],
  item: T,
  keyExtractor: KeyExtractor<T> = (o) => o
) => {
  const id = keyExtractor(item);
  const index = list.findIndex((o) => keyExtractor(o) === id);
  if (index !== -1) {
    return [...list.slice(0, index), ...list.slice(index + 1)];
  }
  return list;
};

export const insertSet = <T = any>(
  list: T[],
  item: T,
  keyExtractor: KeyExtractor<T> = (o) => o
) => {
  const id = keyExtractor(item);
  const index = list.findIndex((o) => keyExtractor(o) === id);
  if (index === -1) {
    return [...list, item];
  }
  return list;
};

export const toFlatMap = <T = any>(
  list: T[],
  keyExtractor: KeyExtractor<T, string> = (o) => o + ''
) => {
  const map: { [key: string]: T } = {};

  list.forEach((item) => {
    map[keyExtractor(item)] = item;
  });

  return map;
};

export const toFlatMap2 = <T = any, V = any>(
  list: T[],
  keyExtractor: KeyExtractor<T, string>,
  valueExtractor: KeyExtractor<T, V>
) => {
  const map: { [key: string]: V } = {};

  list.forEach((item) => {
    map[keyExtractor(item)] = valueExtractor(item);
  });

  return map;
};

export const isCheckAll = (list1: any[], list2: any[]) => list1?.length === list2?.length;
