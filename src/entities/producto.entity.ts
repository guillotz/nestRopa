import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
/*
descripcion: 'Remera',
    precio: 2800,
    foto: 'assets/remNinia_beige.jpg',
    detalle: "CAMISETA CUELLO REDONDO Y MANGA LARGA. ESTAMPADO DISNEY. TEJIDO ESPECIAL SUAVE.",
    id: 10, 
    cant: 0,
    talle: "" , 
    colores: ["beige", "blanc"]
*/

@Entity('producto')
export class Producto extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment: 'id de producto'
    })
    id: number;

    @Column({
        type: 'varchar'
    })
    descripcion;

    @Column({
        type: 'varchar'
    })
    detalle;

    @Column({
        type: Number
    })
    precio;

    @Column({
        type: Number
    })
    cantidad;

    @Column({
        type: 'varchar'
    })
    talle;

    @Column({
        type: 'varchar'
    })
    foto;

    @Column({
        type: 'varchar'
    })
    colores;
}