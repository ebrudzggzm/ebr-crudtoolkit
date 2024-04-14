import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../redux/slices/crudSlice";

const FormModal = ({ isOpen, handleClose, editItem }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //inputlardaki bilgileri nesneye çevir
    const formData = new FormData(e.target);
    // formData.entries() ile diziye çevirip ,  Object.fromEntries  ile nesneye çeviririz.
    const taskData = Object.fromEntries(formData.entries());

    if (editItem) {
      //reducer a güncellenecek elemanı haber ver
      dispatch(editTask({id:editItem.id,...taskData}));
    } else {
      //reducer a yeni task ın ekleneceğini haber ver
      dispatch(addTask(taskData));
    }

    //modalı kapat eklendikten sonra
    handleClose();
  };
  return (
    <Modal centered show={isOpen} onHide={handleClose} className="text-black">
      <Modal.Header closeButton>
        <Modal.Title>
          {editItem ? "Görevi Düzenle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <Form.Group>
            <Form.Label>Görev Başlığı</Form.Label>
            <Form.Control
              placeholder="Örn:Görev-1"
              name="title"
              required
              defaultValue={editItem?.title}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Görevi Yazan</Form.Label>
            <Form.Control
              placeholder="Örn:Ali Ören"
              name="author"
              required
              defaultValue={editItem?.author}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Görev Atanan</Form.Label>
            <Form.Control
              placeholder="Örn:Veli Giden"
              name="assigned_to"
              required
              defaultValue={editItem?.assigned_to}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              name="end_date"
              type="date"
              required
              defaultValue={editItem?.end_date}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button variant="primary" type="submit">
              {editItem ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
