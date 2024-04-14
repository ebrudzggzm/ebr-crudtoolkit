import { useDispatch, useSelector } from "react-redux";
import { increase,decrease,setCount,toogleTheme } from "../redux/slices/counterSlice";
import store from "../redux/store";

const Counter = () => {
  const {count,isDarkTheme} = useSelector((store)=>store.counterReducer);
  console.log(isDarkTheme,"tttt")
  const dispatch =useDispatch();
  return ( <div className={isDarkTheme ? 'bg-danger' : 'bg-warning'} >
      <div className={`vh-100 w-full d-flex flex-column justify-content-center align-items-center gap-5 `}>
      <div className="d-flex gap-5 align-items-center ">
        <button className="rounded" 
        onClick={()=>dispatch(increase())}>Increase</button>
        <span className="text-white fs-1" >{count}</span>
        <button onClick={()=>dispatch(decrease())} className="rounded">Decrease</button>
        
      </div>
      <button onClick={()=>dispatch(setCount(0))} className="rounded">Sıfırla</button> 
      <button onClick={()=>dispatch(toogleTheme(!isDarkTheme))} className="rounded">Page Theme</button>
      </div>
    </div>
  
  );
};

export default Counter;
