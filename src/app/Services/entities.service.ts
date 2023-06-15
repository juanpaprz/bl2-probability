import { Injectable } from '@angular/core';
import { WEAPONTYPES } from '../Data/weapon-type.data';
import { WeaponType } from '../Entities/weapon-type.entity';

@Injectable()
export class EntitiesService {
  constructor() {}

  getWeaponTypes(): WeaponType[] {
    return WEAPONTYPES;
  }
}
