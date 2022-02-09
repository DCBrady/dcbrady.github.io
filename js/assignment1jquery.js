$(document).ready(function () {
    //Homepage section
    //Adding text appearing when hovering over the 6 sections of the homepage
    $(".technologies").mouseenter(function () {
        $(".descriptionheader", this).animate({ opacity: 1.0 }, "slow");
        $(".description", this).animate({ opacity: 1.0 }, "slow");
    });

    $(".technologies").mouseout(function () {
        $(".descriptionheader", this).animate({ opacity: 0 }, "slow");
        $(".description", this).animate({ opacity: 0 }, "slow");
    });

    //Adding images to the 6 sections of the homepage
    var homeboxes = $(".technologies");
    $(homeboxes).css("background-size", "cover");
    $(homeboxes[0]).css("background-image", 'url("../images/Homepage/ai.jpg")');
    $(homeboxes[1]).css("background-image", 'url("../images/Homepage/iot.jpg")');
    $(homeboxes[2]).css("background-image", 'url("../images/Homepage/cognitive.jpg")');
    $(homeboxes[3]).css("background-image", 'url("../images/Homepage/cloud.jpg")');
    $(homeboxes[4]).css("background-image", 'url("../images/Homepage/robotics.jpg")');
    $(homeboxes[5]).css("background-image", 'url("../images/Homepage/blockchain.jpg")');

    //Companies page section
    //Adding text appearing when hovering over the 6 sections of the companies page
    $(".companiespage").mouseenter(function () {
        $(".companyheader", this).animate({ opacity: 1.0 }, "slow");
        $(".companylink", this).animate({ opacity: 1.0 }, "slow");
    });

    $(".companiespage").mouseout(function () {
        $(".companyheader", this).animate({ opacity: 0 }, "slow");
        $(".companylink", this).animate({ opacity: 0 }, "slow");
    });

    //Adding images to the 6 sections of the companies page
    var companyboxes = $(".companiespage");
    $(companyboxes).css("background-size", "100% 100%");
    $(companyboxes[0]).css("background-image", 'url("../images/Companies/ibm.jpg")');
    $(companyboxes[1]).css("background-image", 'url("../images/Companies/amazon.jpg")');
    $(companyboxes[2]).css("background-image", 'url("../images/Companies/google.jpg")');
    $(companyboxes[3]).css("background-image", 'url("../images/Companies/microsoft.jpg")');
    $(companyboxes[4]).css("background-image", 'url("../images/Companies/csiro.jpg")');
    $(companyboxes[5]).css("background-image", 'url("../images/Companies/department.jpg")');

    //Adding images to the 24 company boxes in the emerging tech page
    var emergingtechcompanyboxes = $(".emergingtechpage");
    $(emergingtechcompanyboxes).css("background-size", "100% 100%");
    $(emergingtechcompanyboxes[0]).css("background-image", 'url("../images/Companies/ibm.jpg")'); //IBM AI
    $(emergingtechcompanyboxes[1]).css("background-image", 'url("../images/Companies/microsoft.jpg")'); //MICROSOFT AI
    $(emergingtechcompanyboxes[2]).css("background-image", 'url("../images/Companies/csiro.jpg")'); //CSIRO AI
    $(emergingtechcompanyboxes[3]).css("background-image", 'url("../images/Companies/amazon.jpg")'); //Amazon AI
    $(emergingtechcompanyboxes[4]).css("background-image", 'url("../images/Companies/ibm.jpg")'); //IBM IoT
    $(emergingtechcompanyboxes[5]).css("background-image", 'url("../images/Companies/microsoft.jpg")'); //Microsoft IoT
    $(emergingtechcompanyboxes[6]).css("background-image", 'url("../images/Companies/amazon.jpg")'); //Amazon IoT
    $(emergingtechcompanyboxes[7]).css("background-image", 'url("../images/Homepage/iot.jpg")'); //CIO IoT
    $(emergingtechcompanyboxes[8]).css("background-image", 'url("../images/Companies/ibm.jpg")'); //IBM CC
    $(emergingtechcompanyboxes[9]).css("background-image", 'url("../images/Companies/microsoft.jpg")'); //Microsoft CC
    $(emergingtechcompanyboxes[10]).css("background-image", 'url("../images/Companies/google.jpg")'); //Google CC
    $(emergingtechcompanyboxes[11]).css("background-image", 'url("../images/Homepage/Cognitive.jpg")'); //Forbes CC
    $(emergingtechcompanyboxes[12]).css("background-image", 'url("../images/Companies/google.jpg")'); //Google Cloud
    $(emergingtechcompanyboxes[13]).css("background-image", 'url("../images/Companies/microsoft.jpg")'); //Microsoft CLoud
    $(emergingtechcompanyboxes[14]).css("background-image", 'url("../images/Companies/ibm.jpg")'); //IBM Cloud
    $(emergingtechcompanyboxes[15]).css("background-image", 'url("../images/Homepage/Cloud.jpg")'); //Amazon Cloud
    $(emergingtechcompanyboxes[16]).css("background-image", 'url("../images/Homepage/robotics.jpg")'); //Forbes
    $(emergingtechcompanyboxes[17]).css("background-image", 'url("../images/Homepage/robotics.jpg")'); //ZDNet
    $(emergingtechcompanyboxes[18]).css("background-image", 'url("../images/Homepage/robotics.jpg")'); //I-Scoop robots cobots
    $(emergingtechcompanyboxes[19]).css("background-image", 'url("../images/Homepage/robotics.jpg")'); //Automation World
    $(emergingtechcompanyboxes[20]).css("background-image", 'url("../images/Homepage/blockchain.jpg")'); //Blockchain
    $(emergingtechcompanyboxes[21]).css("background-image", 'url("../images/Homepage/blockchain.jpg")'); //PC Magazine
    $(emergingtechcompanyboxes[22]).css("background-image", 'url("../images/Homepage/blockchain.jpg")'); //Forbes Blockchains
    $(emergingtechcompanyboxes[23]).css("background-image", 'url("../images/Homepage/blockchain.jpg")'); //CSIRO Blockchains
})