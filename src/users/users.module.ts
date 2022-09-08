import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { KarakterController } from './karakter.controller';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController, KarakterController],
})
export class UsersModule {}
