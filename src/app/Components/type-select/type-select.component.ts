import { Component, OnInit } from '@angular/core';
import { EntitiesService } from '../../Services/entities.service';
import { WeaponType } from '../../Entities/weapon-type.entity';
import { WeaponTypeEnum } from '../../Enums/weapon-type.enum';

@Component({
  selector: 'app-type-select',
  templateUrl: './type-select.component.html',
  styleUrls: ['./type-select.component.css'],
})
export class TypeSelectComponent implements OnInit {
  weaponTypes: WeaponType[] = [];
  weaponTypeEnum: typeof WeaponTypeEnum = WeaponTypeEnum;

  constructor(private typeService: EntitiesService) {}

  ngOnInit() {
    this.weaponTypes = this.typeService.getWeaponTypes();
  }
}
