let listNum = 0;

function PageCreate (targetId)
{
    document.getElementById(targetId).innerHTML=""
    
    listNum = 0
    
    for (let i = 0; i<3; i++)
    {
        CreateList(targetId)
    }
}

function CreateList (targetId, Name)
{
    alert(Name)
    
    let listName = ""
    
    if  (Name === "")
    {
        listName = "List "+listNum    
    }
    else
    {
        listName = Name
    }

    let _target = document.getElementById(targetId).innerHTML

    let _splitTarget = _target.split("\n")

    _splitTarget.push('<figure class="lista">\n<figcaption>'+listName+'</figcaption>\n<ol id="'+listNum+'">\n<li>Item 1</li>\n</ol>\n<input id="rLast'+listNum+'" type="button" value="remove" onclick="RemoveElement('+listNum+')">\n<input id="text'+listNum+'" type="text">\n<input id="add'+listNum+'" type="button" value="add" onclick="AddElement('+listNum+',text'+listNum+'.value); text'+listNum+'.value=null">\n</figure>')

    document.getElementById(targetId).innerHTML = _splitTarget.join("\n")

    listNum += 1
}

function RemoveElement (listId)
{
    let _temp = document.getElementById(listId).innerHTML
    
    let _splitTemp = _temp.split("\n")
    
    if (_splitTemp[0] === "")
    {
        _splitTemp.pop()

        _splitTemp = _splitTemp.reverse()

        _splitTemp.pop()

        _splitTemp = _splitTemp.reverse()
    }

    _splitTemp.pop()

    document.getElementById(listId).innerHTML = _splitTemp.join("\n")
}

function AddElement (listId, text)
{
    let _temp = document.getElementById(listId).innerHTML

    let _splitTemp = _temp.split("\n")

    if (_splitTemp[0] === "")
    {
        _splitTemp.pop()

        _splitTemp = _splitTemp.reverse()

        _splitTemp.pop()

        _splitTemp = _splitTemp.reverse()
    }

    _splitTemp.push("<li>"+text+"</li>")

    document.getElementById(listId).innerHTML = _splitTemp.join("\n")
}