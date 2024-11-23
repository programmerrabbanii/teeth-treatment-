import React from "react";

const Modal = () => {
  
  const closeModal = () => {
    const modal = document.getElementById("my_modal_5");
    modal.close(); 
  };

  const handlerSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <div> 
      
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-4">Book an Appointment</h3>
          
        
          <form onSubmit={handlerSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />
            <input
              type="date"
              placeholder="Appointment Date"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered w-full"
              required
            />

            
            <div className="modal-action">
              <button type="button" onClick={closeModal} className="btn btn-error">
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Make Appoinment
              </button>
            </div>
          </form>
        </div>
      </dialog>

      
    </div>
  );
};

export default Modal;
