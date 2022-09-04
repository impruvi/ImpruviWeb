import classes from './BlogList.module.css';
import {useHistory} from "react-router-dom";

const blogs = [
    {
        title: 'How video coaching can help players',
        preview: 'As a youth soccer player, training on your own is a requirement for getting to the next level.\nHowever, training on your own properly is difficult. What drills should you do? How do you know if you are doing them correctly? Private training is great, but it is impossible to get enough of it to be meaningful...\n',
        slug: 'how-video-coaching-can-help-players',
        image: 'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/how-video-coaching-can-help-players/primary.jpeg',
        duration: '2 minute read'
    },
    {
        title: 'Why do I keep mishitting my shots?',
        preview: 'Arguable one of the most frustrating feelings in soccer is when you line up to strike the ball with' +
            'your laces — but when you hit the ball, rather than going directly toward the goal with a slight backspin,' +
            'it slices wide of the goal with a side spin. But why does this happen?',
        slug: 'why-do-i-keep-mishitting-my-shots',
        image: 'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/why-do-i-keep-mishitting-my-shots/primary.jpeg',
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
