import { WEAPONTYPES } from '../Data/weapon-type.data';
import { Manufacturer } from '../Entities/manufacturer.entity';
import { ManufacturerEnum } from '../Enums/manufacturer.enum';
import { WeaponTypeEnum } from '../Enums/weapon-type.enum';

export const MANUFACTURERS: Manufacturer[] = [
  {
    name: ManufacturerEnum.Bandit,
    types: [
      WEAPONTYPES[WeaponTypeEnum.Pistol],
      WEAPONTYPES[WeaponTypeEnum.SMG],
      WEAPONTYPES[WeaponTypeEnum.AssaultRifle],
      WEAPONTYPES[WeaponTypeEnum.Shotgun],
      WEAPONTYPES[WeaponTypeEnum.RocketLauncher],
    ],
  },
  {
    name: ManufacturerEnum.Dahl,
    types: [
      WEAPONTYPES[WeaponTypeEnum.Pistol],
      WEAPONTYPES[WeaponTypeEnum.SMG],
      WEAPONTYPES[WeaponTypeEnum.AssaultRifle],
      WEAPONTYPES[WeaponTypeEnum.Sniper],
    ],
  },
  {
    name: ManufacturerEnum.Hyperion,
    types: [
      WEAPONTYPES[WeaponTypeEnum.Pistol],
      WEAPONTYPES[WeaponTypeEnum.SMG],
      WEAPONTYPES[WeaponTypeEnum.Shotgun],
      WEAPONTYPES[WeaponTypeEnum.Sniper],
    ],
  },
  {
    name: ManufacturerEnum.Jakobs,
    types: [
      WEAPONTYPES[WeaponTypeEnum.Pistol],
      WEAPONTYPES[WeaponTypeEnum.AssaultRifle],
      WEAPONTYPES[WeaponTypeEnum.Shotgun],
      WEAPONTYPES[WeaponTypeEnum.Sniper],
    ],
  },
  {
    name: ManufacturerEnum.Maliwan,
    types: [
      WEAPONTYPES[WeaponTypeEnum.Pistol],
      WEAPONTYPES[WeaponTypeEnum.SMG],
      WEAPONTYPES[WeaponTypeEnum.Sniper],
      WEAPONTYPES[WeaponTypeEnum.RocketLauncher],
    ],
  },
  {
    name: ManufacturerEnum.Tediore,
    types: [
      WEAPONTYPES[WeaponTypeEnum.Pistol],
      WEAPONTYPES[WeaponTypeEnum.SMG],
      WEAPONTYPES[WeaponTypeEnum.Shotgun],
      WEAPONTYPES[WeaponTypeEnum.RocketLauncher],
    ],
  },
  {
    name: ManufacturerEnum.Torgue,
    types: [
      WEAPONTYPES[WeaponTypeEnum.Pistol],
      WEAPONTYPES[WeaponTypeEnum.AssaultRifle],
      WEAPONTYPES[WeaponTypeEnum.Shotgun],
      WEAPONTYPES[WeaponTypeEnum.RocketLauncher],
    ],
  },
  {
    name: ManufacturerEnum.Vladof,
    types: [
      WEAPONTYPES[WeaponTypeEnum.Pistol],
      WEAPONTYPES[WeaponTypeEnum.AssaultRifle],
      WEAPONTYPES[WeaponTypeEnum.Sniper],
      WEAPONTYPES[WeaponTypeEnum.RocketLauncher],
    ],
  },
];
