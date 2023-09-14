export interface ResponseRoot<T> {
  code: number;
  msg: string;
  data: T;
}
