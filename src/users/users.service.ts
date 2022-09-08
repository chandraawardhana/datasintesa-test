/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './model/user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
    ) { }

    create(createUserDto: CreateUserDto): Promise<User> {
        return this.userModel.create({
            userId: createUserDto.userId,
            password: createUserDto.password,
        });
    }

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

}
