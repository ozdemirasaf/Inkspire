import TrendPost from '../../components/trendPosts'
import Settings from '../../components/settings'

export default function RightSidebar({ contentType }) {
    return (

        <>
            {contentType === '/' && <TrendPost />}
            {contentType === '/profile' && <Settings />}
        </>


    );
}
