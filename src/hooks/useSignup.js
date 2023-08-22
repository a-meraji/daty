import pb from "@/libs/pocketbase";
import {
  addLoading,
  notifeColors,
  reduceLoading,
  setNotife,
} from "@/redux/ducks/layoutSlice";
import { useDispatch } from "react-redux";

export default function useSignup() {
  const dispatch = useDispatch();

  async function signup({ email, password, name }) {
    dispatch(addLoading());
    try {
      const data = {
        email,
        password,
        passwordConfirm: password,
        name,
      };
      const createdUser = await pb.collection("users").create(data);
      if (createdUser.id) {
        dispatch(reduceLoading());
        return createdUser;
      }
    } catch (err) {
      console.log(err);
      dispatch(
        setNotife({
          message: "خطایی رخ داده است! مجددا تلاش کنید.",
          color: notifeColors.error,
        })
      );
      dispatch(reduceLoading());
      return null;
    }
  }

  return { signup };
}
