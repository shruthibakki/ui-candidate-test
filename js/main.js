window.SB = window.SB || {};
SB.Module = SB.Module || {};
SB.Module.Main = SB.Module.Main | {};

SB.Module.Main = function () {
    //default constructor;
}

SB.Module.Main.prototype = {
    init: function () {
        $('#calendar').fullCalendar({
            header: {
                //left: 'prev,next',
                center: '',
                right: ''
            },
            defaultView: "basicWeek",
            height: 150,
            theme: false    
        });
        $('#calendar .fc-state-highlight').append("<p class='cntr  today'>Today</p>");
        $('.carousel-item').on('click', function (e) {
            var obj1 = $('.carousel-item .carousel-element.active'),
                obj2 = $(this);
            obj1.toggleClass('active');
            obj1.parent().toggleClass('col-sm-2 col-md-2 col-lg-2 col-sm-3 col-md-3 col-lg-3');

            obj2.toggleClass('col-sm-2 col-md-2 col-lg-2 col-sm-3 col-md-3 col-lg-3');
            obj2.find('.carousel-element').toggleClass('active');
        });
        $('a.help').on('click', function (e) {
            $.ajax({
                url: "data/help.json",
                method: "GET",
                success: function (data) {
                    var str = '', tempObj;
                    $('.modal-body').html('');
                    for (var i = 0; i < data.help.length; i++) {
                        tempObj = data.help[i];
                        str = str + '<a href="' + tempObj.URL + '">'+ tempObj.title + '</a><br/>'
                    }
                    $('.modal-body').html(str);
                }
            })
            $('#myModal').modal('show');
            return false;
        });
    },
    ctx: function () {
        return this;
    }
}