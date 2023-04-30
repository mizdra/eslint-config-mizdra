// @ts-check
'use strict';

/** @satisfies {import('ts-essentials').DeepReadonly<import('eslint').Linter.BaseConfig>} */
module.exports = /** @type {const} */ ({
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  parserOptions: {
    // 現代では type="script" な環境で JS を書くことはまずないので、
    // デフォルトで type="module" なJSであるとして lint する
    sourceType: 'module',
  },
  rules: {
    // ***** eslint *****

    // ** Possible Problems **
    // .map から return しないコードや、.forEach から値を return するコードを警告する
    'array-callback-return': 2,
    // for の中で await していたら警告する
    'no-await-in-loop': 1,
    // constructor から return するとその値をコンストラクタの呼び出し側に返せるが、
    // びっくりする挙動なので禁止する。
    'no-constructor-return': 2,
    // `new Promise(executor)` の `executor` から return してもその値は使われないため、そのような return を禁止する
    'no-promise-executor-return': 2,
    // `x === x` のようなコードを禁止する
    'no-self-compare': 2,
    // 非テンプレートリテラルな文字列リテラルの中での `${...}` の使用はミスの可能性が高いので禁止
    'no-template-curly-in-string': 2,
    // ループの条件式で参照している変数を、ループ内で変更しないコードはおかしいので警告
    'no-unmodified-loop-condition': 1,
    // 2 回ループすることがないループ文を禁止
    'no-unreachable-loop': 2,
    // 未使用の private class を禁止
    'no-unused-private-class-members': 2,
    // - `const { unusedProp, ...usedRestProps } = obj;` のようなコードはJSではよく書かれるので、`unusedProp` が未使用であると警告しないように
    // - `_` 始まりの変数は未使用変数を表す、という文化に沿って `_` 始まりの変数は未使用であっても警告しないように
    // - エラーを無視しないよう、catch 節のエラーオブジェクトが未使用の場合は警告する
    'no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
      },
    ],
    // 変数宣言の巻き上げに依存したコードは可読性が悪いので禁止 (ただし関数宣言の場合は許可)
    'no-use-before-define': [2, { functions: false }],
    // `val += await asyncFunc()` のようなコードはよきせぬ挙動を引き起こす可能性があるので禁止
    'require-atomic-updates': 2,

    // ** Suggestions **
    // 定数以外は camelCase で命名する
    'camelcase': [2, { ignoreDestructuring: true, ignoreGlobals: true }],
    // 循環的複雑度が 20 を超える関数は可読性が悪いので警告
    'complexity': [1, 20],
    // default 句を必須にする
    'default-case': 2,
    // default 句は最後に書かせる
    'default-case-last': 2,
    // default パラメーターは最後に書かせる
    'default-param-last': 2,
    // `==` ではなく `===` を強制する
    'eqeqeq': [2, 'always'],
    // 可読性のため、getter/setter は隣同士に書く
    'grouped-accessor-pairs': [2, 'getBeforeSet'],
    // 予期せぬ挙動を防ぐため、for-in を使用する場合は `hasOwn`/`hasOwnProperty` チェックを行うようにする
    'guard-for-in': 2,
    // 4重ネストより深いコールバックは可読性が悪いので警告
    'max-nested-callbacks': [1, 4],
    // 引数の数は 5 以下にする
    'max-params': [2, 5],
    // JSDoc コメント以外では単一行コメントを優先する
    'multiline-comment-style': [2, 'separate-lines'],
    // `Number` や `Symbol` などは `new` なしで使用する
    'new-cap': 2,
    // alert, confirm, prompt の使用を警告
    'no-alert': 1,
    // `new Array(1, 2, 3)` ではなく `[1, 2, 3]` を使用する
    'no-array-constructor': 2,
    // 可読性のため `arguments.caller` `arguments.callee` を禁止
    'no-caller': 2,
    // 予期せぬ挙動になるため、case 句での変数宣言を禁止
    'no-case-declarations': 2,
    // console の使用を警告
    'no-console': 1,
    // 煩すぎるので off
    'no-empty': 0,
    // eval 禁止
    'no-eval': 2,
    // `setTimeout('alert("Hi!");')` などの eval に近いコードを禁止
    'no-implied-eval': 2,
    // 可読性のため、ラベルは言い訳しながら使ってほしいので警告
    'no-labels': 1,
    // 意味のないブロック文を禁止
    'no-lone-blocks': 2,
    // 予期せぬ挙動になるため、ループ内の関数から外側の可変な変数を参照するコードを禁止
    'no-loop-func': 2,
    // `const foo = bar = 0` は `const foo = bar === 0` の typo の可能性が高いので禁止
    'no-multi-assign': 2,
    // 記法統一のため、バックスラッシュを使った複数行に渡る文字列リテラルは禁止
    'no-multi-str': 2,
    // new したのにどこにも代入しないコードは禁止
    'no-new': 2,
    // new Function() は eval に近い挙動をするので禁止
    'no-new-func': 2,
    // `new Object()` ではなく `{}` を強制する
    'no-new-object': 2,
    // `new String()` ではなく `'foo'` を強制する
    'no-new-wrappers': 2,
    // octal escape は使うことない & 書いてたらミスのはずなので禁止
    'no-octal-escape': 2,
    // 関数の引数への代入は禁止
    'no-param-reassign': 2,
    // `__proto__` は仕様で非推奨になっているので禁止
    'no-proto': 2,
    // 一貫性のために `return await p` を `return p` に強制する
    'no-return-await': 2,
    // コンマ演算子は使うことないので禁止
    'no-sequences': 2,
    // リテラル値を throw するコードはミスのはずなので禁止
    'no-throw-literal': 2,
    // 不要な条件式を禁止
    'no-unneeded-ternary': 2,
    // `a && b();` を `if (a) b();` に強制する
    'no-unused-expressions': [2, { allowTaggedTemplates: true, enforceForJSX: true }],
    // 一貫性のため、不要な computed property key を禁止
    'no-useless-computed-key': 2,
    // 一貫性のため、不要な constructor を禁止
    'no-useless-constructor': 2,
    // 一貫性のため、不要な rename を禁止
    'no-useless-rename': 2,
    // 不要な return 文を禁止
    'no-useless-return': 2,
    // var 禁止
    'no-var': 2,
    // 一貫性のため、object shorthand を強制
    'object-shorthand': [2, 'always'],
    // `let`/`const` で複数の変数を同時に宣言するのは禁止
    'one-var': [2, 'never'],
    // callback 関数には arrow function を使う
    'prefer-arrow-callback': 2,
    // できるだけ `const` を使う
    'prefer-const': 2,
    // `Math.pow` ではなく `**` 演算子を使う
    'prefer-exponentiation-operator': 2,
    // できるだけ数値リテラルを使う
    'prefer-numeric-literals': 2,
    // 一貫性のため、オブジェクトのマージには `Object.assign` ではなくスプレッド構文を使う
    'prefer-object-spread': 2,
    // Error 以外を reject するのは禁止
    'prefer-promise-reject-errors': 2,
    // 一貫性のため、できるだけ正規表現リテラルを使う
    'prefer-regex-literals': 2,
    // 一貫性のため、できるだけ rest parameters を使う
    'prefer-rest-params': 2,
    // 一貫性のため、できるだけ spread 構文を使う
    'prefer-spread': 2,
    // 一貫性のため、できるだけテンプレートリテラルを使って文字列結合する
    'prefer-template': 2,
    // 事故防止のため、`parseInt` を使うときは基数の指定を強制する
    'radix': 2,
    // await 式を持たない async 関数は禁止
    'require-await': 2,
    // 正規表現を書くときは `u` フラグを必須とする
    'require-unicode-regexp': 2,
    // コメントの開始にはスペースを必須とする
    'spaced-comment': [2, 'always'],
    // ESM 以外では `'use strict';` を必須とする
    'strict': 2,
    // Symbol には説明を付ける
    'symbol-description': 2,

    // ** Layout & Formatting  **
    // ASI による複雑怪奇な挙動に付き合わなくて済むよう、セミコロンを必須とする
    'semi': [2, 'always'],

    // ***** eslint-plugin-import *****

    // ** Helpful warnings **
    // @deprecated の付いた item の import を警告
    'import/no-deprecated': 2,
    // 可変な変数の export はミスの可能性が高いので禁止
    'import/no-mutable-exports': 2,

    // ** Static analysis **
    // 絶対パスによる import はミスのはずなので禁止
    'import/no-absolute-path': 2,
    // import が解決可能かどうかは、bundler や tsserver に任せれば良いので off
    'import/no-unresolved': 0,

    // ** Style guide **
    // import はファイルの先頭にまとめる
    'import/first': 2,
    // default export は tsserver と相性が悪いので禁止する。
    // `React.lazy` を使いたいなど、どうしても default export したい場合は適時 disable してもらうことを想定。
    // ref: https://typescript-jp.gitbook.io/deep-dive/main-1/defaultisbad
    'import/no-default-export': 2,
    // import 文の並びについて思考するのに時間を費やすのは勿体ないので、一律でソートしてしまう
    'import/order': [2, { alphabetize: { order: 'asc' } }],
    // package.json への追加忘れを防止
    'import/no-extraneous-dependencies': 2,

    // ***** Opinionated *****
    // コーディングスタイル統一のため、`const fn = function() { ... }` 形式の関数定義を禁止する。
    // 代わりに `function fn() { ... }` か `const fn = () => { ... }` 形式の関数定義を推奨する。
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],
  },
});
