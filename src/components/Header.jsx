import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../redux/slices/headerSlice";
import { NavLink } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const {isDarkMode}= useSelector((store)=>store.headerReducer);
    console.log(isDarkMode)
  return (
    <div className={`container-fluid  d-flex justify-content-around p-5 align-items-center ${isDarkMode ? 'bg-danger' : 'bg-warning'}`}
    >
     
      <div>
        <h1 className="">LOGO</h1>
      </div>
      <div className="d-flex gap-5 justify-content-center align-items-center ">
        <NavLink to={'/'} >Sayac</NavLink>
        <NavLink to={'/crud'}>Crud</NavLink>
     
        <NavLink  to={'/'} >CONTACT</NavLink>
      </div>
      <div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"                  
            onChange={()=>dispatch(changeMode(!isDarkMode))}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >
        Change Your Mood
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
