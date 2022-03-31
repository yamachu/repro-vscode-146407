/*
  Confirmed reproduction TypeScript version
  - 4.7.0-dev.20220330
  - 4.6.3
*/

type MyValueWrapper<T> = {
  b: boolean;
  value: T | null | Error;
};

type State = {
  hoge: MyValueWrapper<number>;
  fuga: MyValueWrapper<string>;
};

/*
    When write S t a t e = { ,
    vscode provides unexpected completion and makes me press esc & ctrl+space for expected completion...
*/

const state: State = {
  hoge: { b: true, value: 123 },
  fuga: { b: false, value: null },
};
