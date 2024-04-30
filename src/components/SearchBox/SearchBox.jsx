import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const selectNameFilter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.form}>
      <p className={css.inputText}>Find contacts by name or by number</p>
      <input
        className={css.input}
        type="text"
        value={selectNameFilter}
        onChange={(e) => {
          onChangeFilter(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBox;
