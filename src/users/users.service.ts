import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async createManyUsers(count: number): Promise<User[]> {
        const users = [];

        for (let i = 0; i < count; i++) {
            const user = new User();
            user.firstName = faker.name.firstName();
            user.lastName = faker.name.lastName();
            user.age = faker.datatype.number({ min: 18, max: 65 });
            user.gender = faker.name.gender();
            users.push(user);
        }

        return await this.usersRepository.save(users);
    }

    async updateUsersProblems(): Promise<number> {
        const { affected } = await this.usersRepository.update(
            {},
            { hasProblems: false },
        );
        return affected;
    }
}
