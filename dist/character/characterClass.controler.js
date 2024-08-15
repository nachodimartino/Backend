import { orm } from '../shared/db/orm.js';
import { CharacterClass } from './characterClass.entity.js';
import { ObjectId } from '@mikro-orm/mongodb';
const em = orm.em;
async function findAll(req, res) {
    try {
        const characterClasses = await em.find(CharacterClass, {});
        res
            .status(200)
            .json({ message: 'found all character classes', data: characterClasses });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function findOne(req, res) {
    try {
        const id = new ObjectId(req.params.id); // Convertir el id a ObjectId
        const characterClass = await em.findOneOrFail(CharacterClass, { _id: id });
        return res.status(200).json({ message: 'found character class', data: characterClass });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
//# sourceMappingURL=characterClass.controler.js.map