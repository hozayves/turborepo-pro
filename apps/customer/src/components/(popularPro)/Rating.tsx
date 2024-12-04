
interface RatingProps {
    rating: number
}

function Rating({ rating }: RatingProps) {
    return (
        <div className="rating rating-xs">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating === 1} />
            <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={rating === 2} />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating === 3} />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating === 4} />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating === 5} />
        </div>
    )
}

export default Rating
