import { combineClasses } from "../../../utils/format";

export const CustomButton = (props) => {
  const classNames = {
    primary: "btn",
    outline: "btn-outline",
    secondary: "btn-secondary",
  };
  const className = classNames[props.type] || classNames.primary;
  const classes = combineClasses(className, props.className);
  return props.onClick ? (
    <button className={classes}>{props.children}</button>
  ) : (
    <a href={props.route} className={classes}>
      {props.children}
    </a>
  );
};
