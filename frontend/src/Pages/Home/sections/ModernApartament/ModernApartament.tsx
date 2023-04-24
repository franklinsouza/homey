import Container from "../../../../components/Container";
import bg from '../../../../assets/39-4.jpg'

const ModernApartament = () => {
  return(
    <section style={{backgroundImage: `url(${bg})`}} className='py-32'>
      <Container>
        <div className='flex flex-col items-start bg-white/[.89] p-12 max-w-[660px]'>
          <div className='mb-9'>
            <h2 className='text-3xl font-semibold mb-2'>
              Modern Apartment
            </h2>
            <p className='text-2xl font-light'>
              $79 at night
            </p>
          </div>

          <p className='text-lg font-light mb-8'>
            I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <a href="#" className="border-2 border-[#000] font-semibold text-base py-3 px-4 text-center rounded-md hover:text-white hover:bg-black duration-300">
            Book Now
          </a>
        </div>
      </Container>
    </section>
  )
}

export default ModernApartament;