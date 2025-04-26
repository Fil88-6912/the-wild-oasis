import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        {/*<Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>*/}
      </Modal>
    </div>
  );
}

/*function AddCabin() {
  const [isOpenModal, setIsOpenmodal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenmodal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenmodal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenmodal(false)} />
        </Modal>
      )}
    </div>
  );
}*/

export default AddCabin;
