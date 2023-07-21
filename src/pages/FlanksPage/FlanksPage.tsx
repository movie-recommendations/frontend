import './FlanksPage.css';
import React, { useEffect, useState} from 'react';
import { IFlanks } from 'src/types/Flanks.types';
import { FC } from 'react';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import { getSelectionsApi } from '../../services/redux/slices/selections/selections';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FilmCard } from 'src/components/FilmCardWidth255/FilmCard';
import { SelectionCard } from 'src/components/SelectionCard/SelectionCard';
import { IFilms } from 'src/types/Film.types';
import { MoreButton } from 'src/components/MoreBtn/MoreButton';

const FlanksPage: FC<IFlanks> = ({ formName }) => {
	const dispatch = useAppDispatch();
	const page = useAppSelector((state) => state.windowResize.page);
	const selected = useAppSelector((state) => state.selection.selections);
	const favorites = useAppSelector((state) => state.films.favoriteFilms);
	const willSee = useAppSelector((state) => state.films.mustSeeFilms);
	const ratedFilms = useAppSelector((state) => state.films.viewedFilms);
	const [toggleFavorites, setToggleFavorites] = useState<IFilms[]>([]);
	const [isMoreButton, setIsMoreButton] = useState(false);
	const [pageMore, setPageMore] = useState(page);

	const title =
		formName === 'ratedFilms'
			? 'Оцененные фильмы'
			: formName === 'willSee'
			? 'Буду смотреть'
			: formName === 'favorites'
			? 'Избранные'
			: 'Подборки';

	useEffect(() => {
		dispatch(getFilmsApi());
		dispatch(getSelectionsApi());
	}, []);

	useEffect(() => {
		if (formName === 'ratedFilms') {
			setToggleFavorites(ratedFilms);
		} else if (formName === 'willSee') {
			setToggleFavorites(willSee);
		} else if (formName === 'favorites') {
			setToggleFavorites(favorites);
		} else {
			setToggleFavorites([]);
		}
	}, [ratedFilms, willSee, favorites, formName]);

	useEffect(() => {
		if (toggleFavorites.length > page) {
			setIsMoreButton(true);
		} else {
			setIsMoreButton(false);
		}
	}, [toggleFavorites, page]);

	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + page);
	};

	return (
		<section className="flank">
			<h1 className="flank_title">{title}</h1>
			<div className="flank_container">
				{formName === 'collections' ? (
					<SelectionCard selected={selected} />
				) : (
					toggleFavorites
						.slice(0, pageMore)
						.map((film) => <FilmCard film={film} />)
				)}
			</div>
			<div className="flank_btn">
				{isMoreButton ? <MoreButton onClick={handleMoreButtonClick} /> : null}
			</div>
		</section>
	);
};

export default FlanksPage;
