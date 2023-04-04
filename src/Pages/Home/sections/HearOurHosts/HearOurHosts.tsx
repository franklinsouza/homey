import Container from "../../../../components/Container";
import HostComment from "./HostComment";

const HeaderOurHosts = () => {
  return(
    <section>
      <Container className='py-24'>
        <div className="mb-16">
          <h2 className="text-center text-3xl font-bold mb-5">
            Hear From Our Hosts
          </h2>
          <p className='text-center font-normal'>
            The biggest reward is to satisfy our clients and share their experience with us
          </p>
        </div>

        <div className='grid sm:grid-cols-2 gap-6 md:grid-cols-4'>
          <HostComment />
          <HostComment />
          <HostComment />
          <HostComment />
        </div>
      </Container>
    </section>
  )
}

export default HeaderOurHosts;