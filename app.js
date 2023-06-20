const GetUser = () => {
    const fName = document.querySelector("#iFirstName").value;
    const lName = document.querySelector("#iLastName").value;
    const eAdress = document.querySelector("#iEmailAdress").value;
    const cName = document.querySelector("#iCompanyName").value;
    const pNumber = document.querySelector("#iPhoneNumber").value;
    const mes = document.querySelector("#iMessage").value;

    const bandera = validate(fName, lName, eAdress, cName, pNumber, mes);

    if (bandera == true) {
        let user = {
            firstname: fName,
            lastname: lName,
            emailadress: eAdress,
            companyname: cName,
            phonenumber: pNumber,
            message: mes,
        };

        ShowUser(user);
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'All fields are required!!!!',
            footer: '<a href="">How resolve this issue?</a>'
        });
    }


}

const validate = (fName, lName, eAdress, cName, pNumber, mes) => {
    if (fName == "" || lName == "" || eAdress == "" || cName == "" || pNumber == "" || mes == "") {
        return false;
    }
    else {
        return true;
    }

}


const ShowUser = (user) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        confirmButtonText: 'Yes, send it!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'You send it!',
            )
            Swal.fire({
                position: 'center',
                icon: 'success',
                timer: 5500,
                title: `THANKS FOR TRUSTING US, ${user.firstname} ${user.lastname}`,
                text: `FULL NAME:${user.firstname} ${user.lastname} || EMAIL ADRESS: ${user.emailadress} || COMPANY NAME: ${user.companyname}\n || PHONE NUMBER: ${user.phonenumber}\n || MESSAGE: ${user.message}`,
                imageUrl: 'https://media2.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif?cid=ecf05e47tsd6u21a5gdr8izgbvlnokwojjc4gt0ar7ce1oba&ep=v1_gifs_search&rid=giphy.gif&ct=g',
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: 'Custom image',
                background: 'black',
                color: 'lightblue',
            })
            console.log(JSON.stringify(user));
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Make sure you fill in all the information!!!',
                'error',
            )
        }
    })
}