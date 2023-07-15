import { IFilms } from 'src/types/Film.types';

// const API_URL = 'http://127.0.0.1:3000';

// const checkRes = (res: Response) => {
//     if (res.ok) {
//         return res.json();
//     } else {
//         return Promise.reject(res);
//     }
// };

// const fetchData = (url: string, data?: IData) => {
// 	return fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		...(!!data && { body: JSON.stringify(data) }),
// 	}).then((res) => checkRes(res));
// };

export const getFilms = (): Array<IFilms> => {
	// return fetchData(`${API_URL}/signin`, data);

	const mymovie = [
		{
			id: '101',
			title: 'Абра кадабра',
			rating: {
				kinopoisk: 7.1,
				imdb: 7.1,
			},
			shortDescription:
				'Афганистан, март 2018 года. Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются...',
			imageUrl:
				'https://in-rating.ru/space/wp-content/uploads/2023/03/Les-trois-mousquetaires-DArtagnan-9-1200.jpg',
			movieCardUrl: 'https://kinotochka.ru/movie/101',
			index: 1,
			year: 2023,
			genres: ['Хоррор', 'Драмма', 'Превосходство'],
		},
		{
			id: '102',
			title: 'Переводчик',
			rating: {
				kinopoisk: 7.2,
				imdb: 7.2,
			},
			shortDescription:
				'Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются...',
			imageUrl:
				'https://avatars.mds.yandex.net/get-znatoki/1548967/2a0000016cc241be5ba3b55cc281e4c2fa14/w480',
			movieCardUrl: 'https://kinotochka.ru/movie/102',
			index: 2,
			year: 2023,
			genres: ['Хоррор', 'Сюреализм'],
		},
		{
			id: '103',
			title: 'Синичка',
			rating: {
				kinopoisk: 7.3,
				imdb: 7.3,
			},
			shortDescription: 'В живых остаются...',
			imageUrl: 'https://s.ekabu.ru/localStorage/post/86/0e/04/68/860e0468.jpg',
			movieCardUrl: 'https://kinotochka.ru/movie/103',
			index: 3,
			year: 2023,
			genres: ['Комедия', 'Драмма'],
		},
		{
			id: '104',
			title: 'Пролетая над гнездом кукушки',
			rating: {
				kinopoisk: 7.4,
				imdb: 7.4,
			},
			shortDescription: 'март 2018 года. тся...',
			imageUrl:
				'https://i0.wp.com/www.henneth-annun.ru/wp-content/uploads/2014/07/Hobbit_3_Horizontal_Teaser.jpg?ssl=1',
			movieCardUrl: 'https://kinotochka.ru/movie/104',
			index: 4,
			year: 2023,
			genres: ['Хоррор', 'Эротика'],
		},
		{
			id: '105',
			title: 'Конь',
			rating: {
				kinopoisk: 7.5,
				imdb: 7.5,
			},
			shortDescription: 'отряд сержанта армии США...',
			imageUrl:
				'https://media.kg-portal.ru/movies/c/captainamerica2/posters/captainamerica2_32.jpg',
			movieCardUrl: 'https://kinotochka.ru/movie/105',
			index: 5,
			year: 2023,
			genres: ['Исторический', 'Драмма'],
		},
		{
			id: '106',
			title: 'Вечное сияние чистого разума',
			rating: {
				kinopoisk: 7.6,
				imdb: 7.6,
			},
			shortDescription: 'спецоперации по поиску оружия талибов...',
			imageUrl: 'https://hkcinema.ru/foto/271ba85f.jpg',
			movieCardUrl: 'https://kinotochka.ru/movie/106',
			index: 6,
			year: 2023,
			genres: ['Хоррор', 'Драмма', 'Вымысел', 'Ясновидинее'],
		},
	];

	return mymovie;
};
