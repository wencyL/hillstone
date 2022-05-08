import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number; //id 唯一标识

  @Column({
      length: 64
  })
  name: string; //姓名

  @Column({
      type: "tinyint", 
      default: null
    })
  age: number; //年龄

  @Column({
      length: 20
  })
  idNo: string; //证件号

  @Column({
      default: 0
  })
  sex: number; //性别 0-男，1-女
  
  @Column({
      length: 20
  })
  phone: string; //联系电话

  @Column({
      length: 120
  })
  email: string; //email

  @Column("text")
  introduce: string; //个人介绍

}