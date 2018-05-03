var avatar_root_dir = 'img/avatar/';
var ext = ".png";


function pad_zero(n, d) {
    var prefix = new Array(d+1).join(0);
    return (prefix + n).slice(-d);
}


function set_datetime(argument) {
    var datetime_elems = document.getElementsByClassName("datetime");
    var dt = new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth();
    var date = dt.getDate();
    var hour = dt.getHours();
    var minute = dt.getMinutes();

    for (var ind=0; ind < datetime_elems.length; ind++) {
        var elem = datetime_elems[ind];
        elem.innerHTML = year + "年" + month + "月" + date + "日" + pad_zero(hour, 2) + ":" + pad_zero(minute, 2);
    }
}


function append_avatars(argument) {
    var like_board = document.getElementById("like_board");
    var display_board = like_board.getElementsByClassName("board")[0];
    var num_display = Number(display_board.getAttribute("num_display"));
    // console.log(display_board);
    for (var img_ind=0; img_ind < num_display; img_ind++) {
        var img_path = avatar_root_dir + pad_zero(img_ind, 4) + ext;
        // var img_path = avatar_root_dir + "me" + ext;
        console.log("Appending " + img_path);
        var img_elem = document.createElement("img");
        img_elem.className = "grid";
        img_elem.src = img_path;
        display_board.appendChild(img_elem);
    }
}


function init(argument) {
    set_datetime(argument);
    append_avatars(argument);
}

window.addEventListener("load",init,false);
