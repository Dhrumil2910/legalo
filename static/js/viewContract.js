$(document).ready(function () {
    // Get the contractId from the location
    contractId = location.pathname.replace("/contract/", "")

    // Get the contract details
    getContractUrl = "http://localhost:3000/api/org.example.basic.BusinessContract/" + contractId

    // ajax GET call
    $.ajaxCall(getContractUrl, "GET", "", function (output) {
        if (output.status) {
            out = output.output
            // Heading of the page with a contract name and balance
            $('.headingViewContract').text(out.contractTitle)
            $('.headingBalanceContract').text("Contract Balance: "+out.contractBalance)
            // Get the service provider information
            serviceProviderId = out.serviceProvider.replace('resource:org.example.basic.Person#', '')
            personGetUrl = "http://localhost:3001/api/org.example.basic.Person/" + serviceProviderId;
            $.ajaxCall(personGetUrl, "GET", "", function (output) {
                if (output.status) {
                    // Feed the output into the corresponing input fields
                    $('#sfirst_name').val(output.output.firstName)
                    $('#smiddle_name').val(output.output.middleName)
                    $('#slast_name').val(output.output.lastName)
                    $('#sstreetAddress').val(output.output.address.street)
                    $('#scity').val(output.output.address.city)
                    // $('#sstate').val(output.output.address.state)
                    $('#szipCode').val(output.output.address.postalCode)
                    $('#scountry').val(output.output.address.country)
                    $('#smobileNumber').val(output.output.contactDetails.mobileNumber)
                    $('#semail').val(output.output.contactDetails.emailAddress)
                }
                else {
                }
            })
            // Get the buyer information
            buyerId = out.buyer.replace('resource:org.example.basic.Person#', '')
            personGetUrl = "http://localhost:3001/api/org.example.basic.Person/" + buyerId;
            $.ajaxCall(personGetUrl, "GET", "", function (output) {
                if (output.status) {
                    // Feed the output into the corresponing input fields
                    $('#bfirst_name').val(output.output.firstName)
                    $('#bmiddle_name').val(output.output.middleName)
                    $('#blast_name').val(output.output.lastName)
                    $('#bstreetAddress').val(output.output.address.street)
                    $('#bcity').val(output.output.address.city)
                    // $('#sstate').val(output.output.address.state)
                    $('#bzipCode').val(output.output.address.postalCode)
                    $('#bcountry').val(output.output.address.country)
                    $('#bmobileNumber').val(output.output.contactDetails.mobileNumber)
                    $('#bemail').val(output.output.contactDetails.emailAddress)

                }
                else {
                }
            })
            // Stages of contract
            $.each(out.stages, function (i) {
                $(".stagesInViewForm").append('<li class="collection-item">\
                <span class="title" style="color:#e91e63"><b>'+ out.stages[i].stageName + '</b></span> &nbsp\
                <div class="chip right fundEnd">Fund Stage</div>\
                <div class="chip right">End Stage</div>\
                <div class="chip right">Amount:&nbsp'+ out.stages[i].stageAmount + '</div><br><br><br>\
                <p style="color: grey">dsdsds dsdsds dsdsds dsdsds dsdsds dsdsds dsdsds dsdsds dsdsds dsdsds '+ out.stages[i].stageDescription + '<br><br><br>\
                Start Date:&nbsp'+ out.stages[i].dateOfStart+'<br>\
                End Date:&nbsp'+ out.stages[i].dateOfCompletion+'\
                </p>\
                </li>')
            })
            // Right to cancel and additional provisions
            $("#RTC" + out.rightToCancel).prop("checked", true);
            //$("#AP"+out.additionalProvisions.includeState).prop("checked", true);
            $("#additionalProvisions").val(out.additionalProvisions.description);
            // Disputes and Assignement
            $("#Disp" + out.disputes).prop("checked", true);
            $("#As" + out.assignment).prop("checked", true);
            // Dates of Contract
            $("#dateOfContract").val(out.dateOfContract);
            $("#dateOfExpiry").val(out.dateOfExpiry);
            // Contract Title and description
            $("#contractTitle").val(out.contractTitle);
            $("#additionalDescription").val(out.additionalDescription);


        }
        else {
            M.toast({ html: 'Not able to retrieve the contract details' })
        }
    })

});