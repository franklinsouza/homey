import Container from "../../../../components/Container";
import BlogCard from "./BlogCard";

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
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </section>
  )
}

export default FromOurBlog;