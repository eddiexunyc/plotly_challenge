//get data from sample json file
function getData(sampleID){
    d3.json("samples.json").then((importedData) => {
        var data = importedData;
        console.log(data);
    
        var sampleData = data.samples;
        console.log(sampleValue);
        var resultArr = sampleData.filter(sampleObject => sampleObject.id == sampleID);
        var variableArr = resultArr[0];
        console.log(variableArr);
        var sampleValue = variableArr.sample_values;
        console.log(sampleValue);
        var otuID = variableArr.otu_ids;
        console.log(otuID);
        var otuLabel = variableArr.otu_labels;
        console.log(otuLabel);


        //create bar chart
        var arrData = [{
            x: sampleValue.slice(0, 10).reverse(),
            y: otuID.slice(0,10).map(otuID => `OTU${otuID}`).reverse(),
            text: otuLabel.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
        }];

        var layout = {
            title: "bar graph"
        };

        Plotly.newPlot("bar", arrData, layout);

        //create bubble data
        var bubbleData =[{
            x: otuID,
            y: sampleValue,
            text: otuLabel,
            mode: "markers",
            marker: {
                size: sampleValue,
                color: otuID,
                colorScale: "Earth"
            }
        }];

        Plotly.newPlot("bubble", bubbleData, layout);

    });

};

function getDemoData(metaID){
    d3.json("samples.json").then((importedData) => {
        var data = importedData;
        console.log(data);

        var metaData = data.metadata;
        console.log(metaData);
        var metaArr = metaData.filter(metaObject => metaObject.id == metaID);
        var varArr = metaArr[0];

        var ethnicity = varArr.ethnicity;
        console.log(ethnicity);
        var gender = varArr.gender;
        console.log(gender);
        var age = varArr.age;
        console.log(age);
        var location = varArr.location;
        console.log(location);
        var bbtype = varArr.bbtype;
        console.log(bbtype);
        var wfreq = varArr.wfreq;
        console.log(wfreq);

        var metaDataset = d3.select("#sample-metadata");




    });

};
 

//initalize the page with default plot
function init(){
    d3.json("samples.json").then((d) => {
        var sampleName = d.names;
        var dataset = d3.select("#selDataset");
        sampleName.forEach((sample) =>{
            dataset.append("option")
            .text(sample)
            .property("value", sample);
        });
    
    var resultSample = sampleName[0];
    getData(resultSample);
    getDemoData(resultSample);
    });
    
};

init();

d3.selectAll("#selDataset").on("change", optionChanged);

//get new data and create new chart per new data
function optionChanged(newSample){
    getData(newSample);

};