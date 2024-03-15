const body = document.querySelector("body");
const block = document.querySelector(".block");
const block2Text = document.querySelector(".block2>.block2-text");
const block3 = document.querySelector(".block3");
const block4 = document.querySelector(".block4");
const block5 = document.querySelector(".block5");
const button = document.querySelector("#first");
const button3 = document.querySelector("#third");
const button2 = document.querySelector("#second");
const text = document.querySelector("#PaintingComunication");
const img = document.querySelector("#ThatBoy");

const groupBackgroundColors = [block, block3, block4, block5, button, button3];
const groupColors = [button, button3];

function theme() {
    if (body.classList.contains("body-dark")) {

        body.classList.remove("body-dark");
        body.classList.add("body-light");

        // for (const elem of groupBackgroundColors) {
        //     elem.classList.remove("dark");
        //     elem.classList.add("light");
        // }

        groupBackgroundColors.forEach((elem) => {
            elem.classList.remove("dark");
            elem.classList.add("light");
        })

        groupColors.forEach((elem) => {
            elem.classList.remove("color-dark");
            elem.classList.add("color-light");
        })

        button2.classList.remove("border-dark");
        button2.classList.add("border-light");

        text.classList.remove("text-dark");
        text.classList.add("text-light");

    }

    else {
        body.classList.remove("body-light");
        body.classList.add("body-dark");

        groupBackgroundColors.forEach((elem) => {
            elem.classList.remove("light");
            elem.classList.add("dark");
        })

        groupColors.forEach((elem) => {
            elem.classList.remove("color-light");
            elem.classList.add("color-dark");
        })

        button2.classList.remove("border-light");
        button2.classList.add("border-dark");

        text.classList.remove("text-light");
        text.classList.add("text-dark");

    }
}

const listImages = [
    {
        src: 'images/boyForProgect.png',
        nameImg: 'boyForProgect'
    },
    {
        src: 'images/detectiv3.png',
        nameImg: 'detectiv3'
    },

    {
        src: 'images/cat.jpg',
        nameImg: 'cat'
    },

    {
        src: 'images/tcani.jpg',
        nameImg: 'tcani'
    }
];


const setImg = currentDataImg => {
    img.src = currentDataImg.src;
    img.alt = currentDataImg.nameImg;
};

setImg(listImages[0]);

let count = 0;

function onChangeImg() {
    if (count === (listImages.length) - 1) {
        count = 0;
    }
    else {
        count += 1;
    }
    setImg(listImages[count]);
}

const block2Texts = {
    text1: `<p>Моим хобби также является чтение книг. Лишь в этом году я начала серьезно к этому относиться и читать каждый день
            по 20 - 70 страниц. Ранее мне казалось , это скучным занятием, однако сейчас я могу провести за любимой книгой 
            более 2 часов, наслаждаясь процессом.</p>
            <p>
            На сегодняшний день , пожалуй, моей любимой книгой является "Преступление и наказание". Возможно банально, но мне действительно очень понравилось это произведение Фёдора Достоевского.
            Решение прочесть и приобрести её было спонтанным, и сейчас я нисколько не жалею , что решилась . Это было первое произведение Достоевского с которым я ознакомилась , именно из-за него я
            очень полюбила этого автора. Меня зацепил его стиль написания и мысли, которые он пытается донести через главных героев . Так же было интересно наблюдать за действиями главного героя Родиона Романовича Раскольникова
            и его четных попытках избежать наказания, которое в конечном итоге все равно его настигло , и речь не о каторге, на которую он попал в конечном итоге , а о его внутренних терзаниях и переживаниях .</p>
            <p>На данный момент я читаю произведение Томаса Харриса "Ганибал" - должна признать , что после "Преступления и наказания" , мне было трудно начать эту книгу ,
            т.к стиль письма у авторов колоссально отличается и явно не в сторону Харриса. Ранее я уже ознакомилась с двумя  его романами  "Красный дракон " и "Молчание ягнят" - которые , на мой взгляд , были очень интересны .
            Надеюсь, что и это произведение  мне понравится не меньше, и вдохновит на творчество и чтение в том числе</p>`,

    text2: `<p>Рисование - это искусство выражения идей и чувств с помощью линий, форм и цветов.</p>
            <p>Часто в свободное время я рисую, это моё главное хобби, которое позволяет мне отдохнуть и отвлечься от
                проблем. Однако оно требует много времени, внимания и тренировки для достижения хороших результатов. Я
                начала интересоваться искусством ещё в детстве, что помогло мне в будущем добиться хороших результатов.
                Именно из-за этого увлечения в 10 лет я приняла решение поступить в художественную школу имени Щусева, а уже
                в 14 получила диплом об окончании. За эти 4 года мой уровень рисования заметно вырос, что является заслугой
                моей преподавательницы Ирины Дмитриевны Франковой, её терпения и профессионализма. Сейчас многие говорят,
                что в подобных заведениях мало чему учат. Не могу с ними согласиться, ведь лично я действительно многому
                научилась. Но все же я согласна с тем, что многие учителя в художке могут недобросовестно выполнять свою
                работу, не объясняя, помогая и не вдохновляя ученика. На мой взгляд, это обусловлено очень маленькими
                зарплатами, а также плохими условиями работы для преподавателя. ( Несмотря на "вступительные экзамены",
                берут абсолютно всех детей, несмотря на то, как они рисуют. Из-за этого формируются большие группы, которые
                сложно разместить в маленьких кабинетах, предоставляемых учителям. Зарплата учителя также зависит от того,
                когда ученик оплачивает обучение; если не оплатит вовсе, эта сумма вычитается из зарплаты. Директору, на мой
                взгляд, совершенно не интересует мнение её сотрудников, что также влияет на качество обучения. ) Лично мне
                очень повезло с преподавателем, она действительно любит свою работу и детей, которых обучает. За это я ей
                очень благодарна.</p>
            <p>В общем, на данный момент мне нравится рисование, и я планирую развиваться в этом направлении
                совершенствовать свой стиль.</p>`
    ,
}

let isText1 = true;
function onChangeText() {
    block2Text.innerHTML = isText1 ? block2Texts.text1 : block2Texts.text2;
    isText1 = !isText1;
}