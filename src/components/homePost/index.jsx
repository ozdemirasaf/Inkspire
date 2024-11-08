import { Link } from "react-router-dom";
import PostCategories from "../PostCategories";

export default function HomePost({ post }) {

    return (
        <div className="w-full sm:w-[20rem] md:w-[25rem] border-2 border-[#2F3336] bg-[#2D2B30] mb-4 rounded-xl p-4 flex flex-col hover:shadow-custom transition-shadow group">
            <div className="flex justify-center relative">

                {
                    post.postImages.length ? (
                        <img src={post.postImages} className="w-full rounded-md h-[19.89rem] object-cover object-top" alt="Hobbit: Beş Ordunun Savaşı" />
                    ) :
                        null
                }


                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.1] transition-opacity duration-300 rounded-md" />
            </div>
            {
                post.postImages.length > 0 ? (
                    <PostCategories categories={post.categories} />
                ) :
                    null
            }

            <div>
                <div className="flex items-center justify-center font-sm font-semibold text-white">
                    <h2 className="text-base sm:text-lg md:text-xl">{post.postTitle}</h2>
                </div>

                <div className="mt-1 text-[#bfbfbf] text-sm sm:text-base">
                    <p className="leading-6">
                        {post.postDescription}
                    </p>
                </div>

                {
                    post.postImages.length <= 0 ? (
                        <PostCategories categories={post.categories} />
                    ) :
                        null
                }

                <div className="mt-5 flex gap-4 items-center">
                    <img src={post.userImg} className="w-[3rem] sm:w-[4.063rem] p-1.5 rounded-full border border-[#ffffff27]" alt="Profile User" />
                    <div className="flex flex-col gap-2">
                        <h4 className="text-white text-sm sm:text-base">{post.userName}</h4>
                        <p className="text-[#bfbfbf] text-xs sm:text-sm">{post.postDate}</p>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4 sm:gap-7">
                <Link>
                    <div className="flex gap-1.5 items-center">
                        <svg viewBox="0 0 24 24" className="text-[#E32636] w-5 h-5 sm:w-6 sm:h-6">
                            <path fill="currentColor" d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                        </svg>
                        <span className="text-[#ffffffc6] font-medium text-[14px] sm:text-[16px]">{post.postInfo.heart}</span>
                    </div>
                </Link>

                <Link>
                    <div className="flex gap-1.5 items-center">
                        <svg viewBox="0 0 24 24" className="text-[#007CE6] w-5 h-5 sm:w-6 sm:h-6">
                            <path fill="currentColor" d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                        </svg>
                        <span className="text-[#ffffffc6] font-medium text-[14px] sm:text-[16px]">{post.postInfo.commit}</span>
                    </div>
                </Link>

                <Link>
                    <div>
                        <svg viewBox="0 0 24 24" className="text-[#007CE6] w-5 h-5 sm:w-6 sm:h-6">
                            <path fill="currentColor" d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}