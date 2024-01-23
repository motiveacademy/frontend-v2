import { getAllUser } from "@/commons/services/user";
import AddTopicSection from "./AddTopicSection";
import MoveUser from "./MoveUser";

const AdminPage = async () => {
  const userList = await getAllUser();

  return (
    <main className="p-16">
      {/* <AddTopicSection /> */}
      <MoveUser userList={userList} />
    </main>
  );
};

export default AdminPage;
