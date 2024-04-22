// src/components/install.js

import HelloWorld from "./HelloWorld.vue"

// 定義 install 函式
HelloWorld.install = function (Vue) {
  Vue.component("hello-world-test", HelloWorld);
};

// export 出去
export default HelloWorld;