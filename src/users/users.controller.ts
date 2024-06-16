import { Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('create-many')
    @UsePipes(ValidationPipe)
    async createManyUsers(@Body() { count }: { count: number }): Promise<void> {
        await this.usersService.createManyUsers(count);
    }

    @Get('update-problems')
    async updateUsersProblems(): Promise<number> {
        return this.usersService.updateUsersProblems();
    }
}
