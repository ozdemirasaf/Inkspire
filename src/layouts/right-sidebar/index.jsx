import TrendPost from '../../components/trendPosts'
import Settings from '../../components/settings'

export default function RightSidebar({ contentType }) {
    return (
        <aside className="h-full fixed right-0 top-0 pr-8  flex-col hidden lg:flex">
            <div className="p-4 mt-[10rem] rounded-xl w-[21.75rem] shadow-layouts bg-[#2d2b30]">
                {contentType === '/' && <TrendPost />}
                {contentType === '/profile' && <Settings />}
            </div>
        </aside>
    );
}
