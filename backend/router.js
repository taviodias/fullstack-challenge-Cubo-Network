import Router from '@koa/router';
import * as participants from './app/participants/index.js';

export const router = new Router();

router.get('/', participants.all);

router.post('/', participants.add);

router.del('/:id', participants.remove);