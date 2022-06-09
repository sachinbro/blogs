

# Create your first VueJS app with Vite

## Introduction

Vite means "fast" in french. If you are creating Vue application with VueCLI in 2022 then you need to upgrade to Vite ASAP.

Vite is <Badge> 7x - 10x </Badge> faster than VueCLI while starting development server.

## Getting Started
Remeber Vite works with Vanilla JS, React, TypeScript too. For now lets stick with Vue

To get started with vue Vite App, Open Command Prompt and type following command:
::: tip
Use [Node.js](https://nodejs.org) version higher than 12.2.0
:::

###  One line Command:
```bash:no-line-numbers
npm create vite@latest my-vue-app -- --template vue
```
### Or follow step by step in prompt:

:::: code-group
::: code-group-item NPM
```bash:no-line-numbers
 npm create vite@latest
```
:::
::: code-group-item YARN
```bash:no-line-numbers
 yarn create vite
```
:::
::::


1. Give project a name: 
    ```bash
    ? Project name: >> Project_name
    ```
    Lets give it a name of `vite-demo`

2. Select a frame work:
    ```bash
    √ Project name: ... vite-demo
    ? Select a framework: » - Use arrow-keys. Return to submit.
    >   vanilla
        vue
        react
        preact
        lit
        svelte

    ```
    ::: tip
    Use `up` and `down` arrow key to navigate and `space` key to select.
    :::

3. Now select `typescript(tst` or normal variant.

4.  Navigate to project directory :
    ```bash
    cd vite-demo
    npm install
    npm run dev
     ```

## Benifits of Vite:
1. [Hot module Replacement(HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement) 
2. [TypeScript](https://vitejs.dev/guide/features.html#typescript)
3. [WebAssembly](https://vitejs.dev/guide/features.html#webassembly)

### Enjoy the lightning fast speed of Vite 🎉

![img](./assests/forrestgump.gif)

<style>
     .medium-zoom-image{
        height: 600px;
        width: 6000px;
    }
</style>