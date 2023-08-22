import pb from "@/libs/pocketbase";
import { useEffect, useState } from "react";

export default function useVerified() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    async function checkVerified() {
      try {
        const id = pb.authStore.model.id;
        console.log("id: ", id);
        const userdata = await pb.collection("users").getOne(id);
        setIsVerified(userdata.verified);
        console.log("v: ",userdata.verified);
      } catch (err) {
        console.log(err);
      }
    }
    if (pb.authStore.isValid) checkVerified();
  }, []);

  async function requsetVerification(){
const email = pb.authStore.model.email;
const res = await pb.collection('users').requestVerification(email);
if(res)alert("check your inbox")
  } 
   return { isVerified , requsetVerification};
}
