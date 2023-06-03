import { useState } from "react";

const DialogBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="btn_main" onClick={openDialog}>
        <a href="#reach-out">Massai Mara</a>
      </div>

      {isOpen && (
        <div className="dialog-box">
          <div className="dialog-content">
            <img src="/images/package1.jpeg" alt="Image" />

            <div className="dialog-icons">
              <a href="tel:+254 111358832">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </a>
              <a href="mailto:info@hadsaan.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <button className="dialog-close" onClick={closeDialog}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DialogBox;
