//read json file by D3
d3.json("data/samples.json").then((importedData) => {
    var data = importedData;
    console.log(data);
    });

