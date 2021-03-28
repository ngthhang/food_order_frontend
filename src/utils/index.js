const numFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const getRecommendImg = () => {
    return require("../assets/images/recommend.svg").default;
};

const getImg = (src) => {
    return require(src).default;
}

export{
    numFormat, getRecommendImg, getImg
}