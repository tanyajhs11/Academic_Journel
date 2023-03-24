import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PeopleIcon from '@mui/icons-material/People';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AndroidIcon from '@mui/icons-material/Android';
import FeedIcon from '@mui/icons-material/Feed';


export const SidebarData=[
    {
        title:"Journal",
        icon:<HomeIcon/>,
        link:"/Journal",

    },
    {
        title:"BookChapter",
        icon:<BookIcon/>,
        link:"/Book",

    },
    {
        title:"Conference",
        icon:<VideoCallIcon/>,
        link:"/Conference",

    },
    {
        title:"ExpertTalks",
        icon:<PeopleIcon/>,
        link:"/People",

    },
    {
        title:"InvitedTalks",
        icon:<DirectionsRunIcon/>,
        link:"/DirectionsRun",

    },
    {
        title:"Workshop/Seminar",
        icon:<WorkspacePremiumIcon/>,
        link:"/WorkspacePremium",

    },
    {
        title:"FacultyDevProg",
        icon:<AndroidIcon/>,
        link:"/Android",

    },
    {
        title:"AdministartionDevProg",
        icon:<AndroidIcon/>,
        link:"/Android",

    },
    {
        title:"PaperReviews",
        icon:<FeedIcon/>,
        link:"/Android",

    },
]