import classes from './BlogList.module.css';
import {useHistory} from "react-router-dom";

const blogs = [
    {
        title: 'How video coaching can help players',
        preview: 'As a youth soccer player, training on your own is a requirement for getting to the next level.\nHowever, training on your own properly is difficult. What drills should you do? How do you know if you are doing them correctly? Private training is great, but it is impossible to get enough of it to be meaningful...\n',
        slug: 'how-video-coaching-can-help-players',
        image: 'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/how-video-coaching-can-help-players/primary.jpg',
        duration: '2 minute read'
    }
]

const BlogList = () => {

    const history = useHistory();

    return (
        <div className={classes.Container}>
            {blogs.map(blog => (
                <div className={classes.Post} onClick={() => history.push(`/blog/${blog.slug}`)}>
                    <img src={blog.image} />
                    <div className={classes.PostContent}>
                        <div className={classes.PostTitle}>
                            {blog.title}
                        </div>
                        <div className={classes.PostPreview}>
                            {blog.preview}
                        </div>
                        <div>
                            {blog.duration}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
