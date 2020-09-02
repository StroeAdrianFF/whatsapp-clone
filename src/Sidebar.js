import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import db from './firebase';
import { useStateValue } from './StateProvider';

//importing icons
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined';


function Sidebar() {

    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => ({//docs = list of docs in the database
                id: doc.id,
                data: doc.data()
            })))
        ))
        return () => {
            unsubscribe(); //cleanup for snapshot
        }
    }, [])




    return (
        <div className="sidebar">


            <div className="sidebar__header">
                <Avatar src={user?.photoURL} /> {/* ? = protect against async invalidity for the first few seconds */}
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>



            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chart" type="text" />

                </div>
            </div>




            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room => {
                    return <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                })}
            </div>


        </div>


    )
}

export default Sidebar
