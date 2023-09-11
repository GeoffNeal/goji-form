type Order = {
  date: string;
  name: string;
  shareClass: string;
  funds: {
    amount: string;
    currency: "EUR";
  };
};

interface ICallback<ArgType, Ret = void> {
  (...args: ArgType[]): Ret;
}
interface IArgCollector<ArgType> {
  (...args: ArgType[]): void;
}

/**
 * Type definition for the `callAll` util function
 * which provides the developer with the ability to
 * call multiple functions at the same time with the
 * same arguments. This is useful for using multiple
 * event handlers for the same event.
 */
interface ICaller {
  <ArgType>(
    ...fns: (ICallback<ArgType, void> | undefined)[]
  ): IArgCollector<ArgType>;
}
