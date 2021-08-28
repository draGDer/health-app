import {Entity, PrimaryGeneratedColumn, Column,OneToOne, ManyToOne, JoinColumn} from "typeorm";
import {DateColumn} from './DateColumn';
import {User} from './User';
import { Vaccine } from "./Vaccine";

@Entity({name: 'dose'})
export class Dose extends DateColumn {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'user_id'})
    user:number;

    @Column({name: 'vaccine_id'})
    vaccine:number;
    
    // @OneToOne(() => User, user => user.dose)
    // @JoinColumn({name:'user_id'})
    // user:User;

    // @OneToOne(() => Vaccine, vaccine => vaccine.dose)
    // @JoinColumn({name:'vaccine_id'})
    // vaccine:Vaccine;

    
    // @ManyToOne(() => User, user => user.dose)
    // @JoinColumn({name:'user_id'})
    // user:User;

    // @ManyToOne(() => Vaccine, vaccine => vaccine.dose)
    // @JoinColumn({name:'vaccine_id'})
    // vaccine:Vaccine;

    @Column()
    location: string;

    @Column({name: 'admin_date'})
    date: number;

    @Column({name: "dose_number"})
    doseNumber: number;

}