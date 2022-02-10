\*vue とは
js のフレームワーク。開発に便利な機能をまとめてくれている。DOM とデータの状態を自動的に結び付ける＝データバインド ⇒ 自分たちはデータをいじるだけでいい。

data : 変数を書く場所
methods: 関数を書く場所
v-on:click=“countUp” で「クリックした時に countUp 関数を実行」できる

使い方
①CDN という方法で読み込む。
②Vue.createApp をする。(どこで Vue を使うかを書いてあげる)
マスタッシュ構文！{{. }} で囲われた部分では JavaScript の式が使える！

構文

<div id = app>
</div>
Vue.createApp({

}).mount("#app)
