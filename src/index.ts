import 'reflect-metadata';
import * as Koa from 'koa';
import { createConnection } from 'typeorm';
import * as Router from 'koa-router';
import * as cors from "koa2-cors";
import * as bodyParser from 'koa-bodyparser';
import AppRoutes from './routes';

createConnection()
  .then(async connection => {
    const app = new Koa();
    const router = new Router();
    const port = process.env.PORT || 3000;

    AppRoutes.forEach(route => router[route.method](route.path, route.action));

    app.use(cors());
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(port);

    console.log(`应用启动成功 端口:${port}`);
  })
  .catch(error => console.log('TypeORM 链接失败: ', error));