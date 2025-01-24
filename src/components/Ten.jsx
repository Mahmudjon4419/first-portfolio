const Ten = () => {
    const logo = [
        { titleH1: "Каталог косметики", titleONE: "Акции", titleTWO: "Программа лояльности", titleTHREE: "Доставка и оплата", titleFOUR: "Гарантии", titleFIVE: "Контакты" },
        { titleH1: "Клиентам", titleONE: "Юридическим лицам", titleTWO: "Частным клиентам", titleTHREE: "Косметологам", titleFOUR: "Гарантии", titleFIVE: "Партнерская программа" },
        { titleH1: "Компания", titleONE: "Новости", titleTWO: "Наша команда", titleTHREE: "Партнеры", titleFOUR: "Отзывы и благодарности", titleFIVE: "Статьи и события" }
    ];

    return (
        <div className="tenContainer">
            <div className="tenChild">
                <div className="tenInfo">
                    <h1>PerfectShop</h1>
                    <div className="infoContainer">
                        <div className="infoOne">
                            <h3>+7 (499) 550-00-50</h3>
                            <span>Звонок по России бесплатный</span>
                        </div>
                        <div className="infoTwo">
                            <span>г.Москва, улица 1905 года, 267/2 </span>
                            <span>contact@perfectshop.com</span>
                            <div className="logoContainer">
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tenParent">
                    {logo.map((product, index) => (
                        <div className="tenBox" key={index}>
                            <h1>{product.titleH1}</h1>
                            <div className="tenBoxChild">
                                <a href="#"><span>{product.titleONE}</span></a>
                                <a href="#"><span>{product.titleTWO}</span></a>
                                <a href="#"><span>{product.titleTHREE}</span></a>
                                <a href="#"><span>{product.titleFOUR}</span></a>
                                <a href="#"><span>{product.titleFIVE}</span></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ten;
