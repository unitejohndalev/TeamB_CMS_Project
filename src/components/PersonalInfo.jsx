const PersonalInfo = () => {
  return (
    <>
      <div className="w-[90%] flex flex-col m-auto h-full shadow-lg">
        <form className="flex flex-col h-full gap-y-5 w-[90%] m-auto">
          <img src="" alt="" />
          <input
            type="text"
            className="input-style"
            placeholder="First Name*"
          />
          <input type="text" className="input-style" placeholder="Last Name*" />
          <input
            type="email"
            className="input-style"
            placeholder="Email Address*"
          />
          <input
            type="text"
            className="input-style"
            placeholder="Contact Number*"
          />
        <button className="mb-5 btn-style w-full m-auto">Update</button>
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;
