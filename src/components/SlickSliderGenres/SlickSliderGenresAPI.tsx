import './SlickSliderGenres.css';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FilmCard } from '../FilmCardWidth255/FilmCard';
import { IFilms } from 'src/types/Film.types';
import { FC } from 'react';
import { ISlider } from 'src/types/Rating.types';
import CheckboxMainAPI from '../CheckboxMain/CheckboxMainAPI';
import CheckboxMain from '../CheckboxMain/CheckboxMain';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { MoreButton } from '../MoreBtn/MoreButton';
import { IGenresIcons } from 'src/types/GenresIcons.types';
import { getGenresIconsAPI } from 'src/services/redux/slices/genresIconsApi/genresIcons';
import { FilmCardSmall } from '../FilmCardWidth180/FilmCardSmall';


export const SlickSliderGenresAPI = ({ }) => {
	const films = useAppSelector((state) => state.movies.movies);
	const page = useAppSelector((state) => state.windowResize.page);
	const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
	const [pageMore, setPageMore] = useState(page);
	const [isMoreButton, setIsMoreButton] = useState(false);

	const dispatch = useAppDispatch();
	const genresicons = useAppSelector(
		(state) => state.genresiconscards.genresicons
	);
	const [data, setData] = useState<IGenresIcons[]>(genresicons);

	useEffect(() => {
		dispatch(getGenresIconsAPI());
	}, []);

	useEffect(() => {
		setData(genresicons);
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 4,
		arrows: true,
	};

	const handleCheckboxChange = (text: string) => {
		if (selectedGenres.includes(text)) {
			setSelectedGenres(selectedGenres.filter((item) => item !== text));
		} else {
			setSelectedGenres([...selectedGenres, text]);
		}
	};

	const filteredFilms =
		selectedGenres.length > 0
			? films.filter((film) => {
					return selectedGenres.some((genre) => film.genres.includes(genre));
			  })
			: films;

	useEffect(() => {
		if (filteredFilms.length > page) {
			setIsMoreButton(true);
		} else {
			setIsMoreButton(false);
		}
	}, [filteredFilms, page]);

	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + page);
	};

	return (
		<div>
			<div className="slick-slider-genres_container">
				<h1 className="slick-slider_title">Фильмы по жанрам</h1>
				<Slider {...settings} className="slick-slider">
					{data.map((item) => (
						<li key={data.indexOf(item)} className="main-page_color-white">
							<CheckboxMainAPI
								genreapi={item}
								checked={false}
								onChange={handleCheckboxChange}
							/>
						</li>
					))}
				</Slider>
			</div>
			<div className="flank_container">
				{filteredFilms.slice(0, pageMore).map((film) => (
					<FilmCardSmall key={film.id} film={film} />
				))}
			</div>
			<div className="flank_btn">
				{isMoreButton ? <MoreButton onClick={handleMoreButtonClick} /> : null}
			</div>
		</div>
	);
};
