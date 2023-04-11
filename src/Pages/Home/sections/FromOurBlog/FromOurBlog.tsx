import Container from "../../../../components/Container";
import BlogCard from "./BlogCard";
import cover01 from '../../../../assets/blog-01-5-450x300.jpg';
import cover02 from '../../../../assets/blog-02-450x300.jpg';
import cover03 from '../../../../assets/blog-03-450x300.jpg';

const FromOurBlog = () => {
  return(
    <section className="bg-[#F7F8F9]">
      <Container className="py-24">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-5">
            From Our Blog
          </h2>
          <p className='font-normal'>
            Keep always update on latest topics
          </p>
        </div>

        <div className='grid sm:grid-cols-2 gap-6 md:grid-cols-3'>
          <BlogCard 
            img={cover01} 
            title='Here’s What People Are Saying About Rentals' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio…'
          />
          <BlogCard 
            img={cover02}  
            title='7 Important Facts That You Should Know About Rentals' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio…'
          />
          <BlogCard 
            img={cover03}  
            title='Ten Benefits Of Rentals That May Change Your Perspective' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio…'
          />
        </div>
      </Container>
    </section>
  )
}

export default FromOurBlog;