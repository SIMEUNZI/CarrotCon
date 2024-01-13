import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AlertModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.message}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AlertModal;

AlertModal.defaultProps = {
  title: '경고',
  message: '다시 한번 확인 부탁드립니다'
};
