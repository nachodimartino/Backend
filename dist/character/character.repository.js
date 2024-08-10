import { db } from '../shared/db/conn.js';
import { ObjectId } from 'mongodb';
const characters = db.collection('characters'); // <Character> con esto especifico q es una coleccion de Character entity
export class CharacterRepository {
    async findAll() {
        return await characters.find().toArray();
    }
    async findOne(item) {
        const _id = new ObjectId(item.id);
        return (await characters.findOne({ _id })) || undefined;
    }
    async add(item) {
        item._id = (await characters.insertOne(item)).insertedId;
        return item;
    }
    async update(id, item) {
        const _id = new ObjectId(id);
        return (await characters.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' })) || undefined;
    }
    async delete(item) {
        const _id = new ObjectId(item.id);
        return (await characters.findOneAndDelete({ _id })) || undefined;
    }
}
//# sourceMappingURL=character.repository.js.map