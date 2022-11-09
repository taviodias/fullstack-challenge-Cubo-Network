import Koa from 'koa';
import bodyPArser from 'koa-bodyparser';
import cors from '@koa/cors';
import { router } from './router.js';

export const app = new Koa();

app.use(cors());
app.use(bodyPArser());
app.use(router.routes());
app.use(router.allowedMethods());
