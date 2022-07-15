## Introduction
NestJS is a framework for building efficiend, scalable Node.js web apps. It is build with typescript. Nest supports typescript out of the box.
Checkout [NestJS Docs](https://nestjs.com/)
## Prerequisites
- Basic understanding of Node.js 
- Basic understanding of TypeScript
## Get started
First of all, we have to install **NestJS CLI**, with following command
```sh:no-line-numbers
$ npm i -g @nestjs/cli
```
Create a brandnew project with desired name
```sh:no-line-numbers
$ nest new nest-sample -p npm
```
This might take few minute.
Once done, open your project in your IDE. It's VS Code for me.
```sh:no-line-numbers
$ cd nest-sample
$ code .
```
Git is initialized by default, you can make starting commit
Now start the development server.
``` sh:no-line-numbers
npm run start:dev
```
If everything is correct, you will see some green texts in your integrated terminal. This means, your app is running at [http://localhost:3000](http://localhost:3000)<br>
To create a new API, you can add custom route at **src/app.controller.ts** 
```ts
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:term')
  public sampleRoute(@Param('term') term: string): string {
    return `your term: ${term}`;
  }
}
```
Now you can visit your route like this: [http://localhost:3000/hello/NestJS](http://localhost:3000/hello/NestJS)