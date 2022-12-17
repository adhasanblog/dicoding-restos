import Swal from 'sweetalert2';

const SweetAlert = {
  loading() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  },
};

export default SweetAlert;
