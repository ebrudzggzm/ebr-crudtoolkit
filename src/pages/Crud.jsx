import React from "react";
import { useState } from "react";
import { Container, Stack, Button, Table, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import FormModal from "../components/FormModal";
import { deleteTask,editTask } from "../redux/slices/crudSlice";

const Crud = () => {
  const { isDarkMode } = useSelector((store) => store.headerReducer);
  const { tasks } = useSelector((store) => store.crudReducer);
  const [isOpen, setIsOpen] = useState(false);
  const [editItem,setEditItem] = useState(null);
  const dispatch = useDispatch();
  const handleClose = () => {
    setIsOpen(false);
    setEditItem(null);//modalı kapatınca düzenlenecek eleman state den kaldırılsın diye bu işlemi yap.
    //aksi halde modal hep görevi düzenle diye gelir.
  };

  console.log(editItem,isOpen,"???");
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary" : "bg-success"
      } vh-100 bg-secondary px-3`}
    >
      <Container>
        <Stack className="align-items-end ">
          <Button onClick={() => setIsOpen(!isOpen)} className="m-3">
            Yeni Görev Ekle
          </Button>
          <Table striped bordered hover variant={isDarkMode ? "dark" : "light"}>
            <thead>
              <tr>
                <th>#</th>
                <th>Görev</th>
                <th>Yazan</th>
                <th>Atanan</th>
                <th>Tarih</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task,i)=>( <tr key={task.id} >
                <td>{i}</td>
                <td>{task.title}</td>
                <td>{task.author}</td>
                <td>{task.assigned_to}</td>
                <td>{task.end_date}</td>
                <td className="d-flex gap-2 justify-content-center align-items-center">
                  <ButtonGroup size="sm">
                  <Button variant="danger" onClick={()=>dispatch(deleteTask(task.id))}>Sil</Button>
                  <Button onClick={()=>{setEditItem(task); setIsOpen(true);}}>Düzenle</Button>
                  </ButtonGroup>
                </td>
              </tr>))}
             
            </tbody>
          </Table>
          <FormModal isOpen={isOpen} handleClose={handleClose}  editItem={editItem}/>
        </Stack>
      </Container>
    </div>
  );
};

export default Crud;
