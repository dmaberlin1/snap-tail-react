import { borderOffStyles, borderStyles, filledStyles } from "../const/const.jsx";

const Button = ({children='',hasBorder=false,isFilled=false}) => {
  return (
    <button className={`text-medium-gray px-5 py-2  ${hasBorder? borderStyles : borderOffStyles} ${isFilled && filledStyles}`}>
      {children}
    </button>
  );
};

export default Button;
