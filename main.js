var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
color = "black";
widthOfLine = 2;

//Coloque o id do seu canva. Para descobrir, volte a página html 
canvas = document.getElementById('???');
ctx = canvas.getContext("2d");

var width = screen.width;

newWidth =  screen.width - 70; 
newHeight = screen.height - 300;

	if(width < 992)
	{
	document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
	}

//Utilize o código que espera um evento em um único alvo.
canvas.???("touchstart", my_touchstart);


function my_touchstart(e) 
{
//Adicione o código que pega o elemento pelo id
  color = document.???("color").value;
  widthOfLine = document.???("widthOfLine").value;
         
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

//Utilize o código que espera um evento em um único alvo.
canvas.???("touchmove", my_touchmove);
function my_touchmove(e) 
{


    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    //mesma coisa do app web paint antigo
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfX = currentPositionOfTouchX; 
    lastPositionOfY = currentPositionOfTouchY;
    
   
}

    //Crie a função para limpar a área. Lembrando que você digitou o nome dessa função na linha 26 do html
???() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    
