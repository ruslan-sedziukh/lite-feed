import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  displayName!: string;

  @Column()
  bio!: string;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  createdAt!: Date;
}
