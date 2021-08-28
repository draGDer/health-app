import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {DateColumn} from './DateColumn';
import {Dose} from './Dose';

@Entity({name: 'user'})
export class User extends DateColumn {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    mob: string;

    @Column()
    email: string;

    @OneToMany(() => Dose, dose => dose.user)
    dose: Dose[];

    @Column()
    password: string;


}
