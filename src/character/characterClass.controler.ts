import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { CharacterClass } from './characterClass.entity.js'
import { t } from '@mikro-orm/core'
import { ObjectId } from '@mikro-orm/mongodb'


const em = orm.em

async function findAll(req: Request, res: Response) {
  try {
    const characterClasses = await em.find(CharacterClass, {})
    res
      .status(200)
      .json({ message: 'found all character classes', data: characterClasses })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function findOne(req: Request, res: Response) {
    try {
      const id = new ObjectId(req.params.id); // Convertir el id a ObjectId
      const characterClass = await em.findOneOrFail(CharacterClass, { _id: id });
      return res.status(200).json({ message: 'found character class', data: characterClass });
    } catch (error: any) {
    return  res.status(500).json({ message: error.message });
    }
  }