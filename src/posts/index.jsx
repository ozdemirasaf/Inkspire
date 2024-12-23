

const Posts = [
    {
        id: 1,
        postTitle: 'Hobbit',
        postDescription: `Hobbit: Beş Ordunun Savaşı, Peter Jackson'ın yönetmenliğini yaptığı 17 Aralık 2014 tarihinde gösterime giren destansı fantezi türündeki macera filmi. J. R. R. Tolkien'in 1937 yılında yazılmış Hobbit romanından uyarlanan üçlemenin üçüncü ve son filmidir`,
        photo: {
            photoType: 'photo',
            postImages: [
                '/movies-books-img/besOrdu.jpg',
                '/movies-books-img/besOrdu.jpg'
            ],
        },

        categories: [
            "Macera",
            "fantastik"
        ],
        postInfo: {
            heart: '13k',
            commit: '3k'
        },
        postDate: `Ekim 26, 2024`,
        userName: 'User1234',
        userImg: '/images/boy.png',
    },
    {
        id: 2,
        postTitle: 'Yüzük Kardeşliği',
        postDescription: `Yüzüklerin Efendisi: Yüzük Kardeşliği, Peter Jackson'ın yönettiği Yüzüklerin Efendisi üçlemesinin birinci filmidir ve 2001 yılında gösterime girmiştir. J. R. R.`,
        photo: {
            photoType: 'photo',
            postImages: [
                '/movies-books-img/yuzukKardesligi.jpg',
                '/movies-books-img/yuzukKardesligi.jpg',
                '/movies-books-img/yuzukKardesligi.jpg'
            ],
        },
        categories: [
            "Macera",
            "fantastik"
        ],
        postInfo: {
            heart: '11k',
            commit: '5k'
        },
        postDate: `Ekim 27, 2024`,
        userName: 'Kullanici',
        userImg: '/images/boy2.png',
    },
    {
        id: 3,
        postTitle: 'Güç Yüzükleri',
        postDescription: `Yüzüklerin Efendisi: Güç Yüzükleri, Amazon Prime Video için geliştirilen fantastik, kurgusal bir dizidir. J. R. R. Tolkien'in The Hobbit ve The Lord of the Rings kitaplarındaki olaylardan binlerce yıl öncesini anlatan dizi Orta Dünya'nın İkinci Çağında geçmektedir`,
        photo: {
            photoType: 'photo',
            postImages: [
                '/movies-books-img/gucYuzukleri.jpg',
                '/movies-books-img/gucYuzukleri.jpg',
                '/movies-books-img/gucYuzukleri.jpg',
                '/movies-books-img/gucYuzukleri.jpg'
            ],
        },
        categories: [
            "Dram"
        ],
        postInfo: {
            heart: '42k',
            commit: '10k'
        },
        postDate: `Ekim 29, 2024`,
        userName: 'orta_dunya',
        userImg: '/images/girl.png',
    },
    {
        id: 4,
        postTitle: 'Felsefe Taşı',
        postDescription: `Harry Potter ve Felsefe Taşı, Chris Columbus tarafından yönetilen ve Warner Bros. Pictures tarafından dağıtılan 2001 yapımı fantezi filmidir. J. K. Rowling'in 1997 tarihli aynı adlı romanından uyarlanan filmin senaryosu Steve Kloves tarafından yazılırken yapımcılığı David Heyman tarafından üstlenildi.`,
        photo: {
            photoType: 'text',
            postImages: [],
        },
        categories: [
            "Çocuk",
            "Fantastik"
        ],
        postInfo: {
            heart: '61k',
            commit: '61k'
        },
        postDate: `Kasım 4, 2024`,
        userName: 'orta_dunya',
        userImg: '/images/boy3.png',
    },
    {
        id: 6,
        postTitle: 'Hobbit',
        postDescription: `Hobbit: Beş Ordunun Savaşı, Peter Jackson'ın yönetmenliğini yaptığı 17 Aralık 2014 tarihinde gösterime giren destansı fantezi türündeki macera filmi. J. R. R. Tolkien'in 1937 yılında yazılmış Hobbit romanından uyarlanan üçlemenin üçüncü ve son filmidir`,
        photo: {
            photoType: 'photo',
            postImages: [
                '/movies-books-img/besOrdu.jpg',
            ],
        },

        categories: [
            "Macera",
            "fantastik"
        ],
        postInfo: {
            heart: '13k',
            commit: '3k'
        },
        postDate: `Ekim 26, 2024`,
        userName: 'User1234',
        userImg: '/images/boy.png',
    },

]

