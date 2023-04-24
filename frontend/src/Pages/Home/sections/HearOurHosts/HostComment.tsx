
type CardProps = {
  comment: string,
  pic: string,
  name: string
}

const HostComment = ({comment, pic, name}:CardProps) => {
  return(
    <div className="flex flex-col items-center">
      <header className='mb-6 relative before:w-[15px] before:h-[15px] before:bg-white before:absolute before:bottom-[-7px] before:mx-auto before:left-0 before:right-0 before:border-[#d8dce1] before:border-r before:border-t before:rotate-[135deg]'>
        <p className="border border-[#d8dce1] bg-white p-3 font-light text-center rounded-[3px]">
          {comment}
        </p>
      </header>
      <div className="w-[48px] h-[48px] rounded-full overflow-hidden mb-3">
        <img src={pic} alt={name}/>
      </div>
      <span className='font-medium text-sm mb-1'>
        {name}
      </span>
      <p className='text-sm font-light italic'>
        Homey Host
      </p>
    </div>
  );
}

export default HostComment;