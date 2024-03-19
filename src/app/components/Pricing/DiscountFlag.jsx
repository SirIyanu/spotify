import style from "./style.module.css";
import { CustomButton } from "../Button";
export const DiscountFlag = () => {
  return (
    <div className={style.discount}>
      <p>Special discout for eligible students in University</p>
      <CustomButton type="outline" onClick={() => {}} className="btn-invert">
        learn more
      </CustomButton>
    </div>
  );
};
