var sub = document.getElementsByTagName('input')[3];
var input = document.getElementsByTagName('input');
var text = document.getElementsByTagName('textarea')[0];

for (let i=0; i<3; i++)
{
    input[i].addEventListener('input', () => {
        if(input[0].value!="" && input[1].value!="" && input[2].value!="" && text.value!="")
        {
            sub.style.backgroundColor = 'blue';
            sub.style.pointerEvents = 'all';
        }
        else
        {
            sub.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            sub.style.pointerEvents = 'none';
        }
    })
}

text.oninput = () => {
    if(input[0].value!="" && input[1].value!="" && input[2].value!="" && text.value!="")
    {
        sub.style.backgroundColor = 'blue';
        sub.style.pointerEvents = 'all';
    }
    else
    {
        sub.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        sub.style.pointerEvents = 'none';
    }
}