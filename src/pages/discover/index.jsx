import { Link } from "react-router-dom";
import HomePost from "../../components/homePost";
import { Posts } from "../../posts";
import Slider from "../../components/slider";


export default function Discover() {
    return (
        <div className="flex flex-col gap-5 p-4">

            <Slider />

            <div className="px-4 flex justify-center " >
                <div className="p-4 flex flex-col gap-4">
                    {Posts.map(post => (
                        <Link key={post.id} to={`/post/${post.id}`}>
                            <HomePost post={post} />
                        </Link>
                    ))}
                </div>

            </div >
        </div>
    );
}
