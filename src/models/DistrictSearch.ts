import {IdFilter, NumberFilter, StringFilter} from 'core/filters';
import {Search} from 'core/models';

export class DistrictSearch extends Search {
  public id?: IdFilter = new IdFilter();

  public name?: StringFilter = new StringFilter();

  public orderNumber?: NumberFilter = new NumberFilter();

  public provinceId?: IdFilter = new IdFilter();
}
