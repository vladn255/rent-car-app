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
    ORDER: '/order',
    CHECKOUT: '/checkout'
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

const ActionType = {
    CHANGE_TAB: "changeTab",
    SET_LOCATION: "setLocation",
    SET_MODEL: "setModel",
    SET_ACTIVE_FILTER: "setActiveFilter",
    SET_COLOR: "setColor",
    SET_DATE: "setDate",
    SET_RATE: "setRate",
    SET_ADDITIONS: "setAdditions",
};

const ModelTypes = {
    ALL_MODELS: "all-models",
    ECONOMY: "economy",
    PREMIUM: "premium"
};

const Colors = {
    ALL_COLOR: "all-color",
    RED: "red",
    BLUE: "blue"
}

const Rates = {
    BY_MINUTE: "by-minute",
    BY_DAY: "by-day"
}

const Additionals = {
    FULL_TANK: "full-tank",
    CHILD_SEAT: "child-seat",
    RIGHT_WHEEL: "right-wheel"
}

const ReceiptNames = {
    "full-tank": "Полный бак",
    "child-seat": "Детское кресло",
    "right-wheel": "Правый руль",
    "all-color": "Любой",
    "red": "Красный",
    "blue": "Голубой",
    "by-minute": "Поминутно",
    "by-day": "На сутки"
}

export {
    SLIDES_INFO,
    LANGUAGES,
    RoutePath,
    Tabs,
    TabNames,
    ActionType,
    ModelTypes,
    Colors,
    Rates,
    Additionals,
    ReceiptNames
}