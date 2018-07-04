let page_base = `
<!DOCTYPE html>
<html>
<head>
<title>Skylands</title>
</head>
<body>

<div class=headback>
<div style="height: 150px;">
<h1 class=banner><img src="banner.png" alt="" style="height: 100%;"></h1>
</div>
`;
let page_home = page_base + `
<h1 class=head1>Home</h1>
</div>
<div>
<div class=imgframe>
<img class=imgleft src="logo.png">
</div>
<p class=hometext>Welcome to the Skylands website! We are a <a style="color: rgb(100, 100, 100);" href="https://scratch.mit.edu" target="_blank">Scratch</a> group working on a game called "Skylands" (not affiliated with Skylanders <i>in any way</i>). We are an international collaborative team with members from all over the world, including New Zealand, Sweden, and the United States.</p>
</div>

</body>
</html>
`;
let page_about = page_base + `
<h1 class=head1>About</h1>
</div>
<div>
<div class=imgframe>
<img class=imgleft src="logo.png">
</div>
<p class=hometext></p>
</div>

</body>
</html>
`;
let page_contact = page_base + `
<h1 class=head1>Contact</h1>
</div>
<div>
<div class=imgframe>
<img class=imgleft src="logo.png">
</div>
<p class=hometext></p>
</div>

</body>
</html>
`;
let page_news = page_base + `
<h1 class=head1>News</h1>
</div>
<div>
<div class=imgframe>
<img class=imgleft src="logo.png">
</div class=hometext>
<h2>Wednesday, 4 of July, 2018:</h2>
<p>Development on Skylands: Worlds from Above - JavaScript edition have now officialy begun!</p>
</div>

</body>
</html>
`;
let page_members = page_base + `
<h1 class=head1>Members</h1>
</div>
<div class="clearfix">
    <div class="column menu">
        <ul>
            <li><img class=userimg src="outertoaster.png"></li>
            <li><img class=userimg src="ABSAFC.png"></li>
            <li><img class=userimg src="mrchickenman2.png"></li>
            <li><img class=userimg src="Sir_Awesome.gif"></li>
            <li><img class=userimg src="ZeekPlayz.gif"></li>
            <li><img class=userimg src="RGBeta.png"></li>
        </ul>
    </div>

    <div class="column content">
        <div><a style="padding: 18px 10px; margin: 20px 0px;" class=button href="https://scratch.mit.edu/users/Outertoaster" target="_blank">Outertoaster</a></div>
        <div><a style="padding: 18px 10px; margin: 20px 0px;" class="button usertext" href="https://scratch.mit.edu/users/ABSAFC" target="_blank">ABSAFC</a></div>
        <div><a style="padding: 18px 10px; margin: 20px 0px;" class=button href="https://scratch.mit.edu/users/mrchickenman2" target="_blank">mrchickenman2</a></div>
        <div><a style="padding: 18px 10px; margin: 20px 0px;" class=button href="https://scratch.mit.edu/users/Sir_Awesome" target="_blank">Sir_Awesome</a></div>
        <div><a style="padding: 18px 10px; margin: 20px 0px;" class=button href="https://scratch.mit.edu/users/ZeekPlayz" target="_blank">ZeekPlayz</a></div>
        <div><a style="padding: 18px 10px; margin: 20px 0px;" class=button href="https://scratch.mit.edu/users/RGBeta" target="_blank">RGBeta</a></div>
    </div>
</div>
</body>
</html>
`;
