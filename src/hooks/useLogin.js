import pb from "@/libs/pocketbase";
import { addLoading, notifeColors, reduceLoading, setNotife } from "@/redux/ducks/layoutSlice";
import { useDispatch } from "react-redux";

export default function useLogin() {

const dispatch = useDispatch();
  async function login  ({ email, password }){
    dispatch(addLoading());
    try {
      const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
      if (authData) {
      dispatch(reduceLoading());
        return authData
      }
    } catch (err) {
      console.log(err)
      if(err?.status===400){
      dispatch(setNotife({message:"ایمیل و یا رمز عبور اشتباه است!",color:notifeColors.error}))
      }else{
        dispatch(setNotife({message:"خطایی رخ داده است! مجددا تلاش کنید.",color:notifeColors.error}))
      }
      dispatch(reduceLoading());
      return null
    }
  }

  return {login}
}
