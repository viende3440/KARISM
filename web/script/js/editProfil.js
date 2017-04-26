$("#validEditProfil").click(function (e) {
//    e.preventDefault();
    alert($("#previewPicture").attr('src'));
    $.ajax({
        type: 'POST',
        async: true,
        dataType: 'json',
        url: "update",
        data:
                {
                    "firstname": $("#firstname").val(),
                    "lastname": $("#lastname").val(),
                    "username": $("#username").val(),
                    "phone": $("#phone").val(),
                    "bio": $("#bio").val(),
                    "adress": $("#adress").val(),
                    "genre": $("#genre").val(),
                    "user_profilPicture": $('#previewPicture').attr('src')
//                    "previewPicture": $("#previewPicture").attr('src')
                },
        success: function (data, textStatus, jqXHR) {
            alert(data);
        }
    });
});

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#previewPicture').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        async: true,
        dataType: 'json',
        url: "get/user",
//            data:
//                    {
//                        "firstname": $("#firstname").val(),
//                        "lastname": $("#lastname").val(),
//                        "username": $("#username").val(),
//                        "phone": $("#phone").val(),
//                        "bio": $("#bio").val(),
//                        "adress": $("#adress").val(),
//                        "genre": $("#genre").val(),
//                        "user_profilPicture": $("#user_profilPicture").attr('src')
//                    },
        success: function (data, textStatus, jqXHR) {
            $("#firstname").val(data.firstname);
            $("#lastname").val(data.lastname);
            $("#username").val(data.username);
            $("#phone").val(data.phone);
            $("#bio").val(data.bio);
            $("#adress").val(data.adress);
            $("#genre").val(data.genre);
            $("#user_profilPicture").attr('src', data.user_profilPicture);
            $("#previewPicture").attr('src', data.user_profilPicture);
//                readURL("#user_profilPicture");
            alert(data.user_profilPicture);
        }
    }
    );
});



$("#user_profilPicture").change(function () {
    readURL(this);
});