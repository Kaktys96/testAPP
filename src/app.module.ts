import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { User } from './users/entities/User.entity';
import {UsersModule} from "./users/users.module";

@Module({
  imports: [
      UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'vlad1996',
      database: 'postgres',
      entities: [User],
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsRun: true,
      synchronize: true, // Синхронизация базы данных с сущностями (не рекомендуется для production)
    }),
    TypeOrmModule.forFeature([User]), // Регистрация User в TypeOrmModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
