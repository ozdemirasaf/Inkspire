import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/main'
import Home from '../pages/home'
import Notification from '../pages/notification'
import Discover from '../pages/discover'
import Friends from '../pages/friends'
import Profile from '../pages/profile'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { index: true, element: <Home /> },
            { path: 'bildirimler', element: <Notification /> },
            { path: 'kesfet', element: <Discover /> },
            { path: 'arkadaslar', element: <Friends /> },
            { path: 'profile', element: <Profile /> },

        ]
    }
])

export default router