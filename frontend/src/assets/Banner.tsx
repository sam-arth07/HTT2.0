interface BannerProps {
  images: {
    src: string,
    name: string
  }[]
}

function Banner({images}:BannerProps) {
  return (
    <div className="b-wrapper">
        <div className="wrapper">
            <div className="images">
              {images.map(({src, name})=> (
                <div className="image">
                  <img src={src} alt={name} />
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Banner