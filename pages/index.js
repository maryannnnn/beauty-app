import React, {useEffect, useState} from 'react';
import axios from "axios";

const Index = () => {
    const [posts, usePosts] = useState([])
    useEffect(() => {
        console.log("posts   iiii")
        getPosts()
    }, []);

    const getPosts = async () => {
        try {
            const res = await axios.get('https://psih.neo-lines.com/wp-json/wp/v2/posts')
            console.log("Res posts", res.data)
            usePosts(res.data)
            console.log("posts", res.data)
        } catch (error) {
            console.log("Error", error)
        }
    }



    return (
        <main>
            <div>
                {posts.map(item => (
                    <div key={item.id}>
                        <div>{item.link}</div>
                    </div>
                ))
                }
            </div>
        </main>
    );
}

export default Index
