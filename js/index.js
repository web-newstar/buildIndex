window.onload = function () {
    /* 获取json数据(图片的地址) */
    $.getJSON("./js/data.json", function (data) {
        if (!data.length) {
            return
        }
        var swiperWrapper = document.getElementById("swiper-wrapper");
        data.forEach(function (ele) {
            var itemScreen = document.createElement("div");
            if (itemScreen.setAttribute) {
                itemScreen.setAttribute("class", "swiper-slide");
                itemScreen.style.background = "url("+ele.valueUrl+") center center no-repeat";
                itemScreen.style.backgroundSize="100%";
            }
            swiperWrapper.appendChild(itemScreen);
        })
        var mySwiper = new MySwiper();
    })

    // 实例化swiper
    function MySwiper() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
        })
        return mySwiper;
    }
}