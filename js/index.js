$("#homeSection>a").on('mouseenter', () => {
    $("#homeSection>a>span").addClass("hoverBtn")
})
$("#homeSection>a").on('mouseleave', () => {
    $("#homeSection>a>span").removeClass("hoverBtn")
})

var num = 0;
$("#burgerbtn").on('click', () => {
    if (num == 0) {
        $("header > nav").css({
            opacity: 1
        })
        $("#burgerbtn>div").eq(1).css({
            opacity: 0
        })
        $("#burgerbtn>div").eq(0).addClass("rotate1");
        $("#burgerbtn>div").eq(2).addClass("rotate3");
        num = 1;
    } else {
        $("header > nav").css({
            opacity: 0
        })
        $("#burgerbtn>div").eq(1).css({
            opacity: 1
        })
        $("#burgerbtn>div").eq(0).removeClass("rotate1");
        $("#burgerbtn>div").eq(2).removeClass("rotate3");
        num = 0;
    }

});

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});


let imgs = ["assets/ijse.png", "assets/", "assets/pmv.png"];
let logo = ["assets/ijsebadge.png", "assets/", "assets/pmvbadge.png"];
let dates = ["August 2023", " April 2010 - December 2018", "June 2019 - February  2022"];
let names = ["Institute Of Software Engineering", "Bandaranayaka Navodya School", "Pothuwila Maha Vidyalaya"];
let para = ["In 2023, I started attending IJSE to further my education and become a Software Engineer..", "I took my O/L and A/L examinations at this school. I passed my O/L exams with 5 A's, 3 B's, and 1 C's.", "\n" +
"I joined this school to prepare for the A-Level (Higher Level) examination, having chosen Science as my stream of study. "];
var index = 0;
document.querySelector("#educationSection>div:first-child>input").addEventListener('click', async () => {
    if (index == 0) {
        $('#educationSection>div:nth-child(2)>img:first-child').css({
            top: "calc(25vh + 5px)"
        })
        $('#educationSection>div:nth-child(2)>img:nth-child(2)').css({
            top: "6vh"
        })

    } else {
        $('#educationSection>div:nth-child(2)>img:first-child').css({
            top: "calc(19vh + 4px)"
        })
        $('#educationSection>div:nth-child(2)>img:nth-child(2)').css({
            top: "4vh"
        })
    }
    $('#educationSection>div:nth-child(2)>img:nth-child(2)').attr('src', logo[index]);
    $('#educationSection>div:nth-child(2)>img:nth-child(2)').addClass("fade")

    $('#educationSection>div:nth-child(2)>img:first-child').addClass("fade")
    $('#educationSection>div:nth-child(2)>img:first-child').attr('src', imgs[index]);

    $('#educationSection>div:first-child>h3').text(dates[index]);
    $('#educationSection>div:first-child>h3').addClass("fade");

    $('#educationSection>div:first-child>h1').text(names[index]);
    $('#educationSection>div:first-child>h1').addClass("fade");

    $('#educationSection>div:first-child>p').text(para[index]);
    $('#educationSection>div:first-child>p').addClass("fade");

    if (index == 2) {
        index = -1;
    }
    index++;
    await sleep(1000);
    $('#educationSection>div:nth-child(2)>img:nth-child(2)').removeClass("fade")
    $('#educationSection>div:nth-child(2)>img:first-child').removeClass("fade")
    $('#educationSection>div:first-child>h3').removeClass("fade");
    $('#educationSection>div:first-child>h1').removeClass("fade");
    $('#educationSection>div:first-child>p').removeClass("fade");

})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$("#educationSection>div:first-child").on('mouseenter', () => {
    $("#educationSection>div:first-child>input").addClass("btn");
})
$("#educationSection>div:first-child").on('mouseleave', () => {
    $("#educationSection>div:first-child>input").removeClass("btn");
})

$("#resumeSection>div>div").on('mouseenter', () => {
    $("#resumeSection>div>div>div:first-child").addClass("showIcon");
    $("#resumeSection>div>div>div:nth-child(2)").addClass("hidetext");
});
$("#resumeSection>div>div").on('mouseleave', () => {
    $("#resumeSection>div>div>div:first-child").removeClass("showIcon");
    $("#resumeSection>div>div>div:nth-child(2)").removeClass("hidetext");
});


$("#projectSection>div>div:first-child").on('mouseenter', () => {
    $("#projectSection>div>div:first-child>div").addClass("fadeCir");

    $("#projectSection>div>div:first-child>h4").addClass("textClr");
    $("#projectSection>div>div:first-child>h1").addClass("textClr");
    $("#projectSection>div>div:first-child>p").addClass("textClr");

    $("#projectSection>div>div:first-child>img").addClass("imgClr");
});

