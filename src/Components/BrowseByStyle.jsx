import { styles } from "../dummyData/styles"

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

    return <div className="lg:px-28 px-4 ">
    <div className="bg-stone-100 rounded-2xl xl:rounded-[3rem]  xl:py-6 xl:px-20 px-2  xl:pt-16 flex flex-col items-center lg:px-8  pb-8 xl:pb-16">
        <div className="text-center text-4xl flex justify-center font-integral_cf
         xl:text-5xl pt-10 pb-8 xl:pb-16  max-w-[300px] sm:max-w-none">BROWSE BY DRESS STYLE</div>
        <div className="grid xl:grid-rows xl:auto-rows-fr  md:grid-cols-2 xl:grid-cols-5 gap-4 h-fit justify-center w-full">

            {styles.data.map((style, index) => {
                const span = colSpan(index);
                return (
                    <div key={style.id} className={`w-full relative ${span}`}>
                        <div className="absolute z-10 font-satoshi_bold text-2xl xl:text-4xl top-4 left-4 xl:top-8 xl:left-8">{style.name}</div>
                        <div className="bg-white flex rounded-3xl justify-end  overflow-hidden h-[190px] xl:h-[300px] relative">
                            <img src={style.imageUrl} className="h-[300px] xl:h-[full]  object-cover rounded-3xl xl:scale-[2.2]  top-[-40px]
                            right-2 scale-[2.2] xl:right-10 xl:top-10"></img>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>  
    </div>  
    
}

// grid-rows-3 => 1 col , 3 rows
// grid-cols-3 => 3 col , 1 rows


