import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Беговая дорожка Sport&Fitness SF-TMBr-004 электрическая',
      description: 'Основные характеристики: Складная конструкция: Легко складывается, экономя место в вашем доме. Тип: Электрическая беговая дорожка с мощным двигателем 2.0 л.с., обеспечивающая плавную и эффективную работу. Максимальный вес пользователя: Подходит для пользователей весом до 150 кг.',
      price: 246265,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pba/pd4/84570788.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/begovaja-dorozhka-sport-fitness-sf-tmbr-004-elektricheskaja-128173898/?c=750000000',
    },
    {
    id: 2,
    name: 'Коврик для йоги и фитнеса нескользящий фиолетовый',
    description: 'Нескользящий коврик для йоги и фитнеса размером 183×61 см. Обеспечивает комфортную амортизацию и устойчивость во время тренировок. Подходит для домашних занятий и фитнес-зала.',
    price: 2107,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p29/pb8/23040234.jpeg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/kovrik-dlja-iogi-i-fitnesa-neskol-zjaschii-183h61-fioletovyi-134193498/?c=750000000',
  },
  {
    id: 3,
    name: 'Набор гантелей разборная 30 кг',
    description: 'Разборный набор гантелей общим весом 30 кг для домашних тренировок. Позволяет регулировать нагрузку под ваш уровень подготовки. Подходит для силовых упражнений и проработки всех групп мышц.',
    price: 9999,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p60/pf0/50743207.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/nabor-gantelei-razbornaja-30-kg-121329589/?c=750000000',
  },
  {
  id: 4,
  name: 'Larko RollerBlack массажный роллер',
  description: 'Массажный роллер Larko RollerBlack предназначен для миофасциального релиза и восстановления мышц после тренировок. Помогает снять напряжение, улучшить кровообращение и повысить гибкость. Подходит для занятий фитнесом и реабилитации.',
  price: 14990,
  rating: 3.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p30/p9a/25447828.jpg?format=gallery-medium',
  link: 'https://kaspi.kz/shop/p/larko-rollerblack-128860663/?c=750000000',
  },
  {
  id: 5,
  name: 'WHOOP 5.0 Peak черный (подписка 12 месяцев)',
  description: 'Фитнес-трекер WHOOP 5.0 Peak в черном цвете с подпиской на 12 месяцев. Отслеживает уровень нагрузки, восстановление и качество сна, помогая оптимизировать тренировки. Подходит для профессиональных спортсменов и активных пользователей.',
  price: 145951,
  rating: 4.2,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p59/50063334.png?format=gallery-medium',
  link: 'https://kaspi.kz/shop/p/whoop-5-0-peak-chernyi-podpiska-12-mesjatsev-141065130/?c=750000000',
  },
  {
  id: 6,
  name: 'Hygge MS600S массажное кресло',
  description: 'Массажное кресло Hygge MS600S с несколькими режимами массажа для расслабления и восстановления после нагрузок. Оснащено функцией глубокого массажа и комфортной эргономичной конструкцией. Подходит для дома и офиса.',
  price: 355400,
  rating: 5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/h13/63958706159646.jpg?format=gallery-medium',
  link: 'https://kaspi.kz/shop/p/hygge-ms600s-102060755/?c=750000000',
  },
  {
  id: 7,
  name: 'Adera S-001 вертикальная беговая дорожка',
  description: 'Вертикальная беговая дорожка Adera S-001 подходит для домашних тренировок и компактного хранения. Оснащена удобной панелью управления и устойчивой конструкцией. Отличный вариант для поддержания физической формы дома.',
  price: 27990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/pfd/27839812.png?format=gallery-medium',
  link: 'https://kaspi.kz/shop/p/adera-s-001-vertikal-naja-135634636/?c=750000000',
  },
  {
  id: 8,
  name: 'Сумка Bag is Power B-00004 22–28 л черная',
  description: 'Универсальная спортивная сумка Bag is Power объемом 22–28 литров. Подходит для тренировок, поездок в зал и повседневного использования. Практичный дизайн и прочные материалы обеспечивают удобство и долговечность.',
  price: 10990,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pcb/p8c/11552774.jpg?format=gallery-medium',
  link: 'https://kaspi.kz/shop/p/sumka-bag-is-power-b-00004-22-28-l-chernyi-117296722/?c=750000000',
  },
  {
  id: 9,
  name: 'Обруч Larko массажный розовый/голубой 92 см',
  description: 'Массажный обруч Larko диаметром 92 см предназначен для тренировок и укрепления мышц корпуса. Способствует улучшению кровообращения и помогает поддерживать форму. Подходит для домашних занятий фитнесом.',
  price: 7800,
  rating: 5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p01/p5b/84892971.jpg?format=gallery-medium',
  link: 'https://kaspi.kz/shop/p/obruch-larko-massazhnyi-rozovyi-goluboi-92-sm-142765274/?c=750000000',
  },
  {
  id: 10,
  name: 'Спортивная бутылка 8902028 2000 мл розовая',
  description: 'Спортивная бутылка объемом 2000 мл в розовом цвете подходит для тренировок, прогулок и активного образа жизни. Удобная крышка предотвращает проливание, а большой объем помогает поддерживать водный баланс в течение дня.',
  price: 2489,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/pff/106985918.jpeg?format=gallery-medium',
  link: 'https://kaspi.kz/shop/p/8902028-239335-2000-ml-rozovyi-114726802/?c=750000000',
  },
  ];
}