const TrendPosts = [
    {
        id: 1,
        userAvatar: '/images/boy.png',
        userName: 'Oliver',
        description: `Yüzük Kardeşliği`,
        like: '15,600'
    },
    {
        id: 2,
        userAvatar: '/images/boy2.png',
        userName: 'Harry',
        description: `Hobbit Beş Ordu`,
        like: '4,000'
    },
    {
        id: 3,
        userAvatar: '/images/girl.png',
        userName: 'Jack',
        description: `Harry Potter`,
        like: '500'
    },
    {
        id: 4,
        userAvatar: '/images/boy.png',
        userName: 'Jacob',
        description: `Örümcek Adam: Eve Dönüş Yok`,
        like: '10,000'
    },
    {
        id: 5,
        userAvatar: '/images/boy2.png',
        userName: 'Charlie',
        description: `Örümcek Adam: Eve Dönüş Yok`,
        like: '10,000'
    },
    {
        id: 6,
        userAvatar: '/images/boy.png',
        userName: 'Thomas',
        description: `Örümcek Adam: Eve Dönüş Yok`,
        like: '10,000'
    },
    {
        id: 7,
        userAvatar: '/images/boy2.png',
        userName: 'George',
        description: `Örümcek Adam: Eve Dönüş Yok`,
        like: '10,000'
    },
    {
        id: 8,
        userAvatar: '/images/boy3.png',
        userName: 'Oscar',
        description: `Örümcek Adam: Eve Dönüş Yok`,
        like: '10,000'
    },
    {
        id: 9,
        userAvatar: '/images/boy2.png',
        userName: 'James',
        description: `Örümcek Adam: Eve Dönüş Yok`,
        like: '10,000'
    },
    {
        id: 10,
        userAvatar: '/images/boy.png',
        userName: 'William',
        description: `Örümcek Adam: Eve Dönüş Yok`,
        like: '10,000'
    }
]

const Notifications = [
    {
        id: 1,
        userAvatar: '/images/boy2.png',
        userName: 'User1',
        notificationDescription: `Bu kullanıcı bir paylaşımda bulundı.`
    },
    {
        id: 2,
        userAvatar: '/images/girl.png',
        userName: 'User2',
        notificationDescription: `Bu kullanıcı paylaşımınıza bir yorum attı.`
    }
]

const friendsAdd = [
    {
        id: 1,
        avatar: "/images/boy.png",
        userName: "Asaf",
        bio: `En sevdiğim film ve kitap serisi yüzükler efendisi.`
    },
    {
        id: 2,
        avatar: "/images/girl.png",
        userName: "Zeynep",
        bio: `En sevdiğim film ve kitap serisi Harry Potter.`
    },
    {
        id: 3,
        avatar: "/images/boy2.png",
        userName: "Ahmet",
        bio: `En sevdiğim film ve kitap serisi Güç yüzükleri.`
    },
    {
        id: 4,
        avatar: "/images/boy3.png",
        userName: "Zehra",
        bio: `Beni takip edinn.`
    },
    {
        id: 5,
        avatar: "/images/boy2.png",
        userName: "Özdemir asaf",
        bio: `Klasik kitapları çok severim.`
    },
    {
        id: 6,
        avatar: "/images/girl.png",
        userName: "Elif",
        bio: ``
    },
]

export { Posts, TrendPosts, Notifications, friendsAdd }
