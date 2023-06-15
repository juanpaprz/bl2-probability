import { WeaponType } from '../Entities/weapon-type.entity';
import { ManufacturerEnum } from '../Enums/manufacturer.enum';

export class Manufacturer {
  name: ManufacturerEnum = 0;
  types: WeaponType[] = [];
}
