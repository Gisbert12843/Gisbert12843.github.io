let video_hoverstate = 0;


window.onresize = function () {
    if (video_hoverstate == 0) {
        location.reload();
    }
}


// var body_elements = document.querySelectorAll('.project');

// for (var i = 0; i < body_elements.length; i++) {
//   body_elements[i].addEventListener("mouseover", function (e) {
//     video_hoverstate=0;
//   })
// }



var clip_elements = document.getElementsByClassName("projects");

for (var i = 0; i < clip_elements.length; i++) {
    clip_elements[i].addEventListener("mouseout", function (e) {
        video_hoverstate = 0;
    })
    clip_elements[i].addEventListener("mouseover", function (e) {
        video_hoverstate = 1;
    })


    clip_elements[i].addEventListener("play", function (e) {
        video_hoverstate = 1;
    })
    clip_elements[i].addEventListener("click", function (e) {
        video_hoverstate = 1;
    })

}

















window.mobileCheck = function () {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};




var check = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    check = true
}

if (check == false) {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', './source/external/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
}

window.onscroll = function () {
    console.log(window.screen.availHeight / 100 * 3)
    if (check == false) {
        if (window.scrollY < ((window.screen.availHeight / 100) * 2)) {
            document.getElementById("hide_on_scroll").style.top = "inherit";
        } else {
            document.getElementById("hide_on_scroll").style.top = "-120%";
        }
    }
    if (check == true) {
        if (window.scrollY < ((window.screen.availHeight / 100) * 1)) {
            document.getElementById("hide_on_scroll").style.top = "0";
        } else {
            document.getElementById("hide_on_scroll").style.top = "-120%";
        }
    }
}


function copyEmail() {

    // Copy the text inside the text field
    navigator.clipboard
        .writeText("kai.oestreich.12843@gmail.com")
        .then(() => {
            alert("Copied E-Mail to Clipboard");
        })
        .catch(() => {
            alert("Couldn't Copy E-Mail to Clipboard");
        });
}


var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// #slider::-webkit-scrollbar {
//   display: none; /* for Chrome, Safari, and Opera */
// }


// #slider {
//   /* position: relative; */
//   scroll-snap-type: x mandatory;
//   width: 640px;
//   height: 360px;
//   /* margin: 30px auto; */
//   white-space: nowrap;
//   /* aspect-ratio: 1/1; */
//   overflow-x: hide;
//   overflow-y: scroll;
//   border: solid black 1px;
//   cursor:grab;
// }
// #slider > div {
//   /* position: relative; */
//   display: inline-block;
//   height: 100%;
//   width: 100%;
//   /* border-radius: 10%; */
//   /* aspect-ratio: 1/1; */
//   /* margin: 5px; */
//   scroll-snap-align: center;
// }
// #slider > div > img {
//   /* display: inline-block; */
//   height: 100%;
//   width: 100%;
// }