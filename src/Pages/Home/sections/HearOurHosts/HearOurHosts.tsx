import Container from "../../../../components/Container";
import HostComment from "./HostComment";

import userImg01 from '../../../../assets/HomeyHost21-150x150.jpg';
import userImg02 from '../../../../assets/HomeyHost23-1-150x150.jpg';
import userImg03 from '../../../../assets/HomeyHost07-150x150.jpg';
import userImg04 from '../../../../assets/HomeyHost08-150x150.jpg';

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
          <HostComment 
            comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.' 
            pic={userImg01} 
            name='Anna Andrews' 
          />
          <HostComment 
            comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.' 
            pic={userImg02}
            name='Harold Warren' 
          />
          <HostComment 
            comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.' 
            pic={userImg03} 
            name='Michelle Wright' 
          />
          <HostComment 
            comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis eros.' 
            pic={userImg04} 
            name='Mike Forward' 
          />
        </div>
      </Container>
    </section>
  )
}

export default HeaderOurHosts;