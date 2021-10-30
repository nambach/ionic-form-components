import { stringComparator } from '../utils';

export class Wrap<T = unknown> {
  data: T;
  key: unknown;
  value: string;
  isSelected: boolean;

  constructor(
    data: T,
    keyExtractor: (obj: T) => unknown,
    valueExtractor: (obj: T) => string
  ) {
    this.data = data;
    this.key = keyExtractor(data);
    this.value = valueExtractor(data);
    this.isSelected = false;
  }
}

export interface SelectModalConfig<T = unknown> {
  keyExtractor: (obj: T) => unknown;
  valueExtractor: (obj: T) => string;
  title?: string;
  noSort?: boolean;
}

export const wrapOptions = <T = unknown>(
  config: SelectModalConfig<T>,
  options: T[]
): Wrap<T>[] => {
  const { keyExtractor, valueExtractor, noSort } = config;

  const rs = (options || []).map(
    (o) => new Wrap(o, keyExtractor, valueExtractor)
  );
  if (!noSort) {
    return rs.sort(stringComparator((w) => w.value?.trim()));
  }

  return rs;
};

export const emptyModalConfig: SelectModalConfig = {
  keyExtractor: (o: any) => o?.id || o,
  valueExtractor: (o: any) => o?.name || o,
};
