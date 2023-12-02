// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的Protein小宝贝",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第2个生日了哦",
        "这次生日没有陪在BB身边",
        "异地恋是挺辛苦的",
        "但我不希望因为距离",
        "错过本该厮守一生的人",
        "下次见到BB就是21岁啦",
        "希望bb绩点高高",
        "开心快乐每一天",
        "啵啵啵",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的Protein小宝贝": "./imgs/Protein6.jpg",
        "今天是你的生日": "./imgs/Protein6.jpg",
        "这是我们在一起的": "./imgs/Couple1.jpg",
        "第2个生日了哦": "./imgs/Couple1.jpg",
        "这次生日没有陪在BB身边": "./imgs/Couple2.jpg",
        "异地恋是挺辛苦的": "./imgs/Couple2.jpg",
        "但我不希望因为距离": "./imgs/Couple2.jpg",
        "错过本该厮守一生的人": "./imgs/Couple2.jpg",
        "下次见到BB就是21岁啦": "./imgs/Protein1.jpg",
        "希望bb绩点高高": "./imgs/Protein2.jpg",
        "开心快乐每一天": "./imgs/Protein3.jpg",
        "啵啵啵": "./imgs/Protein4.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
