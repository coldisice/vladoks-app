const cardWrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

const sidebarWrapper = document.querySelector('.content-sidebar__info__wrapper')

const films = [
    {
        id: 0,
        title: 'Чебурашка 1',
        year: 2023,
        category: 'Семейная комедия',
        rating: 8.2,
        link: '/film.html',
        image: './images/film.png'
    },
    {
        id: 1,
        title: 'Чебурашка 2',
        year: 2023,
        category: 'Семейная комедия',
        rating: 8.2,
        link: '/film.html',
        image: './images/film.png'
    },
    {
        id: 2,
        title: 'Чебурашка 3',
        year: 2023,
        category: 'Семейная комедия',
        rating: 8.2,
        link: '/film.html',
        image: './images/film.png'
    }
]

const sidebar = [
    {
        id: 0,
        title: 'Топ-250',
        description: 'Подборка фильмов и сериалов с наивысшими оценками зрителей'
    },
    {
        id: 1,
        title: 'Посмеяться от души',
        description: 'Подборка комедий, которые помогут расслабиться после работы'
    },
    {
        id: 2,
        title: 'Запутанный сюжет',
        description: 'Триллеры и приключения с запутанным и интересным сюжетом. Невозможно оторваться!'
    }
]


const renderFilms = (array) => {
    console.log(array);

    cardWrapper.innerHTML = ''
    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="${item.link}" class="content-cards__item">
                <div class="content-cards__item--img">
                    <img src="${item.image}" alt="film">
                </div>

                <div class="content-cards__item--title">
                    <h5>${item.title}</h5>
                    <span>${item.year}</span>
                </div>
                <p class="content-cards__item--description">
                    ${item.category}
                </p>

                <p class="content-cards__item--rating">
                    ${item.rating}
                </p>
            </a>
            `)
    })
}

const renderSidebar = (array) => {
    console.log(array);

    sidebarWrapper.innerHTML = ''
    array.forEach((item) => {
        sidebarWrapper.insertAdjacentHTML('beforeend', `
            <div class="content-sidebar__info__item">
                <h5>
                    ${item.title}
                </h5>
                <p>
                    ${item.description}
                </p>
            </div>
            `)
    })
}

searchButton.addEventListener('click', () => {
    render(films.filter((item) => item.title.includes(searchInput.value)))
})

renderFilms(films)
renderSidebar(sidebar)

