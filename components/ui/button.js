import Link from "next/link";

import classes from "./button.module.css";

function Button(props) {
  let buttonClass = props.isSecondary ? classes.btn + " " + classes.secondary : classes.btn + " " + classes.primary;
  return (
    <Link href={props.link} className={buttonClass}>
      {props.children} 
    </Link>
  );
}

export default Button;
