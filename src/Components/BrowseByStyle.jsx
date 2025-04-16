export const BrowseByStyle = ({ }) => {

    const pattern = [1, 2, 2, 1, 1, 2, 2, 1]
    const colSpan = (index) => {
        const mod = pattern[index % 8]
        console.log(`${index} = ${mod}`)
        if(mod === 1){
            return "col-span-1"
        }
        else {
            return "col-span-2"
        }
    }

    const getBgColor = (index) => {
        const mod = pattern[index % 8]
        console.log(`${index} = ${mod}`)
        if(mod === 1){
            return "bg-red-400"
        }
        else {
            return "bg-blue-600"
        }
    }



    return <div className="bg-stone-100 rounded-3xl py-6">
        <div className="text-center flex justify-center font-integral_cf text-3xl">BROWSE BY STYLE</div>
        <div className="grid grid-rows auto-rows-fr sm:grid-cols-2 gap-4 h-fit w-full sm:bg-pink-400 md:bg-blue-400 justify-center ">
            {styles.data.map((style, index) => {
                //  const span = getColSpan(index);
                const bg = getBgColor(index);
                const span = colSpan(index);

                return (

                    <div key={index} className={`w-[310px] relative bg-green-400 ${bg} ${span}`}>
                        <div className="absolute font-satoshi_bold text-2xl top-3 left-4">{style.name}</div>
                        <div className="bg-white flex rounded-3xl justify-end ">
                            <img src={style.imageUrl} className="h-[190px] object-cover rounded-3xl"></img>
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
            "imageUrl": "/images/image 11.png"
        },
        {
            "name": "Party",
            "imageUrl": "/images/image 12.png"
        },
        {
            "name": "Formal",
            "imageUrl": "/images/image 13.png"
        },
        {
            "name": "Gym",
            "imageUrl": "/images/image 14.png"
        },
        {
            "name": "Gym",
            "imageUrl": "/images/image 14.png"
        },
        {
            "name": "Gym",
            "imageUrl": "/images/image 14.png"
        },
        {
            "name": "Gym",
            "imageUrl": "/images/image 14.png"
        },
        {
            "name": "Gym",
            "imageUrl": "/images/image 14.png"
        },
    ]
}
