import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {cover,title,author,author_img,reading_time,posted_date,hashtags} = blog;
    console.log(blog)
    return (
        <div>
            <img className='w-[845px] h-[450px] object-cover rounded-lg mb-8' src={cover} alt={`cover picture of the ${cover}`} />
            <div className='flex mb-4 justify-between items-center'>
                <div className='flex justify-center items-center '>
                    <img className='w-[60px] h-[60px] rounded-full object-cover' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h5 className='font-bold text-[#111111] text-2xl'>{author}</h5>
                        <p className='font-semibold text-[#111111] text-base opacity-60'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className='font-medium text-[#111111] text-xl opacity-60'>{reading_time} min read</p>
                </div>
            </div>
            <h2 className='font-bold text-[#111111] text-4xl mb-4'>{title}</h2>
            <p className='mb-4'>
                {
                hashtags.map((hash,idx) => <span key={idx}><a className='font-medium text-[#111111] text-xl opacity-60 mr-4' href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;