import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {DateColumn} from './DateColumn';
import {Dose} from './Dose';

@Entity({name: "vaccine"})
export class Vaccine extends DateColumn{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    vol: number;

    @Column()
    type: string;

    @OneToMany(() => Dose, dose => dose.vaccine)
    dose: Dose[];

}
