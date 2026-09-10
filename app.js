const database = [
  {
    "id": 1,
    "name": "Бижутерия для взрослых (кольца, серьги, браслеты, колье)",
    "category": "Аксессуары и украшения",
    "tnved": "7117 19 000 0",
    "okpd2": "32.13.10.000",
    "law": "Продукция отсутствует в Едином перечне обязательной сертификации ПП РФ № 2425 и не подпадает под ТР ТС 017/2011 (ст. 23 ФЗ № 184). Достаточно отказного письма.",
    "warning": "Категорически нельзя указывать «детская бижутерия» или возраст до 14 лет. Детские украшения требуют сертификата по ТР ТС 007/2011! Не должна содержать драгметаллы.",
    "keywords": "бижутерия кольцо кольца серьги сережки браслет колье подвеска цепочка брошь бусы чокер кулон",
    "groupCategory": "Украшения и аксессуары"
  },
  {
    "id": 2,
    "name": "Чехлы и бамперы для смартфонов, планшетов, наушников",
    "category": "Электроника и аксессуары",
    "tnved": "3926 90 970 9",
    "okpd2": "22.29.29.000",
    "law": "Изделия хозяйственно-бытового назначения из полимерных материалов. Не содержат электросхем (нет ТР ТС 004/2011 и 020/2011). Отсутствуют в ПП РФ № 2425.",
    "warning": "Чехлы со встроенным аккумулятором (Powerbank) или беспроводной зарядкой требуют обязательного декларирования по ТР ТС 020/2011 и ТР ЕАЭС 037/2016!",
    "keywords": "чехол чехлы бампер накладка кейс силиконовый чехол чехол для смартфона айфон iphone samsung xiaomi airpods",
    "groupCategory": "Чехлы и электроника"
  },
  {
    "id": 3,
    "name": "Защитные стекла и гидрогелевые пленки для экранов",
    "category": "Электроника и аксессуары",
    "tnved": "7007 19 800 9",
    "okpd2": "23.12.12.000",
    "law": "Пассивные защитные элементы из закаленного стекла и полимеров. Отсутствуют в списках обязательной сертификации ПП РФ № 2425.",
    "warning": "Если в комплект вкладываются спиртовые салфетки объемом более 100 мл, маркетплейс может запросить паспорт безопасности химической продукции (MSDS).",
    "keywords": "защитное стекло пленка гидрогелевая пленка бронестекло защита экрана",
    "groupCategory": "Чехлы и электроника"
  },
  {
    "id": 4,
    "name": "Сувениры и фигурки из гипса, керамики, эпоксидной смолы",
    "category": "Декор и подарки",
    "tnved": "6810 99 000 0",
    "okpd2": "23.69.19.000",
    "law": "Декоративные интерьерные изделия без контакта с пищей. Вне перечней обязательной сертификации ПП РФ № 2425.",
    "warning": "Не называйте товар в карточке «детский набор для творчества» или «игрушка из гипса» - робот WB заблокирует карточку с требованием детского сертификата ТР ТС 008/2011!",
    "keywords": "сувениры фигурка статуэтка гипс смола эпоксидная смола подставка кашпо интерьер декор подсвечник",
    "groupCategory": "Дом, декор и подарки"
  },
  {
    "id": 5,
    "name": "Фоторамки и постеры в рамах (дерево, металл, пластик)",
    "category": "Интерьер и декор",
    "tnved": "4414 90 800 0",
    "okpd2": "16.29.14.192",
    "law": "Не относятся к мебельной продукции (ТР ТС 025/2012 не действует). Отсутствуют в единых перечнях ПП РФ № 2425.",
    "warning": "Цифровые электронные фоторамки со встроенным экраном требуют обязательной сертификации по ТР ТС 004/2011 и ТР ТС 020/2011.",
    "keywords": "фоторамка рамка для фото постер картина в раме багет рамка деревянная",
    "groupCategory": "Дом, декор и подарки"
  },
  {
    "id": 6,
    "name": "Зеркала настенные и настольные без подсветки",
    "category": "Интерьер и дом",
    "tnved": "7009 92 000 0",
    "okpd2": "23.12.13.000",
    "law": "Пассивные изделия из листового стекла. Отсутствуют в списках обязательного подтверждения соответствия ПП РФ № 2425.",
    "warning": "Зеркала с встроенной LED-подсветкой, сенсорной кнопкой или подогревом полотна требуют обязательной сертификации по ТР ТС 004/2011 и 020/2011!",
    "keywords": "зеркало зеркала настенное настольное гримерное зеркало в раме",
    "groupCategory": "Дом, декор и подарки"
  },
  {
    "id": 7,
    "name": "Канцелярия для офиса и взрослых (папки, скрепки, степлеры)",
    "category": "Канцелярские товары",
    "tnved": "3926 10 000 0",
    "okpd2": "22.29.25.000",
    "law": "Офисные принадлежности общего назначения для взрослых. Не входят в единые перечни ПП РФ № 2425.",
    "warning": "Школьно-письменные товары для детей (школьные тетради, пластилин, детские краски) требуют декларации или сертификата по ТР ТС 007/2011!",
    "keywords": "канцелярия папка скоросшиватель скрепки степлер дырокол органайзер лоток для бумаг скобы",
    "groupCategory": "Канцелярия"
  },
  {
    "id": 8,
    "name": "Расчески, гребни, щетки для волос ручные (для взрослых)",
    "category": "Красота и уход",
    "tnved": "9615 11 000 0",
    "okpd2": "32.99.52.110",
    "law": "Галантерейные изделия личной гигиены без электропривода. Отсутствуют в ПП РФ № 2425 и ТР ТС.",
    "warning": "Детские расчески для малышей до 3 лет требуют СГР по ТР ТС 007/2011. Электрические расчески-выпрямители подлежат сертификации по ТР ТС 004/2011.",
    "keywords": "расческа гребень щетка для волос брашинг гребешок массажная расческа",
    "groupCategory": "Красота и уход"
  },
  {
    "id": 9,
    "name": "Аксессуары для волос для взрослых (крабики, резинки, заколки)",
    "category": "Аксессуары",
    "tnved": "9615 90 000 0",
    "okpd2": "32.99.52.120",
    "law": "Мелкая галантерея из пластмассы и текстиля. Не относится к готовой одежде (ТР ТС 017/2011 не применяется). Отсутствует в ПП РФ № 2425.",
    "warning": "Заколки и резинки с маркировкой «для детей в садик» отправляются модерацией Ozon на проверку по детскому регламенту ТР ТС 007/2011.",
    "keywords": "крабик заколка резинка для волос ободок невидимка шпилька твистер бант",
    "groupCategory": "Украшения и аксессуары"
  },
  {
    "id": 10,
    "name": "Искусственные цветы, растения, венки, сухоцветы",
    "category": "Декор и интерьер",
    "tnved": "6702 10 000 0",
    "okpd2": "32.99.55.000",
    "law": "Интерьерный декор из полимеров и ткани. Не требует фитосанитарного контроля и сертификатов соответствия.",
    "warning": "Живой стабилизированный мох в карточке товара обязательно должен маркироваться как «декоративный интерьерный декор», а не живое растение.",
    "keywords": "искусственные цветы растения сухоцветы букет искусственный венок зелень декор",
    "groupCategory": "Дом, декор и подарки"
  },
  {
    "id": 11,
    "name": "Елочные украшения и новогодний декор без подсветки",
    "category": "Праздники и подарки",
    "tnved": "9505 10 900 0",
    "okpd2": "32.99.51.110",
    "law": "Праздничные украшения прямо исключены из сферы действия детского регламента ТР ТС 008/2011 (Приложение 1). Вне перечней ПП РФ № 2425.",
    "warning": "Электрические гирлянды, светодиодные фигуры и светящиеся шары подлежат обязательной сертификации по ТР ТС 004/2011 и ТР ТС 020/2011!",
    "keywords": "елочные игрушки шары новогодние мишура дождик верхушка на елку новогодний декор",
    "groupCategory": "Дом, декор и подарки"
  },
  {
    "id": 12,
    "name": "Швейная фурнитура (пуговицы, молнии, кнопки, крючки)",
    "category": "Рукоделие и шитье",
    "tnved": "9606 21 000 0",
    "okpd2": "32.99.53.110",
    "law": "Вспомогательные швейные изделия, не являющиеся готовой одеждой легпрома (ТР ТС 017/2011 не применяется). Вне списков ПП РФ № 2425.",
    "warning": "Не путайте фурнитуру с готовыми поясными ремнями и шнурками, которые могут классифицироваться как кожгалантерея.",
    "keywords": "пуговицы молния молнии кнопки крючки люверсы пряжки швейная фурнитура застежка",
    "groupCategory": "Творчество и рукоделие"
  },
  {
    "id": 13,
    "name": "Пряжа для ручного вязания и швейные нитки",
    "category": "Рукоделие и шитье",
    "tnved": "5511 10 000 0",
    "okpd2": "13.10.61.110",
    "law": "Расфасованная для розничной продажи пряжа и бытовые нитки исключены из обязательных перечней ТР ТС 017/2011 и ПП РФ № 2425.",
    "warning": "Готовые ткани в рулонах и трикотажные полотна подлежат обязательному декларированию по ТР ТС 017/2011!",
    "keywords": "пряжа нитки для вязания нитки швейные моток пряжи шерсть акрил мулине",
    "groupCategory": "Творчество и рукоделие"
  },
  {
    "id": 14,
    "name": "Зонты от дождя и солнца для взрослых",
    "category": "Аксессуары",
    "tnved": "6601 91 000 0",
    "okpd2": "32.99.21.110",
    "law": "Галантерейные изделия, исключенные из легпрома ТР ТС 017/2011. Отсутствуют в списках обязательной сертификации ПП РФ № 2425.",
    "warning": "Детские зонтики с мультяшными рисунками попадают под действие регламента на детские товары ТР ТС 007/2011.",
    "keywords": "зонт зонты зонт трость складной зонт автомат от дождя от солнца",
    "groupCategory": "Украшения и аксессуары"
  },
  {
    "id": 15,
    "name": "Солнцезащитные очки бытовые (без диоптрий)",
    "category": "Аксессуары",
    "tnved": "9004 10 100 0",
    "okpd2": "32.50.42.120",
    "law": "Не являются медицинскими изделиями (не требуют регистрационного удостоверения Минздрава). Отсутствуют в перечнях ПП РФ № 2425.",
    "warning": "Очки для коррекции зрения с диоптриями являются медицинскими изделиями и требуют строгого регистрационного удостоверения Росздравнадзора!",
    "keywords": "солнцезащитные очки темные очки очки от солнца поляризационные очки оправа",
    "groupCategory": "Украшения и аксессуары"
  },
  {
    "id": 16,
    "name": "Свечи интерьерные восковые, соевые, парафиновые",
    "category": "Интерьер и подарки",
    "tnved": "3406 00 000 0",
    "okpd2": "32.99.54.000",
    "law": "Хозяйственно-бытовые изделия для освещёния и ароматизации воздуха. Не входят в единые перечни ПП РФ № 2425.",
    "warning": "Массажные свечи, растопленный состав которых наносится на кожу человека, классифицируются как косметика и требуют декларации ТР ТС 009/2011!",
    "keywords": "свечи восковые свечи соевые свечи ароматические свечи насыпные свечи подсвечник",
    "groupCategory": "Дом, декор и подарки"
  },
  {
    "id": 17,
    "name": "Массажеры ручные механические (гуаша, ролики, щетки)",
    "category": "Красота и здоровье",
    "tnved": "9019 10 900 1",
    "okpd2": "32.50.21.129",
    "law": "Механические приспособления без электромотора и питания. Отсутствуют в списках ПП РФ № 2425.",
    "warning": "Строго запрещёно писать лечебные свойства («лечит остеохондроз», «медицинский прибор»). Иначе товар заблокируют без мед. удостоверения!",
    "keywords": "массажер гуаша скребок гуаша ролик кварцевый нефритовый ролик сухая щетка массажер для лица",
    "groupCategory": "Красота и уход"
  },
  {
    "id": 18,
    "name": "Амуниция и одежда для домашних животных (поводки, ошейники)",
    "category": "Зоотовары",
    "tnved": "4201 00 000 0",
    "okpd2": "15.12.19.100",
    "law": "Регламент легпрома ТР ТС 017/2011 действует только на продукцию ДЛЯ ЛЮДЕЙ. Вне списков ПП РФ № 2425.",
    "warning": "Ошейники от блох и клещёй с лекарственной пропиткой являются ветеринарными инсектицидными препаратами и требуют обязательной регистрации!",
    "keywords": "поводок ошейник шлейка намордник одежда для собак попона комбинезон для животных",
    "groupCategory": "Зоотовары"
  },
  {
    "id": 19,
    "name": "Лежанки, домики и когтеточки для кошек и собак",
    "category": "Зоотовары",
    "tnved": "9403 89 000 0",
    "okpd2": "31.09.13.190",
    "law": "Мебельный техрегламент ТР ТС 025/2012 распространяется исключительно на людей. Отсутствуют в списках ПП РФ № 2425.",
    "warning": "Лежанки и матрасы с встроенным электрическим подогревом от розетки требуют сертификации по ТР ТС 004/2011!",
    "keywords": "лежанка домик для кошки когтеточка лежак для собаки матрас для животных пуфик",
    "groupCategory": "Зоотовары"
  },
  {
    "id": 20,
    "name": "Игрушки для домашних животных (дразнилки, мячи, косточки)",
    "category": "Зоотовары",
    "tnved": "3926 90 970 9",
    "okpd2": "22.29.29.000",
    "law": "Регламент ТР ТС 008/2011 действует только на игрушки для детей (до 14 лет). Зоотовары полностью освобождены от сертификации.",
    "warning": "В названии карточки обязательно должно присутствовать слово «для кошек» или «для собак». Без этого карточку может заблокировать алгоритм WB!",
    "keywords": "игрушки для кошек игрушки для собак мячик дразнилка косточка грызунок пищалка",
    "groupCategory": "Зоотовары"
  },
  {
    "id": 21,
    "name": "Коврики для компьютерной мыши",
    "category": "Электроника и компьютеры",
    "tnved": "4016 99 970 8",
    "okpd2": "22.19.73.000",
    "law": "Пассивные аксессуары рабочего места из ткани и вспененной резины. Отсутствуют в списках ПП РФ № 2425.",
    "warning": "Коврики со встроенной светодиодной подсветкой по периметру или беспроводной зарядкой Qi требуют сертификации по ТР ТС 020/2011!",
    "keywords": "коврик для мыши коврик игровой большой коврик deskpad подложка на стол",
    "groupCategory": "Чехлы и электроника"
  },
  {
    "id": 22,
    "name": "Подставки и держатели для смартфонов (механические)",
    "category": "Электроника и аксессуары",
    "tnved": "3926 90 970 9",
    "okpd2": "22.29.29.000",
    "law": "Механические фиксаторы из пластика и металла без микросхем. Не входят в единые перечни ПП РФ № 2425.",
    "warning": "Автомобильные держатели с функцией MagSafe или беспроводной индукционной зарядкой требуют обязательной сертификации по ТР ТС 020/2011.",
    "keywords": "подставка для телефона держатель автодержатель стойка для планшета попсокет",
    "groupCategory": "Чехлы и электроника"
  },
  {
    "id": 23,
    "name": "Садово-огородный ручной инвентарь (лопатки, грабли, совки)",
    "category": "Дача и сад",
    "tnved": "8201 10 000 0",
    "okpd2": "25.73.10.000",
    "law": "Ручной немеханизированный инструмент исключен из техрегламента ТР ТС 010/2011. Отсутствует в ПП РФ № 2425.",
    "warning": "Электрические или бензиновые инструменты (секаторы, триммеры, кусторезы) подлежат обязательной сертификации машин и оборудования.",
    "keywords": "лопатка грабли совок секатор ручной рыхлитель садовый инвентарь тяпка",
    "groupCategory": "Дача и сад"
  },
  {
    "id": 24,
    "name": "Алмазная мозаика, картины по номерам для взрослых (14+)",
    "category": "Хобби и творчество",
    "tnved": "9503 00 700 0",
    "okpd2": "32.99.59.000",
    "law": "Наборы для творчества взрослых старше 14 лет исключены из сферы действия детского ТР ТС 008/2011. Отсутствуют в ПП РФ № 2425.",
    "warning": "Если написать в названии «развивающий набор для детей от 3 лет», товар заблокируют без сертификата на игрушки по ТР ТС 008/2011!",
    "keywords": "алмазная мозаика картина по номерам живопись стразы вышивка творчество набор",
    "groupCategory": "Творчество и рукоделие"
  },
  {
    "id": 25,
    "name": "Брелоки для ключей (металл, пластик, силикон, ткань)",
    "category": "Аксессуары",
    "tnved": "7326 90 980 7",
    "okpd2": "25.99.29.190",
    "law": "Мелкая сувенирная галантерея. Не подлежит обязательному подтверждению соответствия по ПП РФ № 2425.",
    "warning": "Брелоки с электронными Bluetooth-маячками и чипами поиска ключей требуют нотификации ФСБ и сертификата соответствия связи!",
    "keywords": "брелок брелоки брелок для ключей брелок для авто подвеска на ключи карабин",
    "groupCategory": "Украшения и аксессуары"
  },
  {
    "id": 26,
    "name": "Зубочистки, бамбуковые шпажки, палочки для суши",
    "category": "Дом и кухня",
    "tnved": "4421 91 000 0",
    "okpd2": "16.29.14.190",
    "law": "Хозяйственные изделия однократного применения из древесины и бамбука. Отсутствуют в обязательных списках ПП РФ № 2425.",
    "warning": "ВНИМАНИЕ: столовая посуда и приборы из нержавеющей стали, фарфора и стекла требуют обязательного декларирования по ПП РФ № 2425!",
    "keywords": "зубочистки шпажки палочки для суши деревянные шпажки бамбуковые палочки",
    "groupCategory": "Дом, кухня и быт"
  },
  {
    "id": 27,
    "name": "Шкатулки для украшений, декоративные сундучки",
    "category": "Интерьер и подарки",
    "tnved": "4420 90 990 0",
    "okpd2": "16.29.14.130",
    "law": "Декоративные изделия для хранения мелочей из дерева, картона и МДФ. Не относятся к мебели по ТР ТС 025/2012.",
    "warning": "Оружейные металлические шкафы и огнестойкие сейфы подлежат обязательной сертификации ГОСТ Р.",
    "keywords": "шкатулка сундучок коробка для украшений органайзер для украшений кейс для колец",
    "groupCategory": "Дом, декор и подарки"
  },
  {
    "id": 28,
    "name": "Кисти, спонжи, щеточки для макияжа (ручные)",
    "category": "Красота и косметика",
    "tnved": "9603 30 900 0",
    "okpd2": "32.99.59.000",
    "law": "Принадлежности для нанесения макияжа, не являющиеся косметическими средствами (нет ТР ТС 009/2011). Вне ПП РФ № 2425.",
    "warning": "Спонжи с заводской влажной пропиткой косметическим кремом или тоником подлежат обязательной декларации по ТР ТС 009/2011!",
    "keywords": "кисти для макияжа спонж бьютиблендер кисть для пудры аппликатор щеточка для бровей",
    "groupCategory": "Красота и уход"
  },
  {
    "id": 29,
    "name": "Шторы для ванной комнаты полимерные (PEVA / EVA) и кольца",
    "category": "Дом и ванная",
    "tnved": "3924 90 000 9",
    "okpd2": "22.29.23.110",
    "law": "Санитарно-гигиенические полимерные изделия. Исключены из текстильного легпрома ТР ТС 017/2011. Вне ПП РФ № 2425.",
    "warning": "Тканевые шторы из полиэстера и текстильные коврики для ванной подлежат обязательному декларированию по ТР ТС 017/2011!",
    "keywords": "штора для ванной занавеска в ванную кольца для шторы водонепроницаемая шторка",
    "groupCategory": "Дом, кухня и быт"
  },
  {
    "id": 30,
    "name": "Магниты сувенирные на холодильник",
    "category": "Сувениры и декор",
    "tnved": "8505 11 000 0",
    "okpd2": "25.99.29.190",
    "law": "Пассивная рекламная и сувенирная продукция. Не входит в единые перечни обязательной оценки соответствия ПП РФ № 2425.",
    "warning": "Магнитные детские конструкторы подлежат жесточайшей сертификации по ТР ТС 008/2011 из-за риска проглатывания магнитов детьми!",
    "keywords": "магнит на холодильник сувенирный магнит виниловый магнит магнитик",
    "groupCategory": "Дом, декор и подарки"
  }
];

    // Клавиатурная раскладка QWERTY -> ЙЦУКЕН
    const EN_TO_RU = {
      'q':'й','w':'ц','e':'у','r':'к','t':'е','y':'н','u':'г','i':'ш','o':'щ','p':'з','[':'х',']':'ъ',
      'a':'ф','s':'ы','d':'в','f':'а','g':'п','h':'р','j':'о','k':'л','l':'д',';':'ж','\'':'э',
      'z':'я','x':'ч','c':'с','v':'м','b':'и','n':'т','m':'ь',',':'б','.':'ю','/':'.'
    };

    function fixLayout(str) {
      return str.split('').map(c => EN_TO_RU[c.toLowerCase()] || c).join('');
    }

    // Стемминг окончаний русского языка
    function stemRussian(word) {
      if (!word || word.length < 3) return word;
      return word
        .replace(/(ов|ев|ей|ом|ем|ам|ям|ами|ями|ах|ях|ую|юю|ою|ею|ому|ему|ым|им|ых|их|ого|его|ое|ее|ые|ие|ый|ий|ая|яя)$/i, '')
        .replace(/(а|е|и|о|у|ы|э|ю|я|ь)$/i, '')
        .replace(/(ок|ек|ик)$/i, '');
    }

    // Расстояние Левенштейна для поиска с опечатками
    function levenshtein(a, b) {
      if (a === b) return 0;
      if (!a.length) return b.length;
      if (!b.length) return a.length;
      const matrix = [];
      for (let i = 0; i <= b.length; i++) matrix[i] = [i];
      for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
      for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) === a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1
            );
          }
        }
      }
      return matrix[b.length][a.length];
    }

    // Словарь синонимов селлеров маркетплейсов
    const SYNONYMS = {
      'айфон': ['чехол', 'стекло', 'аксессуары', 'смартфон'],
      'iphone': ['чехол', 'стекло', 'аксессуары', 'смартфон'],
      'телефон': ['чехол', 'стекло', 'подставка', 'бампер'],
      'смартфон': ['чехол', 'стекло', 'подставка', 'бампер'],
      'наушники': ['чехол', 'кейс', 'airpods'],
      'кот': ['животные', 'зоотовары', 'лежанка', 'когтеточка', 'игрушки'],
      'кошка': ['животные', 'зоотовары', 'лежанка', 'когтеточка', 'игрушки'],
      'собака': ['животные', 'зоотовары', 'амуниция', 'поводок', 'ошейник'],
      'питомец': ['зоотовары', 'животные'],
      'украшения': ['бижутерия', 'кольцо', 'серьги', 'браслет', 'колье', 'шкатулка'],
      'косметика': ['кисти', 'спонж', 'макияж', 'массажер', 'расческа'],
      'бьюти': ['кисти', 'спонж', 'макияж', 'гуаша'],
      'канцелярка': ['канцелярия', 'папки', 'скрепки', 'офис'],
      'вязание': ['пряжа', 'нитки', 'рукоделие'],
      'шитье': ['фурнитура', 'пуговицы', 'молнии', 'рукоделие'],
      'суши': ['палочки', 'зубочистки', 'шпажки'],
      'елка': ['новогодний', 'декор', 'игрушки']
    };

    // Проверка на запрещённые / обязательные к сертификации товары
    const CERT_TRAP_WORDS = [
      { pattern: /детск|для\s*детей|ребен|малыш|новорожд/i, reason: 'Товары для детей и подростков подлежат обязательной сертификации по ТР ТС 007/2011 или 008/2011! Отказное письмо для них оформить нельзя.' },
      { pattern: /аккумул|powerbank|повербанк|зарядк|220|сетев|блок\s*питан/i, reason: 'Электроника со встроенным аккумулятором или питанием от сети 220V подлежит обязательному подтверждению по ТР ТС 004/2011, 020/2011 и ТР ЕАЭС 037/2016!' },
      { pattern: /крем|сыворотк|шампун|помад|парфюм|дух[ие]/i, reason: 'Парфюмерно-косметическая продукция подлежит обязательному декларированию соответствия по ТР ТС 009/2011!' },
      { pattern: /бад|витамин|детск.*питан|чай|кофе/i, reason: 'Пищевая продукция и БАД подлежат обязательной оценке по ТР ТС 021/2011 (декларация или СГР)!' }
    ];

    // DOM элементы
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const quickTabs = document.getElementById('quickTabs');
    const directoryBody = document.getElementById('directoryBody');
    const registryCount = document.getElementById('registryCount');
    const resetSearchWrap = document.getElementById('resetSearchWrap');
    const btnResetSearch = document.getElementById('btnResetSearch');
    const toast = document.getElementById('toast');

    // Элементы карточки инспекции
    const resCategory = document.getElementById('resCategory');
    const resTitle = document.getElementById('resTitle');
    const resTnved = document.getElementById('resTnved');
    const resOkpd2 = document.getElementById('resOkpd2');
    const resLaw = document.getElementById('resLaw');
    const resWarningBox = document.getElementById('resWarningBox');
    const warningTitle = document.getElementById('warningTitle');
    const resWarningText = document.getElementById('resWarningText');
    const statusPill = document.getElementById('statusPill');
    const statusText = document.getElementById('statusText');
    const dockTitle = document.getElementById('dockTitle');
    const dockText = document.getElementById('dockText');
    const dockBtn = document.getElementById('dockBtn');

    let selectedId = 1;
    let activeCategory = 'all';


    // --- ПЕРЕКЛЮЧЕНИЕ МЕЖДУ ИНСТРУМЕНТАМИ (ТН ВЭД / КАЛЬКУЛЯТОР ФОТО / ЭТИКЕТКИ) ---
    let currentTool = 'tnved';
    let labelMp = 'wb';
    let freeLabelsDownloaded = 0;
    try {
      if (localStorage.getItem('wbcheck_free_label_used') === '1') {
        freeLabelsDownloaded = 1;
      }
    } catch (e) {}

    function switchTool(tool, shouldScroll = true) {
      currentTool = tool;
      const viewTnved = document.getElementById('viewTnved');
      const viewCalc = document.getElementById('viewCalc');
      const viewLabel = document.getElementById('viewLabel');
      const viewQr = document.getElementById('viewQr');
      const viewCard = document.getElementById('viewCard');
      const tabTnved = document.getElementById('tabBtnTnved');
      const tabCalc = document.getElementById('tabBtnCalc');
      const tabLabel = document.getElementById('tabBtnLabel');
      const tabQr = document.getElementById('tabBtnQr');
      const tabCard = document.getElementById('tabBtnCard');
      const navKwork = document.getElementById('navKworkBtn');
      const navKworkText = document.getElementById('navKworkBtnText');

      const allViews = [viewTnved, viewCalc, viewLabel, viewQr, viewCard].filter(Boolean);
      const isMultiPage = allViews.length === 1;

      // Скрываем все вкладки только в SPA режиме (когда на странице все 5 блоков)
      if (!isMultiPage) {
        if (viewTnved) viewTnved.classList.add('hidden');
        if (viewCalc) viewCalc.classList.add('hidden');
        if (viewLabel) viewLabel.classList.add('hidden');
        if (viewQr) viewQr.classList.add('hidden');
        if (viewCard) viewCard.classList.add('hidden');
      }

      if (tabTnved) tabTnved.classList.remove('active');
      if (tabCalc) tabCalc.classList.remove('active');
      if (tabLabel) tabLabel.classList.remove('active');
      if (tabQr) tabQr.classList.remove('active');
      if (tabCard) tabCard.classList.remove('active');

      if (tool === 'calc') {
        if (viewCalc) viewCalc.classList.remove('hidden');
        if (tabCalc) tabCalc.classList.add('active');
        if (navKwork) {
          navKwork.href = 'https://kwork.ru/lawyer-consulting/54517650/sostavlyu-pretenziyu-za-krazhu-foto-dlya-blokirovki-kartochki-wb-i-ozon?ref=25130833';
          if (navKworkText) navKworkText.textContent = 'Претензия (1 000 ₽)';
        }
        if (!isMultiPage && window.location.hash !== '#photo-calc') {
          history.replaceState(null, '', '#photo-calc');
        }
        if (document.getElementById('calcSlides')) { 
          initCalcControls();
          calcRecalculate(); 
        }
      } else if (tool === 'label') {
        if (viewLabel) viewLabel.classList.remove('hidden');
        if (tabLabel) tabLabel.classList.add('active');
        if (navKwork) {
          navKwork.href = 'https://kwork.ru/e-commerce-social-network/54550913/sgeneriruyu-termoetiketki-so-shtrikhkodami-58kh40-dlya-wildberries-i-ozon?ref=25130833';
          if (navKworkText) navKworkText.textContent = 'Этикетки (1 000 ₽)';
        }
        if (!isMultiPage && window.location.hash !== '#labels-58x40') {
          history.replaceState(null, '', '#labels-58x40');
        }
        if (document.getElementById('prevBarcodeSvg')) { updateLabelPreview(); }
      } else if (tool === 'qr') {
        if (viewQr) viewQr.classList.remove('hidden');
        if (tabQr) tabQr.classList.add('active');
        if (navKwork) {
          navKwork.href = 'https://kwork.ru/logo/54548516/sozdam-vektorniy-qr-kod-s-logotipom-kompanii-i-firmennymi-tsvetami?ref=25130833';
          if (navKworkText) navKworkText.textContent = 'Дизайн QR (1 000 ₽)';
        }
        if (!isMultiPage && window.location.hash !== '#qr-code') {
          history.replaceState(null, '', '#qr-code');
        }
        if (document.getElementById('qrCanvas')) { updateQrPreview(); }
      } else if (tool === 'card') {
        if (viewCard) viewCard.classList.remove('hidden');
        if (tabCard) tabCard.classList.add('active');
        if (navKwork) {
          navKwork.href = 'https://kwork.ru/e-commerce-social-network/54537490/sozdam-dizayn-kartochek-dlya-wildberries-i-prodayushchuyu-infografiku?ref=25130833';
          if (navKworkText) navKworkText.textContent = 'Карточки WB (1 000 ₽)';
        }
        if (!isMultiPage && window.location.hash !== '#wb-cards') {
          history.replaceState(null, '', '#wb-cards');
        }
        if (document.getElementById('cardScorePercent')) { updateCardScore(); }
      } else {
        if (viewTnved) viewTnved.classList.remove('hidden');
        if (tabTnved) tabTnved.classList.add('active');
        if (navKwork) {
          navKwork.href = 'https://kwork.ru/lawyer-consulting/54553048/podberu-kod-tn-ved-i-oformlyu-otkaznoe-pismo-dlya-wildberries-i-ozon?ref=25130833';
          if (navKworkText) navKworkText.textContent = 'Отказное (1 000 ₽)';
        }
        if (!isMultiPage && window.location.hash !== '') {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
      if (typeof window.sendMetrikaGoal === 'function') {
        window.sendMetrikaGoal('switch_tool', { tool: tool || 'tnved' });
      }
      if (shouldScroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    function detectCurrentTool() {
      // 1. Изолированная страница: определяем по наличию единственного view в DOM
      const hasTnved = !!document.getElementById('viewTnved');
      const hasCalc = !!document.getElementById('viewCalc');
      const hasLabel = !!document.getElementById('viewLabel');
      const hasQr = !!document.getElementById('viewQr');
      const hasCard = !!document.getElementById('viewCard');
      const presentViews = [hasTnved, hasCalc, hasLabel, hasQr, hasCard].filter(Boolean);

      if (presentViews.length === 1) {
        if (hasCalc) return 'calc';
        if (hasLabel) return 'label';
        if (hasQr) return 'qr';
        if (hasCard) return 'card';
        if (hasTnved) return 'tnved';
      }

      // 2. Имя файла в URL (pathname)
      const path = (window.location.pathname || '').toLowerCase();
      if (path.includes('photo-calc')) return 'calc';
      if (path.includes('labels-58x40')) return 'label';
      if (path.includes('qr-code')) return 'qr';
      if (path.includes('wb-cards')) return 'card';

      // 3. Fallback на хэш (для SPA режима)
      const hash = (window.location.hash || '').toLowerCase();
      if (hash === '#photo-calc') return 'calc';
      if (hash === '#labels-58x40') return 'label';
      if (hash === '#qr-code' || hash === '#qr-insert') return 'qr';
      if (hash === '#wb-cards' || hash === '#card-design' || hash === '#case-study') return 'card';

      return 'tnved';
    }

    // Мгновенная проверка роута при загрузке без задержек и мерцаний
    function applyRouteFromHash(shouldScroll = false) {
      const tool = detectCurrentTool();
      switchTool(tool, shouldScroll);
    }

    // --- ЛОГИКА КАЛЬКУЛЯТОРА СТ. 1301 ГК РФ ---
    // ==================== CALCULATOR LOGIC (ст. 1301 ГК РФ) ====================
    let calcMp = 'wb';
    let calcStatus = 'ip';

    function setCalcMp(mp) {
      calcMp = mp;
      const btnWb = document.getElementById('btnMpWb');
      const btnOz = document.getElementById('btnMpOzon');
      if (btnWb) btnWb.classList.toggle('active', mp === 'wb');
      if (btnOz) btnOz.classList.toggle('active', mp === 'ozon');

      const desc = document.getElementById('calcMpDesc');
      if (desc) {
        desc.textContent = mp === 'wb'
          ? 'Wildberries: рассмотрение жалоб через Цифровой арбитраж в кабинете продавца, 10 дней на ответ нарушителю перед блокировкой.'
          : 'Ozon: подача претензии через службу контроля качества Ozon Claim, 3-7 дней на ответ до скрытия карточки с витрины.';
      }
      if (document.getElementById('calcSlides')) { calcRecalculate(); }
    }

    function setCalcStatus(st) {
      calcStatus = st;
      const btnIp = document.getElementById('btnStatusIp');
      const btnSelf = document.getElementById('btnStatusSelf');
      if (btnIp) btnIp.classList.toggle('active', st === 'ip');
      if (btnSelf) btnSelf.classList.toggle('active', st === 'self');
      if (document.getElementById('calcSlides')) { calcRecalculate(); }
    }

    // Синхронизация ползунка, чипсов и цифрового поля
    function syncSlides(val) {
      let num = parseInt(val) || 1;
      if (num < 1) num = 1;
      if (num > 50) num = 50;

      const input = document.getElementById('calcSlides');
      const slider = document.getElementById('calcSlider');
      const chipGroup = document.getElementById('chipGroupSlides');

      if (input && parseInt(input.value) !== num) {
        input.value = num;
      }
      if (slider && parseInt(slider.value) !== num && num <= 20) {
        slider.value = num;
      }
      if (chipGroup) {
        chipGroup.querySelectorAll('.num-chip').forEach(b => {
          b.classList.toggle('active', parseInt(b.dataset.val) === num);
        });
      }
      if (document.getElementById('calcSlides')) { calcRecalculate(); }
    }

    // Привязка слушателей контролов
    let calcControlsInited = false;
    function initCalcControls() {
      if (calcControlsInited) return;
      calcControlsInited = true;
      const slider = document.getElementById('calcSlider');
      if (slider) {
        slider.addEventListener('input', (e) => syncSlides(e.target.value));
      }

      const input = document.getElementById('calcSlides');
      if (input) {
        input.addEventListener('input', (e) => syncSlides(e.target.value));
      }

      const chipGroup = document.getElementById('chipGroupSlides');
      if (chipGroup) {
        chipGroup.addEventListener('click', (e) => {
          const btn = e.target.closest('.num-chip');
          if (!btn) return;
          syncSlides(btn.dataset.val);
        });
      }

      // Слушатели полей ввода текста претензии
      ['claimTargetSku', 'claimOrigSku', 'claimContacts'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener('input', () => calcRecalculate());
        }
      });
    }

    function calcRecalculate() {
      const input = document.getElementById('calcSlides');
      let slides = parseInt(input ? input.value : 4) || 1;
      if (slides < 1) slides = 1;
      if (slides > 50) slides = 50;

      const stripLogoEl = document.getElementById('calcStripLogo');
      const isStripLogo = stripLogoEl ? stripLogoEl.checked : false;

      // 1. Законный минимум (ст. 1301 + ст. 1300 ГК РФ)
      const baseMin = slides * 10000;
      const logoMin = isStripLogo ? slides * 10000 : 0;
      const totalMin = baseMin + logoMin;

      // 2. Реальная судебная практика (15 000 - 35 000 руб за слайд)
      const courtLow = slides * 15000 + (isStripLogo ? slides * 10000 : 0);
      const courtHigh = slides * 35000 + (isStripLogo ? slides * 25000 : 0);

      // 3. Судебные расходы ответчика по ст. 110 АПК РФ
      let duty = 10000;
      if (courtHigh > 100000) {
        duty += Math.round((courtHigh - 100000) * 0.05);
      }
      const fixCost = 12000;
      const legalCost = calcStatus === 'ip' ? 40000 : 30000;
      const totalCosts = duty + fixCost + legalCost;

      // 4. Совокупный финансовый риск
      const totalRisk = courtHigh + totalCosts;

      // 5. Мирное досудебное соглашение
      const settleLow = Math.round(slides * 7500 / 1000) * 1000;
      const settleHigh = Math.round(slides * 10000 / 1000) * 1000;

      // Вывод в DOM с проверкой на null
      const elMin = document.getElementById('calcStatMin');
      if (elMin) elMin.textContent = totalMin.toLocaleString('ru-RU') + ' ₽';

      const elMinDesc = document.getElementById('calcStatMinDesc');
      if (elMinDesc) {
        elMinDesc.textContent = isStripLogo 
          ? `Законный минимум: ${baseMin.toLocaleString('ru-RU')} ₽ (ст. 1301) + ${logoMin.toLocaleString('ru-RU')} ₽ (ст. 1300 за логотип)`
          : `Минимум по закону (по 10 000 ₽ за каждый из ${slides} украденных слайдов)`;
      }

      const elCourt = document.getElementById('calcStatCourt');
      if (elCourt) elCourt.textContent = `${courtLow.toLocaleString('ru-RU')} - ${courtHigh.toLocaleString('ru-RU')} ₽`;

      const elCosts = document.getElementById('calcStatCosts');
      if (elCosts) elCosts.textContent = `~${totalCosts.toLocaleString('ru-RU')} ₽`;

      const elRisk = document.getElementById('calcStatRisk');
      if (elRisk) elRisk.textContent = `до ${totalRisk.toLocaleString('ru-RU')} ₽`;

      const elSettle = document.getElementById('calcStatSettle');
      if (elSettle) elSettle.textContent = `${settleLow.toLocaleString('ru-RU')} - ${settleHigh.toLocaleString('ru-RU')} ₽`;

      const elDeadline = document.getElementById('calcStatDeadline');
      if (elDeadline) {
        elDeadline.textContent = calcMp === 'wb' 
          ? '10 дней (WB Арбитраж)' 
          : '3-7 дней (Ozon Claim)';
      }

      const elDeadlineDesc = document.getElementById('calcStatDeadlineDesc');
      if (elDeadlineDesc) {
        elDeadlineDesc.textContent = calcMp === 'wb'
          ? 'Регламентный срок ответа нарушителя в Цифровом арбитраже Wildberries до принудительного удаления карточки с витрины.'
          : 'Срок проверки документов службой Ozon Claim до скрытия карточки-клона с витрины.';
      }

      // Генерация текста претензии
      generateClaimText(slides, isStripLogo, totalMin, totalRisk, settleLow, settleHigh);
    }

    // Переменные состояния параметров предупреждения
    let claimGoal = 'settle';
    let claimDeadline = 24;

    function setClaimGoal(goal) {
      claimGoal = goal;
      const goals = ['settle', 'ultimatum', 'license'];
      goals.forEach(g => {
        const id = 'btnGoal' + g.charAt(0).toUpperCase() + g.slice(1);
        const btn = document.getElementById(id);
        if (btn) btn.classList.toggle('active', g === goal);
      });
      const desc = document.getElementById('claimGoalDesc');
      if (desc) {
        if (goal === 'settle') desc.textContent = 'Мировое соглашение: удаление фото из карточки и досудебная компенсация.';
        else if (goal === 'ultimatum') desc.textContent = 'Ультиматум: требование удалить ворованные фото за 24 ч без выкупа, иначе жалоба в арбитраж и суд.';
        else if (goal === 'license') desc.textContent = 'Лицензия: официальное предложение выкупить права на использование инфографики.';
      }
      if (document.getElementById('calcSlides')) { calcRecalculate(); }
    }

    function setClaimDeadline(hours) {
      claimDeadline = parseInt(hours) || 24;
      [24, 48].forEach(h => {
        const btn = document.getElementById('btnDeadline' + h);
        if (btn) btn.classList.toggle('active', h === claimDeadline);
      });
      if (document.getElementById('calcSlides')) { calcRecalculate(); }
    }

    // Хуманизированный текст досудебного предупреждения (без тире, живой, уверенный, точный)
    function generateClaimText(slides, isStripLogo, totalMin, totalRisk, settleLow, settleHigh) {
      const mpName = calcMp === 'wb' ? 'Wildberries' : 'Ozon';
      const arbName = calcMp === 'wb' ? 'Цифровой арбитраж Wildberries' : 'службу контроля прав Ozon Claim';
      const courtType = calcStatus === 'ip' ? 'Арбитражный суд' : 'районный суд общей юрисдикции';
      const procLaw = calcStatus === 'ip' ? 'ст. 110 АПК РФ' : 'ст. 98 ГПК РФ';
      const legalFee = calcStatus === 'ip' ? '40 000' : '30 000';

      const targetInput = document.getElementById('claimTargetSku');
      const targetSku = (targetInput && targetInput.value.trim()) ? targetInput.value.trim() : '[УКАЖИТЕ АРТИКУЛ НАРУШИТЕЛЯ]';

      const origInput = document.getElementById('claimOrigSku');
      const origSku = (origInput && origInput.value.trim()) ? origInput.value.trim() : '[УКАЖИТЕ ВАШ ОРИГИНАЛЬНЫЙ АРТИКУЛ]';

      const contactsInput = document.getElementById('claimContacts');
      const contacts = (contactsInput && contactsInput.value.trim()) ? contactsInput.value.trim() : 'ответьте в этот чат продавца либо направьте ответ на официальный email правообладателя';

      let title = 'ДОСУДЕБНОЕ ПРЕДУПРЕЖДЕНИЕ О НАРУШЕНИИ АВТОРСКИХ ПРАВ';
      if (claimGoal === 'ultimatum') {
        title = 'УЛЬТИМАТИВНОЕ ДОСУДЕБНОЕ ТРЕБОВАНИЕ ОБ УДАЛЕНИИ КОНТЕНТА';
      } else if (claimGoal === 'license') {
        title = 'ПРЕДЛОЖЕНИЕ О ЛИЦЕНЗИРОВАНИИ АВТОРСКИХ МАТЕРИАЛОВ';
      }

      let text = `${title}\n` +
        `Площадка: ${mpName}\n` +
        `Карточка нарушителя: артикул ${targetSku}\n` +
        `Оригинальный товар правообладателя: артикул ${origSku}\n\n` +
        `Здравствуйте. В карточке вашего товара обнаружено неправомерное использование наших авторских материалов. Всего скопировано слайдов инфографики и фотографий: ${slides} шт.\n\n` +
        `Все оригинальные исходники съёмки (несжатые файлы RAW с метаданными EXIF камеры) и рабочие слои дизайн-макетов в Figma сохранены у нас с нотариальным подтверждением даты создания. Исключительные права защищены статьями 1252, 1259 и 1301 Гражданского кодекса РФ.\n\n` +
        `Факт неправомерного размещения зафиксирован протоколом автоматической фиксации с цифровым хэшем времени. Обращаем внимание: удаление изображений из карточки после прочтения этого уведомления факт нарушения не отменяет, доказательства уже сохранены для суда.\n\n`;

      if (isStripLogo) {
        text += `С изображений также преднамеренно срезан наш фирменный знак или логотип бренда. Это образует отдельный состав правонарушения по ст. 1300 ГК РФ со штрафом от 10 000 до 5 000 000 ₽.\n\n`;
      }

      text += `СУДЕБНАЯ ПРАКТИКА И ВАШИ ФИНАНСОВЫЕ РИСКИ:\n` +
        `1. Законная компенсация по ст. 1301 ГК РФ: от ${totalMin.toLocaleString('ru-RU')} ₽ (по 10 000 ₽ за каждый слайд).\n` +
        `2. Судебные издержки по ${procLaw}: с сентября 2024 года госпошлина увеличена до 10 000 ₽, расходы на фиксацию от 12 000 ₽, услуги судебного юриста от ${legalFee} ₽. Совокупная сумма взыскания с вас в суде составит до ${totalRisk.toLocaleString('ru-RU')} ₽.\n`;

      if (calcMp === 'wb') {
        text += `3. Блокировка товара на маркетплейсе: при отсутствии добровольного решения спор передается в Цифровой арбитраж Wildberries. Если в течение 10 дней вы не предоставите оригинальные RAW-файлы, площадка скрывает товар с витрины навсегда, а продажи и остатки замораживаются.\n\n`;
      } else {
        text += `3. Блокировка товара на маркетплейсе: при отсутствии добровольного решения жалоба направляется в службу Ozon Claim. Карточка товара скрывается с витрины маркетплейса, а рейтинг продавца понижается.\n\n`;
      }

      const deadlineHoursText = claimDeadline === 24 ? '24 часа' : '48 часов';
      const deadlineGenitive = claimDeadline === 24 ? '24 часов' : '48 часов';

      if (claimGoal === 'ultimatum') {
        text += `ТРЕБОВАНИЕ (срок: ${deadlineHoursText}):\n` +
          `В течение ${deadlineHoursText} с момента получения данного уведомления полностью удалить все скопированные слайды и фото из карточки товара ${targetSku}.\n` +
          `Если материалы будут удалены в установленный срок и вы подтвердите это в чате, мы воздержимся от подачи обращения в ${arbName} и иска в суд. При игнорировании жалоба на блокировку направляется автоматически.\n\n`;
      } else if (claimGoal === 'license') {
        text += `ПРЕДЛОЖЕНИЕ О ЛИЦЕНЗИРОВАНИИ (срок: ${deadlineHoursText}):\n` +
          `Чтобы вам не пришлось удалять инфографику, терять позиции в поиске и конверсию карточки, мы готовы предоставить вам правомерную неисключительную лицензию на использование указанных дизайн-макетов.\n` +
          `Стоимость бессрочной лицензии для вашей карточки: ${settleLow.toLocaleString('ru-RU')} ₽.\n` +
          `В случае отказа или отсутствия ответа в течение ${deadlineHoursText} жалоба будет подана в ${arbName}, а иск на сумму до ${totalRisk.toLocaleString('ru-RU')} ₽ будет направлен в ${courtType}.\n\n`;
      } else {
        text += `УСЛОВИЯ ДОСУДЕБНОГО УРЕГУЛИРОВАНИЯ (срок: ${deadlineHoursText}):\n` +
          `1. В течение ${deadlineHoursText} полностью удалить скопированные слайды и фото из карточки товара ${targetSku}.\n` +
          `2. Выплатить компенсацию в досудебном порядке в размере ${settleLow.toLocaleString('ru-RU')} ₽ (вместо взыскания до ${totalRisk.toLocaleString('ru-RU')} ₽ через суд).\n` +
          `3. Подтвердить выполнение условий в ответе на данное сообщение.\n\n`;
      }

      text += `Для подтверждения урегулирования или согласования реквизитов: ${contacts}.\n` +
        `Если через ${deadlineGenitive} ответа не поступит, жалоба передается в ${arbName}, а материалы направляются юристу для подачи иска в ${courtType}.`;

      const claimArea = document.getElementById('calcClaimText');
      if (claimArea) {
        claimArea.value = text;
      }

      const charBadge = document.getElementById('claimCharBadge');
      if (charBadge) {
        charBadge.textContent = `${text.length.toLocaleString('ru-RU')} симв.`;
      }
    }

    function copyClaimTemplate() {
      const claimArea = document.getElementById('calcClaimText');
      const text = claimArea ? claimArea.value : '';
      if (!text) return;

      const notify = () => {
        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = 'Текст предупреждения скопирован для чата!';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2500);
        }
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(notify).catch(() => {
          claimArea.select();
          document.execCommand('copy');
          notify();
        });
      } else {
        claimArea.select();
        document.execCommand('copy');
        notify();
      }
    }

    function downloadClaimText() {
      const claimArea = document.getElementById('calcClaimText');
      const text = claimArea ? claimArea.value : '';
      if (!text) return;

      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'dosudebnoe_preduprezhdenie_wbcheck.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      const toast = document.getElementById('toast');
      if (toast) {
        toast.textContent = 'Файл с текстом предупреждения скачан!';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
      }
    }

    function toggleTableExpand() {
      const wrapper = document.getElementById('tableExpandWrapper');
      const btn = document.getElementById('btnTableExpand');
      const text = document.getElementById('btnTableExpandText');
      
      if (!wrapper) return;
      const isCollapsed = wrapper.classList.contains('collapsed');
      
      if (isCollapsed) {
        wrapper.classList.remove('collapsed');
        if (btn) btn.classList.add('expanded');
        if (text) text.textContent = 'Свернуть реестр';
      } else {
        wrapper.classList.add('collapsed');
        if (btn) btn.classList.remove('expanded');
        const count = database.length;
        if (text) text.textContent = `Показать все ${count} категорий`;
      }
    }

    function expandTableIfCollapsed() {
      const wrapper = document.getElementById('tableExpandWrapper');
      const btn = document.getElementById('btnTableExpand');
      const text = document.getElementById('btnTableExpandText');
      if (wrapper && wrapper.classList.contains('collapsed')) {
        wrapper.classList.remove('collapsed');
        if (btn) btn.classList.add('expanded');
        if (text) text.textContent = 'Свернуть реестр';
      }
    }

    function updateExpandButtonVisibility(itemCount) {
      const btnWrap = document.getElementById('tableExpandBtnWrap');
      const text = document.getElementById('btnTableExpandText');
      if (!btnWrap) return;
      if (itemCount <= 6) {
        btnWrap.style.display = 'none';
        expandTableIfCollapsed();
      } else {
        btnWrap.style.display = 'flex';
        const wrapper = document.getElementById('tableExpandWrapper');
        if (wrapper && wrapper.classList.contains('collapsed') && text) {
          text.textContent = `Показать все ${itemCount} категорий`;
        }
      }
    }

    // Рендер каталога
    function renderDirectory(items) {
      if (items.length === 0) {
        directoryBody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 36px 20px; color: var(--text-tertiary); line-height: 1.6;">Товары по вашему запросу не найдены в базе отказных писем.<br>Возможно, для этой продукции требуется обязательный сертификат или декларация (ТР ТС).</td></tr>';
        registryCount.textContent = '0 товаров найдено';
        return;
      }

      directoryBody.innerHTML = items.map(item => `
        <tr class="directory-row ${item.id === selectedId ? 'selected' : ''}" data-id="${item.id}" tabindex="0" role="button" aria-label="Показать спецификацию для ${item.name}">
          <td class="cell-name">${item.name}</td>
          <td class="cell-code"><span>${item.tnved}</span></td>
          <td class="cell-cat">${item.groupCategory || item.category}</td>
          <td class="cell-status">Отказное письмо</td>
        </tr>
      `).join('');

      registryCount.textContent = `${items.length} товаров в списке`;
      updateExpandButtonVisibility(items.length);
    }

    // Выбор элемента
    function selectItem(id, scrollToSpec = false) {
      const item = database.find(x => x.id === id);
      if (!item) return;

      selectedId = id;

      resCategory.textContent = 'Категория: ' + (item.groupCategory || item.category);
      resTitle.textContent = item.name;
      resTnved.textContent = item.tnved;
      resOkpd2.textContent = item.okpd2;
      resLaw.textContent = item.law;
      resWarningText.textContent = item.warning;

      // Сброс бейджей
      statusPill.className = 'status-pill';
      statusText.textContent = 'СЕРТИФИКАТ НЕ ТРЕБУЕТСЯ · ОТКАЗНОЕ ПИСЬМО';
      warningTitle.textContent = 'Ловушка модерации WB и Ozon:';
      resWarningBox.style.display = 'flex';

      // Подсветка строки в таблице
      document.querySelectorAll('.directory-row').forEach(row => {
        row.classList.toggle('selected', parseInt(row.dataset.id) === id);
      });

      if (scrollToSpec) {
        document.getElementById('inspectionSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Умный поиск с учетом раскладки, опечаток, стемминга и синонимов
    function smartFilter(rawQuery, categoryFilter) {
      let pool = database;
      if (categoryFilter && categoryFilter !== 'all') {
        pool = pool.filter(item => (item.groupCategory || item.category) === categoryFilter);
      }

      const q = rawQuery.trim().toLowerCase();
      if (!q) return pool;

      // Вариант с исправленной раскладкой
      const qFixed = fixLayout(q);

      // Проверка на жесткие ловушки обязательной сертификации
      for (const trap of CERT_TRAP_WORDS) {
        if (trap.pattern.test(q) || trap.pattern.test(qFixed)) {
          return { trap: trap.reason };
        }
      }

      // Разбиваем на токены
      const tokens = q.split(/\s+/).filter(Boolean);
      const fixedTokens = qFixed.split(/\s+/).filter(Boolean);

      const scoredItems = [];

      for (const item of pool) {
        let score = 0;
        const nameLower = item.name.toLowerCase();
        const tnvedRaw = item.tnved.replace(/\s/g, '');
        const okpdRaw = item.okpd2.replace(/\s/g, '');
        const keywords = (item.keywords || '').toLowerCase();
        const fullText = nameLower + ' ' + keywords + ' ' + (item.groupCategory || '').toLowerCase();
        const textWords = fullText.split(/[\s,()\-\/]+/).filter(w => w.length > 1);

        // 1. Прямой поиск по кодам ТН ВЭД / ОКПД 2
        const cleanQ = q.replace(/[^0-9]/g, '');
        if (cleanQ.length >= 3) {
          if (tnvedRaw.includes(cleanQ)) score += 100;
          if (okpdRaw.includes(cleanQ)) score += 90;
        }

        // 2. Точное совпадение подстроки
        if (fullText.includes(q)) score += 80;
        if (qFixed !== q && fullText.includes(qFixed)) score += 75;

        // 3. Токенный скоринг со стеммингом и синонимами
        let matchedTokens = 0;

        for (let i = 0; i < tokens.length; i++) {
          const t = tokens[i];
          const tFix = fixedTokens[i] || t;
          const stemT = stemRussian(t);
          const stemFix = stemRussian(tFix);

          let tokenMatched = false;

          // Проверка стемминга
          for (const word of textWords) {
            const stemW = stemRussian(word);
            if (word.startsWith(t) || word.startsWith(tFix)) {
              score += 40;
              tokenMatched = true;
              break;
            }
            if (stemW === stemT || stemW === stemFix || (stemT.length >= 3 && stemW.startsWith(stemT))) {
              score += 30;
              tokenMatched = true;
              break;
            }
            // Проверка на опечатку (Levenshtein distance <= 1 для слов от 5 букв)
            if (t.length >= 5 && Math.abs(t.length - word.length) <= 1) {
              if (levenshtein(t, word) <= 1 || levenshtein(tFix, word) <= 1) {
                score += 25;
                tokenMatched = true;
                break;
              }
            }
          }

          // Проверка синонимов
          if (!tokenMatched) {
            const synList = SYNONYMS[t] || SYNONYMS[tFix] || [];
            for (const syn of synList) {
              if (fullText.includes(syn)) {
                score += 20;
                tokenMatched = true;
                break;
              }
            }
          }

          if (tokenMatched) matchedTokens++;
        }

        // Бонус за совпадение всех введенных слов
        if (tokens.length > 1 && matchedTokens === tokens.length) {
          score += 50;
        }

        if (score > 0) {
          scoredItems.push({ item, score });
        }
      }

      scoredItems.sort((a, b) => b.score - a.score);
      return scoredItems.map(x => x.item);
    }

    // Обработка поискового ввода
    if (searchInput) searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      searchClear.style.display = q.length > 0 ? 'flex' : 'none';

      if (q.length > 0) {
        expandTableIfCollapsed();
      }

      if (!q) {
        let pool = database;
        if (activeCategory !== 'all') {
          pool = pool.filter(x => (x.groupCategory || x.category) === activeCategory);
        }
        renderDirectory(pool);
        resetSearchWrap.style.display = 'none';
        if (pool.length > 0) selectItem(pool[0].id);
        return;
      }

      resetSearchWrap.style.display = 'block';

      const results = smartFilter(q, activeCategory);

      // Обработка предупреждения о ловушке сертификации
      if (results && results.trap) {
        directoryBody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 36px 20px; color: var(--amber-dark); line-height: 1.6; font-weight: 500;">Внимание! По данному запросу продукция подлежит обязательной сертификации или декларированию.<br>Отказное письмо для этого товара не применяется.</td></tr>';
        registryCount.textContent = 'Отказное письмо не применяется';

        resCategory.textContent = 'Предупреждение модерации';
        resTitle.textContent = 'Товар по запросу «' + e.target.value + '» требует обязательный сертификат';
        resTnved.textContent = 'ТР ТС / ТР ЕАЭС';
        resOkpd2.textContent = 'Сертификация / Декларация';
        resLaw.textContent = results.trap;
        statusPill.className = 'status-pill status-amber';
        statusText.textContent = 'ТРЕБУЕТСЯ ОБЯЗАТЕЛЬНЫЙ СЕРТИФИКАТ ИЛИ ДЕКЛАРАЦИЯ';
        warningTitle.textContent = 'Запрещёно продавать без сертификата:';
        resWarningText.textContent = 'Попытка загрузить отказное письмо на эту продукцию приведет к отклонению карточки модерацией Wildberries / Ozon и штрафу до 300 000 ₽ по КоАП РФ ст. 14.43.';
        
        dockTitle.textContent = 'Оформим сертификат соответствия или декларацию ТР ТС';
        dockText.textContent = 'Напишите нам состав и назначение товара на Kwork. Юрист проверит точный регламент (ТР ТС 007, 008, 004, 020) и поможет официально оформить документ аккредитованной лаборатории.';
        dockBtn.querySelector('span').textContent = 'Проверить товар на Kwork за 1 000 ₽';
        return;
      }

      renderDirectory(results);

      if (results.length > 0) {
        selectItem(results[0].id);
      } else {
        resCategory.textContent = 'Результат проверки';
        resTitle.textContent = 'По запросу «' + e.target.value + '» совпадений в перечне отказных писем нет';
        resTnved.textContent = 'Требуется анализ';
        resOkpd2.textContent = 'ТР ТС / ТР ЕАЭС';
        resLaw.textContent = 'Товар может подпадать под обязательную сертификацию или декларирование соответствия (ТР ТС 004/2011, 008/2011, 017/2011, 020/2011, ПП РФ № 2425). Для точного определения нужен анализ состава и характеристик.';
        statusPill.className = 'status-pill status-amber';
        statusText.textContent = 'ТРЕБУЕТСЯ ПРОВЕРКА ПО ТЕХРЕГЛАМЕНТАМ';
        warningTitle.textContent = 'Внимание:';
        resWarningText.textContent = 'Не продавайте несертифицированный товар вслепую! Штраф Роспотребнадзора по КоАП РФ ст. 14.43 составляет до 300 000 ₽ с блокировкой кабинета на маркетплейсе.';
        
        dockTitle.textContent = 'Бесплатно подберем код ТН ВЭД и проверим сертификацию';
        dockText.textContent = 'Напишите нам категорию и состав товара на Kwork. Юрист проверит продукцию по всем 50+ техническим регламентам и оформит документ за 1 день.';
        dockBtn.querySelector('span').textContent = 'Проверить товар на Kwork за 1 000 ₽';
      }
    });

    // Обработка клика по категориям
    if (quickTabs) quickTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      const cat = btn.dataset.category;
      activeCategory = cat;

      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });

      const results = smartFilter(searchInput.value, activeCategory);
      if (!results.trap) {
        renderDirectory(results);
        if (results.length > 0) {
          selectItem(results[0].id);
        }
      }
    });

    // Очистка поиска
    if (searchClear) searchClear.addEventListener('click', resetSearch);
    if (btnResetSearch) btnResetSearch.addEventListener('click', resetSearch);

    function resetSearch() {
      searchInput.value = '';
      searchClear.style.display = 'none';
      resetSearchWrap.style.display = 'none';
      activeCategory = 'all';
      document.querySelectorAll('.tab-btn').forEach((b, idx) => {
        b.classList.toggle('active', idx === 0);
        b.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
      });
      if (document.getElementById('directoryBody')) { renderDirectory(database); }
      if (document.getElementById('directoryBody')) { selectItem(1); }
      searchInput.focus();
    }

    // Клик по строке таблицы
    if (directoryBody) directoryBody.addEventListener('click', (e) => {
      const row = e.target.closest('.directory-row');
      if (!row) return;
      const id = parseInt(row.dataset.id);
      selectItem(id, true);
    });

    if (directoryBody) directoryBody.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const row = e.target.closest('.directory-row');
        if (!row) return;
        e.preventDefault();
        const id = parseInt(row.dataset.id);
        selectItem(id, true);
      }
    });

    // Горячая клавиша / для поиска
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        resetSearch();
        searchInput.blur();
      }
    });

    // Копирование кодов
    function copyValue(elementId) {
      const text = document.getElementById(elementId).textContent;
      navigator.clipboard.writeText(text).then(() => {
        showToast('Код ' + text + ' скопирован!');
      });
    }

    function showToast(msg) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    }

    // Аккордеон FAQ
    document.querySelectorAll('.faq-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const row = trigger.parentElement;
        const isOpen = row.classList.toggle('open');
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });

    // Старт
    if (document.getElementById('directoryBody')) { renderDirectory(database); }
    if (document.getElementById('directoryBody')) { selectItem(1); }

    if (document.getElementById('calcSlides')) { initCalcControls(); }
    if (document.getElementById('calcSlides')) { calcRecalculate(); }

        // ==================== THERMAL LABELS 58x40 LOGIC ====================

    function setLabelMp(mp) {
      labelMp = mp;
      const btnWb = document.getElementById('btnLabelMpWb');
      const btnOz = document.getElementById('btnLabelMpOzon');
      const subtitle = document.getElementById('labelStandardSubtitle');
      const caption = document.getElementById('labelBarcodeCaption');
      const ruleText = document.getElementById('labelBarcodeRuleText');
      const input = document.getElementById('labelInputBarcode');
      const artInput = document.getElementById('labelInputArticle');
      const mpBadge = document.getElementById('prevLabelMpBadge');

      if (btnWb) btnWb.classList.toggle('active', mp === 'wb');
      if (btnOz) btnOz.classList.toggle('active', mp === 'ozon');

      if (mp === 'wb') {
        if (subtitle) subtitle.textContent = 'Стандарт Wildberries: EAN-13 (13 цифр) · Знак ЕАС по ТР ТС 017/2011';
        if (caption) caption.textContent = 'Штрихкод Wildberries (EAN-13, 13 цифр):';
        if (ruleText) ruleText.textContent = 'Стандарт WB: 13 цифр с обязательным расчётом контрольной цифры';
        if (input && (input.value.startsWith('OZN-') || !/^\d+$/.test(input.value))) {
          input.value = '2038491048292';
        }
        if (artInput && artInput.value.startsWith('OZ-')) {
          artInput.value = 'WB-84920-BL';
        }
        if (mpBadge) mpBadge.style.display = 'none';
      } else {
        if (subtitle) subtitle.textContent = 'Стандарт Ozon: Code-128 (буквы и цифры) · Плашка OZON';
        if (caption) caption.textContent = 'Штрихкод / Баркод Ozon (Code-128, цифры и буквы):';
        if (ruleText) ruleText.textContent = 'Стандарт Ozon: плотный Code-128 без ограничения 13 цифр';
        if (input && input.value === '2038491048292') {
          input.value = 'OZN-84920-BL';
        }
        if (artInput && artInput.value.startsWith('WB-')) {
          artInput.value = 'OZ-11928-WH';
        }
        if (mpBadge) {
          mpBadge.textContent = 'OZON';
          mpBadge.style.display = 'block';
        }
      }
      if (document.getElementById('prevBarcodeSvg')) { updateLabelPreview(); }
    }

    // EAN-13 Checksum calculation
    function calcEan13Checksum(digits12) {
      if (digits12.length !== 12 || !/^\d{12}$/.test(digits12)) return -1;
      let sum = 0;
      for (let i = 0; i < 12; i++) {
        const num = parseInt(digits12[i], 10);
        sum += (i % 2 === 0) ? num : num * 3;
      }
      const mod = sum % 10;
      return (mod === 0) ? 0 : 10 - mod;
    }

    // EAN-13 Patterns
    const EAN_L_CODES = [
      "0001101", "0011001", "0010011", "0111101", "0100011",
      "0110001", "0101111", "0111011", "0110111", "0001011"
    ];
    const EAN_G_CODES = [
      "0100111", "0110011", "0011011", "0100001", "0011101",
      "0111001", "0000101", "0010001", "0001001", "0010111"
    ];
    const EAN_R_CODES = [
      "1110010", "1100110", "1101100", "1000010", "1011100",
      "1001110", "1010000", "1000100", "1001000", "1110100"
    ];
    const EAN_PARITY_PATTERNS = [
      "LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG",
      "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"
    ];

    function generateEan13Pattern(barcode13) {
      if (!/^\d{13}$/.test(barcode13)) return null;
      const firstDigit = parseInt(barcode13[0], 10);
      const pattern = EAN_PARITY_PATTERNS[firstDigit];
      let bits = "101"; // Start marker

      // Left 6 digits
      for (let i = 1; i <= 6; i++) {
        const d = parseInt(barcode13[i], 10);
        bits += (pattern[i - 1] === 'L') ? EAN_L_CODES[d] : EAN_G_CODES[d];
      }

      bits += "01010"; // Center marker

      // Right 6 digits
      for (let i = 7; i <= 12; i++) {
        const d = parseInt(barcode13[i], 10);
        bits += EAN_R_CODES[d];
      }

      bits += "101"; // End marker
      return bits; // Exactly 95 bits
    }

    // Code-128 Dense Generator for Ozon
    function generateCode128Pattern(text) {
      let bits = "11010010000"; // Start B
      for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i) % 10;
        const patterns = [
          "11001101100", "11001100110", "11011001100", "11000110110", "10110011000",
          "10011011000", "10011001100", "10110001100", "10001101100", "10001100110"
        ];
        bits += patterns[code];
      }
      bits += "1100011101011"; // Stop pattern
      return bits;
    }

    function renderBarcodeSvg(svgElem, barcodeVal) {
      svgElem.innerHTML = '';
      const cleanVal = barcodeVal.trim();
      let bits = null;
      let isEan = false;

      if (labelMp === 'wb' && /^\d{13}$/.test(cleanVal)) {
        bits = generateEan13Pattern(cleanVal);
        isEan = true;
      } else if (labelMp === 'wb' && /^\d{12}$/.test(cleanVal)) {
        const check = calcEan13Checksum(cleanVal);
        bits = generateEan13Pattern(cleanVal + check);
        isEan = true;
      } else {
        bits = generateCode128Pattern(cleanVal.length > 0 ? cleanVal : "OZON-11928-WH");
      }

      if (!bits) bits = generateCode128Pattern("123456789");

      const totalBits = bits.length;
      const unitWidth = 2.4;
      const barHeight = 78;
      const svgWidth = totalBits * unitWidth;

      svgElem.setAttribute('viewBox', `0 0 ${svgWidth} ${barHeight}`);

      for (let i = 0; i < bits.length; i++) {
        if (bits[i] === '1') {
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute('x', (i * unitWidth).toFixed(1));
          rect.setAttribute('y', '0');
          rect.setAttribute('width', unitWidth.toFixed(1));
          rect.setAttribute('height', barHeight.toString());
          rect.setAttribute('fill', '#000000');
          svgElem.appendChild(rect);
        }
      }
    }

    function updateLabelPreview() {
      const barcodeInput = document.getElementById('labelInputBarcode');
      const nameInput = document.getElementById('labelInputName');
      const articleInput = document.getElementById('labelInputArticle');
      const sizeInput = document.getElementById('labelInputSize');
      const colorInput = document.getElementById('labelInputColor');
      const compInput = document.getElementById('labelInputComposition');
      const countryInput = document.getElementById('labelInputCountry');
      const sellerInput = document.getElementById('labelInputSeller');
      const eacCheck = document.getElementById('labelCheckEac');
      const statusHint = document.getElementById('labelBarcodeStatus');

      const barcodeVal = barcodeInput ? barcodeInput.value.trim() : '';
      const nameVal = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Наименование товара';
      const artVal = (articleInput && articleInput.value.trim()) ? articleInput.value.trim() : 'АРТ-001';
      const sizeVal = (sizeInput && sizeInput.value.trim()) ? sizeInput.value.trim() : 'M';
      const colorVal = (colorInput && colorInput.value.trim()) ? colorInput.value.trim() : 'Чёрный';
      const compVal = (compInput && compInput.value.trim()) ? compInput.value.trim() : '100% хлопок';
      const countryVal = (countryInput && countryInput.value.trim()) ? countryInput.value.trim() : 'Россия';
      const sellerVal = (sellerInput && sellerInput.value.trim()) ? sellerInput.value.trim() : 'ИП Смирнов В.А.';

      // Валидация баркода
      let isValidBarcode = false;
      let statusMsg = '';

      if (labelMp === 'wb') {
        if (/^\d{13}$/.test(barcodeVal)) {
          const body12 = barcodeVal.slice(0, 12);
          const checkActual = parseInt(barcodeVal[12], 10);
          const checkExpected = calcEan13Checksum(body12);
          if (checkActual === checkExpected) {
            isValidBarcode = true;
            statusMsg = '✓ EAN-13 корректен';
          } else {
            isValidBarcode = false;
            statusMsg = `⚠️ Ошибка: должна быть ${checkExpected}`;
          }
        } else if (/^\d{12}$/.test(barcodeVal)) {
          const checkExpected = calcEan13Checksum(barcodeVal);
          isValidBarcode = false;
          statusMsg = `⚠️ Добавьте контрольную цифру: ${checkExpected}`;
        } else {
          isValidBarcode = false;
          statusMsg = '⚠️ Требуется 13 цифр EAN-13';
        }
      } else {
        // Ozon Code-128
        if (barcodeVal.length >= 4) {
          isValidBarcode = true;
          statusMsg = '✓ Code-128 Ozon принят';
        } else {
          isValidBarcode = false;
          statusMsg = '⚠️ Код слишком короткий';
        }
      }

      if (statusHint) {
        statusHint.textContent = statusMsg;
        statusHint.className = 'barcode-val-hint ' + (isValidBarcode ? 'valid' : 'invalid');
      }

      if (barcodeInput) {
        barcodeInput.classList.toggle('input-error', !isValidBarcode);
      }

      // Обновляем превью DOM
      const prevName = document.getElementById('prevLabelName');
      const prevSub = document.getElementById('prevLabelSub');
      const prevComp = document.getElementById('prevLabelComp');
      const prevSeller = document.getElementById('prevLabelSeller');
      const prevEac = document.getElementById('prevLabelEac');
      const prevDigits = document.getElementById('prevBarcodeDigits');
      const prevSvg = document.getElementById('prevBarcodeSvg');

      if (prevName) prevName.textContent = nameVal;
      if (prevSub) prevSub.textContent = `Арт: ${artVal} | Разм: ${sizeVal} | Цвет: ${colorVal}`;
      if (prevComp) prevComp.textContent = `Состав: ${compVal} | Сделано: ${countryVal}`;
      if (prevSeller) prevSeller.textContent = `Продавец: ${sellerVal}`;
      if (prevEac) prevEac.style.display = (eacCheck && eacCheck.checked) ? 'block' : 'none';

      if (prevDigits) {
        if (labelMp === 'wb' && /^\d{13}$/.test(barcodeVal)) {
          prevDigits.textContent = `${barcodeVal[0]} ${barcodeVal.slice(1, 7)} ${barcodeVal.slice(7, 13)}`;
        } else if (labelMp === 'ozon') {
          prevDigits.textContent = `OZON: ${barcodeVal || 'OZN-84920-BL'}`;
        } else {
          prevDigits.textContent = barcodeVal || '2 000000 000000';
        }
      }

      if (prevSvg) {
        renderBarcodeSvg(prevSvg, barcodeVal || (labelMp === 'wb' ? '2038491048292' : 'OZN-84920-BL'));
      }

      // Водяной знак защитного образца активен всегда
      const wm = document.getElementById('stickerWatermark');
      if (wm) {
        wm.classList.add('active');
      }
    }

    // Изолированная печать ровно 1 страницы 58х40 мм через скрытый iframe
    function printSingleLabel() {
      if (freeLabelsDownloaded >= 1) {
        showFreemiumTrapModal('печать повторной этикетки');
        return;
      }

      const name = (document.getElementById('labelInputName') || {}).value || 'Товар';
      const barcode = (document.getElementById('labelInputBarcode') || {}).value || '2038491048292';
      const art = (document.getElementById('labelInputArticle') || {}).value || '';
      const size = (document.getElementById('labelInputSize') || {}).value || '';
      const color = (document.getElementById('labelInputColor') || {}).value || '';
      const comp = (document.getElementById('labelInputComposition') || {}).value || '';
      const country = (document.getElementById('labelInputCountry') || {}).value || '';
      const seller = (document.getElementById('labelInputSeller') || {}).value || '';
      const eacChecked = (document.getElementById('labelCheckEac') || {}).checked;
      const isOzon = (labelMp === 'ozon');

      const svgInner = document.getElementById('prevBarcodeSvg').innerHTML;
      const svgViewBox = document.getElementById('prevBarcodeSvg').getAttribute('viewBox') || '0 0 200 78';

      // Создаем невидимый iframe для строгой печати 58x40 мм
      const printFrame = document.createElement('iframe');
      printFrame.style.position = 'fixed';
      printFrame.style.right = '0';
      printFrame.style.bottom = '0';
      printFrame.style.width = '0';
      printFrame.style.height = '0';
      printFrame.style.border = '0';
      document.body.appendChild(printFrame);

      const frameDoc = printFrame.contentWindow.document;
      frameDoc.open();
      frameDoc.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Этикетка 58х40 мм</title>
  <style>
    @page {
      size: 58mm 40mm;
      margin: 0;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 58mm;
      height: 40mm;
      background: #ffffff;
      overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    }
    .sticker-print-box {
      width: 58mm;
      height: 40mm;
      padding: 2.2mm 3.2mm 2.2mm 3.2mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }
    .p-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2mm;
    }
    .p-name {
      font-size: 7.5pt;
      font-weight: 800;
      line-height: 1.2;
      color: #000;
      max-height: 5.5mm;
      overflow: hidden;
      flex: 1;
    }
    .p-eac {
      border: 1pt solid #000;
      border-radius: 1.5pt;
      padding: 0.5pt 2pt;
      font-size: 5.5pt;
      font-weight: 900;
      line-height: 1;
      flex-shrink: 0;
    }
    .p-ozon {
      background: #005bff;
      color: #fff;
      border: 1pt solid #005bff;
      border-radius: 1.5pt;
      padding: 0.5pt 2pt;
      font-size: 5.5pt;
      font-weight: 900;
      line-height: 1;
      flex-shrink: 0;
    }
    .p-sub {
      font-size: 5.2pt;
      color: #000;
      line-height: 1.15;
      white-space: nowrap;
      overflow: hidden;
      margin-top: 0.8mm;
    }
    .p-barcode-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0.5mm 0;
    }
    .p-barcode-svg {
      width: 46mm;
      height: 15mm;
    }
    .p-digits {
      font-family: monospace;
      font-size: 7pt;
      font-weight: bold;
      letter-spacing: 1.2pt;
      text-align: center;
      margin-top: 0.5mm;
    }
    .p-bottom {
      font-size: 4.8pt;
      line-height: 1.2;
      color: #000;
    }
    .p-bottom div {
      white-space: nowrap;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div class="sticker-print-box">
    <div class="p-top">
      <div class="p-name">${name.slice(0, 36)}</div>
      <div style="display:flex; gap:1mm; align-items:center;">
        ${isOzon ? '<div class="p-ozon">OZON</div>' : ''}
        ${eacChecked ? '<div class="p-eac">EAC</div>' : ''}
      </div>
    </div>
    <div class="p-sub">Арт: ${art} | Разм: ${size} | Цвет: ${color}</div>
    <div class="p-barcode-wrap" style="position: relative;">
      <svg class="p-barcode-svg" viewBox="${svgViewBox}" preserveAspectRatio="none">
        ${svgInner}
      </svg>
      <div class="p-digits">${isOzon ? 'OZON: ' + barcode : barcode}</div>
      <div style="position: absolute; top: 2.5mm; left: 1mm; right: 1mm; border: 1.2pt dashed #000; background: rgba(255,255,255,0.92); padding: 0.8mm 1mm; text-align: center; font-weight: 900; font-size: 5pt; line-height: 1.1; letter-spacing: 0.5pt; transform: rotate(-8deg);">
        ОБРАЗЕЦ WBCHECK · НЕ ДЛЯ СКЛАДА
      </div>
    </div>
    <div class="p-bottom">
      <div>Состав: ${comp} | Сделано: ${country}</div>
      <div>Продавец: ${seller}</div>
    </div>
  </div>

  <!-- Модальное окно просмотра карточки портфолио -->
  <div id="portfolioModal" class="portfolio-modal" onclick="if(event.target === this) closePortfolioModal();">
    <div class="portfolio-modal-content">
      <button type="button" class="btn-close-modal" onclick="closePortfolioModal();" aria-label="Закрыть">✕</button>
      <img id="modalCardImg" src="" alt="Карточка товара Wildberries" class="portfolio-modal-img">
      <div class="portfolio-modal-body">
        <div>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--emerald-dark); text-transform: uppercase;">Стандарт WB 3:4 (900х1200 px)</span>
          <h3 id="modalCardTitle" style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary); margin: 6px 0 10px;">Название товара</h3>
          <p id="modalCardDesc" style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">Описание композиции и ключевые УТП карточки.</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="background: #f8fafc; border: 1px solid var(--border-hairline); border-radius: var(--radius-md); padding: 12px; font-size: 0.8rem; color: var(--text-secondary);">
            ✓ Проверено: безопасные зоны под сердечко и корзину свободны, доминанта товара 70%, гротескный шрифт.
          </div>
          <a href="https://kwork.ru/e-commerce-social-network/54537490/sozdam-dizayn-kartochek-dlya-wildberries-i-prodayushchuyu-infografiku?ref=25130833" target="_blank" class="btn-card-primary" style="justify-content: center;">
            Заказать такой дизайн на Kwork
          </a>
        </div>
      </div>
    </div>
  </div>

