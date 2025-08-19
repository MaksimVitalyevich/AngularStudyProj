import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityInfo',
  standalone: true
})
export class CityInfoPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return '';

    const { cityName, regionNumber, population, founded } = value;

    let populationStr = '-';
    if (population != null) {
      if (population < 1000) populationStr = population.toString();
      else if (population < 1_000_000) populationStr = (population / 1000).toFixed(0) + 'тыс.';
      else populationStr = (population / 1_000_000).toFixed(1) + 'млн.';
    }

    let cityType = '';
    if (population != null) {
      if (population < 50000) cityType = 'Посёлок';
      else if (population < 500000) cityType = 'Малый город';
      else if (population < 1000000) cityType = "Город";
      else cityType = 'Мегаполис';
    }

    return `Город: ${cityName ?? 'Неизвестный'} | 
    Население: ${populationStr}${cityType ? ' (' + cityType + ')' : ''} |
    Номер Региона: ${regionNumber ?? '-'} |
    Основан: ${founded ?? '-'}`;
  }

}
