jQuery(function () {
    readJSON=function () {
        $.ajax({
            url: "testJson",
            type: "GET",
            dataType: "JSON",
            context: this,
            success: function (data) {

                $("#tableDiv").empty();
                var innertable= $("<table style= 'border:solid'> </table>").attr('id', 'innertable');

                for (i in data){
                    innertable.append("<tr> <td>"+data[i].Name+"</td> <td>"+ data[i].Age+"</td> </tr>");
                }
               $("#tableDiv").append(innertable)

            }
            }
        )
    }
})