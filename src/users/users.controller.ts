/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './model/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { KarakterDto } from './dto/karakter.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
      return this.usersService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<User[]> {
      return this.usersService.findAll();
    }

    //hitung jumlah karakter
    @Post('karakter')
    hitungKarakter(@Body() karakterDto: KarakterDto): string {
      return `Jumlah karakter adalah ${karakterDto.karakter.length}`;
    }



}
