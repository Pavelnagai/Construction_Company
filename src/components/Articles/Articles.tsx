import React from 'react';
import cla from '../../image/Project Cover.png'
import bet from '../../image/Project Cover-1.png'
import './Articles.scss'

type ArticleType = {
    articleTitle: string,
    titleTwo: string
    src: any,

}

function Article(props: ArticleType) {
    return <div className="container col-sm-12 col-md-6 mb-5 article">
        <h3>{props.articleTitle}</h3>
        <img className="img-fluid" src={props.src} alt=""/>
        <div className="row mt-4">
            <div className="col-6 d-none d-sm-block"><h6>{props.titleTwo}</h6></div>
            <div className="col-6 text-center btnDiv ">
                <button className="btn btnWar btnWindow text-center">Читать полностью</button>
            </div>
        </div>
    </div>;
}

const Articles = () => {
    return (
        <div className="container-fluid articles">
            <div className="containerIndex">
                <h2>Актульные статьи</h2>
                <div className="row">
                    <Article articleTitle="Марки бетона: характеристики" src={cla} titleTwo="Марки бетона"/>
                    <Article articleTitle="Как определяется класс бетона?" src={bet} titleTwo="Классы бетона"/>
                </div>
            </div>
        </div>
    );
};

export default Articles;