</body>
</html>`);
      frameDoc.close();

      setTimeout(() => {
        printFrame.contentWindow.focus();
        printFrame.contentWindow.print();
        setTimeout(() => document.body.removeChild(printFrame), 2000);

        // Фиксируем использование бесплатной тестовой этикетки
        freeLabelsDownloaded = 1;
        try { localStorage.setItem('wbcheck_free_label_used', '1'); } catch (e) {}
        if (document.getElementById('prevBarcodeSvg')) { updateLabelPreview(); }
        showToast('Тестовый образец отправлен на печать. Чистые этикетки без водяных знаков доступны на Kwork.');
      }, 350);
    }

    // Генерация защищённого образца SVG с неудаляемым водяным знаком
    function generateLabelSvgString() {
      if (document.getElementById('prevBarcodeSvg')) { updateLabelPreview(); }

      const name = (document.getElementById('labelInputName') || {}).value || 'Товар';
      const barcode = (document.getElementById('labelInputBarcode') || {}).value || '2038491048292';
      const art = (document.getElementById('labelInputArticle') || {}).value || '';
      const size = (document.getElementById('labelInputSize') || {}).value || '';
      const color = (document.getElementById('labelInputColor') || {}).value || '';
      const comp = (document.getElementById('labelInputComposition') || {}).value || '';
      const country = (document.getElementById('labelInputCountry') || {}).value || '';
      const seller = (document.getElementById('labelInputSeller') || {}).value || '';
      const eacChecked = (document.getElementById('labelCheckEac') || {}).checked;
      const isOzon = (labelMp === 'ozon');

      const svgInner = document.getElementById('prevBarcodeSvg').innerHTML;

      // Водяной знак защитного образца поверх штрихкода (всегда присутствует)
      const watermarkXml = `
  <g transform="rotate(-16 290 175)">
    <rect x="85" y="136" width="410" height="76" rx="8" fill="#fef2f2" fill-opacity="0.95" stroke="#dc2626" stroke-width="3" stroke-dasharray="8,5"/>
    <text x="290" y="167" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Arial, sans-serif" font-size="20" font-weight="900" fill="#dc2626" letter-spacing="2">ОБРАЗЕЦ WBCHECK</text>
    <text x="290" y="197" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Arial, sans-serif" font-size="15" font-weight="800" fill="#dc2626" letter-spacing="1.5">НЕ ДЛЯ СКЛАДА · ТЕСТ ПРИНТЕРА</text>
  </g>`;

      return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 400" width="100%" height="100%">
  <style>
    text { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; }
    .lbl-title { font-size: 20px; font-weight: 800; fill: #000000; }
    .lbl-sub { font-size: 15px; font-weight: 600; fill: #1e293b; }
    .lbl-digits { font-family: "SF Mono", Monaco, Consolas, "Liberation Mono", monospace; font-size: 21px; font-weight: bold; letter-spacing: 2px; }
    .lbl-bottom { font-size: 14px; fill: #1e293b; }
  </style>
  <rect width="580" height="400" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
  <rect x="25" y="20" width="530" height="360" fill="none" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,4"/>
  
  <!-- Верхняя строка: Название и знаки -->
  <text x="35" y="46" class="lbl-title">${name.slice(0, 34)}</text>
  ${isOzon ? '<rect x="445" y="24" width="52" height="26" fill="#005bff" rx="3"/><text x="454" y="43" font-family="Arial, sans-serif" font-size="14" font-weight="900" fill="#ffffff">OZON</text>' : ''}
  ${eacChecked ? '<rect x="505" y="24" width="45" height="26" fill="none" stroke="#000000" stroke-width="2" rx="3"/><text x="512" y="43" font-family="Arial, sans-serif" font-size="15" font-weight="900" fill="#000000">EAC</text>' : ''}

  <!-- Вторая строка: Артикул, размер, цвет -->
  <text x="35" y="80" class="lbl-sub">Арт: ${art} | Разм: ${size} | Цвет: ${color}</text>

  <!-- Векторный штрихкод строго по центру -->
  <g transform="translate(65, 100) scale(1.95, 1.45)">
    ${svgInner}
  </g>
  <text x="290" y="250" text-anchor="middle" class="lbl-digits">${isOzon ? 'OZON: ' + barcode : barcode}</text>

  <!-- Нижний блок -->
  <text x="35" y="332" class="lbl-bottom">Состав: ${comp} | Сделано: ${country}</text>
  <text x="35" y="362" class="lbl-bottom">Продавец: ${seller}</text>

  ${watermarkXml}
</svg>`;
    }

    // Скачивание тестового образца SVG с водяным знаком
    function downloadSingleSvg() {
      if (freeLabelsDownloaded >= 1) {
        showFreemiumTrapModal('скачивание повторной этикетки');
        return;
      }

      const barcode = (document.getElementById('labelInputBarcode') || {}).value || '2038491048292';
      const svgContent = generateLabelSvgString();

      const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Этикетка_58х40_${barcode}_ОБРАЗЕЦ.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      freeLabelsDownloaded = 1;
      try { localStorage.setItem('wbcheck_free_label_used', '1'); } catch (e) {}
      if (document.getElementById('prevBarcodeSvg')) { updateLabelPreview(); }
      showToast('Тестовый образец SVG скачан. Чистые партии без водяных знаков доступны на Kwork.');
    }

    // Скачивание сверхчёткого тестового изображения PNG (300 DPI) с водяным знаком
    function downloadSinglePng() {
      if (freeLabelsDownloaded >= 1) {
        showFreemiumTrapModal('скачивание повторной этикетки');
        return;
      }

      const barcode = (document.getElementById('labelInputBarcode') || {}).value || '2038491048292';
      const svgContent = generateLabelSvgString();

      const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();

      img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = 1160;
        canvas.height = 800;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 1160, 800);
        ctx.drawImage(img, 0, 0, 1160, 800);
        URL.revokeObjectURL(url);

        canvas.toBlob(function(pngBlob) {
          if (!pngBlob) return;
          const pngUrl = URL.createObjectURL(pngBlob);
          const a = document.createElement('a');
          a.href = pngUrl;
          a.download = `Этикетка_58х40_${barcode}_ОБРАЗЕЦ.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(pngUrl);

          freeLabelsDownloaded = 1;
          try { localStorage.setItem('wbcheck_free_label_used', '1'); } catch (e) {}
          if (document.getElementById('prevBarcodeSvg')) { updateLabelPreview(); }
          showToast('Тестовый образец PNG (300 DPI) скачан. Чистые партии без водяных знаков доступны на Kwork.');
        }, 'image/png');
      };
      img.src = url;
    }

    // Модальное окно лимита и предложение Kwork #25
    function showFreemiumTrapModal(actionName) {
      let modal = document.getElementById('freemiumModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'freemiumModal';
        modal.style.cssText = `
          position: fixed; inset: 0; background: rgba(15, 23, 42, 0.6);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000; padding: 20px;
        `;
        document.body.appendChild(modal);
      }

      modal.innerHTML = `
        <div style="background: #ffffff; border-radius: 12px; max-width: 520px; width: 100%; padding: 28px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); position: relative;">
          <button type="button" onclick="document.getElementById('freemiumModal').style.display='none'" style="position: absolute; top: 16px; right: 16px; border: none; background: transparent; font-size: 20px; cursor: pointer; color: #64748b;">✕</button>
          
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
            <div style="font-size: 28px;">🏷️</div>
            <div>
              <div style="font-weight: 800; font-size: 1.1rem; color: #0f172a;">Бесплатный лимит: 1 этикетка исчерпан</div>
              <div style="font-size: 0.8rem; color: #64748b;">Образец защищён водяным знаком WBCheck</div>
            </div>
          </div>

          <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 12px 16px; margin-bottom: 16px; font-size: 0.84rem; color: #991b1b; line-height: 1.45;">
            <strong>Штраф за нечитаемый штрихкод на складе: 1 500 ₽ за штуку!</strong><br>
            Попытка распечатать этикетку с водяным знаком приведёт к обезличке всей партии на приёмке маркетплейса.
          </div>

          <div style="font-size: 0.86rem; color: #334155; line-height: 1.5; margin-bottom: 20px;">
            Сгенерирую для вас чистый полиграфический PDF 58х40 мм на всю партию до 100 или 300 товаров за 1 000 ₽. Идеальное центрирование штрихкодов, проверка контрольных сумм и гарантированное считывание на складах Wildberries и Ozon.
          </div>

          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="https://kwork.ru/e-commerce-social-network/54550913/sgeneriruyu-termoetiketki-so-shtrikhkodami-58kh40-dlya-wildberries-i-ozon?ref=25130833" target="_blank" class="btn-label-primary" style="flex: 1; min-width: 220px; height: 44px; text-decoration: none;">
              Заказать партию на Kwork (1 000 ₽)
            </a>
            <a href="https://kwork.ru/user/milligat" target="_blank" class="btn-label-secondary" style="height: 44px; padding: 0 16px; text-decoration: none;">
              👤 Профиль автора
            </a>
          </div>
        </div>
      `;
      modal.style.display = 'flex';
    }

    // Переключение способа ввода таблицы (Вставка текста vs Файл)
    function switchBulkInputMethod(method) {
      const btnPaste = document.getElementById('btnTabPaste');
      const btnFile = document.getElementById('btnTabFile');
      const pasteArea = document.getElementById('bulkPasteArea');
      const fileArea = document.getElementById('bulkDropzone');

      if (method === 'paste') {
        if (btnPaste) btnPaste.classList.add('active');
        if (btnFile) btnFile.classList.remove('active');
        if (pasteArea) pasteArea.style.display = 'flex';
        if (fileArea) fileArea.style.display = 'none';
      } else {
        if (btnFile) btnFile.classList.add('active');
        if (btnPaste) btnPaste.classList.remove('active');
        if (pasteArea) pasteArea.style.display = 'none';
        if (fileArea) fileArea.style.display = 'flex';
      }
    }

    // Умный анализатор структуры колонок
    function smartParseRows(lines) {
      if (!lines || lines.length === 0) return [];

      let delimiter = '\t';
      const firstLine = lines[0];
      if (firstLine.includes('\t')) delimiter = '\t';
      else if (firstLine.includes(';')) delimiter = ';';
      else if (firstLine.includes(',')) delimiter = ',';

      const splitLine = (l) => l.split(delimiter).map(s => s.trim().replace(/^["']|["']$/g, ''));
      const headerRow = splitLine(firstLine);

      // Проверяем, является ли первая строка шапкой таблицы
      let colMap = { barcode: -1, art: -1, name: -1, size: -1, color: -1, comp: -1, seller: -1 };
      let hasHeader = false;

      headerRow.forEach((h, idx) => {
        const lh = h.toLowerCase();
        if (/баркод|штрихкод|barcode|ean|код|баркоды/i.test(lh)) { colMap.barcode = idx; hasHeader = true; }
        else if (/артикул|арт|sku|модель/i.test(lh)) { colMap.art = idx; hasHeader = true; }
        else if (/наименование|название|товар|name|номенклатура/i.test(lh)) { colMap.name = idx; hasHeader = true; }
        else if (/размер|size/i.test(lh)) { colMap.size = idx; hasHeader = true; }
        else if (/цвет|color|оттенок/i.test(lh)) { colMap.color = idx; hasHeader = true; }
        else if (/состав|ткань|материал/i.test(lh)) { colMap.comp = idx; hasHeader = true; }
        else if (/продавец|поставщик|юрлицо|seller/i.test(lh)) { colMap.seller = idx; hasHeader = true; }
      });

      // Если заголовков нет, определяем по позициям по умолчанию
      if (!hasHeader) {
        colMap.barcode = 0;
        colMap.art = 1;
        colMap.name = 2;
        colMap.size = 3;
        colMap.color = 4;
      } else if (colMap.barcode === -1) {
        colMap.barcode = 0;
      }

      // Формируем плашку распознанных полей
      const recognizedBox = document.getElementById('bulkColsRecognized');
      if (recognizedBox) {
        const foundNames = [];
        if (colMap.barcode !== -1) foundNames.push(`Штрихкод (кол. ${colMap.barcode + 1})`);
        if (colMap.art !== -1) foundNames.push(`Артикул (кол. ${colMap.art + 1})`);
        if (colMap.name !== -1) foundNames.push(`Товар (кол. ${colMap.name + 1})`);
        if (colMap.size !== -1) foundNames.push(`Размер (кол. ${colMap.size + 1})`);
        if (colMap.color !== -1) foundNames.push(`Цвет (кол. ${colMap.color + 1})`);
        recognizedBox.textContent = `✓ Распознана структура колонок: ${foundNames.join(' · ')}`;
        recognizedBox.style.display = 'block';
      }

      const startIndex = hasHeader ? 1 : 0;
      const parsedRows = [];

      for (let i = startIndex; i < lines.length; i++) {
        const row = splitLine(lines[i]);
        if (row.length === 0 || (row.length === 1 && !row[0])) continue;

        parsedRows.push({
          barcode: (colMap.barcode !== -1 && row[colMap.barcode]) ? row[colMap.barcode] : (row[0] || ''),
          art: (colMap.art !== -1 && row[colMap.art]) ? row[colMap.art] : (row[1] || ''),
          name: (colMap.name !== -1 && row[colMap.name]) ? row[colMap.name] : (row[2] || 'Товар'),
          size: (colMap.size !== -1 && row[colMap.size]) ? row[colMap.size] : (row[3] || '-'),
          color: (colMap.color !== -1 && row[colMap.color]) ? row[colMap.color] : (row[4] || '-'),
          comp: (colMap.comp !== -1 && row[colMap.comp]) ? row[colMap.comp] : '100% хлопок',
          seller: (colMap.seller !== -1 && row[colMap.seller]) ? row[colMap.seller] : 'ИП Смирнов В.А.'
        });
      }

      return parsedRows;
    }

    function parsePastedExcelText() {
      const textarea = document.getElementById('bulkPasteInput');
      if (!textarea || !textarea.value.trim()) {
        showToast('Вставьте скопированные строки из Excel в поле ввода');
        return;
      }
      const lines = textarea.value.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
      const rows = smartParseRows(lines);
      if (rows.length > 0) {
        processBulkRows(rows);
      } else {
        showToast('Не удалось распознать строки товаров');
      }
    }

    // Демо-данные из Excel
    const DEMO_EXCEL_ROWS = [
      {
        barcode: "2038491048292", // Корректный EAN-13
        art: "WB-84920-BL",
        name: "Платье вечернее миди женское",
        size: "48 (M)",
        color: "Чёрный",
        comp: "100% вискоза",
        country: "Россия",
        seller: "ИП Смирнов В.А."
      },
      {
        barcode: "2.0491E+12", // Ошибка Excel!
        art: "OZ-11928-WH",
        name: "Кроссовки мужские кожаные",
        size: "42 EU",
        color: "Белый",
        comp: "Натуральная кожа",
        country: "Россия",
        seller: "ООО ТрейдМаркет"
      },
      {
        barcode: "4607182940195", // Ошибка контрольной суммы EAN-13 (должна быть 2)!
        art: "WB-55019-GR",
        name: "Худи оверсайз с начёсом",
        size: "L (50)",
        color: "Серый меланж",
        comp: "80% хлопок, 20% п/э",
        country: "Россия",
        seller: "ИП Смирнов В.А."
      }
    ];

    let currentBulkRows = [];

    function loadDemoExcelData() {
      currentBulkRows = DEMO_EXCEL_ROWS;
      const recognizedBox = document.getElementById('bulkColsRecognized');
      if (recognizedBox) {
        recognizedBox.textContent = '✓ Демо-пример загружен: Штрихкод · Артикул · Наименование · Размер · Цвет · Состав';
        recognizedBox.style.display = 'block';
      }
      processBulkRows(DEMO_EXCEL_ROWS);
    }

    function processBulkRows(rows) {
      currentBulkRows = rows;
      const resultsBox = document.getElementById('bulkResultsBox');
      const tableBody = document.getElementById('bulkTableBody');
      const countTotal = document.getElementById('bulkCountTotal');
      const countOk = document.getElementById('bulkCountOk');
      const countErr = document.getElementById('bulkCountErr');
      const riskEst = document.getElementById('bulkRiskEstimate');

      if (!resultsBox || !tableBody) return;

      tableBody.innerHTML = '';
      let okCount = 0;
      let errCount = 0;

      rows.forEach((row, idx) => {
        let isOk = true;
        let errReason = '';
        const rawBarcode = String(row.barcode || '').trim();

        if (rawBarcode.includes('E+') || rawBarcode.includes('e+')) {
          isOk = false;
          errReason = 'Ошибка Excel: экспоненциальная запись 2.04E+12';
        } else if (labelMp === 'wb') {
          if (!/^\d{13}$/.test(rawBarcode)) {
            isOk = false;
            errReason = 'Длина кода не равна 13 цифрам';
          } else {
            const body12 = rawBarcode.slice(0, 12);
            const actual = parseInt(rawBarcode[12], 10);
            const expected = calcEan13Checksum(body12);
            if (actual !== expected) {
              isOk = false;
              errReason = `Битая контрольная сумма (ожидалась ${expected})`;
            }
          }
        } else {
          // Ozon
          if (rawBarcode.length < 4) {
            isOk = false;
            errReason = 'Код Ozon слишком короткий';
          }
        }

        if (isOk) okCount++;
        else errCount++;

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${idx + 1}</td>
          <td style="font-family: var(--font-mono); font-weight: 700;">${rawBarcode}</td>
          <td>
            <span class="${isOk ? 'badge-status-ok' : 'badge-status-err'}">
              ${isOk ? '✓ Проверен' : '⚠️ ' + errReason}
            </span>
          </td>
          <td>${row.art || '-'}</td>
          <td>${(row.name || '').slice(0, 24)}</td>
          <td>${row.size || '-'}</td>
          <td>
            <button type="button" class="btn-label-secondary" style="height: 26px; font-size: 0.72rem; padding: 0 8px;" onclick="previewBulkRow(${idx})">
              В превью
            </button>
          </td>
        `;
        tableBody.appendChild(tr);
      });

      if (countTotal) countTotal.textContent = `Всего товаров: ${rows.length}`;
      if (countOk) countOk.textContent = `✓ Готовы к печати: ${okCount}`;
      if (countErr) countErr.textContent = `⚠️ С ошибками: ${errCount}`;
      if (riskEst) riskEst.textContent = `Оценка риска штрафов WB: ${(errCount * 1500).toLocaleString('ru-RU')} ₽`;

      resultsBox.classList.add('show');

      // При массовом режиме активируем водяной знак
      if (rows.length > 1) {
        const wm = document.getElementById('stickerWatermark');
        if (wm) wm.classList.add('active');
      }

      showToast(`Проверено товаров: ${rows.length}. Выявлено критических ошибок: ${errCount}`);
    }

    function previewBulkRow(idx) {
      const row = currentBulkRows[idx];
      if (!row) return;

      const barcodeInput = document.getElementById('labelInputBarcode');
      const nameInput = document.getElementById('labelInputName');
      const artInput = document.getElementById('labelInputArticle');
      const sizeInput = document.getElementById('labelInputSize');
      const colorInput = document.getElementById('labelInputColor');
      const compInput = document.getElementById('labelInputComposition');

      if (barcodeInput) barcodeInput.value = row.barcode;
      if (nameInput) nameInput.value = row.name;
      if (artInput) artInput.value = row.art;
      if (sizeInput) sizeInput.value = row.size;
      if (colorInput) colorInput.value = row.color;
      if (compInput) compInput.value = row.comp;

      if (document.getElementById('prevBarcodeSvg')) { updateLabelPreview(); }
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }

    function handleBulkFileSelect(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const text = e.target.result;
        const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
        const rows = smartParseRows(lines);
        if (rows.length > 0) {
          processBulkRows(rows);
        } else {
          showToast('Не удалось распознать строки товаров в файле');
        }
      };
      reader.readAsText(file);
    }


    // ==================== DESIGNER QR INSERTS GENERATOR ENGINE ====================
    // 1. Автономная библиотека qrcode.min.js с поддержкой Level H (30% коррекции)
    var qrcode=function(){function i(t,r){function a(t,r){g=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(l=4*u+17),e(0,0),e(l-7,0),e(0,l-7),i(),o(),v(t,r),7<=u&&h(t),null==n&&(n=w(u,f,c)),d(n,r)}var u=t,f=y[r],g=null,l=0,n=null,c=[],s={},e=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||l<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||l<=r+n||(g[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},o=function(){for(var t=8;t<l-8;t+=1)null==g[t][6]&&(g[t][6]=t%2==0);for(var r=8;r<l-8;r+=1)null==g[6][r]&&(g[6][r]=r%2==0)},i=function(){for(var t=B.getPatternPosition(u),r=0;r<t.length;r+=1)for(var e=0;e<t.length;e+=1){var n=t[r],o=t[e];if(null==g[n][o])for(var i=-2;i<=2;i+=1)for(var a=-2;a<=2;a+=1)g[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},h=function(t){for(var r=B.getBCHTypeNumber(u),e=0;e<18;e+=1){var n=!t&&1==(r>>e&1);g[Math.floor(e/3)][e%3+l-8-3]=n}for(e=0;e<18;e+=1){n=!t&&1==(r>>e&1);g[e%3+l-8-3][Math.floor(e/3)]=n}},v=function(t,r){for(var e=f<<3|r,n=B.getBCHTypeInfo(e),o=0;o<15;o+=1){var i=!t&&1==(n>>o&1);o<6?g[o][8]=i:o<8?g[o+1][8]=i:g[l-15+o][8]=i}for(o=0;o<15;o+=1){i=!t&&1==(n>>o&1);o<8?g[8][l-o-1]=i:o<9?g[8][15-o-1+1]=i:g[8][15-o-1]=i}g[l-8][8]=!t},d=function(t,r){for(var e=-1,n=l-1,o=7,i=0,a=B.getMaskFunction(r),u=l-1;0<u;u-=2)for(6==u&&(u-=1);;){for(var f=0;f<2;f+=1)if(null==g[n][u-f]){var c=!1;i<t.length&&(c=1==(t[i]>>>o&1)),a(n,u-f)&&(c=!c),g[n][u-f]=c,-1==(o-=1)&&(i+=1,o=7)}if((n+=e)<0||l<=n){n-=e,e=-e;break}}},w=function(t,r,e){for(var n=b.getRSBlocks(t,r),o=M(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=C(i[u],l.getLength()-1).mod(l);a[u]=new Array(l.getLength()-1);for(g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=0<=s?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};s.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=x(t);break;case"Alphanumeric":e=m(t);break;case"Byte":e=L(t);break;case"Kanji":e=D(t);break;default:throw"mode:"+r}c.push(e),n=null},s.isDark=function(t,r){if(t<0||l<=t||r<0||l<=r)throw t+","+r;return g[t][r]},s.getModuleCount=function(){return l},s.make=function(){if(u<1){for(var t=1;t<40;t++){for(var r=b.getRSBlocks(t,f),e=M(),n=0;n<c.length;n++){var o=c[n];e.put(o.getMode(),4),e.put(o.getLength(),B.getLengthInBits(o.getMode(),t)),o.write(e)}var i=0;for(n=0;n<r.length;n++)i+=r[n].dataCount;if(e.getLengthInBits()<=8*i)break}u=t}a(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){a(!0,e);var n=B.getLostPoint(s);(0==e||n<t)&&(t=n,r=e)}return r}())},s.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<s.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<s.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=s.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},s.createSvgTag=function(t,r,e,n){var o={};"object"==typeof t&&(t=(o=t).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,f,c=s.getModuleCount()*t+2*r,g="";for(f="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",g+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',g+=o.scalable?"":' width="'+c+'px" height="'+c+'px"',g+=' viewBox="0 0 '+c+" "+c+'" ',g+=' preserveAspectRatio="xMinYMin meet"',g+=n.text||e.text?' role="img" aria-labelledby="'+p([n.id,e.id].join(" ").trim())+'"':"",g+=">",g+=n.text?'<title id="'+p(n.id)+'">'+p(n.text)+"</title>":"",g+=e.text?'<description id="'+p(e.id)+'">'+p(e.text)+"</description>":"",g+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',g+='<path d="',a=0;a<s.getModuleCount();a+=1)for(u=a*t+r,i=0;i<s.getModuleCount();i+=1)s.isDark(a,i)&&(g+="M"+(i*t+r)+","+u+f);return g+='" stroke="transparent" fill="black"/>',g+="</svg>"},s.createDataURL=function(o,t){o=o||2,t=void 0===t?4*o:t;var r=s.getModuleCount()*o+2*t,i=t,a=r-t;return I(r,r,function(t,r){if(i<=t&&t<a&&i<=r&&r<a){var e=Math.floor((t-i)/o),n=Math.floor((r-i)/o);return s.isDark(n,e)?0:1}return 1})},s.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=s.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=s.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=p(e),o+='"'),o+="/>"};var p=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return s.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*s.getModuleCount()+2*t,u=t,f=a-t,c={"██":"█","█ ":"▀"," █":"▄","  ":" "},g={"██":"▀","█ ":"▀"," █":" ","  ":" "},l="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<f&&u<=r&&r<f&&s.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<f&&u<=r+1&&r+1<f&&s.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",l+=t<1&&f<=r+1?g[i]:c[i];l+="\n"}return a%2&&0<t?l.substring(0,l.length-a-1)+Array(1+a).join("▀"):l.substring(0,l.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=s.getModuleCount()*t+2*r,u=r,f=a-r,c=Array(t+1).join("██"),g=Array(t+1).join("  "),l="",h="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),h="",n=0;n<a;n+=1)i=1,u<=n&&n<f&&u<=e&&e<f&&s.isDark(o,Math.floor((n-u)/t))&&(i=0),h+=i?c:g;for(o=0;o<t;o+=1)l+=h+"\n"}return l.substring(0,l.length-1)},s.renderTo2dContext=function(t,r){r=r||2;for(var e=s.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=s.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},s}i.stringToBytes=(i.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,i.createStringToBytes=function(u,f){var i=function(){function t(){var t=r.read();if(-1==t)throw"eof";return t}for(var r=S(u),e=0,n={};;){var o=r.read();if(-1==o)break;var i=t(),a=t()<<8|t();n[String.fromCharCode(o<<8|i)]=a,e+=1}if(e!=f)throw e+" != "+f;return n}(),a="?".charCodeAt(0);return function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);if(n<128)r.push(n);else{var o=i[t.charAt(e)];"number"==typeof o?(255&o)==o?r.push(o):(r.push(o>>>8),r.push(255&o)):r.push(a)}}return r}};var r,t,a=1,u=2,o=4,f=8,y={L:1,M:0,Q:3,H:2},e=0,n=1,c=2,g=3,l=4,h=5,s=6,v=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],(t={}).getBCHTypeInfo=function(t){for(var r=t<<10;0<=d(r)-d(1335);)r^=1335<<d(r)-d(1335);return 21522^(t<<10|r)},t.getBCHTypeNumber=function(t){for(var r=t<<12;0<=d(r)-d(7973);)r^=7973<<d(r)-d(7973);return t<<12|r},t.getPatternPosition=function(t){return r[t-1]},t.getMaskFunction=function(t){switch(t){case e:return function(t,r){return(t+r)%2==0};case n:return function(t,r){return t%2==0};case c:return function(t,r){return r%3==0};case g:return function(t,r){return(t+r)%3==0};case l:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case h:return function(t,r){return t*r%2+t*r%3==0};case s:return function(t,r){return(t*r%2+t*r%3)%2==0};case v:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},t.getErrorCorrectPolynomial=function(t){for(var r=C([1],0),e=0;e<t;e+=1)r=r.multiply(C([1,w.gexp(e)],0));return r},t.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case o:case f:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case o:return 16;case f:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case o:return 16;case f:return 12;default:throw"mode:"+t}}},t.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);5<i&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},t);function d(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r}var w=function(){for(var r=new Array(256),e=new Array(256),t=0;t<8;t+=1)r[t]=1<<t;for(t=8;t<256;t+=1)r[t]=r[t-4]^r[t-5]^r[t-6]^r[t-8];for(t=0;t<255;t+=1)e[r[t]]=t;var n={glog:function(t){if(t<1)throw"glog("+t+")";return e[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return r[t]}};return n}();function C(n,o){if(void 0===n.length)throw n.length+"/"+o;var r=function(){for(var t=0;t<n.length&&0==n[t];)t+=1;for(var r=new Array(n.length-t+o),e=0;e<n.length-t;e+=1)r[e]=n[e+t];return r}(),i={getAt:function(t){return r[t]},getLength:function(){return r.length},multiply:function(t){for(var r=new Array(i.getLength()+t.getLength()-1),e=0;e<i.getLength();e+=1)for(var n=0;n<t.getLength();n+=1)r[e+n]^=w.gexp(w.glog(i.getAt(e))+w.glog(t.getAt(n)));return C(r,0)},mod:function(t){if(i.getLength()-t.getLength()<0)return i;for(var r=w.glog(i.getAt(0))-w.glog(t.getAt(0)),e=new Array(i.getLength()),n=0;n<i.getLength();n+=1)e[n]=i.getAt(n);for(n=0;n<t.getLength();n+=1)e[n]^=w.gexp(w.glog(t.getAt(n))+r);return C(e,0).mod(t)}};return i}function p(){var e=[],o={writeByte:function(t){e.push(255&t)},writeShort:function(t){o.writeByte(t),o.writeByte(t>>>8)},writeBytes:function(t,r,e){r=r||0,e=e||t.length;for(var n=0;n<e;n+=1)o.writeByte(t[n+r])},writeString:function(t){for(var r=0;r<t.length;r+=1)o.writeByte(t.charCodeAt(r))},toByteArray:function(){return e},toString:function(){var t="";t+="[";for(var r=0;r<e.length;r+=1)0<r&&(t+=","),t+=e[r];return t+="]"}};return o}var k,A,b=(k=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],(A={}).getRSBlocks=function(t,r){var e=function(t,r){switch(r){case y.L:return k[4*(t-1)+0];case y.M:return k[4*(t-1)+1];case y.Q:return k[4*(t-1)+2];case y.H:return k[4*(t-1)+3];default:return}}(t,r);if(void 0===e)throw"bad rs block @ typeNumber:"+t+"/errorCorrectionLevel:"+r;for(var n,o,i=e.length/3,a=[],u=0;u<i;u+=1)for(var f=e[3*u+0],c=e[3*u+1],g=e[3*u+2],l=0;l<f;l+=1)a.push((n=g,o=void 0,(o={}).totalCount=c,o.dataCount=n,o));return a},A),M=function(){var e=[],n=0,o={getBuffer:function(){return e},getAt:function(t){var r=Math.floor(t/8);return 1==(e[r]>>>7-t%8&1)},put:function(t,r){for(var e=0;e<r;e+=1)o.putBit(1==(t>>>r-e-1&1))},getLengthInBits:function(){return n},putBit:function(t){var r=Math.floor(n/8);e.length<=r&&e.push(0),t&&(e[r]|=128>>>n%8),n+=1}};return o},x=function(t){var r=a,n=t,e={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+2<r.length;)t.put(o(r.substring(e,e+3)),10),e+=3;e<r.length&&(r.length-e==1?t.put(o(r.substring(e,e+1)),4):r.length-e==2&&t.put(o(r.substring(e,e+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return e},m=function(t){var r=u,n=t,e={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+1<r.length;)t.put(45*o(r.charAt(e))+o(r.charAt(e+1)),11),e+=2;e<r.length&&t.put(o(r.charAt(e)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return e},L=function(t){var r=o,e=i.stringToBytes(t),n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=0;r<e.length;r+=1)t.put(e[r],8)}};return n},D=function(t){var r=f,e=i.stringToBytesFuncs.SJIS;if(!e)throw"sjis not supported.";!function(){var t=e("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=e(t),n={getMode:function(){return r},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return n},S=function(t){var e=t,n=0,o=0,i=0,r={read:function(){for(;i<8;){if(n>=e.length){if(0==i)return-1;throw"unexpected end of file./"+i}var t=e.charAt(n);if(n+=1,"="==t)return i=0,-1;t.match(/^\s$/)||(o=o<<6|a(t.charCodeAt(0)),i+=6)}var r=o>>>i-8&255;return i-=8,r}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return r},I=function(t,r,e){for(var n=function(t,r){var n=t,o=r,l=new Array(t*r),e={setPixel:function(t,r,e){l[r*n+t]=e},write:function(t){t.writeString("GIF87a"),t.writeShort(n),t.writeShort(o),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(n),t.writeShort(o),t.writeByte(0);var r=i(2);t.writeByte(2);for(var e=0;255<r.length-e;)t.writeByte(255),t.writeBytes(r,e,255),e+=255;t.writeByte(r.length-e),t.writeBytes(r,e,r.length-e),t.writeByte(0),t.writeString(";")}},i=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,o=h(),i=0;i<r;i+=1)o.add(String.fromCharCode(i));o.add(String.fromCharCode(r)),o.add(String.fromCharCode(e));var a=p(),u=function(t){var e=t,n=0,o=0,r={write:function(t,r){if(t>>>r!=0)throw"length over";for(;8<=n+r;)e.writeByte(255&(t<<n|o)),r-=8-n,t>>>=8-n,n=o=0;o|=t<<n,n+=r},flush:function(){0<n&&e.writeByte(o)}};return r}(a);u.write(r,n);var f=0,c=String.fromCharCode(l[f]);for(f+=1;f<l.length;){var g=String.fromCharCode(l[f]);f+=1,o.contains(c+g)?c+=g:(u.write(o.indexOf(c),n),o.size()<4095&&(o.size()==1<<n&&(n+=1),o.add(c+g)),c=g)}return u.write(o.indexOf(c),n),u.write(e,n),u.flush(),a.toByteArray()},h=function(){var r={},e=0,n={add:function(t){if(n.contains(t))throw"dup key:"+t;r[t]=e,e+=1},size:function(){return e},indexOf:function(t){return r[t]},contains:function(t){return void 0!==r[t]}};return n};return e}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=p();n.write(a);for(var u=function(){function e(t){a+=String.fromCharCode(r(63&t))}var n=0,o=0,i=0,a="",t={},r=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return t.writeByte=function(t){for(n=n<<8|255&t,o+=8,i+=1;6<=o;)e(n>>>o-6),o-=6},t.flush=function(){if(0<o&&(e(n<<6-o),o=n=0),i%3!=0)for(var t=3-i%3,r=0;r<t;r+=1)a+="="},t.toString=function(){return a},t}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return i}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||57344<=n?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&(module.exports=t())}(function(){return qrcode});

    qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];

    // 2. Состояние генератора вкладышей
    let qrTheme = 'titanium';
    let qrColors = { top: '#0F172A', bottom: '#334155' };
    let qrIcon = 'support';
    let qrCustomLogoImg = null;
    let qrCustomLogoName = '';

    const QR_THEMES = {
      titanium: { top: '#0F172A', bottom: '#334155' },
      emerald: { top: '#059669', bottom: '#10B981' },
      ozon: { top: '#005BFF', bottom: '#00A2FF' },
      rose: { top: '#DB2777', bottom: '#F43F5E' },
      amber: { top: '#D97706', bottom: '#F59E0B' },
      wb: { top: '#831843', bottom: '#9D174D' }
    };

    const QR_PRESETS = {
      support: {
        url: 'https://t.me/your_brand_bot',
        brand: 'WILDBERRIES BRAND',
        subtitle: 'Служба заботы о покупателях',
        theme: 'titanium',
        icon: 'support'
      },
      manual: {
        url: 'https://wbcheck.ru/manual',
        brand: 'SMART TECH',
        subtitle: 'Инструкция и видеообзор товара',
        theme: 'ozon',
        icon: 'check'
      },
      warranty: {
        url: 'https://wbcheck.ru/warranty',
        brand: 'PREMIUM QUALITY',
        subtitle: 'Активация гарантии 365 дней',
        theme: 'titanium',
        icon: 'star'
      },
      gift: {
        url: 'https://wbcheck.ru/gift',
        brand: 'BEAUTY SHOP',
        subtitle: 'Заберите подарок к заказу',
        theme: 'emerald',
        icon: 'gift'
      }
    };

    function setQrTheme(themeKey) {
      qrTheme = themeKey;
      if (QR_THEMES[themeKey]) {
        qrColors = { ...QR_THEMES[themeKey] };
      }
      document.querySelectorAll('.qr-swatch-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === themeKey);
      });
      if (document.getElementById('qrCanvas')) { updateQrPreview(); }
    }

    function applyCustomQrColors() {
      const c1 = document.getElementById('qrCustomColor1').value;
      const c2 = document.getElementById('qrCustomColor2').value;
      qrColors = { top: c1, bottom: c2 };
      qrTheme = 'custom';
      document.querySelectorAll('.qr-swatch-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      if (document.getElementById('qrCanvas')) { updateQrPreview(); }
    }

    function setQrIcon(iconType) {
      qrIcon = iconType;
      document.querySelectorAll('.qr-icon-pill').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.icon === iconType);
      });
      if (document.getElementById('qrCanvas')) { updateQrPreview(); }
    }

    function applyQrPreset(presetKey) {
      const p = QR_PRESETS[presetKey];
      if (!p) return;

      const inputUrl = document.getElementById('qrInputUrl');
      const inputBrand = document.getElementById('qrInputBrand');
      const inputSubtitle = document.getElementById('qrInputSubtitle');

      if (inputUrl) inputUrl.value = p.url;
      if (inputBrand) inputBrand.value = p.brand;
      if (inputSubtitle) inputSubtitle.value = p.subtitle;

      document.querySelectorAll('.qr-preset-chip').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.preset === presetKey);
      });

      setQrTheme(p.theme);
      setQrIcon(p.icon);
    }

    function handleQrLogoUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      if (file.size > 2 * 1024 * 1024) {
        showToast('Размер логотипа превышает 2 МБ');
        return;
      }

      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
          qrCustomLogoImg = img;
          qrCustomLogoName = file.name;
          qrIcon = 'custom';

          document.querySelectorAll('.qr-icon-pill').forEach(btn => btn.classList.remove('active'));
          const uploadBtn = document.getElementById('btnUploadLogo');
          if (uploadBtn) uploadBtn.classList.add('active');

          const badge = document.getElementById('qrLogoNameBadge');
          const text = document.getElementById('qrLogoNameText');
          if (badge && text) {
            text.textContent = '✓ ' + (file.name.length > 20 ? file.name.slice(0, 18) + '...' : file.name);
            badge.style.display = 'flex';
          }

          if (document.getElementById('qrCanvas')) { updateQrPreview(); }
          showToast('Логотип успешно внедрён в макет');
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    function removeCustomQrLogo() {
      qrCustomLogoImg = null;
      qrCustomLogoName = '';
      qrIcon = 'support';

      const badge = document.getElementById('qrLogoNameBadge');
      if (badge) badge.style.display = 'none';

      const fileInput = document.getElementById('qrLogoFileInput');
      if (fileInput) fileInput.value = '';

      const uploadBtn = document.getElementById('btnUploadLogo');
      if (uploadBtn) uploadBtn.classList.remove('active');

      setQrIcon('support');
      showToast('Пользовательский логотип удалён');
    }

    // Рендерер холста: все графические элементы и защитный водяной знак рисуются прямо в растровый буфер canvas.
    // В F12 невозможно вырезать водяной знак, так как он не существует как отдельный DOM-элемент!
    function renderQrToCanvas(canvas, options) {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const cardW = 600;
      const cardH = 700;
      canvas.width = cardW;
      canvas.height = cardH;

      const url = options.url || 'https://wbcheck.ru';
      const brand = options.brand || 'WILDBERRIES BRAND';
      const subtitle = options.subtitle || 'Служба заботы о покупателях';
      const topColor = options.topColor || '#0F172A';
      const bottomColor = options.bottomColor || '#334155';
      const iconType = options.iconType || 'support';
      const logoImg = options.logoImg || null;
      const isWatermark = options.watermark !== false;

      // 1. Очистка холста
      ctx.clearRect(0, 0, cardW, cardH);

      // 2. Фон карточки со скруглёнными углами (squircle card)
      ctx.save();
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = 'rgba(9, 30, 66, 0.12)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 12;
      ctx.beginPath();
      ctx.roundRect(30, 30, cardW - 60, cardH - 60, 44);
      ctx.fill();
      ctx.restore();

      // Тонкая рамка карточки
      ctx.save();
      ctx.strokeStyle = '#F1F5F9';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(30, 30, cardW - 60, cardH - 60, 44);
      ctx.stroke();
      ctx.restore();

      // 3. Генерация QR матрицы Level H (30% коррекции)
      let qr;
      try {
        qr = qrcode(0, 'H');
        qr.addData(url);
        qr.make();
      } catch (err) {
        qr = qrcode(0, 'M');
        qr.addData(url);
        qr.make();
      }

      const n = qr.getModuleCount();
      const qrSize = 436;
      const modSize = qrSize / n;
      const rVal = modSize * 0.32;
      const pad = modSize * 0.08;

      const qx = (cardW - qrSize) / 2;
      const qy = 72;

      const finderCoords = [[0, 0], [0, n - 7], [n - 7, 0]];
      function isInFinder(r, c) {
        for (const [fr, fc] of finderCoords) {
          if (r >= fr && r < fr + 7 && c >= fc && c < fc + 7) return true;
        }
        return false;
      }

      const centerMod = n / 2.0;
      const logoRMod = 2.6;
      function isInCenter(r, c) {
        return Math.hypot(r + 0.5 - centerMod, c + 0.5 - centerMod) <= logoRMod;
      }

      // Единый градиент для модулей и маркеров
      const grad = ctx.createLinearGradient(qx, qy, qx + qrSize, qy + qrSize);
      grad.addColorStop(0, topColor);
      grad.addColorStop(1, bottomColor);

      // 4. Отрисовка точек-сквирклов
      ctx.save();
      ctx.fillStyle = grad;
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
          if (isInFinder(r, c) || isInCenter(r, c)) continue;
          if (qr.isDark(r, c)) {
            const x = qx + c * modSize + pad;
            const y = qy + r * modSize + pad;
            const s = modSize - 2 * pad;
            ctx.beginPath();
            ctx.roundRect(x, y, s, s, rVal);
            ctx.fill();
          }
        }
      }
      ctx.restore();

      // 5. Отрисовка скруглённых маркеров (Finder patterns)
      ctx.save();
      for (const [fr, fc] of finderCoords) {
        const fx = qx + fc * modSize;
        const fy = qy + fr * modSize;
        const fw = 7 * modSize;
        const outerRx = 2.2 * modSize;
        const innerRx = 1.4 * modSize;
        const dotRx = 1.1 * modSize;

        // Внешний контур
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(fx, fy, fw, fw, outerRx);
        ctx.fill();

        // Белый внутренний вырез
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.roundRect(fx + modSize, fy + modSize, fw - 2 * modSize, fw - 2 * modSize, innerRx);
        ctx.fill();

        // Центральная точка
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(fx + 2 * modSize, fy + 2 * modSize, fw - 4 * modSize, fw - 4 * modSize, dotRx);
        ctx.fill();
      }
      ctx.restore();

      // 6. Центральный круг под логотип
      const cx = qx + qrSize / 2;
      const cy = qy + qrSize / 2;
      const logoRPx = logoRMod * modSize * 0.96;
      const s = logoRPx * 0.58;

      // Белая защитная подложка
      ctx.save();
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(cx, cy, logoRPx + 5, 0, Math.PI * 2);
      ctx.fill();

      // Цветной круг
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, logoRPx, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Иконка или логотип
      if (iconType === 'custom' && logoImg) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, logoRPx, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(logoImg, cx - logoRPx, cy - logoRPx, logoRPx * 2, logoRPx * 2);
        ctx.restore();
      } else {
        ctx.save();
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#FFFFFF';

        if (iconType === 'telegram') {
          const p1x = cx + s * 0.82, p1y = cy - s * 0.65;
          const p2x = cx - s * 0.85, p2y = cy - s * 0.12;
          const p3x = cx - s * 0.22, p3y = cy + s * 0.65;
          const p4x = cx - s * 0.12, p4y = cy + s * 0.12;
          const p5x = cx - s * 0.40, p5y = cy + s * 0.38;

          ctx.beginPath();
          ctx.moveTo(p1x, p1y); ctx.lineTo(p2x, p2y); ctx.lineTo(p4x, p4y); ctx.closePath();
          ctx.fillStyle = '#FFFFFF'; ctx.fill();

          ctx.beginPath();
          ctx.moveTo(p1x, p1y); ctx.lineTo(p4x, p4y); ctx.lineTo(p3x, p3y); ctx.closePath();
          ctx.fillStyle = '#EBF5FF'; ctx.fill();

          ctx.beginPath();
          ctx.moveTo(p4x, p4y); ctx.lineTo(p3x, p3y); ctx.lineTo(p5x, p5y); ctx.closePath();
          ctx.fillStyle = '#C3DCFF'; ctx.fill();
        } else if (iconType === 'support') {
          ctx.beginPath();
          ctx.moveTo(cx, cy + s * 0.65);
          ctx.bezierCurveTo(cx - s * 0.9, cy + s * 0.1, cx - s * 0.9, cy - s * 0.5, cx, cy - s * 0.2);
          ctx.bezierCurveTo(cx + s * 0.9, cy - s * 0.5, cx + s * 0.9, cy + s * 0.1, cx, cy + s * 0.65);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        } else if (iconType === 'star') {
          ctx.beginPath();
          const pts = [
            [cx, cy - s * 0.85],
            [cx + s * 0.25, cy - s * 0.25],
            [cx + s * 0.85, cy],
            [cx + s * 0.25, cy + s * 0.25],
            [cx, cy + s * 0.85],
            [cx - s * 0.25, cy + s * 0.25],
            [cx - s * 0.85, cy],
            [cx - s * 0.25, cy - s * 0.25]
          ];
          pts.forEach(([px, py], i) => i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py));
          ctx.closePath();
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        } else if (iconType === 'gift') {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(cx - s * 0.55, cy - s * 0.2, s * 1.1, s * 0.8);
          ctx.fillRect(cx - s * 0.65, cy - s * 0.5, s * 1.3, s * 0.28);
          ctx.fillStyle = grad;
          ctx.fillRect(cx - s * 0.12, cy - s * 0.5, s * 0.24, s * 1.1);
        } else {
          // Checkmark
          ctx.lineWidth = s * 0.24;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.beginPath();
          ctx.moveTo(cx - s * 0.45, cy);
          ctx.lineTo(cx - s * 0.1, cy + s * 0.35);
          ctx.lineTo(cx + s * 0.5, cy - s * 0.35);
          ctx.stroke();
        }
        ctx.restore();
      }

      // 7. Текстовый блок (Бренд и Назначение)
      const ty = qy + qrSize + 56;
      ctx.save();
      ctx.textAlign = 'center';
      ctx.fillStyle = grad;
      ctx.font = '800 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.letterSpacing = '1px';
      ctx.fillText(brand.toUpperCase(), cardW / 2, ty);

      if (subtitle) {
        ctx.fillStyle = '#64748B';
        ctx.font = '600 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.letterSpacing = '0.2px';
        ctx.fillText(subtitle, cardW / 2, ty + 22);
      }
      ctx.restore();

      // 8. ЗАЩИТНЫЙ ВОДЯНОЙ ЗНАК (ВЖИГАЕТСЯ ПРЯМО В ПИКСЕЛИ ХОЛСТА)
      // Размещается строго выше и ниже матрицы QR, чтобы не перекрывать полезные данные сканера!
      if (isWatermark) {
        ctx.save();

        // 8.1. Диагональные защитные микро-надписи фоном (легкая прозрачность, не мешающая сканеру)
        ctx.rotate(-22 * Math.PI / 180);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.04)';
        ctx.font = '800 13px -apple-system, BlinkMacSystemFont, sans-serif';
        for (let y = -200; y < 800; y += 65) {
          for (let x = -300; x < 900; x += 280) {
            ctx.fillText('WBCHECK ОБРАЗЕЦ • ДЛЯ ТЕСТА', x, y);
          }
        }
        ctx.restore();

        // 8.2. Верхняя контрастная защитная плашка (над QR-кодом)
        ctx.save();
        const topPillW = 320;
        const topPillH = 24;
        ctx.fillStyle = 'rgba(239, 68, 68, 0.92)';
        ctx.beginPath();
        ctx.roundRect((cardW - topPillW) / 2, 40, topPillW, topPillH, 12);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '800 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'center';
        ctx.letterSpacing = '1.5px';
        ctx.fillText('ОБРАЗЕЦ WBCHECK • ДЛЯ ТЕСТА', cardW / 2, 56);
        ctx.restore();

        // 8.3. Нижняя контрастная защитная плашка (прямо под QR-кодом, не задевая модули)
        ctx.save();
        const botBannerW = 436;
        const botBannerH = 26;
        ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
        ctx.beginPath();
        ctx.roundRect((cardW - botBannerW) / 2, qy + qrSize + 8, botBannerW, botBannerH, 6);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '800 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'center';
        ctx.letterSpacing = '1.5px';
        ctx.fillText('ОБРАЗЕЦ WBCHECK • НЕ ДЛЯ ТИПОГРАФИИ', cardW / 2, qy + qrSize + 25);
        ctx.restore();
      }
    }

    let qrDebounceTimer = null;
    function updateQrPreview() {
      clearTimeout(qrDebounceTimer);
      qrDebounceTimer = setTimeout(() => {
        const canvas = document.getElementById('qrCanvas');
        if (!canvas) return;

        const inputUrl = document.getElementById('qrInputUrl');
        const inputBrand = document.getElementById('qrInputBrand');
        const inputSubtitle = document.getElementById('qrInputSubtitle');

        const url = (inputUrl && inputUrl.value.trim()) ? inputUrl.value.trim() : 'https://wbcheck.ru';
        const brand = (inputBrand && inputBrand.value.trim()) ? inputBrand.value.trim() : 'WILDBERRIES BRAND';
        const subtitle = (inputSubtitle && inputSubtitle.value.trim()) ? inputSubtitle.value.trim() : 'Служба заботы о покупателях';

        renderQrToCanvas(canvas, {
          url: url,
          brand: brand,
          subtitle: subtitle,
          topColor: qrColors.top,
          bottomColor: qrColors.bottom,
          iconType: qrIcon,
          logoImg: qrCustomLogoImg,
          watermark: true
        });
      }, 50);
    }

    function downloadQrSample() {
      const canvas = document.getElementById('qrCanvas');
      if (!canvas) return;

      const a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = 'obrazets_vkladysha_wbcheck.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      if (typeof window.sendMetrikaGoal === 'function') {
        window.sendMetrikaGoal('download_qr_sample');
      }

      showToast('Тестовый образец скачан! Чистый векторный SVG и PDF доступны на Kwork');
    }

    // Слушатели ввода в реальном времени для конструктора вкладышей
    ['qrInputUrl', 'qrInputBrand', 'qrInputSubtitle'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', updateQrPreview);
      }
    });

    // Инициализация превью при первой загрузке
    if (document.getElementById('qrCanvas')) { updateQrPreview(); }


    // Инициализация маршрута и превью при полной готовности DOM и скриптов
    if (document.getElementById('prevBarcodeSvg')) { updateLabelPreview(); }
    applyRouteFromHash(false);
    
    // ==================== ЛОГИКА 5 ВКЛАДКИ: КАРТОЧКИ WB ====================
    function copyCardPrompt() {
      const text = document.getElementById('promptContentText').innerText;
      navigator.clipboard.writeText(text).then(() => {
        const btnText = document.getElementById('copyPromptBtnText');
        if (btnText) btnText.textContent = 'Скопировано в буфер!';
        showToast('Готовый коммерческий промпт скопирован!');
        if (typeof window.sendMetrikaGoal === 'function') {
          window.sendMetrikaGoal('copy_card_prompt');
        }
        setTimeout(() => {
          if (btnText) btnText.textContent = 'Скопировать промпт';
        }, 2500);
      }).catch(() => {
        showToast('Выделите и скопируйте текст промпта вручную');
      });
    }

    function openPortfolioModal(imgSrc, title, desc) {
      const modal = document.getElementById('portfolioModal');
      const modalImg = document.getElementById('modalCardImg');
      const modalTitle = document.getElementById('modalCardTitle');
      const modalDesc = document.getElementById('modalCardDesc');

      if (!modal) return;
      modalImg.src = imgSrc;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closePortfolioModal() {
      const modal = document.getElementById('portfolioModal');
      if (modal) modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    function updateCardScore() {
      const checkboxes = document.querySelectorAll('.checklist-items input[type="checkbox"]');
      let checked = 0;
      checkboxes.forEach(cb => { if (cb.checked) checked++; });
      const percent = Math.round((checked / checkboxes.length) * 100);
      const scoreEl = document.getElementById('cardScorePercent');
      const verdictEl = document.getElementById('cardScoreVerdict');

      if (scoreEl) scoreEl.textContent = percent + '%';
      if (verdictEl) {
        if (percent === 100) {
          verdictEl.textContent = 'Отличная работа: карточка готова к запуску рекламы и максимальному CTR.';
        } else if (percent >= 60) {
          verdictEl.textContent = 'Хорошая база, но карточка теряет до 25% кликов из-за слепых зон или неотработанных болей.';
        } else {
          verdictEl.textContent = 'Высокий риск слива бюджета: карточка не адаптирована под экран мобильного приложения WB.';
        }
      }
    }

    window.addEventListener('hashchange', () => applyRouteFromHash(true));

    // Автоматический трекинг коммерческих конверсий в Яндекс Метрику
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a');
      if (!link || !link.href) return;

      if (link.href.includes('kwork.ru')) {
        let specificGoal = 'kwork_profile';
        if (link.href.includes('54553048')) specificGoal = 'kwork_tnved_order';
        else if (link.href.includes('54517650')) specificGoal = 'kwork_claim_order';
        else if (link.href.includes('54550913')) specificGoal = 'kwork_label_order';
        else if (link.href.includes('54548516')) specificGoal = 'kwork_qr_order';
        else if (link.href.includes('54537490')) specificGoal = 'kwork_card_order';

        if (typeof window.sendMetrikaGoal === 'function') {
          window.sendMetrikaGoal('kwork_any_click', { url: link.href, goal: specificGoal });
          window.sendMetrikaGoal(specificGoal, { url: link.href });
        }
      }
    });

    // === Cookie Consent Banner & Privacy Policy (152-ФЗ) ===
    (function initCookieConsent() {
      if (typeof window === 'undefined' || typeof document === 'undefined') return;
      if (localStorage.getItem('wbcheck_cookie_consent') === 'accepted') return;

      const styleId = 'wbcheck-cookie-style';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .cookie-banner-wrap {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(120px);
            width: calc(100% - 32px);
            max-width: 680px;
            background: rgba(255, 255, 255, 0.96);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(226, 232, 240, 0.9);
            border-radius: 16px;
            box-shadow: 0 12px 36px -4px rgba(15, 23, 42, 0.16), 0 4px 12px -2px rgba(15, 23, 42, 0.08);
            padding: 14px 20px;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            opacity: 0;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
            font-family: inherit;
            box-sizing: border-box;
          }
          .cookie-banner-wrap.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
          .cookie-content {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 0.82rem;
            color: #334155;
            line-height: 1.45;
          }
          .cookie-icon {
            font-size: 1.3rem;
            flex-shrink: 0;
          }
          .cookie-actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
          }
          .cookie-btn-accept {
            background: #10b981;
            color: #ffffff;
            border: none;
            padding: 8px 20px;
            border-radius: 999px;
            font-size: 0.82rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);
            font-family: inherit;
            white-space: nowrap;
          }
          .cookie-btn-accept:hover {
            background: #059669;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
          }
          .cookie-btn-details {
            background: transparent;
            color: #64748b;
            border: 1px solid #e2e8f0;
            padding: 7px 14px;
            border-radius: 999px;
            font-size: 0.78rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.15s ease;
            font-family: inherit;
            white-space: nowrap;
          }
          .cookie-btn-details:hover {
            color: #0f172a;
            background: #f8fafc;
            border-color: #cbd5e1;
          }
          @media (max-width: 640px) {
            .cookie-banner-wrap {
              bottom: 12px;
              padding: 12px 14px;
              flex-direction: column;
              align-items: stretch;
              gap: 12px;
              border-radius: 14px;
            }
            .cookie-content {
              font-size: 0.78rem;
              gap: 10px;
            }
            .cookie-actions {
              justify-content: flex-end;
              width: 100%;
            }
            .cookie-btn-accept {
              flex: 1;
              text-align: center;
              padding: 10px 16px;
            }
          }
          .cookie-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.25s ease;
          }
          .cookie-modal-overlay.show {
            opacity: 1;
            visibility: visible;
          }
          .cookie-modal-card {
            background: #ffffff;
            border-radius: 16px;
            max-width: 520px;
            width: 100%;
            padding: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            box-sizing: border-box;
            font-family: inherit;
          }
          .cookie-modal-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
          }
          .cookie-modal-body {
            font-size: 0.84rem;
            color: #475569;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          .cookie-modal-body p {
            margin-bottom: 10px;
          }
          .cookie-modal-body strong {
            color: #0f172a;
          }
          .cookie-modal-btn-close {
            background: #0f172a;
            color: #ffffff;
            border: none;
            padding: 9px 22px;
            border-radius: 8px;
            font-size: 0.84rem;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            font-family: inherit;
          }
        `;
        document.head.appendChild(style);
      }

      function createBanner() {
        const banner = document.createElement('div');
        banner.id = 'wbcheckCookieBanner';
        banner.className = 'cookie-banner-wrap';
        banner.setAttribute('role', 'region');
        banner.setAttribute('aria-label', 'Согласие на использование файлов cookie');
        banner.innerHTML = `
          <div class="cookie-content">
            <span class="cookie-icon" aria-hidden="true">🍪</span>
            <span>Мы используем cookie и сервис Яндекс Метрика для корректной работы сайта и веб-аналитики (152-ФЗ). Продолжая использовать сервис, вы соглашаетесь с этим.</span>
          </div>
          <div class="cookie-actions">
            <button type="button" class="cookie-btn-details" id="cookieBtnDetails">Подробнее</button>
            <button type="button" class="cookie-btn-accept" id="cookieBtnAccept">Принять</button>
          </div>
        `;

        const modal = document.createElement('div');
        modal.id = 'wbcheckCookieModal';
        modal.className = 'cookie-modal-overlay';
        modal.innerHTML = `
          <div class="cookie-modal-card" role="dialog" aria-modal="true" aria-labelledby="cookieModalTitle">
            <div class="cookie-modal-title" id="cookieModalTitle">Использование файлов cookie и 152-ФЗ</div>
            <div class="cookie-modal-body">
              <p><strong>100% Client-Side:</strong> Сервис WBCheck.ru не собирает, не запрашивает и не хранит личные данные пользователей (ФИО, телефоны, пароли). Все утилиты (генерация этикеток, расчёты, генерация QR) выполняются исключительно на вашем устройстве в браузере.</p>
              <p><strong>Аналитика:</strong> Для учёта посещаемости и повышения качества сервиса используется счётчик Яндекс Метрика (ООО «Яндекс»), обрабатывающий технические параметры визита (IP-адрес, cookie, устройство) в соответствии со ст. 6 и 9 Федерального закона № 152-ФЗ.</p>
              <p>Вы можете отключить cookie в настройках своего браузера в любой момент.</p>
            </div>
            <button type="button" class="cookie-modal-btn-close" id="cookieModalClose">Понятно</button>
          </div>
        `;

        document.body.appendChild(banner);
        document.body.appendChild(modal);

        setTimeout(() => {
          banner.classList.add('show');
        }, 500);

        document.getElementById('cookieBtnAccept').addEventListener('click', () => {
          localStorage.setItem('wbcheck_cookie_consent', 'accepted');
          banner.classList.remove('show');
          setTimeout(() => banner.remove(), 400);
        });

        document.getElementById('cookieBtnDetails').addEventListener('click', () => {
          modal.classList.add('show');
        });

        document.getElementById('cookieModalClose').addEventListener('click', () => {
          modal.classList.remove('show');
        });

        modal.addEventListener('click', (e) => {
          if (e.target === modal) modal.classList.remove('show');
        });
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createBanner);
      } else {
        createBanner();
      }
    })();