type ContainerProps = {
  children: React.ReactNode,
  className?: string
}

const Container = ({children, className}:ContainerProps) => {
  return (
    <div className={`container mx-auto px-4 max-w-[1120px] ${className}`}>
      {children}
    </div>
  )
}

export default Container;