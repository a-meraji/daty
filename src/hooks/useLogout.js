import pb from "@/libs/pocketbase";

export default function UseLogout() {
    function logout(){
        pb.authStore.clear()
    }
    return logout;
}
