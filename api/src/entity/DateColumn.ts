import {CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
export class DateColumn {
    @CreateDateColumn({name: 'created_at', type: 'timestamp'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
    updatedAt: Date

    @Column({name: 'deleted_at', type: 'timestamp'})
    deletedAt: Date
}