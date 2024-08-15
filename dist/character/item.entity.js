var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { Character } from './character.entity.js';
let Item = class Item extends BaseEntity {
    constructor() {
        super(...arguments);
        this.characters = new Collection(this);
    }
};
__decorate([
    Property({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
__decorate([
    ManyToMany(() => Character, (character) => character.items),
    __metadata("design:type", Object)
], Item.prototype, "characters", void 0);
Item = __decorate([
    Entity()
], Item);
export { Item };
//# sourceMappingURL=item.entity.js.map