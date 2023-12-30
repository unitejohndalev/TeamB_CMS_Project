

const PersonalInfo = () => {
  return (
    <>
      <div className="w-[90%] flex flex-col m-auto h-[50vh] shadow-lg">
        <form className="flex flex-col h-full gap-y-5 w-[90%] m-auto">
          <img src="" alt="" />
          <input type="text" className="input-style"  placeholder="First Name*"/>
          <input type="text" className="input-style"  placeholder="Last Name*"/>
          <input type="email" className="input-style" placeholder="Email Address*" />
          <input type="text" className="input-style"  placeholder="Contact Number*"/>
        </form>
        <button className="mb-5 btn-style w-[90%] m-auto">Update</button>
      </div>
    </>
  );
};

export default PersonalInfo;
