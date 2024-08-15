import 'reflect-metadata';
import express from 'express';
import { characterRouter } from './character/character.routes.js';
import { orm, syncSchema } from './shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';
import { characterClassRouter } from './character/characterClass.routes.js';
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    RequestContext.create(orm.em, next);
});
app.use('/api/characters/classes', characterClassRouter);
app.use('/api/characters', characterRouter);
app.use((_, res) => {
    return res.status(404).send({ message: 'Resource not found' });
});
await syncSchema();
app.listen(3000, () => {
    console.log('Server runnning on http://localhost:3000/');
});
//# sourceMappingURL=app.js.map