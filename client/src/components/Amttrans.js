import { Button,Modal } from "react-bootstrap";
import { React, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Transfer Happiness
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You shared your love successfully!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>
          With Love
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


function Amttrans() {
  const [modalShow, setModalShow] = useState(false);
  return (
    
    <div>
      <div className="content_amttrans">
  TRANSFER YOUR HAPPINESS
    </div>
      <div className="Trans">
        <ReactBootStrap.Form.Group>
          <ReactBootStrap.Form.Row>
            <ReactBootStrap.Form.Label row="sm" lg={1}>
              Your Name
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control type="text" placeholder="Your Name" />
          </ReactBootStrap.Form.Row>
          <br />

          <ReactBootStrap.Form.Row>
            <ReactBootStrap.Form.Label row="sm" lg={1}>
              To Whom
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control type="text" placeholder="To Whom" />
          </ReactBootStrap.Form.Row>
          <br />

          <ReactBootStrap.Form.Row>
            <ReactBootStrap.Form.Label row="sm" lg={1}>
              How Much
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              type="text"
              placeholder="Amount"
              column
            />
          </ReactBootStrap.Form.Row>
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Nav.Link eventKey={2}></ReactBootStrap.Nav.Link>
        <div className="trans_btn">
          <Button variant="success" onClick={() => setModalShow(true)}>
            TRANSFER
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Amttrans;
