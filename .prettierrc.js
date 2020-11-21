// shared prettier configuration

module.exports = {
  // デフォルトは 80 だが、それだと現代のディスプレイ幅にとって小さすぎるので、120 とする
  printWidth: 120,
  // 2 でも十分インデントされていることは分かるので 4 ではなく 2 とする
  tabWidth: 2,
  // 混乱しないよう、できるだけタブ文字は排除する
  useTabs: false,
  // ASI hazard 回避のため、常にセミコロンを付ける
  semi: true,
  // JSX と組み合わせるプロジェクトのために JSX ではダブルクオート、JS ではシングルクオートと住み分ける
  singleQuote: true,
  // クオート有りとクオート無しのプロパティが混ざらないように `consistent` とする
  quoteProps: 'consistent',
  // JSX と組み合わせるプロジェクトのために JSX ではダブルクオート、JS ではシングルクオートと住み分ける
  jsxSingleQuote: false,
  // 簡単に行入れ替えできるよう、常に末尾コンマを付ける
  trailingComma: 'all',
  // 可視性のためブランケットの脇には常にスペースを挿入する
  bracketSpacing: true,
  // 可視性のため、JSXの `>` は改行せずにタグ名やプロパティと同じ行に挿入する
  jsxBracketSameLine: true,
  // 引数を括弧を付けること無く増やせるように & 統一性を保つため、アロー関数の引数リストの括弧は必ず付ける
  arrowParens: 'always',

  // CLI や API モードでの利用でのみ使われるオプションは shared configuration では指定しない
  // rangeStart: 0,
  // rangeEnd: Number.POSITIVE_INFINITY,
  // parser: ...,
  // filepath: ...,

  // requirePragma: false, // respect default
  // insertPragma: false, // respect default
  // proseWrap: 'preserve', // respect default
  // htmlWhitespaceSensitivity: 'css', // respect default
  // vueIndentScriptAndStyle: false, // respect default
  // 標準的な lf を使う
  endOfLine: 'lf',
  // embeddedLanguageFormatting: 'auto', // respect default
};
