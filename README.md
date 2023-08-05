# chatgpt-choicequiz-maker

## 概要
多くの教本には章末問題があります。これは知識の定着に大きく貢献しています。
しかし、ネットによくある技術ブログ等にはこうした章末問題がありません。そこでこうした記事を自動生成することによってネット上の全ての情報で章末問題を作れるようにします。
現在は、技術系の記事を中心に実験していますが、プロンプトを組み合わせることで、他にも応用できると思います。
LLMの技術を利用してクイズを作成します。

## 機能
- 入力された文章から4択クイズを作成する(5問作成が可能)
- (TODO)作成されたクイズをそのまま解くことができる。

## 技術スタック

### フロントエンド
- 言語
    - TypeScript
- フレームワーク
    - Next.js
- UI
    - TailWindCSS
    - Storybook
- テスト
  - Jest
  - React Testing Library
- 状態管理
    - Recoil
- LLM
  - OpenAI (gpt-3.5-turbo)

### バックエンド
- 言語
  - Python
- フレームワーク
  - FastAPI
  - LangChain
- 開発環境
  - Poetry
    - Flake8
    - Black
    - mypy
    - isort

### インフラ
- 未定(Dockerは使う予定)

 

 


