import classes from './BlogList.module.css';
import BlogPost from "./blog-post/BlogPost";
import SubscribeForm from "./subscribe-form/SubscribeForm";

const blogs = [
    {
        title: 'How video coaching can help players',
        slug: 'how-video-coaching-can-help-players',
        image: 'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/how-video-coaching-can-help-players/primary.jpeg',
        duration: '2 minute read'
    },
    {
        title: 'How to develop a more consistent shot',
        slug: 'how-to-develop-a-more-consistent-shot',
        image: 'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/how-to-develop-a-more-consistent-shot/primary.jpeg',
        duration: '3 minute read'
    },
    {
        title: 'What do youth soccer coaches look for?',
        slug: 'what-do-youth-soccer-coaches-look-for',
        image: 'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/what-do-youth-soccer-coaches-look-for/primary.jpg',
        duration: '3 minute read'
    },
    {
        title: 'Why am I not playing on my soccer team?',
        slug: 'why-am-i-not-playing-on-my-soccer-team',
        image: 'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/why-am-i-not-playing-on-my-soccer-team/primary.jpeg',
        duration: '1 minute read'
    },
    {
        title: 'Does juggling actually make me a better soccer player?',
        slug: 'does-juggling-actually-make-me-a-better-player',
        image: 'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/does-juggling-actually-make-me-a-better-player/primary.jpg',
        duration: '3 minute read'
    }
]

const BlogList = () => {

    const isLargePost = (idx) => {
        return idx % 10 === 3 || idx % 10 === 9;
    }

    return (
        <div className={classes.Container}>
            <div className={classes.TwoThirds}>
                <BlogPost title={blogs[0].title}
                          slug={blogs[0].slug}
                          duration={blogs[0].duration}
                          image={blogs[0].image}/>
            </div>
            <div className={classes.OneThird}>
                <SubscribeForm />
            </div>
            {blogs.slice(1,).map((blog, idx) => (
                <div className={isLargePost(idx) ? classes.TwoThirds : classes.OneThird}>
                    <BlogPost title={blog.title}
                              slug={blog.slug}
                              duration={blog.duration}
                              image={blog.image} />
                </div>
            ))}
        </div>
    );
}

export default BlogList;
