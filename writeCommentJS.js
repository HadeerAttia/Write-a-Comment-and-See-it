//leaveComment is a Class add to the Write a Comment Button 
//inputPlace is a Class add to input text 
$(function () {
$(".leaveComment").each(function () {
        $(this).click(function () {
            var hisComment = $(this).prev('.inputPlace').val();
            var lineHr = $("<hr/>");
            var divComment = $("<div>" + hisComment + "</div>");
            $(this).parent().parent().parent().parent().next().children().children().append(lineHr);
            $(this).parent().parent().parent().parent().next().children().children().append(divComment);
            $(this).prev('.inputPlace').val("");
        });
    });
});
