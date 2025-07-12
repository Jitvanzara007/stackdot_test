// UI Implementation:
// o Display post title and truncated body
// o Add “View More” button to show full post body
// o Add a loader while data is being fetched.

import React, { useEffect,useState } from 'react'

const Blog = () => {

    const[posts, setPosts] =useState([])

    useEffect(()=>{
    const fetchD = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            console.error('Error fetching posts:', error)
        }
    }
    fetchD()
    }, [])

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul >
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body}</p>
            <button onClick={() => alert(post.body)}>View More</button>
          </li>
            
        ))}
      </ul>
    </div>
  )
}


  
  


export default Blog