import React from 'react'
import './postMedium.scss'
import avatar from '../../assets/image/avatar.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import convertDate from '../../utils/convertDate'
export default function PostMedium({ post, isCategory = false, type}) {
    // Dùng tạm khi nào biết cách mapSatetoprops thì xóa đi
    const valueCategory = useSelector(state => state.app.category.find(element => element.key === post.category).value)
    ///
    return (
        <Link to={`/posts/${post.id}`} className={`postMedium ${type}`}>
            <div className="postMediumGroup">
                <img src={post.image} alt="postMediumImg" className="postMediumImg" />
            </div>
            <div className="postMediumGroup">
                <h1 className="postMediumTitle">{post.title}</h1>
                {
                    isCategory &&
                    <span className="postMediumAuthor">
                        <img src={post.user.image ? post.user.image : avatar} alt="postImg" className="postMediumAuthorImg" />
                        <span className="postMediumAuthorName">{post.user.name}</span>
                    </span>
                }
                <span className="postMediumOther">
                    {
                        !isCategory &&
                        <span className="postMediumOtherChild">
                            <i className="postMediumOtherChildIcon bi bi-bookmarks"></i>
                            {valueCategory}
                        </span>
                    }

                    <span className="postMediumOtherChild">
                        <i className="postMediumOtherChildIcon bi bi-hand-thumbs-up"></i>
                        {post.likesNumber}
                    </span>
                    <span className="postMediumOtherChild">
                        <i className="postMediumOtherChildIcon bi bi-chat-left"></i>
                        {post.commentsNumber}
                    </span>
                    <span className="postMediumOtherChild">{convertDate(post.updatedAt, 'noTime')}</span>
                </span>
                <span className="postMediumContent" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </Link>
    )
}