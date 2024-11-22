export default function Photo({ photo }) {
    console.log("photo", photo);

    // Ortak CSS sınıflarını bir değişkene al
    const commonImgClasses = "w-full rounded-md object-cover object-top";

    // Resim oluşturucu fonksiyon
    const renderImages = (images) =>
        images.map((src, index) => (
            <img
                key={index}
                src={src}
                className={`${commonImgClasses} ${images.length === 4 ? "h-[141px]" : "h-[19.89rem]"}`}
                alt={`Post Image ${index + 1}`}
            />
        ));

    switch (photo.length) {
        case 1:
            return (
                <div className="w-full h-[19.89rem] rounded-md">
                    <img
                        src={photo[0]}
                        className={`${commonImgClasses} h-full`}
                        alt="Post Image 1"
                    />
                </div>
            );

        case 2:
            return (
                <div className="grid grid-cols-2 gap-0.5 rounded-md">
                    {renderImages(photo)}
                </div>
            );

        case 3:
            return (
                <div className="grid grid-cols-2 gap-0.5 rounded-md">
                    {/* Sol tarafta tam yüksekliği kaplayan görsel */}
                    <img
                        src={photo[0]}
                        className={`${commonImgClasses} h-[19.89rem]`}
                        alt="Post Image 1"
                    />
                    {/* Sağ tarafta üst üste iki görsel */}
                    <div className="flex flex-col gap-0.5">
                        <img
                            src={photo[1]}
                            className={`${commonImgClasses} h-[9.945rem]`}
                            alt="Post Image 2"
                        />
                        <img
                            src={photo[2]}
                            className={`${commonImgClasses} h-[9.945rem]`}
                            alt="Post Image 3"
                        />
                    </div>
                </div>
            );

        case 4:
            return (
                <div className="grid grid-cols-2 gap-0.5 rounded-md">
                    {renderImages(photo)}
                </div>
            );

        default:
            return (
                <div className="bg-gray-200 text-center p-4 rounded-md">
                    <p className="text-gray-500">No images available</p>
                </div>
            );
    }
}
