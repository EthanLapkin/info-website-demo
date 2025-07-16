import { useNavigate } from "react-router-dom";

const Welcome = () => {

  const navigate = useNavigate();

  const handleWindows = () => {
    navigate("/windows/windows-first");
  };

  const handleMac = () => {
    navigate("/mac/mac-first");
  };

  const handleLinux = () => {
    navigate("/linux/linux-first");
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1 style={{textAlign: "center", fontSize: "44px"}}>
              Hello!
            </h1>
          </div>
        </header>
        <div className=" flex items-center w-[70%]">
            <p className="px-16 text-center justify-center">
              The purpose of this website is to explain basic computer things for people that don&apos;t know them. This was made in my free time and is not the work of an expert, so I apologize if the instruction is not at a professional level. 
              The website will have several different pages that you can move to either through buttons on screen that guide you based on your situation or via a menu that can be accessed at the top left of the screen. 
              If you already know how to do something or want something specific, feel free to skip ahead.
              The first thing to do is to know what general type of computer you have, this can also be called your operating system, or OS for short. The most common ones, and the ones addressed here, are Windows, Mac, and Linux. Please select the one you have.

            </p>
        </div>
        <div className="container-md">
          <div className="row">
            <div className="col">
              <button className="btn btn-primary" 
              style={{ minWidth: "50px", backgroundColor: "rgba(57, 111, 248, 1)", borderColor: "mediumblue" }}
              onClick={handleWindows}>
                Windows
              </button>
            </div>
            <div className="col">
              <button className="btn btn-primary" 
              style={{ minWidth: "50px", backgroundColor: "rgba(57, 111, 248, 1)", borderColor: "mediumblue" }}
              onClick={handleMac}>
                Mac
              </button>
            </div>
            <div className="col">
              <button className="btn btn-primary" 
              style={{ minWidth: "50px", backgroundColor: "rgba(57, 111, 248, 1)", borderColor: "mediumblue" }}
              onClick={handleLinux}>
                Linux
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
/* this is here for my own reference, this is not a part of the website as is
const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];*/

export default Welcome;