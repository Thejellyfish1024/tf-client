import banner from '../../assets/tf-bg.webp'

const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${banner})`,backgroundSize:"70% 60%",backgroundRepeat:"no-repeat"}} className='w-screen h-full z-40'>
            <div  className='h-[200vh] w-screen  '>
                hello
            </div>
        </div>
    );
};

export default Banner;