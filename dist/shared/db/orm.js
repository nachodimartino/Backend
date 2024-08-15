import { MikroORM } from '@mikro-orm/core';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
export const orm = await MikroORM.init({
    entities: ['dist/**/*.entity.js'], // Ruta a los archivos compilados de entidades en JavaScript
    entitiesTs: ['src/**/*.entity.ts'], // Ruta a los archivos de entidades en TypeScript
    dbName: 'hc4gmo', // Nombre de la base de datos
    type: 'mongo', // Especifica el tipo de base de datos como MongoDB
    clientUrl: 'mongodb://nacho:nacho@localhost:27017/hc4gmo', // URL de conexión a MongoDB
    highlighter: new MongoHighlighter(),
    debug: true, // Habilita el modo de depuración
    ensureIndexes: true, // Garantiza la creación de índices definidos en las entidades
    schemaGenerator: {
        // Opciones relacionadas con la generación de esquemas (aplicadas solo cuando corresponda)
        disableForeignKeys: true, // MongoDB no utiliza claves foráneas, por lo que esta opción no es aplicable
        createForeignKeyConstraints: false, // No se aplican restricciones de clave foránea en MongoDB
        ignoreSchema: [], // No se usa en MongoDB
    },
});
export const syncSchema = async () => {
    const generator = orm.getSchemaGenerator();
    await generator.updateSchema(); // Actualiza colecciones e índices
};
//# sourceMappingURL=orm.js.map