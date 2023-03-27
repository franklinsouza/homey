type CardProps = {
  title: string,
  cover: string
}

const FindCard = ({title, cover}: CardProps) => {
  return (
    <div>
      <a href="/" title={title}
        style = {{ 
          backgroundImage: `url(${cover})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
        className="text-center h-[200px] md:h-[315px] overflow-hidden rounded-lg flex justify-center items-end relative before:opacity-80 before:w-full before:h-full before:absolute before:bg-gradient-to-b before:from-transparent before:to-[#3b4249]">
        <span className="font-medium text-white py-1 px-3 mb-5 relative z-[1]">
          {title}
        </span>
      </a>
    </div>
  )
}

export default FindCard;