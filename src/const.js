const SLIDES_INFO = [
    {
        title: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        buttonColor: 'green',
        imgURL: '/img/slides/free-parking-slide.png'
    },
    {
        title: 'Страховка',
        text: 'Полная страховка автомобиля.',
        buttonColor: 'blue',
        imgURL: '/img/slides/insurance-slide.png'
    },
    {
        title: 'Бензин',
        text: 'Полный бак на любой заправке города за наш счёт',
        buttonColor: 'red',
        imgURL: '/img/slides/fuel-slide.png'
    },
    {
        title: 'Обслуживание',
        text: 'Автомобиль проходит еженедельное ТО',
        buttonColor: 'purple',
        imgURL: '/img/slides/service-slide.png'
    }
];

const LANGUAGES = {
    rus: 'Рус',
    eng: 'Eng'
};

const RoutePath = {
    MAIN: '/rent-car-app',
    ORDER: '/order'
};

const Tabs = new Map([
    ['LOCATION', 'location'],
    ['MODEL', 'model'],
    ['ADDITIONS', 'additions'],
    ['RESULT', 'result']
]);

const TabNames = {
    location: 'Местоположение',
    model: 'Модель',
    additions: 'Дополнительно',
    result: 'Итого'
};

export {
    SLIDES_INFO,
    LANGUAGES,
    RoutePath,
    Tabs,
    TabNames
}