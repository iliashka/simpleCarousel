import React from 'react'

const Carousel = () => {
    const [index, setIndex] = React.useState(0);
    const [images, setImages] = React.useState([
        'https://res.cloudinary.com/dl7txojow/image/upload/v1617296772/tnc_69881045.jpg_idacwv.jpg',
        'https://res.cloudinary.com/dl7txojow/image/upload/v1617296765/BlueRidgePrkwy.jpg_kozxbf.jpg',
        'https://res.cloudinary.com/dl7txojow/image/upload/v1617296759/Santa_20Fe_20Canyon_20Preserve_Oct2016_Alan_20Eckert.jpg_wvte3r.jpg',
        'https://res.cloudinary.com/dl7txojow/image/upload/v1617296754/BigHoleValley_NathanKorb_4000x2200.png_sciqqk.jpg',
        'https://res.cloudinary.com/dl7txojow/image/upload/v1617296749/Gary_Grossman_Rowena_Crest_hero_Oregon.jpg_g7wnfs.jpg',
        'https://res.cloudinary.com/dl7txojow/image/upload/v1617296746/tnc_16935516.jpg_ethlnu.jpg',
        'https://res.cloudinary.com/dl7txojow/image/upload/v1617296744/Zugpsitze_mountain.jpg_hzcf68.jpg',
        'https://res.cloudinary.com/dl7txojow/image/upload/v1617296744/tnc_91756359_Full.jpg_da9mpa.jpg',
    ]);

    const rightSlide = () => {
        setIndex((index + 1) % images.length)
    };

    const leftSlide = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
        setIndex(images.length - 1);
        } else {
        setIndex(nextIndex);
        }
    };

    const handleChange = (e) => {
        setIndex(Number(e.target.value))
    };

    let x1 = null

    const handleTouchMove = (e) => {
        if (!x1) {
            return false;
        }
        let x2 = Math.round(e.touches[0].clientX);
        // console.log(x2)
        let xDiff = x2 - x1
        if(Math.abs(xDiff)){
            if(xDiff > 0){
                setTimeout(() => {
                    leftSlide();
                }, 300)
            }else{
                setTimeout(() => {
                    rightSlide();
                }, 300)
            }
        }
        x1 = null
    };

    const handleTouchStart = (e) => {
        const firstTouch = e.touches[0];
        x1 = Math.round(firstTouch.clientX)
        // console.log(x1)
    };

    return ( 
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <h1 style={{textAlign: 'center'}}>Carousel</h1>
            <div className='contentDiv' style={{width: '100%', display: 'flex', justifyContent: 'center'}} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} >
                <button onClick={leftSlide}>{"<"}</button>
                <img style={{marginRight: '15px', width: '40%'}} src={images[index]} alt={index} />
                {index === 7?<img style={{width: '40%'}} src={images[0]} alt={0} />:<img style={{ width: '40%'}} src={images[index+1]} alt={index+1} />}
                <button onClick={rightSlide}>{">"}</button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
                <input type='radio' onChange={handleChange} value='0' name='photo'/>
                <input type='radio' onChange={handleChange} value='1' name='photo'/>
                <input type='radio' onChange={handleChange} value='2' name='photo'/>
                <input type='radio' onChange={handleChange} value='3' name='photo'/>
                <input type='radio' onChange={handleChange} value='4' name='photo'/>
                <input type='radio' onChange={handleChange} value='5' name='photo'/>
                <input type='radio' onChange={handleChange} value='6' name='photo'/>
                <input type='radio' onChange={handleChange} value='7' name='photo'/>
            </div>
        </div>
    )
}

export default Carousel
