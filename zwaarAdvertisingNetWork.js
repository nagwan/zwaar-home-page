$(document).ready(function () {

    advertisersAndPublishersSectionsManipulationMdScreens();
    aboutUsSectionManipulation();

    $(window).resize(function () {
        advertisersAndPublishersSectionsManipulationMdScreens();
        aboutUsSectionManipulation();
    });

});


// Start DOM  & CSS manipulation 

// Start Advertisers And Publishers Section Manipulation Function 

// this function manipulates the Advertisers And Publishers Section

function advertisersAndPublishersSectionsManipulationMdScreens() {

    if ($(window).width() < 1200) {

        //Advertisers Section manipulation

        $('#advertisers').removeClass("advertisers").addClass("advertisersLgScreens");
        $('#advertisersContentContainer').removeClass("advertisersContentContainer").addClass("advertisersContentContainerLgScreens");
        $('#advertisersContent').removeClass("advertisersContent").addClass("advertisersContentLgScreens");

        //Publishers Section manipulation

        $('#publishers').removeClass("publishers").addClass("publishersLgScreens");
        $('#publishersContentContainer').removeClass("publishersContentContainer").addClass("publishersContentContainerLgScreens");
        $('#publishersContent').removeClass("publishersContent").addClass("publishersContentLgScreens");

        var publishersData = $('#publishers').clone();

        $('#publishers').hide();

        // Adding a new section dynamically 

        $('#advertisersSection').after("<div class='fp-section' id= 'publishersSection'></div>");

        // Adding Publishers Info to the new section

        $('#publishersSection').append(publishersData);


    } else {

        //Advertisers Section manipulation

        $('#advertisers').removeClass("advertisersLgScreens").addClass("advertisers");
        $('#advertisersContentContainer').removeClass("advertisersContentContainerLgScreens").addClass("advertisersContentContainer");
        $('#advertisersContent').removeClass("advertisersContentLgScreens").addClass("advertisersContent");

        //Publishers Section manipulation

        $('#publishers').removeClass("publishersLgScreens").addClass("publishers");
        $('#publishersContentContainer').removeClass("publishersContentContainerLgScreens").addClass("publishersContentContainer");
        $('#publishersContent').removeClass("publishersContentLgScreens").addClass("publishersContent");

        $('.publishers').show();
        $('#publishersSection').remove();
    }
}

// End Advertisers And Publishers Section Manipulation Function 

// Start About Us Section Manipulation Function

//  this function manipulates About us section for middle Screens  

function aboutUsSectionManipulation() {
    if ($(window).width() < 992) {

        // zwaarInnovationRoom manipulation

        $('#zwaarInnovationRoom').removeClass("zwaarInnovationRoom").addClass("zwaarInnovationRoomMdScreens");

        // Daily working process

        var zwaarDailyWorkingProcess = $('#zwaarDailyActiveProcess').clone();

        $('#zwaarDailyActiveProcess').hide();

        //creating a new section dynamically 

        $('#aboutUs').after("<div class='fp-section' id='zwaarDailyActiveProcessNewSection'></div>");

        // Adding zwaar Daily Working Process to the new section

        $('#zwaarDailyActiveProcessNewSection').append(zwaarDailyWorkingProcess);

    } else {

        $('#zwaarInnovationRoom').removeClass("zwaarInnovationRoomLgScreens").addClass("zwaarInnovationRoom");
        $('#zwaarDailyActiveProcessNewSection').remove();
        $('#zwaarDailyActiveProcess').show();
    }
}

    // End About Us Section Manipulation Function
// End CSS & DOM Manipulation
