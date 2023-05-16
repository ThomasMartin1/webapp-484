import View from "../components/view";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <>
      <View>
        <div>{session?.user.name} dashboard</div>
      </View>
    </>
  );
}
