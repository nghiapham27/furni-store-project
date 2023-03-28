import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const StarsReview = ({ numStars }) => {
  const maxStar = 5;

  let halfStar = 0;
  //   create star list
  const starsReview = Array.from({ length: maxStar }, (element, i) => {
    if (i < Math.floor(numStars) || +(numStars - i).toFixed(1) > 0.7) {
      return (element = <BsStarFill />);
    }
    // there's only 1 half star (if any)
    if (halfStar === 0 && +(numStars - i).toFixed(1) > 0.2) {
      halfStar += 1;
      return (element = <BsStarHalf />);
    }
    return (element = <BsStar />);
  });

  return (
    <div className="w-full flex items-center">
      <li className="flex text-amber-400">
        {starsReview.map((star, index) => {
          return <ul key={index}>{star}</ul>;
        })}
      </li>
      <p className="ml-2">(33 reviews)</p>
    </div>
  );
};

export default StarsReview;
