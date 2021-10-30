import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectModalConfig } from '../../../../projects/ionic-form-components/src/lib/types';
import { genres } from './data/genres';
import { nations } from './data/nations';
import { techs } from './data/techs';
import { workTypes } from './data/workTypes';

@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.page.html',
  styleUrls: ['./form-inputs.page.scss'],
})
export class FormInputsPage implements OnInit {
  type: string = null;
  title = 'Form Component';
  textValue: any;
  date: any;
  files: any[] = [];

  nation: any;
  nations = nations;
  nationConfig: SelectModalConfig<{ name: string; code: string }> = {
    keyExtractor: (o) => o.code,
    valueExtractor: (o) => o.name,
  };

  favGenres: any;
  genres = genres;

  workType: any;
  workTypes = workTypes;
  workTypeConfig: SelectModalConfig<{ id: number; name: string }> = {
    keyExtractor: (o) => o.id,
    valueExtractor: (o) => o.name,
  };

  favTechs: any;
  techs = techs;

  timePoint = new Date(1633050000000);

  constructor(private route: ActivatedRoute) {
    this.type = route.snapshot.queryParamMap.get('type');
  }

  ngOnInit() {}
}