$("#projectSection>div>div:nth-child(2)").on('mouseenter', () => {
    $("#projectSection>div>div:nth-child(2)>div").addClass("fadeCir");

    $("#projectSection>div>div:nth-child(2)>h4").addClass("textClr");
    $("#projectSection>div>div:nth-child(2)>h1").addClass("textClr");
    $("#projectSection>div>div:nth-child(2)>p").addClass("textClr");

    $("#projectSection>div>div:nth-child(2)>img").addClass("imgClr");
});
$("#projectSection>div>div:nth-child(3)").on('mouseenter', () => {
    $("#projectSection>div>div:nth-child(3)>div").addClass("fadeCir");

    $("#projectSection>div>div:nth-child(3)>h4").addClass("textClr");
    $("#projectSection>div>div:nth-child(3)>h1").addClass("textClr");
    $("#projectSection>div>div:nth-child(3)>p").addClass("textClr");

    $("#projectSection>div>div:nth-child(3)>img").addClass("imgClr");
});

$("#projectSection>div>div").on('mouseleave', () => {
    $("#projectSection>div>div>div").removeClass("fadeCir");

    $("#projectSection>div>div>h4").removeClass("textClr");
    $("#projectSection>div>div>h1").removeClass("textClr");
    $("#projectSection>div>div>p").removeClass("textClr");

    $("#projectSection>div>div>img").removeClass("imgClr");
});


// project section source code btn
$("#projectSection>div>div:first-child>nav").on('mouseenter', () => {
    $("#projectSection>div>div:first-child>nav>div:first-child").addClass("showicon");
    $(" #projectSection>div>div:first-child>nav>div:nth-child(2)").addClass("hideText");
    $(" #projectSection>div>div:first-child>nav").addClass("clr")
})
$("#projectSection>div>div:nth-child(2)>nav").on('mouseenter', () => {
    $("#projectSection>div>div:nth-child(2)>nav>div:first-child").addClass("showicon");
    $(" #projectSection>div>div:nth-child(2)>nav>div:nth-child(2)").addClass("hideText");
    $(" #projectSection>div>div:nth-child(2)>nav").addClass("clr")
})

$("#projectSection>div>div:nth-child(3)>nav").on('mouseenter', () => {
    $("#projectSection>div>div:nth-child(3)>nav>div:first-child").addClass("showicon");
    $(" #projectSection>div>div:nth-child(3)>nav>div:nth-child(2)").addClass("hideText");
    $(" #projectSection>div>div:nth-child(3)>nav").addClass("clr")
})
$("#projectSection>div>div>nav").on('mouseleave', () => {
    $("#projectSection>div>div>nav>div:first-child").removeClass("showicon");
    $(" #projectSection>div>div>nav>div:nth-child(2)").removeClass("hideText");
    $(" #projectSection>div>div>nav").removeClass("clr")
})


$("#resumeBtn").on('click', () => {
    const a = document.createElement('a')
    a.href = "assets/resume/"
    a.download = "assets/resume/".split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
});



$("#studentCode").on('click', () => {
    window.open('https://github.com/');
});

$("#libraryCode").on('click', () => {
    window.open('https://github.com/');
});

$("#inventoryCode").on('click', () => {
    window.open('https://github.com/');
});





$("#assignmentSection>nav>div").on('mouseenter',()=>{
    $("#assignmentSection > nav > div>div:nth-child(2)>h1").addClass('animate__animated animate__pulse animate__delay-0.5s')

});
$("#assignmentSection>nav>div").on('mouseleave',()=>{
    $("#assignmentSection > nav > div>div:nth-child(2)>h1").removeClass('animate__animated animate__pulse animate__delay-1s')

});
$("#assignmentSection > nav > div:first-child ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:first-child>div:nth-child(2)").addClass('showintcir');

})
$("#assignmentSection > nav > div:first-child ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:first-child>div:nth-child(2)").removeClass('showintcir');


})

$("#assignmentSection > nav > div:nth-child(2) ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:nth-child(2)>div:nth-child(2)").addClass('showintcir');


})
$("#assignmentSection > nav > div:nth-child(2) ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:nth-child(2)>div:nth-child(2)").removeClass('showintcir');

})
$("#assignmentSection > nav > div:nth-child(3) ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:nth-child(3)>div:nth-child(2)").addClass('showintcir');

})
$("#assignmentSection > nav > div:nth-child(3) ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:nth-child(3)>div:nth-child(2)").removeClass('showintcir');

})


$("#assignmentSection > nav > div:nth-child(4) ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:nth-child(4)>div:nth-child(2)").addClass('showintcir');

})
$("#assignmentSection > nav > div:nth-child(4) ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:nth-child(4)>div:nth-child(2)").removeClass('showintcir');

})


$("#assignmentSection > nav > div:nth-child(5) ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:nth-child(5)>div:nth-child(2)").addClass('showintcir');

})
$("#assignmentSection > nav > div:nth-child(5) ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:nth-child(5)>div:nth-child(2)").removeClass('showintcir');

})


