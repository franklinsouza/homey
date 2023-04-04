type CardProps = {
  title: string,
  cover: string
}

const FindCard = ({title, cover}: CardProps) => {
  return (
    <div>
      <a href="/" title={title}
        className="text-center h-[200px] md:h-[315px] overflow-hidden rounded-lg flex justify-center items-end relative group before:opacity-70 before:w-full before:h-full before:absolute before:bg-gradient-to-b before:from-transparent before:z-[1] before:to-[#202020]">
        <img src={cover} className='absolute z-1 w-full h-full object-cover group-hover:scale-110 duration-500'/>
        <span className="font-medium text-white py-1 px-3 mb-5 relative z-[1]">
          {title}
        </span>
      </a>
    </div>
  )
}

export default FindCard;