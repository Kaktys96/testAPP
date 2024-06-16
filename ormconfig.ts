import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'vlad1996',
    database: 'postgres',
    entities: [__dirname + '/users/entities/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    migrationsRun: true,
    synchronize: true,
};

export = config;
