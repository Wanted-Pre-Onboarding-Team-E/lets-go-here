import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  // NOTE: 양방향 필요해지면 추가해주세요.
  // @OneToMany(() => Review, (review) => review.user)
  // reviews: Review[];

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column({ default: false })
  isRecommended!: boolean;

  @Column({ type: 'double', nullable: true })
  latitude?: number;

  @Column({ type: 'double', nullable: true })
  longitude?: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt?: Date;

  @BeforeInsert()
  @BeforeUpdate()
  private async beforeInsert() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
