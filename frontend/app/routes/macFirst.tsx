import { useNavigate } from "react-router-dom";

export default function MacFirst() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/welcome");
  }

  const handleNext = () => {
    navigate("/mac-close-max-min");
  }

  return (
    <>
        <div>
            <p>
              The first thing we will address is how to open a window.
              
            </p>
        </div>
    </>
  );
}