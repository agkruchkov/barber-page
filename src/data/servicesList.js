const services = [
  {
    id: "1",
    title: "Стрижка",
    content:
      "Стрижка — это не просто необходимая процедура для основного ухода за волосами, а и способ выразить себя, отправная точка имиджа и стиля. Правильно подобранная и выполненная стрижка способна подчеркнуть достоинства и скрыть недостатки, сделать лицо более молодым или, наоборот, добавить несколько лет. Профессиональный парикмахер учитывает многие параметры, такие как форма, строение лица, характер и образ жизни клиента. ",
    gender: "Для всех",
    age: [6, 100],
    img: "./img/1.png",
  },
  {
    id: "2",
    title: "Окрашивание",
    content:
      "Окрашивание — вторая по популярности услуга, которая тоже постоянно эволюционирует и совершенствуется. Рассмотрим самые популярные виды окрашивания на сегодняшний день. Классическое перманентное окрашивание. Данный вид окрашивания хорошо маскирует седые волосы, дает насыщенность цвету волос, позволяет скорректировать последствия выгорания волос на солнце или предыдущих неудачных окрашиваний. Популярно за счет длительного эффекта. Тонирование волос. Применяется в тех же целях, что и перманентное окрашивание, однако не предполагает глубокого проникновения красящего состава внутрь структуры волоса, за счет чего держится на волосах не так долго. Считается более щадящей процедурой. Мелирование. Вид окрашивания, придающий волосам визуальную густоту. За счет перехода тонов на волосах создается эффект солнечных бликов в волосах, появляется блеск. Подходит для плавного и безвредного перехода в блонд. Колорирование. Отличается от мелирования тем, что пряди окрашиваются в несколько тонов. Благодаря данной технике визуально объем и качество волос улучшается. Такой вид окрашивания особенно подходит для тонких волос и контрастных стрижек. Брондирование. Подвид колорирования, особенно подходящий для темных волос. Суть метода состоит в смешивании нескольких оттенков одинаковой цветовой гаммы, часто с игрой на контрасте темных и светлых прядей. Омбре. Также подвид колорирования, одинаково популярный среди обладательниц светлых и темных волос. Суть метода состоит в окрашивании волос в двух тонах: прикорневая зона затемняется, а растяжка светлого тона приходится на кончики волос. Air Touch. Если мы говорим о современных видах парикмахерских услуг, то фаворит контрастных окрашиваний 2019 года — техника «эир тач». При данном методе пряди делят на несколько частей, после чего обрабатывают струей воздуха с помощью фена, чтобы от каждой пряди оставалось 35–50% от начального объема. Далее волосы аккуратно заворачивают в фольгу или пищевую пленку. По сути, это комбинация классического мелирования с актуальной тенденцией к безопасному окрашиванию и натуральному виду. Декапирование. Процедура, обратная окрашиванию. Ее суть — разрушение связи между частицами косметического пигмента (красителя) и выведение его из волос.",
    gender: "Для женщин",
    age: [14, 60],
    img: "./img/2.png",
  },
  {
    id: "3",
    title: "Укладка",
    content:
      "Укладка волос всегда остается популярной парикмахерской услугой в силу своей универсальности. Под укладкой подразумеваются самые разные операции, которые позволяют придать волосам нужную форму и объем. ",
    gender: "Для женщин",
    age: [18, 50],
    img: "./img/3.png",
  },
  {
    id: "4",
    title: "Прическа",
    content:
      "По словам специалиста, существует вероятность, что развитые инопланетные существа столкнулись с угрозой тех же бедствий, что и человечество. Это может быть в том числе экологический кризис. Ученый отметил, что в период процветания внеземной цивилизации ее сложно обнаружить людям.",
    gender: "Для мужчин",
    age: [18, 45],
    img: "./img/4.png",
  },
  {
    id: "5",
    title: "Лечение волос",
    content:
      "Истонченность и ломкость, ослабленные или пересушенные волосы, перхоть, сечение концов, выпадение волос, быстрое загрязнение кожи головы — эти и другие проблемы можно решить с помощью современных процедур. ",
    gender: "Для всех",
    age: [25, 70],
    img: "./img/5.png",
  },
  {
    id: "6",
    title: "Прическа",
    content:
      "По словам специалиста, существует вероятность, что развитые инопланетные существа столкнулись с угрозой тех же бедствий, что и человечество. Это может быть в том числе экологический кризис. Ученый отметил, что в период процветания внеземной цивилизации ее сложно обнаружить людям.",
    gender: "Для женщин",
    age: [18, 45],
    img: "./img/4.png",
  },
  {
    id: "7",
    title: "Окрашивание",
    content:
      "Окрашивание — вторая по популярности услуга, которая тоже постоянно эволюционирует и совершенствуется. Рассмотрим самые популярные виды окрашивания на сегодняшний день. Классическое перманентное окрашивание. Данный вид окрашивания хорошо маскирует седые волосы, дает насыщенность цвету волос, позволяет скорректировать последствия выгорания волос на солнце или предыдущих неудачных окрашиваний. Популярно за счет длительного эффекта. Тонирование волос. Применяется в тех же целях, что и перманентное окрашивание, однако не предполагает глубокого проникновения красящего состава внутрь структуры волоса, за счет чего держится на волосах не так долго. Считается более щадящей процедурой. Мелирование. Вид окрашивания, придающий волосам визуальную густоту. За счет перехода тонов на волосах создается эффект солнечных бликов в волосах, появляется блеск. Подходит для плавного и безвредного перехода в блонд. Колорирование. Отличается от мелирования тем, что пряди окрашиваются в несколько тонов. Благодаря данной технике визуально объем и качество волос улучшается. Такой вид окрашивания особенно подходит для тонких волос и контрастных стрижек. Брондирование. Подвид колорирования, особенно подходящий для темных волос. Суть метода состоит в смешивании нескольких оттенков одинаковой цветовой гаммы, часто с игрой на контрасте темных и светлых прядей. Омбре. Также подвид колорирования, одинаково популярный среди обладательниц светлых и темных волос. Суть метода состоит в окрашивании волос в двух тонах: прикорневая зона затемняется, а растяжка светлого тона приходится на кончики волос. Air Touch. Если мы говорим о современных видах парикмахерских услуг, то фаворит контрастных окрашиваний 2019 года — техника «эир тач». При данном методе пряди делят на несколько частей, после чего обрабатывают струей воздуха с помощью фена, чтобы от каждой пряди оставалось 35–50% от начального объема. Далее волосы аккуратно заворачивают в фольгу или пищевую пленку. По сути, это комбинация классического мелирования с актуальной тенденцией к безопасному окрашиванию и натуральному виду. Декапирование. Процедура, обратная окрашиванию. Ее суть — разрушение связи между частицами косметического пигмента (красителя) и выведение его из волос.",
    gender: "Для женщин",
    age: [14, 60],
    img: "./img/2.png",
  },
  {
    id: "8",
    title: "Укладка",
    content:
      "Укладка волос всегда остается популярной парикмахерской услугой в силу своей универсальности. Под укладкой подразумеваются самые разные операции, которые позволяют придать волосам нужную форму и объем. ",
    gender: "Для женщин",
    age: [18, 50],
    img: "./img/3.png",
  },
  {
    id: "9",
    title: "Прическа",
    content:
      "По словам специалиста, существует вероятность, что развитые инопланетные существа столкнулись с угрозой тех же бедствий, что и человечество. Это может быть в том числе экологический кризис. Ученый отметил, что в период процветания внеземной цивилизации ее сложно обнаружить людям.",
    gender: "Для женщин",
    age: [18, 45],
    img: "./img/4.png",
  },
  {
    id: "10",
    title: "Окрашивание",
    content:
      "Окрашивание — вторая по популярности услуга, которая тоже постоянно эволюционирует и совершенствуется. Рассмотрим самые популярные виды окрашивания на сегодняшний день. Классическое перманентное окрашивание. Данный вид окрашивания хорошо маскирует седые волосы, дает насыщенность цвету волос, позволяет скорректировать последствия выгорания волос на солнце или предыдущих неудачных окрашиваний. Популярно за счет длительного эффекта. Тонирование волос. Применяется в тех же целях, что и перманентное окрашивание, однако не предполагает глубокого проникновения красящего состава внутрь структуры волоса, за счет чего держится на волосах не так долго. Считается более щадящей процедурой. Мелирование. Вид окрашивания, придающий волосам визуальную густоту. За счет перехода тонов на волосах создается эффект солнечных бликов в волосах, появляется блеск. Подходит для плавного и безвредного перехода в блонд. Колорирование. Отличается от мелирования тем, что пряди окрашиваются в несколько тонов. Благодаря данной технике визуально объем и качество волос улучшается. Такой вид окрашивания особенно подходит для тонких волос и контрастных стрижек. Брондирование. Подвид колорирования, особенно подходящий для темных волос. Суть метода состоит в смешивании нескольких оттенков одинаковой цветовой гаммы, часто с игрой на контрасте темных и светлых прядей. Омбре. Также подвид колорирования, одинаково популярный среди обладательниц светлых и темных волос. Суть метода состоит в окрашивании волос в двух тонах: прикорневая зона затемняется, а растяжка светлого тона приходится на кончики волос. Air Touch. Если мы говорим о современных видах парикмахерских услуг, то фаворит контрастных окрашиваний 2019 года — техника «эир тач». При данном методе пряди делят на несколько частей, после чего обрабатывают струей воздуха с помощью фена, чтобы от каждой пряди оставалось 35–50% от начального объема. Далее волосы аккуратно заворачивают в фольгу или пищевую пленку. По сути, это комбинация классического мелирования с актуальной тенденцией к безопасному окрашиванию и натуральному виду. Декапирование. Процедура, обратная окрашиванию. Ее суть — разрушение связи между частицами косметического пигмента (красителя) и выведение его из волос.",
    gender: "Для женщин",
    age: [14, 60],
    img: "./img/2.png",
  },
  {
    id: "11",
    title: "Окрашивание",
    content:
      "Окрашивание — вторая по популярности услуга, которая тоже постоянно эволюционирует и совершенствуется. Рассмотрим самые популярные виды окрашивания на сегодняшний день. Классическое перманентное окрашивание. Данный вид окрашивания хорошо маскирует седые волосы, дает насыщенность цвету волос, позволяет скорректировать последствия выгорания волос на солнце или предыдущих неудачных окрашиваний. Популярно за счет длительного эффекта. Тонирование волос. Применяется в тех же целях, что и перманентное окрашивание, однако не предполагает глубокого проникновения красящего состава внутрь структуры волоса, за счет чего держится на волосах не так долго. Считается более щадящей процедурой. Мелирование. Вид окрашивания, придающий волосам визуальную густоту. За счет перехода тонов на волосах создается эффект солнечных бликов в волосах, появляется блеск. Подходит для плавного и безвредного перехода в блонд. Колорирование. Отличается от мелирования тем, что пряди окрашиваются в несколько тонов. Благодаря данной технике визуально объем и качество волос улучшается. Такой вид окрашивания особенно подходит для тонких волос и контрастных стрижек. Брондирование. Подвид колорирования, особенно подходящий для темных волос. Суть метода состоит в смешивании нескольких оттенков одинаковой цветовой гаммы, часто с игрой на контрасте темных и светлых прядей. Омбре. Также подвид колорирования, одинаково популярный среди обладательниц светлых и темных волос. Суть метода состоит в окрашивании волос в двух тонах: прикорневая зона затемняется, а растяжка светлого тона приходится на кончики волос. Air Touch. Если мы говорим о современных видах парикмахерских услуг, то фаворит контрастных окрашиваний 2019 года — техника «эир тач». При данном методе пряди делят на несколько частей, после чего обрабатывают струей воздуха с помощью фена, чтобы от каждой пряди оставалось 35–50% от начального объема. Далее волосы аккуратно заворачивают в фольгу или пищевую пленку. По сути, это комбинация классического мелирования с актуальной тенденцией к безопасному окрашиванию и натуральному виду. Декапирование. Процедура, обратная окрашиванию. Ее суть — разрушение связи между частицами косметического пигмента (красителя) и выведение его из волос.",
    gender: "Для женщин",
    age: [14, 60],
    img: "./img/2.png",
  },
  {
    id: "12",
    title: "Окрашивание",
    content:
      "Окрашивание — вторая по популярности услуга, которая тоже постоянно эволюционирует и совершенствуется. Рассмотрим самые популярные виды окрашивания на сегодняшний день. Классическое перманентное окрашивание. Данный вид окрашивания хорошо маскирует седые волосы, дает насыщенность цвету волос, позволяет скорректировать последствия выгорания волос на солнце или предыдущих неудачных окрашиваний. Популярно за счет длительного эффекта. Тонирование волос. Применяется в тех же целях, что и перманентное окрашивание, однако не предполагает глубокого проникновения красящего состава внутрь структуры волоса, за счет чего держится на волосах не так долго. Считается более щадящей процедурой. Мелирование. Вид окрашивания, придающий волосам визуальную густоту. За счет перехода тонов на волосах создается эффект солнечных бликов в волосах, появляется блеск. Подходит для плавного и безвредного перехода в блонд. Колорирование. Отличается от мелирования тем, что пряди окрашиваются в несколько тонов. Благодаря данной технике визуально объем и качество волос улучшается. Такой вид окрашивания особенно подходит для тонких волос и контрастных стрижек. Брондирование. Подвид колорирования, особенно подходящий для темных волос. Суть метода состоит в смешивании нескольких оттенков одинаковой цветовой гаммы, часто с игрой на контрасте темных и светлых прядей. Омбре. Также подвид колорирования, одинаково популярный среди обладательниц светлых и темных волос. Суть метода состоит в окрашивании волос в двух тонах: прикорневая зона затемняется, а растяжка светлого тона приходится на кончики волос. Air Touch. Если мы говорим о современных видах парикмахерских услуг, то фаворит контрастных окрашиваний 2019 года — техника «эир тач». При данном методе пряди делят на несколько частей, после чего обрабатывают струей воздуха с помощью фена, чтобы от каждой пряди оставалось 35–50% от начального объема. Далее волосы аккуратно заворачивают в фольгу или пищевую пленку. По сути, это комбинация классического мелирования с актуальной тенденцией к безопасному окрашиванию и натуральному виду. Декапирование. Процедура, обратная окрашиванию. Ее суть — разрушение связи между частицами косметического пигмента (красителя) и выведение его из волос.",
    gender: "Для женщин",
    age: [14, 60],
    img: "./img/2.png",
  },
  {
    id: "13",
    title: "Укладка",
    content:
      "Укладка волос всегда остается популярной парикмахерской услугой в силу своей универсальности. Под укладкой подразумеваются самые разные операции, которые позволяют придать волосам нужную форму и объем. ",
    gender: "Для женщин",
    age: [18, 50],
    img: "./img/3.png",
  },
  {
    id: "14",
    title: "Прическа",
    content:
      "По словам специалиста, существует вероятность, что развитые инопланетные существа столкнулись с угрозой тех же бедствий, что и человечество. Это может быть в том числе экологический кризис. Ученый отметил, что в период процветания внеземной цивилизации ее сложно обнаружить людям.",
    gender: "Для женщин",
    age: [18, 45],
    img: "./img/4.png",
  },
  {
    id: "15",
    title: "Лечение волос",
    content:
      "Истонченность и ломкость, ослабленные или пересушенные волосы, перхоть, сечение концов, выпадение волос, быстрое загрязнение кожи головы — эти и другие проблемы можно решить с помощью современных процедур. ",
    gender: "Для всех",
    age: [25, 70],
    img: "./img/5.png",
  },
  {
    id: "16",
    title: "Укладка",
    content:
      "Укладка волос всегда остается популярной парикмахерской услугой в силу своей универсальности. Под укладкой подразумеваются самые разные операции, которые позволяют придать волосам нужную форму и объем. ",
    gender: "Для женщин",
    age: [18, 50],
    img: "./img/3.png",
  },
  {
    id: "17",
    title: "Окрашивание",
    content:
      "Окрашивание — вторая по популярности услуга, которая тоже постоянно эволюционирует и совершенствуется. Рассмотрим самые популярные виды окрашивания на сегодняшний день. Классическое перманентное окрашивание. Данный вид окрашивания хорошо маскирует седые волосы, дает насыщенность цвету волос, позволяет скорректировать последствия выгорания волос на солнце или предыдущих неудачных окрашиваний. Популярно за счет длительного эффекта. Тонирование волос. Применяется в тех же целях, что и перманентное окрашивание, однако не предполагает глубокого проникновения красящего состава внутрь структуры волоса, за счет чего держится на волосах не так долго. Считается более щадящей процедурой. Мелирование. Вид окрашивания, придающий волосам визуальную густоту. За счет перехода тонов на волосах создается эффект солнечных бликов в волосах, появляется блеск. Подходит для плавного и безвредного перехода в блонд. Колорирование. Отличается от мелирования тем, что пряди окрашиваются в несколько тонов. Благодаря данной технике визуально объем и качество волос улучшается. Такой вид окрашивания особенно подходит для тонких волос и контрастных стрижек. Брондирование. Подвид колорирования, особенно подходящий для темных волос. Суть метода состоит в смешивании нескольких оттенков одинаковой цветовой гаммы, часто с игрой на контрасте темных и светлых прядей. Омбре. Также подвид колорирования, одинаково популярный среди обладательниц светлых и темных волос. Суть метода состоит в окрашивании волос в двух тонах: прикорневая зона затемняется, а растяжка светлого тона приходится на кончики волос. Air Touch. Если мы говорим о современных видах парикмахерских услуг, то фаворит контрастных окрашиваний 2019 года — техника «эир тач». При данном методе пряди делят на несколько частей, после чего обрабатывают струей воздуха с помощью фена, чтобы от каждой пряди оставалось 35–50% от начального объема. Далее волосы аккуратно заворачивают в фольгу или пищевую пленку. По сути, это комбинация классического мелирования с актуальной тенденцией к безопасному окрашиванию и натуральному виду. Декапирование. Процедура, обратная окрашиванию. Ее суть — разрушение связи между частицами косметического пигмента (красителя) и выведение его из волос.",
    gender: "Для женщин",
    age: [14, 60],
    img: "./img/2.png",
  },
  {
    id: "18",
    title: "Укладка",
    content:
      "Укладка волос всегда остается популярной парикмахерской услугой в силу своей универсальности. Под укладкой подразумеваются самые разные операции, которые позволяют придать волосам нужную форму и объем. ",
    gender: "Для женщин",
    age: [18, 50],
    img: "./img/3.png",
  },
  {
    id: "19",
    title: "Прическа",
    content:
      "По словам специалиста, существует вероятность, что развитые инопланетные существа столкнулись с угрозой тех же бедствий, что и человечество. Это может быть в том числе экологический кризис. Ученый отметил, что в период процветания внеземной цивилизации ее сложно обнаружить людям.",
    gender: "Для женщин",
    age: [18, 45],
    img: "./img/4.png",
  },
  {
    id: "20",
    title: "Лечение волос",
    content:
      "Истонченность и ломкость, ослабленные или пересушенные волосы, перхоть, сечение концов, выпадение волос, быстрое загрязнение кожи головы — эти и другие проблемы можно решить с помощью современных процедур. ",
    gender: "Для всех",
    age: [25, 70],
    img: "./img/5.png",
  },
  {
    id: "21",
    title: "Лечение волос",
    content:
      "Истонченность и ломкость, ослабленные или пересушенные волосы, перхоть, сечение концов, выпадение волос, быстрое загрязнение кожи головы — эти и другие проблемы можно решить с помощью современных процедур. ",
    gender: "Для всех",
    age: [25, 70],
    img: "./img/5.png",
  },
  {
    id: "22",
    title: "Окрашивание",
    content:
      "Окрашивание — вторая по популярности услуга, которая тоже постоянно эволюционирует и совершенствуется. Рассмотрим самые популярные виды окрашивания на сегодняшний день. Классическое перманентное окрашивание. Данный вид окрашивания хорошо маскирует седые волосы, дает насыщенность цвету волос, позволяет скорректировать последствия выгорания волос на солнце или предыдущих неудачных окрашиваний. Популярно за счет длительного эффекта. Тонирование волос. Применяется в тех же целях, что и перманентное окрашивание, однако не предполагает глубокого проникновения красящего состава внутрь структуры волоса, за счет чего держится на волосах не так долго. Считается более щадящей процедурой. Мелирование. Вид окрашивания, придающий волосам визуальную густоту. За счет перехода тонов на волосах создается эффект солнечных бликов в волосах, появляется блеск. Подходит для плавного и безвредного перехода в блонд. Колорирование. Отличается от мелирования тем, что пряди окрашиваются в несколько тонов. Благодаря данной технике визуально объем и качество волос улучшается. Такой вид окрашивания особенно подходит для тонких волос и контрастных стрижек. Брондирование. Подвид колорирования, особенно подходящий для темных волос. Суть метода состоит в смешивании нескольких оттенков одинаковой цветовой гаммы, часто с игрой на контрасте темных и светлых прядей. Омбре. Также подвид колорирования, одинаково популярный среди обладательниц светлых и темных волос. Суть метода состоит в окрашивании волос в двух тонах: прикорневая зона затемняется, а растяжка светлого тона приходится на кончики волос. Air Touch. Если мы говорим о современных видах парикмахерских услуг, то фаворит контрастных окрашиваний 2019 года — техника «эир тач». При данном методе пряди делят на несколько частей, после чего обрабатывают струей воздуха с помощью фена, чтобы от каждой пряди оставалось 35–50% от начального объема. Далее волосы аккуратно заворачивают в фольгу или пищевую пленку. По сути, это комбинация классического мелирования с актуальной тенденцией к безопасному окрашиванию и натуральному виду. Декапирование. Процедура, обратная окрашиванию. Ее суть — разрушение связи между частицами косметического пигмента (красителя) и выведение его из волос.",
    gender: "Для женщин",
    age: [14, 60],
    img: "./img/2.png",
  },
  {
    id: "23",
    title: "Укладка",
    content:
      "Укладка волос всегда остается популярной парикмахерской услугой в силу своей универсальности. Под укладкой подразумеваются самые разные операции, которые позволяют придать волосам нужную форму и объем. ",
    gender: "Для женщин",
    age: [18, 50],
    img: "./img/3.png",
  },
  {
    id: "24",
    title: "Прическа",
    content:
      "По словам специалиста, существует вероятность, что развитые инопланетные существа столкнулись с угрозой тех же бедствий, что и человечество. Это может быть в том числе экологический кризис. Ученый отметил, что в период процветания внеземной цивилизации ее сложно обнаружить людям.",
    gender: "Для женщин",
    age: [18, 45],
    img: "./img/4.png",
  },
  {
    id: "25",
    title: "Лечение волос",
    content:
      "Истонченность и ломкость, ослабленные или пересушенные волосы, перхоть, сечение концов, выпадение волос, быстрое загрязнение кожи головы — эти и другие проблемы можно решить с помощью современных процедур. ",
    gender: "Для всех",
    age: [25, 70],
    img: "./img/5.png",
  },
];

export function requestServicesList() {
  return services;
}
