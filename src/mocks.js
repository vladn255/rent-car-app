const RECEIPT = {
    city: 'Ульяновск',
    pickpoint: 'Нариманова 42',
    model: 'Hyundai, i30 N',
    color: 'Голубой',
    duration: '1д2ч',
    rate: 'На сутки',
    fullTank: 'Да',
    cost: '16 000 ₽'
}

const Markers = [
    {
        latitude: 54.3182,
        longitude: 48.3626
    },
    {
        latitude: 54.3082,
        longitude: 48.3716
    },
    {
        latitude: 54.3202,
        longitude: 48.3816
    }
];

const Models = [
    {
        name: 'ELANTRA',
        cost: '12 000 - 25 000 ₽',
        /* eslint-disable-next-line no-undef */
        imgSrc: `${process.env.PUBLIC_URL}/img/gallery/image1.png`
    },
    {
        name: 'i30 N',
        cost: '10 000 - 32 000 ₽',
        /* eslint-disable-next-line no-undef */
        imgSrc: `${process.env.PUBLIC_URL}/img/gallery/image2.png`
    },
    {
        name: 'CRETA',
        cost: '12 000 - 25 000 ₽',
        /* eslint-disable-next-line no-undef */
        imgSrc: `${process.env.PUBLIC_URL}/img/gallery/image3.png`
    },
    {
        name: 'SONATA',
        cost: '10 000 - 32 000 ₽',
        /* eslint-disable-next-line no-undef */
        imgSrc: `${process.env.PUBLIC_URL}/img/gallery/image4.png`
    },
    {
        name: 'ELANTRA 2',
        cost: '12 000 - 25 000 ₽',
        /* eslint-disable-next-line no-undef */
        imgSrc: `${process.env.PUBLIC_URL}/img/gallery/image1.png`
    },
    {
        name: 'i30 N 2',
        cost: '10 000 - 32 000 ₽',
        /* eslint-disable-next-line no-undef */
        imgSrc: `${process.env.PUBLIC_URL}/img/gallery/image2.png`
    },
    {
        name: 'CRETA 2',
        cost: '12 000 - 25 000 ₽',
        /* eslint-disable-next-line no-undef */
        imgSrc: `${process.env.PUBLIC_URL}/img/gallery/image3.png`
    },
    {
        name: 'SONATA 2',
        cost: '10 000 - 32 000 ₽',
        /* eslint-disable-next-line no-undef */
        imgSrc: `${process.env.PUBLIC_URL}/img/gallery/image4.png`
    }
]

export {
    RECEIPT,
    Markers,
    Models
}