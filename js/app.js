$(function(){
    //Do crazy stuffs here ...

    var button  = $('#trivia-button');
    var get     = $('#get-trivia');
    var list    = $('#trivia-list');
    var loading = $('#loading');
    var count   = 0;

    get.on('click', async function(e){
        count++;
        loading.remove();

        var ftrivia = TRIVIA_SERVICE.gettrivia();
        var strivia;
        var fresult;
        var fnum;
        var sectriv;
        var li;

        ftrivia.then(async function (res) {
            e.preventDefault();
            await res;
                console.log(res);
                    fresult = res.text;
                console.log(fresult);
                    fnum = res.number;
                console.log(fnum);

        $.ajax ({
            type : 'get',
            url  : 'http://numbersapi.com/'+fnum+'/year'
        }) .then(function(res){
            sectriv = res;
            list.append(li);
        })
        })
    })
})