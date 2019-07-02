$(document).ready(function () {
    // Get all the contracts
    getContractsUrl = "http://localhost:3000/api/org.example.basic.BusinessContract/"
    $('.progress').css("display", "block");
    // ajax GET call
    $.ajaxCall(getContractsUrl, "GET", "", function (output) {
        if (output.status) {
            $.each(output.output.reverse(), function(i){
              $('.collection').append('<li class="collection-item">\
              <span class="title contractTitleList"><b>'+ output.output[i].contractTitle +'</b></span> &nbsp\
              <div class="chip right">Balance:&nbsp'+ output.output[i].contractBalance +'</div>\
              <div class="chip right"><a style="color:#e91e63" href="/contract/'+ output.output[i].businessContractId +'">See Details</a></div>\
              <p style="color: grey"> Service Provider:&nbsp'+ output.output[i].serviceProvider.replace('resource:org.example.basic.Person#','') +' <br>Buyer:&nbsp\
              '+ output.output[i].buyer.replace('resource:org.example.basic.Person#','') +'\
              </p>\
            </li>')
            })
        }
        else {

        }
        $('.progress').css("display", "none");
    })
});