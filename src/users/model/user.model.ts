/* eslint-disable prettier/prettier */
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  userId: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
