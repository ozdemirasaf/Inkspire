import { useState } from "react";
import PostCategories from "../PostCategories";
import Photo from "./photo";

export default function HomePost({ post }) {

    // console.log("post", post);


    const [like, setLike] = useState(false)
    const [save, setSave] = useState(false)

    const handleLikeToggle = () => {
        setLike((prevState) => !prevState)
    }

    const handleSaveToggle = () => {
        setSave((prevState) => !prevState)
    }


    return (
        <div className="w-full sm:w-[20rem] md:w-[25rem] border-2 border-[#2F3336] bg-[#2D2B30] mb-4 rounded-xl p-4 flex flex-col hover:shadow-custom transition-shadow group">
            <div className="flex justify-center relative">

                {
                    post.photo.photoType == 'photo' && <Photo photo={post.photo.postImages} />
                }


                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.1] transition-opacity duration-300 rounded-md" />
            </div>
            {/* {
                post.postImages.length > 0 ? (
                    <PostCategories categories={post.categories} />
                ) :
                    null
            } */}

            <div>
                <div className="flex items-center justify-center font-sm font-semibold text-white">
                    <h2 className="text-base sm:text-lg md:text-xl">{post.postTitle}</h2>
                </div>

                <div className="mt-1 text-[#bfbfbf] text-sm sm:text-base">
                    <p className="leading-6">
                        {post.postDescription}
                    </p>
                </div>

                {/* {
                    post.postImages.length <= 0 ? (
                        <PostCategories categories={post.categories} />
                    ) :
                        null
                } */}

                <div className="mt-5 flex gap-4 items-center">
                    <img src={post.userImg} className="w-[3rem] sm:w-[4.063rem] p-1.5 rounded-full border border-[#ffffff27]" alt="Profile User" />
                    <div className="flex flex-col gap-2">
                        <h4 className="text-white text-sm sm:text-base">{post.userName}</h4>
                        <p className="text-[#bfbfbf] text-xs sm:text-sm">{post.postDate}</p>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4 sm:gap-7">

                <div className="flex gap-1.5 items-center">
                    {like ? (
                        <div onClick={handleLikeToggle} className="rounded-full p-1 hover:bg-[#E32636]/20 backdrop-blur-md transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#E32636] w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
                            </svg>
                        </div>
                    ) : (
                        <div onClick={handleLikeToggle} className="rounded-full p-1 hover:bg-[#E32636]/20 backdrop-blur-md transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#E32636] w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                        </div>

                    )}
                    <span className="text-[#ffffffc6] font-medium text-[14px] sm:text-[16px]">{post.postInfo.heart}</span>
                </div>



                <div className="flex gap-1 items-center ">

                    <div className="rounded-full p-1 hover:bg-[#007CE6]/20 backdrop-blur-md transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-[#007CE6] w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                        </svg>
                    </div>

                    <span className="text-[#ffffffc6] font-medium text-[14px] sm:text-[16px]">{post.postInfo.commit}</span>
                </div>



                <div>
                    {save ? (
                        <div onClick={handleSaveToggle} className="rounded-full p-1 hover:bg-[#007be636]/20 backdrop-blur-md transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#007CE6] w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z" />
                            </svg>
                        </div>
                    ) : (
                        <div onClick={handleSaveToggle} className="rounded-full p-1 hover:bg-[#007be636]/20 backdrop-blur-md transition-all" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#007CE6] w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                            </svg>
                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}