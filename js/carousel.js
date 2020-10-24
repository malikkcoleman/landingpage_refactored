var teamMembers = [
    {
    img:"headshots/Donny.jpg",
    name:"Donny Toledo",
    position:"CEO & Co-Founder",
    linkedin:"https://www.linkedin.com/in/donny-toledo-70795a34/",
    },
    {
    img:"headshots/Abby.jpg",
    name:"Abby Clissold",
    position:"COO & Co-Founder",
    linkedin:"https://www.linkedin.com/in/abbytoledo/",
    },
    {
    img:"headshots/jolo.jpg",
    name:"Jonathan Houmphanh",
    position:"Chief Strategy Officer",
    linkedin:"https://www.linkedin.com/in/jonathan-houmphanh-059355116/",
    },
    {
    img:"headshots/Vien.jpg",
    name:"Vien Javier",
    position:"Chief Information Officer",
    linkedin:"https://www.linkedin.com/in/vien-javier-1771571b5/",
    },
    {
    img:"headshots/Ryan.jpg",
    name:"Ryan Thorgrimson",
    position:"Chief Business Development Officer",
    linkedin:"https://www.linkedin.com/in/ryanthorgrimson/",
    },
    {
    img:"headshots/Dean.jpg",
    name:"Dean Brennan",
    position:"Chief Technology Officer",
    linkedin:"https://www.linkedin.com/in/dean-brennan-a5a65a21/",
    },
    {
    img:"headshots/joflip.jpg",
    name:"Joseph Reuto",
    position:"Director, Marketing",
    linkedin:"https://www.linkedin.com/in/joseph-reuto-43569ba/",
    },
    {
    img:"headshots/lord.jpg",
    name:"Lord Tapulao",
    position:"UX/UI Designer",
    linkedin:"https://www.linkedin.com/in/lord-tapulao-730969195/",
    },
    {
    img:"headshots/user200px.png",
    name:"Malik Coleman",
    position:"Front-End Web Developer",
    linkedin:"https://www.linkedin.com/in/malik-coleman-36891a1b5/",
    },
    {
    img:"headshots/Diyana.jpg",
    name:"Diyana Toledo",
    position:"Social Media",
    linkedin:"https://www.linkedin.com/in/malik-coleman-36891a1b5/",
    }
]

var imageCounter = 0; 

function increments() {
    if(imageCounter == 10){
        imageCounter=0;
    }else if(imageCounter < 0){
        imageCounter=9;
    }
    ResetMemberCountPage();
}

function goLeft() {
    const member = document.querySelector('.teamContainer');
    member.style = "transform: translateX(300px); opacity:0; transition: 0.8s;";
    setTimeout(leftReset, 800);
    imageCounter--;
    increments();
    setTimeout(changeMember, 800);
}

function goRight() {
    const member = document.querySelector('.teamContainer');
    member.style = "transform: translateX(-300px); opacity:0; transition: 0.8s;";
    setTimeout(rightReset, 800);
    imageCounter++;
    increments();
    setTimeout(changeMember, 800);
}

function leftReset(){
    const member = document.querySelector('.teamContainer');
    member.style = "transform: translateX(-300px); opacity:0;";
    // changeMember()
    
    ChangeMemberImage();
    setTimeout(leftSlideIn, 50);
}

function rightReset(){
    const member = document.querySelector('.teamContainer');
    member.style = "transform: translateX(300px); opacity:0;";
    // changeMember()
    
    ChangeMemberImage();
    setTimeout(rightSlideIn, 50);
}

function leftSlideIn(){
    const member = document.querySelector('.teamContainer');
    member.style = "transform: translateX(0); opacity:1; transition: 0.8s;";
}

function rightSlideIn(){
    const member = document.querySelector('.teamContainer');
    member.style = "transform: translateX(0); opacity:1; transition: 0.8s;";
}



function LoadMember() {
	var html = '';
    html=html+'    <div class="teamContainer">';
    html=html+'        <div class="teamImageContainer" id="teamImageContainer">';
    html=html+'         </div>';
    html=html+'        <p class="teamName">'+teamMembers[imageCounter].name+'</p>';
    html=html+'        <p class="teamPosition">'+teamMembers[imageCounter].position+'</p>';
    html=html+'        <a href="'+teamMembers[imageCounter].linkedin+'" class="teamLinkedin" target="_blank">';
    html=html+'            <i class="fab fa-linkedin fa-2x"></i>';
    html=html+'        </a>';
    html=html+'    </div>';

	$("#teamMemberList").empty();
	$("#teamMemberList").append(html);

}LoadMember()


function LoadMemberImage() {
    var html = '';
    for(var x = 0; x != teamMembers.length; x++){
        html=html+' <img class="teamImage teamImage'+x+'" src="'+teamMembers[x].img+'" alt="">';
    }
	$("#teamImageContainer").empty();
	$("#teamImageContainer").append(html);

}LoadMemberImage()

function LoadMemberCountPage() {
    var html = '';
    for(var i = 0; i !=teamMembers.length;i++){
        html=html+'<div class="countPage countPage'+i+'"></div>';
    }
	$("#memberCountPage").empty();
	$("#memberCountPage").append(html);

}LoadMemberCountPage()

function ResetMemberCountPage() {
    for(var i = 0; i !=teamMembers.length;i++){
        const countPage = document.querySelector('.countPage'+i)
        countPage.style = "background:#ffffff83;";
    }
    const currentPage = document.querySelector('.countPage'+imageCounter)
    currentPage.style = "background:#ffffff;";
}ResetMemberCountPage()

function ChangeMemberImage() {
    for(var i = 0; i !=teamMembers.length;i++){
        const teamImage = document.querySelector('.teamImage'+i)
        teamImage.style = "display:none;";
    }
    const teamImageCurrent = document.querySelector('.teamImage'+imageCounter)
    teamImageCurrent.style = "display:block;";
}ChangeMemberImage()

function changeMember() {
    const memberName = document.querySelector('.teamName');
    memberName.innerHTML = teamMembers[imageCounter].name;
    const memberPosition = document.querySelector('.teamPosition');
    memberPosition.innerHTML = teamMembers[imageCounter].position;
    const memberLinkedin = document.querySelector('.teamLinkedin');
    memberLinkedin.href = teamMembers[imageCounter].linkedin;
}


setInterval(goRight, 10000)