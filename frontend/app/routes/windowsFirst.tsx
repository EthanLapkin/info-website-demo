import { useNavigate } from "react-router-dom";

const WindowsFirst = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/welcome");
  }

  const handleNext = () => {
    navigate("/windows-close-max-min");
  }

  return (
    <>
        <div>
            <p>
                The first thing we will address is how to open a window.
                When you open your computer, you should see a yellow square with a small blue rectangle at the bottom of the screen, this is the File Explorer. 
                If you take your cursor and hover over it, you will see that the name appears nearby. 
                Hovering over things is a good way to find out their name if there isn&apos;t one, or to see the full name if it is too long for the place it is displayed. 
                You can hover over the other symbols down there if you like. Click on the file explorer box, and you will see a new rectangle appear on your screen. 
                This is called a window and is how you interact with most programs. You can only interact with one window at a time, and it&apos;s the one that is in front of everything else. 
                Try clicking on the four blue boxes at the bottom left and then clicking on the yellow and blue rectangle again to see how changing windows works.
            </p>
        </div>
    </>
  );
}

export default WindowsFirst;