import { useRef } from "react"

export const Review = () => {

    const sectionRef = useRef([]); //attaching a ref to sectionRef variable

    const scrollToSection = () => {
        sectionRef.current[index]?.scrollIntoView({ behavior: 'smooth' })
    }

    return <div>
        <button onClick={scrollToSection}>next</button>
        <div className="bg-blue-400 w-full flex gap-4 overflow-x-auto scrollbar-hide">

            {reviews.data.map((review, index) => (
                <div className="min-w-full bg-pink-300" ref={(el) => console.log(el)}>
                    hlo
                </div>
            ))}
        </div>
    </div>
};

const reviews = {
    "success": true,
    "code": 200,
    "message": "Comment fetched successfully",
    "data": [{
        "comment": "blahblah blahblah blahblah blahbla blahbla",
        "stars": 4,
        "userName": "Sarah M.",
    },
    {
        "comment": "blahblah blahblah blahblah blahblah",
        "stars": 4,
        "userName": "Sarah M.",
    }, {
        "comment": "blahblahblah blablahblah blahblablahblah",
        "stars": 4,
        "userName": "Sarah M.",
    }, {
        "comment": "blahblahblah blablahblah blahblablahblah",
        "stars": 4,
        "userName": "Sarah M.",
    }, {
        "comment": "blahblahblah blablahblah blahblablahblah",
        "stars": 4,
        "userName": "Sarah M.",
    }, {
        "comment": "blahblahblah blablahblah blahblablahblah",
        "stars": 4,
        "userName": "Sarah M.",
    }, {
        "comment": "blahblahblah blablahblah blahblablahblah",
        "stars": 4,
        "userName": "Sarah M.",
    },
    ]
}