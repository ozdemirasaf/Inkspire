import { Link } from "react-router-dom";
import HomePost from "../../components/homePost";
import { Posts } from "../../posts";

export default function Home() {

    return (
        <div className="flex items-center justify-center">
            <div className="p-4 flex flex-col gap-4">

                {Posts.map(post => (
                    <Link key={post.id}>
                        <HomePost post={post} />
                    </Link>
                ))}
            </div>
        </div>

    )
}