// Milestone 1 -
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post nel nostro feed, (rimuovendo il post di prova dall'html).
// Milestone 2 -
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
// 1 : Formattare le date in formato italiano (gg/mm/aaaa)
// 2 : Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3 : Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


//===========================================================//
//========================||FUNCTION||=======================//
//===========================================================//

function getNewElement(parentElement, element) {
    const newElement = document.createElement(element);
    parentElement.appendChild(newElement);
    return newElement;
    }


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//Inizializzo la variabile del parent a cui inseirò tutto il contenuto
const containerElement = document.querySelector('div.posts-list');

posts.forEach((post, index) => {
    //Iniazializzo la variabile dell'elemento generico Post e ci aggiungo la classe post
    const postElement = getNewElement(containerElement, 'div');
    postElement.classList.add('post');

        //Iniazializzo la variabile del header post e ci aggiungo la classe post__header
        const postHeaderElement = getNewElement(postElement, 'div');
        postHeaderElement.classList.add('post__header');

            //Inizializzo la variabile con i dati principali dell'utente
            const postMediaElement = getNewElement(postHeaderElement, 'div');
            postMediaElement.classList.add('post-meta');

                //Iniazializzo la variabile dell'icona dell'utente e ci aggiungo la classe post-meta__icon
                const postIconElement = getNewElement(postMediaElement, 'div');
                postIconElement.classList.add('post-meta__icon');
                    //Inizalizzo la variabile per l'img dell'icona del post
                    const profileImg = getNewElement(postIconElement, 'img');
                    //!QUI DOVRO' INSERIRE LA CLASSE ALLA IMG, IL SEARCH E L'ALT

                //Inizializzo la variabile con i dati dell'utente
                const postDataElement = getNewElement(postMediaElement, 'div');
                postDataElement.classList.add('post-meta__data');
                    //Inizializzo la variabile per l'autore del post
                    const postAuthorElement = getNewElement(postDataElement, 'div');
                    postAuthorElement.classList.add('post-meta__author');
                    //! QUI DOVRO' INSERIRE I DATI DELL'AUTORE PRESENTI NELL'ARRAY
                    //Inizializzo la variabile per la data del post
                    const postTimeElement = getNewElement(postDataElement, 'div');
                    postTimeElement.classList.add('post-meta__time');
                    //! QUI DOVRO' INSERIRE LE DATE DEL POST PRESENTI NELL'ARRAY
        //Iniazializzo la variabile per il contenuto del post
        const postTextElement = getNewElement(postElement, 'div');
        postTextElement.classList.add('post__text');
        //! QUI ANDRO' AD INSERIRE I CONTENUTI DEL POST PRESENTI NELL'ARRAY
        //Iniazializzo la variabile per il contenuto del post
        const postImageElement = getNewElement(postElement, 'div');
        postImageElement.classList.add('post__image');
            //Inizializzo la variabile dell'effettiva img del post
            const postImg = getNewElement(postImageElement, 'img');
            //!QUI DOVRO' INSERIRE LA CLASSE ALLA IMG, IL SEARCH E L'ALT
        //Inizializzo la variabile per il footer del post
        const postFooterElement = getNewElement(postElement, 'div');
        postFooterElement.classList.add('post__footer');
            //Inizializzo la variabile per il tasto like nel footer
            const likeElement = getNewElement(postFooterElement, 'div');
            likeElement.classList.add('likes', 'js-likes');
                //Inizializzo la variabile per il pollicione il su
                const likeButton = getNewElement(likeElement, 'div');
                likeButton.classList.add('likes__cta');
                //! QUI DOVRO AGGIUNGERE IL TAG A CON HREF E DATA.POSTID E APPENDERLE UNA TAG I PER L'ICONA DEL POLLICE E UNO SPAN PER LA SCRITTA MI PIACE
                const counterLikeElement = getNewElement(likeElement, 'div');
                counterLikeElement.classList.add('likes__counter');
                //!QUI DOVRO AGGIUNGERE "PIACE A" UN TAG B PER IL COUNTER "PERSONE"
});

