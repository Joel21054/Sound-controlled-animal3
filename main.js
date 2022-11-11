var dog=0
var cat=0
function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true,video:false})
classifier=ml5.soundClassifier('teachablemachine.withgoogle.com/models/67tjIemFX/model.json',{probabilityThreshhold:0.7},modelLoaded)

}
function modelLoaded(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        random_number_r=Math.floor(Math.random() *255)+1;
        random_number_g=Math.floor(Math.random() *255)+1;
        random_number_b=Math.floor(Math.random() *255)+1;
        document.getElementById("result_label").innerHTML='detected voice is of- '+results[0].label
        document.getElementById("result_count").innerHTML='detected dog '+dog+ 'detected cat '+cat;
        document.getElementById("result_label").style.color="rgb("+random_number_r+", "+random_number_g+","+random_number_b+")"
        document.getElementById("result_count").style.color="rgb("+random_number_r+", "+random_number_g+","+random_number_b+")"
        img=document.getElementById('animal_image');
        if(results[0].label=="barking"){
            img.src="dog-barking.gif";
            dog=dog+1
        }
        else if(results[0].label=="meowing"){
            img.src="giphy.gif";
            cat=cat+1
        } 
        else{
            img.src='listen.gif'
        }
    }
}