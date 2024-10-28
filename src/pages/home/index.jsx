import { Link } from "react-router-dom";
import HomePost from "../../components/homePost";
import { Posts } from "../../posts";

export default function Home() {

    return (
        <div className="p-4 flex flex-col items-center gap-4 justify-center">

            {Posts.map(post => (
                <Link>
                    <HomePost post={post} key={post.id} />
                </Link>
            ))}

        </div>
    )
}