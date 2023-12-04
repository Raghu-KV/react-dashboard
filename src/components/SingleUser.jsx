function SingleUser() {
  return (
    <div className="border-2 rounded-lg p-3 basis-2/6">
      <div>
        <h3 className="font-bold text-gray-500 text-center">
          User informanation
        </h3>
      </div>
      <div className="flex flex-col mt-3 items-center justify-start gap-3">
        <div className="w-[40%]">
          <img
            src="https://pbs.twimg.com/media/DsrWmlsWwAEU-dJ.jpg"
            alt="profilePic"
            className="rounded-full"
          />
        </div>
        <div className="text-gray-500 flex gap-3 text-sm">
          <div className=" basis-1/2">
            <h2 className="font-bold">User Data</h2>
            <h3>User ID : 156445 </h3>
            <h3>Name : User name </h3>
            <h3>Email : user@hdh.vom</h3>
            <h3>Phone: +91 9879642178</h3>
            <h3>Address : 1/85 near bus stand, erode,tamilnadu,634789</h3>
            <h3>Country :India </h3>
          </div>
          <div className="basis-1/2">
            <h2 className="font-bold">Account Activity</h2>
            <h3>isUserVerified : true </h3>
            <h3>Last login : 14 dec</h3>
            <h3>Last purchase : 14 dec</h3>
            <h3>Total Orders : 14</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
