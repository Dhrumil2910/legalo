$(document).ready(function () {
    // Get all the contracts
    getContractsUrl = "http://localhost:3000/api/org.example.basic.BusinessContract/"
    $('.progress').css("display", "block");
    // ajax GET call
    $.ajaxCall(getContractsUrl, "GET", "", function (output) {
        if (output.status) {
            $.each(output.output.reverse(), function(i){
              $('.collection').append('<li class="collection-item card">\
              <div class="card-content">\
              <span class="card-title contractTitleList"><b>'+ output.output[i].contractTitle +'</b> &nbsp\
              <div class="chip right seeDetails"><a style="color:white" href="/contract/'+ output.output[i].businessContractId +'">See Details</a></div>\
              <div class="chip right">Balance:&nbsp'+ output.output[i].contractBalance +'</div>\
              </span>\
              <p style="color: grey"> '+ output.output[i].additionalDescription +'<br><br>Service Provider:&nbsp'+ output.output[i].serviceProvider.replace('resource:org.example.basic.Person#','') +' <br>Buyer:&nbsp\
              '+ output.output[i].buyer.replace('resource:org.example.basic.Person#','') +'<br> Start Date:&nbsp'+ output.output[i].dateOfContract +'<br> Expiry Date:&nbsp'+ output.output[i].dateOfExpiry +' \
              </p>\
              </div>\
            </li>')
            })
        }
        else {

        }
        $('.progress').css("display", "none");
    })
});