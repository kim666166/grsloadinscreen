/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.06
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "GRS™ CityRP";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg",
	"backgrounds/images/6.jpg",
	"backgrounds/images/7.jpg",
	"backgrounds/images/8.jpg",
	"backgrounds/images/9.jpg",
	"backgrounds/images/10.jpg",
	"backgrounds/images/11.jpg",
	"backgrounds/images/12.jpg",
	"backgrounds/images/13.jpg",
	"backgrounds/images/14.jpg",
	"backgrounds/images/15.jpg",
	"backgrounds/images/16.jpg",
	"backgrounds/images/17.jpg",
	"backgrounds/images/18.jpg",
	"backgrounds/images/19.jpg",
	"backgrounds/images/20.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;
/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "Ev1QQILkXAM", name: "f(x) - Goodbye Summer (Amber+Luna+Krystal) (Feat. D.O. of EXO-K) "},
	{youtube: "rtQWxollrkQ", name: "RADWIMPS – なんでもないや (movie ver.) / Nandemonaiya "},
	{youtube: "Vh7iHrD7PR4", name: "RADWIMPS - スパークル (movie ver.) / Sparkle "},
	{youtube: "PDSkFeMVNFs", name: "RADWIMPS - 前前前世 (movie ver.) / Zenzenzense "},
	{youtube: "37aGnzx-7b0", name: "RADWIMPS - 夢灯籠 / Dream lantern "},
	{youtube: "dsWDUvuF0Xc", name: "Florence + The Machine - Wish That You Were Here "},
	{youtube: "oBKpJiVEcnU", name: "박효신 - 숨 "},
	{youtube: "BiQIc7fG9pA", name: "gnash - i hate u, i love u (feat. olivia o'brien) "},
	{youtube: "upZ_q9CdXl4", name: "Taylor Swift - 22 "},
	{youtube: "vBLQFGHtSzg", name: "Charlie Puth - Up All Night "},
	{youtube: "ZK7hdWwIEkI", name: "Maroon 5 - Unkiss Me "},
	{youtube: "BViqzmDiTVY", name: "Mika - Origin Of Love "},
	{youtube: "o1gLGjPFkRA", name: "The Killers - Mr. BrightSide "},
	{youtube: "xj6fHiF8Osg", name: "Maroon 5 - Maps "},
	{youtube: "IzkxofxsW38", name: "OneRepublic - Counting Stars "},
	{youtube: "18lP9SYCt_E", name: "Ed Sheeran - All Of The Stars "},
	{youtube: "3HJS0b8d-JA", name: "스탠딩 에그(Standing Egg) - 여름밤에 우린  "},
	{youtube: "zPw7lY67uxI", name: "엠씨더맥스(M.C THE MAX) - 어디에도 "},
	{youtube: "JzociagwnBw", name: "정준일 - 안아줘 "},
	{youtube: "UlhR0zBFxZE", name: "소녀시대 - 그 여름 (0805) "},
	{youtube: "pyJlW8V-OoI", name: "어반자카파(Urban Zakapa) - 널 사랑하지 않아 "},
	{youtube: "QLmOezNMPnY", name: "존 박(John Park) - 네 생각 "},
	{youtube: "QTVgoVGojO8", name: "스탠딩 에그(Standing Egg) - 뚝뚝뚝 (with 예슬) "},
	{youtube: "7Qp5vcuMIlk", name: "Ed Sheeran - Castle On The Hill "},
	{youtube: "eRHRrHsIzzQ", name: "아이오아이(I.O.I) - 소나기"},
	{youtube: "HDDAhWtpu2E", name: "Shawn Mendes - Like This "},
	{youtube: "VdHAgXsiqR4", name: "다이아(DIA) - 그 길에서 "},	
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"오늘도 저희 GRS™ CityRP 를 이용해 주셔서 감사합니다.",
"GRS™ 관리자, 개발자들은 항상 유저들을 위해 노력하고 있습니다.",
"총개발자가 '너의 이름은.' 이라는 영화에 빠져있습니다. 배경이나 음악을 원하신다면 총개발자에게 연락 해 주시기 바랍니다.",
"GRS™ 관리자, 개발자들은 항상 유저들을 위해 노력하고 있습니다.",
"로딩화면 곡 신청은 kim666166@gmail.com으로 부탁드립니다(배경화면도!)",
"현재 서버가 400$의 적자입니다(VAT 제외). 후원 해 주시면 감사하겠습니다.",
"언밴 요청은 제발 GRS 네이버 카페에 해 주시기 바랍니다.",
"오늘도 좋은 플레이 되시기 바랍니다!",
"건의 사항이 있을때는 GRS 페이스북 페이지를 이용해 주시면 감사하겠습니다.",
"저희 서버 관리자는 메뉴얼대로 움직이기 때문에, 처벌장에서 처벌 담당자에게 반말, 욕을 하면 똑같이 대합니다.",
"비록 로딩이 길더라도 잠시만 기다려 주시기 바랍니다.",
"저희 서버 관리자는 메뉴얼대로 움직이기 때문에, 처벌장에서 처벌 담당자에게 반말, 욕을 하면 똑같이 대합니다.",
"신고를 하실꺼라면 '!신고' 로 부탁드리겠습니다.",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
