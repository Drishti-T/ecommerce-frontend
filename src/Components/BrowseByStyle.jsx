export const BrowseByStyle = ({ }) => {

    const pattern = [1, 2, 2, 1, 1, 2, 2, 1]
    const colSpan = (index) => {
        const mod = pattern[index % 8]
        console.log(`${index} = ${mod}`)
        if(mod === 1){
            return "xl:col-span-2"
        }
        else {
            return "xl:col-span-3"
        }
    }

   

// stone-100 default

    return <div className="xs:bg-black sm:bg-pink-200 md:bg-green-200 lg:bg-purple-500 bg-yellow-400 xl:bg-blue-400 rounded-[3rem] px-4 xl:py-6 xl:px-20 mx-4 xl:mx-28 xl:pt-16">
        <div className="text-center text-3xl flex justify-center font-integral_cf 
         xl:text-5xl xl:pb-16 ">BROWSE BY DRESS STYLE</div>
        <div className="grid xl:grid-rows xl:auto-rows-fr sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 h-fit justify-center w-full">
            {styles.data.map((style, index) => {
                const span = colSpan(index);

                return (

                    <div key={index} className={`w-full relative ${span}`}>
                        <div className="absolute z-10 font-satoshi_bold text-2xl xl:text-4xl top-4 left-4 xl:top-8 xl:left-8">{style.name}</div>
                        <div className="bg-white flex rounded-3xl justify-end  overflow-hidden h-[190px] xl:h-[300px] relative">
                            <img src={style.imageUrl} className="h-[300px] xl:h-[full]  object-cover rounded-3xl xl:scale-[2.2]  top-[-40px]
                            right-2 scale-[1.3] xl:right-10 xl:top-10"></img>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>

  
}

// grid-rows-3 => 1 col , 3 rows
// grid-cols-3 => 3 col , 1 rows

export const styles = {
    "success": true,
    "data": [
        {
            "name": "Casual",
            "imageUrl": "/images/image 12 (2).png"
        },
        {
            "name": "Party",
            "imageUrl": "/images/image300.png"
        },
        {
            "name": "Formal",
            "imageUrl": "/images/image 190.png"
        },
        {
            "name": "Gym",
            "imageUrl": "/images/image200.png"
        },
        {
            "name": "Casual",
            "imageUrl": "/images/image 12 (2).png"
        },
        {
            "name": "Gym",
            "imageUrl": "/images/image200.png"
        },
        
    ]
}
