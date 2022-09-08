/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { KarakterDto } from './dto/karakter.dto';

@Controller('karakter')
export class KarakterController {
    //hitung jumlah karakter
    @Post()
    hitungKarakter(@Body() karakterDto: KarakterDto): string {
      return `Jumlah karakter adalah ${karakterDto.karakter.length}`;
    }



}
