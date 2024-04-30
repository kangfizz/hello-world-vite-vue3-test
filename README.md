# HelloWorld Vite Vue3 Test

It's just a npm package for test by using Vite + Vue3 + Tailwind CSS.

[DEMO PAGE](https://kangfizz.github.io/hello-world-vite-vue3-test/)

## Setup (Vite)

- In `main.js`
````javascript
import HelloWorld from 'hello-world-vite-vue3-test'
...
...
const myApp = createApp(App)
myApp.use(HelloWorld)
myApp.mount('#app')
````

- In `tailwind.config.js`
````javascript
  content: [
    ....
    './node_modules/hello-world-vite-vue3-test/**/*.{vue,js,ts,jsx,tsx}',
  ],
````

## Usage

- In `your_page.vue`
````javascript
...
<hello-world-test />
...
````

### Attributes

- `text`: 顯示的文字, default = `'Hello World ?'`
- `textClass`: 文字的 class, default = `'text-3xl font-bold underline'`