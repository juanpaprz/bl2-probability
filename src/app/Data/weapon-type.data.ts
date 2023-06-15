import { WeaponType } from '../Entities/weapon-type.entity';
import { WeaponTypeEnum } from '../Enums/weapon-type.enum';

export const WEAPONTYPES: WeaponType[] = [
  { name: WeaponTypeEnum.Pistol },
  { name: WeaponTypeEnum.SMG },
  { name: WeaponTypeEnum.AssaultRifle },
  { name: WeaponTypeEnum.Shotgun },
  { name: WeaponTypeEnum.Sniper },
  { name: WeaponTypeEnum.RocketLauncher },
];
