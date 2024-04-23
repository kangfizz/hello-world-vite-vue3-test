# HelloWorld Vite Vue3 Test

It's just a npm package for test by using Vite + Vue3.

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

- In `your_page.vue`
````javascript
...
<hello-world-test />
...
````