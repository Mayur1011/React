// Card is a just a name that is a general practise used in development.
// It means something withn a container look with rounded corners, drop shadows.

import "./Card.css";
// *Reusable wrapper component - purpose of this component is to apply CSS to any content inside this tag.
function Card(props) {
  const classes = "card " + props.className;
  // props.className is the prop which is send by ExpenseItem/Expenses component to this components
  // And to get the styling we need to use it.
  // So, for applying it on more than one class we use <div className="class1 class2 class3 ...">
  return <div className={classes}>{props.children}</div>;
  //* props.children is the content which is present between the Card tag.
}
export default Card;
