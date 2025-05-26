export type Option = {
  name: string;
  href: string;
};

export type Menu<T> = Option & {
  children?: T[];
};

export type Sort = {
  label: string;
  children: { name: string; value: string }[];
};