$("#assignmentSection > nav > div:nth-child(6) ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:nth-child(6)>div:nth-child(2)").addClass('showintcir');

})
$("#assignmentSection > nav > div:nth-child(6) ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:nth-child(6)>div:nth-child(2)").removeClass('showintcir');

})


$("#assignmentSection > nav > div:nth-child(7) ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:nth-child(7)>div:nth-child(2)").addClass('showintcir');

})
$("#assignmentSection > nav > div:nth-child(7) ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:nth-child(7)>div:nth-child(2)").removeClass('showintcir');

})


$("#assignmentSection > nav > div:nth-child(8) ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:nth-child(8)>div:nth-child(2)").addClass('showintcir');

})
$("#assignmentSection > nav > div:nth-child(8) ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:nth-child(8)>div:nth-child(2)").removeClass('showintcir');

})


$("#assignmentSection > nav > div:nth-child(9) ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:nth-child(9)>div:nth-child(2)").addClass('showintcir');

})
$("#assignmentSection > nav > div:nth-child(9) ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:nth-child(9)>div:nth-child(2)").removeClass('showintcir');

})


$("#assignmentSection > nav > div:nth-child(10) ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:nth-child(10)>div:nth-child(2)").addClass('showintcir');

})
$("#assignmentSection > nav > div:nth-child(10) ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:nth-child(10)>div:nth-child(2)").removeClass('showintcir');

})

$("#assignmentSection > nav > div:nth-child(11) ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:nth-child(11)>div:nth-child(2)").addClass('showintcir');

})
$("#assignmentSection > nav > div:nth-child(11) ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:nth-child(11)>div:nth-child(2)").removeClass('showintcir');

})

$("#assignmentSection > nav > div:nth-child(12) ").on('mouseenter', () => {
    $("#assignmentSection > nav > div:nth-child(12)>div:nth-child(2)").addClass('showintcir');

})
$("#assignmentSection > nav > div:nth-child(12) ").on('mouseleave', () => {
    $("#assignmentSection > nav > div:nth-child(12)>div:nth-child(2)").removeClass('showintcir');

})



$("#assignmentSection > nav > div:first-child>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(2)>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(3)>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(4)>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open("");
});
$("#assignmentSection > nav > div:nth-child(5)>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(6)>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open("");
});
$("#assignmentSection > nav > div:nth-child(7)>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open("");
});
$("#assignmentSection > nav > div:nth-child(8)>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open("");
});
$("#assignmentSection > nav > div:nth-child(9)>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open("");
});
$("#assignmentSection > nav > div:nth-child(10)>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open("");
});
$("#assignmentSection > nav > div:nth-child(11)>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open("");
});
$("#assignmentSection > nav > div:nth-child(12)>div:nth-child(2)>img:nth-child(2)").on('click', () => {
    window.open("");
});
$("#assignmentSection > nav > div:first-child>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(2)>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(3)>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(4)>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(5)>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(6)>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(7)>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(8)>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(9)>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(10)>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(11)>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});
$("#assignmentSection > nav > div:nth-child(12)>div:nth-child(2)>img:first-child").on('click', () => {
    window.open('');
});

// assignment github linkadding end


// header animation adding

$("#homeheader").on('mouseenter',()=>{
    $("#homeheader").addClass('animate__animated animate__jello animate__delay-0.5s');



});
$("#homeheader").on('mouseleave',()=> {
    $("#homeheader").removeClass('animate__animated animate__jello animate__delay-0.5s');

});


$("#blogheader").on('mouseenter',()=>{
    $("#blogheader").addClass('animate__animated animate__jello animate__delay-0.5s');



});
$("#blogheader").on('mouseleave',()=> {
    $("#blogheader").removeClass('animate__animated animate__jello animate__delay-0.5s');

});

///////
$("#educationheader").on('mouseenter',()=>{
    $("#educationheader").addClass('animate__animated animate__jello animate__delay-0.5s');



});
$("#educationheader").on('mouseleave',()=> {
    $("#educationheader").removeClass('animate__animated animate__jello animate__delay-0.5s');

});
$("#projectheader").on('mouseenter',()=>{
    $("#projectheader").addClass('animate__animated animate__jello animate__delay-0.5s');



});
$("#projectheader").on('mouseleave',()=> {
    $("#projectheader").removeClass('animate__animated animate__jello animate__delay-0.5s');

});
$("#assignmentheader").on('mouseenter',()=>{
    $("#assignmentheader").addClass('animate__animated animate__jello animate__delay-0.5s');



});
$("#assignmentheader").on('mouseleave',()=> {
    $("#assignmentheader").removeClass('animate__animated animate__jello animate__delay-0.5s');

});
$("#footerheader").on('mouseenter',()=>{
    $("#footerheader").addClass('animate__animated animate__jello animate__delay-0.5s');



});
$("#footerheader").on('mouseleave',()=> {
    $("#footerheader").removeClass('animate__animated animate__jello animate__delay-0.5s');

});
