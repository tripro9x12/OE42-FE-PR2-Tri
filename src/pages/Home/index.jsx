import Container from '@material-ui/core/Container';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MultipleCarousel from '../../components/MultipleCarousel';
import * as actions from './../../actions';
import bannerImg from './../../assets/images/summer-sale.jpg';
import './Home.scss';
import Slide from './Slide';

function Home() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const hotTrendProducts = useSelector(state => state.homeData.hotTrendData);
    const menProducts = useSelector(state => state.homeData.menClothesData);
    const womenProducts = useSelector(state => state.homeData.womenClothesData);
    const kidsProducts = useSelector(state => state.homeData.kidsClothesData);
    const handbagAndShoesProducts = useSelector(state => state.homeData.handbagAndShoesData);

    const { t } = useTranslation();

    useEffect(() => {
        dispatch(actions.actSetHotTrendData(products));
        dispatch(actions.actSetMenClothesData(products));
        dispatch(actions.actSetWomenClothesData(products));
        dispatch(actions.actSetKidsClothesData(products));
        dispatch(actions.actSetHandbagAndShoesData(products));
    }, [products]);

    return (
        <main className="main">
            <Slide />
            <Container>
                <section className="section__hot-product">
                    <MultipleCarousel label="hot trend product" products={hotTrendProducts} />
                    <div className="section__btn">
                        <Link to="/featured-products" className="btn__see-more">
                            <ArrowRightAltIcon /> {t('see more')}
                        </Link>
                        <span></span>
                    </div>
                </section>
                <section className="section__banner">
                    <img src={bannerImg} alt={`link ${bannerImg} error`} />
                </section>
            </Container>
        </main>
    );
}

export default Home;