

const Posts = [
    {
        id: 1,
        postTitle: 'Hobbit',
        postDescription: `Hobbit: Beş Ordunun Savaşı, Peter Jackson'ın yönetmenliğini yaptığı 17 Aralık 2014 tarihinde gösterime giren destansı fantezi türündeki macera filmi. J. R. R. Tolkien'in 1937 yılında yazılmış Hobbit romanından uyarlanan üçlemenin üçüncü ve son filmidir`,
        postImages: [
            '/movies-books-img/besOrdu.jpg'
        ],
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
        postImages: [
            '/movies-books-img/yuzukKardesligi.jpg'
        ],
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
        userImg: '/images/boy.png',
    },
    {
        id: 3,
        postTitle: 'Güç Yüzükleri',
        postDescription: `Yüzüklerin Efendisi: Güç Yüzükleri, Amazon Prime Video için geliştirilen fantastik, kurgusal bir dizidir. J. R. R. Tolkien'in The Hobbit ve The Lord of the Rings kitaplarındaki olaylardan binlerce yıl öncesini anlatan dizi Orta Dünya'nın İkinci Çağında geçmektedir`,
        postImages: [
            '/movies-books-img/gucYuzukleri.jpg'
        ],
        categories: [
            "Dram"
        ],
        postInfo: {
            heart: '42k',
            commit: '10k'
        },
        postDate: `Ekim 29, 2024`,
        userName: 'orta_dunya',
        userImg: '/images/boy.png',
    },
    {
        id: 4,
        postTitle: 'Felsefe Taşı',
        postDescription: `Harry Potter ve Felsefe Taşı, Chris Columbus tarafından yönetilen ve Warner Bros. Pictures tarafından dağıtılan 2001 yapımı fantezi filmidir. J. K. Rowling'in 1997 tarihli aynı adlı romanından uyarlanan filmin senaryosu Steve Kloves tarafından yazılırken yapımcılığı David Heyman tarafından üstlenildi.`,
        postImages: [],
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
        userImg: '/images/boy.png',
    }

]

const TrendPosts = [
    {
        id: 1,
        userAvatar: '/images/boy.png',
        description: `Yüzük Kardeşliği`,
        like: '15,600'
    },
    {
        id: 2,
        userAvatar: '/images/boy.png',
        description: `Hobbit Beş Ordu`,
        like: '4,000'
    },
    {
        id: 3,
        userAvatar: '/images/boy.png',
        description: `Harry Potter`,
        like: '500'
    },
    {
        id: 4,
        userAvatar: '/images/boy.png',
        description: `Örümcek Adam: Eve Dönüş Yok`,
        like: '10,000'
    }
]

const Notifications = [
    {
        id: 1,
        userAvatar: '/images/boy.png',
        userName: 'User1',
        notificationDescription: `Bu kullanıcı bir paylaşımda bulundı.`
    },
    {
        id: 2,
        userAvatar: '/images/boy.png',
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
        avatar: "/images/boy.png",
        userName: "Zeynep",
        bio: `En sevdiğim film ve kitap serisi Harry Potter.`
    },
    {
        id: 3,
        avatar: "/images/boy.png",
        userName: "Ahmet",
        bio: `En sevdiğim film ve kitap serisi Güç yüzükleri.`
    },
    {
        id: 4,
        avatar: "/images/boy.png",
        userName: "Zehra",
        bio: `Beni takip edinn.`
    },
    {
        id: 5,
        avatar: "/images/boy.png",
        userName: "Özdemir asaf",
        bio: `Klasik kitapları çok severim.`
    },
    {
        id: 6,
        avatar: "/images/boy.png",
        userName: "Elif",
        bio: ``
    },
]

export { Posts, TrendPosts, Notifications, friendsAdd }
