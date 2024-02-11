import './Nav.scss';
import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { NavList, NavSocial } from './Nav';


function NavModal() {
    const [show, setShow] = useState(false);
  
    function handleSwitch(set: boolean) {
      setShow(set);
    }



    useEffect(() => {
      document.documentElement.style.overflow = show ? 'hidden' : 'auto';
    }, [show]);
  
    return (
      <>
        <Button  className="me-2 nav-modal-button" onClick={() => handleSwitch(true)}></Button>
        <Modal className='nav__modal' show={show} fullscreen={true} onHide={() => setShow(false)}>
          <Modal.Body className='nav__modal--body'>
            <div className="container">
              <button type="button" className="nav__modal--close" onClick={() => handleSwitch(false)}></button>
              <div className="row w-100 d-flex justify-content-center align-items-center mt-5">
                <div className="col-5">
                  <NavList />
                </div>
                <div className="col-5 d-flex flex-column justify-content-center gap-2 fs-5 text-white">
                    <div className="d-flex flex-column gap-1">
                        <h3 className="h3 py-2">Contact info:</h3>
                        <p className='d-flex gap-2 text-lite'>
                            <span>Email:</span>
                            <a href="mailto:dev.vrv@gmail.com" className='link-secondary'>dev.vrv@gmail.com</a>
                        </p>
                        <p className='d-flex gap-2 text-lite'>
                            <span>Phone:</span>
                            <a href="callto:+996550337683" className='link-secondary'>+996 550 337 683</a>
                        </p>
                    </div>

                    <div className="d-flex flex-column gap-1">
                        <h3 className="h3 py-2">Address:</h3>
                        <p className='d-flex gap-2 text-lite'>
                            <span>Moscow 217 st.</span>
                        </p>
                        <p className='d-flex gap-2 text-lite'>
                            <span>Bishkek City, KG</span>
                        </p>
                    </div>
                    <NavSocial />
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default NavModal;