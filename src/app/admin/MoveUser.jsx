const MoveUser = ({ userList }) => {
  console.log(userList);

  return (
    <section>
      <h1 className="text-2xl font-bold">Move User</h1>
      {userList.map((user) => (
        <div>
          <p>{`${user.authID.substring(0,6)} - ${user.name}`}</p>
        </div>
      ))}
    </section>
  );
};

export default MoveUser;
