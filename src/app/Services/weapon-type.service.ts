import { Injectable } from '@angular/core';
import { WEAPONTYPES } from '../Data/weapon-type.data';
import { WeaponType } from '../Entities/weapon-type.entity';
import { WeaponTypeEnum } from '../Enums/weapon-type.enum';

@Injectable()
export class WeaponTypeService {
  constructor() {}

  getAllWeaponTypes(): WeaponType[] {
    return WEAPONTYPES;
  }
}
