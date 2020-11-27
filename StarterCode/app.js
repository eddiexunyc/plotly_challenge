//get data from sample json file
d3.json("samples.json").then((importedData) => {
    var data = importedData;
    console.log(data);

    var ethnicity = data.metadata.map(info => info.ethnicity);
    //console.log(ethnicity);
    var gender = data.metadata.map(info => info.gender);
    //console.log(gender);
    var age = data.metadata.map(info => info.age);
    //console.log(age);
    var location = data.metadata.map(info => info.location);
    //console.log(location);
    var bbtype = data.metadata.map(info => info.bbtype);
    //console.log(bbtype);
    var wfreq = data.metadata.map(info => info.wfreq);
    //console.log(wfreq);
    var sampleValue = data.samples.map(info => info.sample_values);
    console.log(sampleValue);
    var otuID = data.samples.map(info => info.otu_ids);
    console.log(otuID);
    var otuLabel = data.samples.map(info => info.otu_labels);
    console.log(otuLabel);
    });


    

//initalize the page with default plot
function init(){

};

d3.selectAll("#selDataset").on("change", optionChanged);

function optionChanged(){
    var dropDownMenu = d3.select("#selDataset");

    var dataset = dropDownMenu.property("value");




};