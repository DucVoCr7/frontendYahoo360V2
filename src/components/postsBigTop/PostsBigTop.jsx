import React from 'react'
import './postsBigTop.scss'
import PostBrief from '../postBrief/PostBrief'
export default function PostsBigTop({posts, type}) {
    return (
        <div className='postsBigTop'>
            <div className="postsBigTopTop">
                <PostBrief post={posts[0]} type={'noContentBigTop'}/>
            </div>
            <div className="postsBigTopBottom">
                <div className="postsBigTopBottomItem">
                    <PostBrief post={posts[1]} type={'noImgBigTop'}/>
                    <PostBrief post={posts[2]} type={'noImgBigTop'}/>
                </div>
                <div className="postsBigTopBottomItem">
                    <PostBrief post={posts[3]} type={'noImgBigTop'}/>
                    <PostBrief post={posts[4]} type={'noImgBigTop'}/>
                </div>
            </div>
        </div>
    )
}