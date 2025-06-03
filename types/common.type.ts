export type Option = {
  name: string;
  href: string;
};

export type Menu<T> = Option & {
  children?: T[];
};
