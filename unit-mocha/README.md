# unit-jest-2

1. Test Prop Data
   `file test: SetProp.spec.js | component: SetProp.vue`

2. Test event click
   `file test: Counter.spec.js | component: Counter.vue`

3. Test emit
   `file test: Child.spec.js | component: Child.vue và Parent.vue`

4. Test getData
   `file test: GetData.spec.js | component: Getdata.vue file mock: axios.js`

5. Testing vuex in component
   -Test component call store getter: `file test: Getter.spec.js | component: Getter.spec.js`
   -Test component call store action: `file test: Actions.spec.js | component: Actions.vue`
   -Test component call store module: `file test: Module.spec.js | component: Module.vue`
6. Testing a vuex store
   -Test store getter: `file test: Getters-VueX.spec.js | file store: getters.js`
   -Test store multations: `file test: Multations-VueX.spec.js | file store: multations.js`
   -Test store module: `file test: Counter-module-VueX.spec.js | file module: counter-module.js`
   -Test store module config: `file test: Store-config-VueX.spec.js | file module config: store-config.js`

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
