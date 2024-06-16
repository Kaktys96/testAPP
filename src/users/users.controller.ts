import {Body, Controller, Get, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {User} from "./entities/User.entity";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        console.log(111)
        return this.usersService.create(createUserDto);
    }

    @Post('many')
    async createManyUsers(@Body() { count }: { count: number }): Promise<User[]> {
        console.log(111)
        return this.usersService.createMany(count);
    }

    @Get('update-problems')
    async updateUsersProblems(): Promise<number> {
        return this.usersService.updateUsersProblems();
    }
}