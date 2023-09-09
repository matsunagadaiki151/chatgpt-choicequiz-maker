# chatgpt-choicequiz-maker

## 概要
多くの教本には章末問題があります。これは知識の定着に大きく貢献しています。
しかし、ネットによくある技術ブログ等にはこうした章末問題がありません。そこでこうした記事を自動生成することによってネット上の全ての情報で章末問題を作れるようにします。
現在は、技術系の記事を中心に実験していますが、プロンプトを組み合わせることで、他にも応用できると思います。

## 機能
- 入力された文章から4択クイズを作成する(5問作成が可能)
- 作成されたクイズをそのまま解くことができる。

## Usage

### (推奨) Dockerによる構築

**(注意) 自身のAPIキーを用いる方法なので料金は各自で発生します。**

**要件**
- OpenAIのAPIキーを取得済みである。
- Dockerおよびdocker composeが使用可能である。
- 3GB程度の容量

**手順**
1. 本リポジトリをcloneする。
```
git clone https://github.com/matsunagadaiki151/chatgpt-choicequiz-maker.git
cd chatgpt-choicequiz-maker
```

2. `backend`直下の`.env.sample`を`.env`に変更し、中身を編集する。
```
# 自身のAPI_KEYを設定する。
OPENAI_API_KEY={YOUR_OPENAI_API_KEY}
```

3. 以下コマンドを実行し、dockerを立ち上げる。
```
docker compose -f "docker-compose.yml" up -d --build
```

4.  http://localhost:3002 にアクセスする。

終わったら`docker compose -f "docker-compose.yml" down`で dockerを落とし、`docker system prune`で不要なイメージを削除しておきましょう。



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
    - SWR

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
- LLM
  - OpenAI (gpt-3.5-turbo)

### インフラ
- Docker


## License
[MIT](https://opensource.org/license/mit/)

 

 


