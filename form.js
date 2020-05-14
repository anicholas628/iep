
//forms
const categoryForm = document.forms["categoryForm"];
const sldForm = document.getElementById("sldForm");

//sections
const sld =document.getElementById("sld");
const info = document.getElementById("info");
const statement = document.getElementById("statement");
console.log(sldForm);

//attach the listener to the FORM, not the form submit button
categoryForm.addEventListener("submit", collectNames);

var fname;
var lname;
var category;
var gender;

function collectNames(event) {
	event.preventDefault();

	fname= document.getElementById("fname").value;
	lname = document.forms["name"]["lname"].value;
	category = document.forms["name"]["category"].value;
	gender = document.forms["name"]["gender"].value;

	console.log(workingMemory.value);

	if(category==="specific learning disability"){
			info.classList.add("hidden");
			sld.classList.remove("hidden");
	}

}

const submitImpacts = document.getElementById("submitImpacts"); //submit button on impacts form
sldForm.addEventListener("submit", collectDeficits);
var sldDeficits = [];

//the different sld deficits which can be checked 
const workingMemory = document.getElementById("memory");
const attention = document.getElementById("attention");
const rapidNaming = document.getElementById("rapid");
const audProcessing = document.getElementById("audProcessing");
const phonAwareness = document.getElementById("phonAwareness");
const phonMemory = document.getElementById("phonMemory");
const phonemic = document.getElementById("phonemic");
const audSequencing = document.getElementById("audSequencing");
const perception = document.getElementById("perception");
const vmi = document.getElementById("vmi");
const speed = document.getElementById("speed");
const longTerm = document.getElementById("longTerm");
const shortTerm = document.getElementById("shortTerm");
const comprehension = document.getElementById("comprehension");
const perceptual = document.getElementById("perceptual");
const fluid = document.getElementById("fluid");
const social = document.getElementById("social");
const knowledge = document.getElementById("knowledge");
const executive = document.getElementById("executive");
const orthographic = document.getElementById("orthographic");

//the different forms which need to be filled out based on the deficit
const workMemForm = document.getElementById("working-memory");
const attenConForm = document.getElementById("attention-concentration");
const rapidForm = document.getElementById("rapid-naming");
const audProForm = document.getElementById("aud-processing");
const phonAwarForm = document.getElementById("phon-awareness");
const phonemicForm = document.getElementById("phonemic-awar");
const phonMemForm = document.getElementById("phonMem");
const audSeqForm = document.getElementById("aud-sequencing");
const visPerForm = document.getElementById("vis-perception");
const vmiForm = document.getElementById("vmi-impacts");
const speedForm = document.getElementById("speed-impacts");
const longForm = document.getElementById("longMem");
const shortForm = document.getElementById("shortMem");
const compForm = document.getElementById("verbRC");
const percetualForm = document.getElementById("perReas");
const fluidForm = document.getElementById("fluidQuan");
const socialForm = document.getElementById("socialPS");
const knowForm = document.getElementById("knowledgeCI");
const executiveForm = document.getElementById("executiveFunc");
const orthographicForm = document.getElementById("orthProc");

function collectDeficits(event){
	event.preventDefault();
	for (i = 0; i < sldForm.length; i++) {
  		if (sldForm[i].checked) {
   		sldDeficits.push(sldForm[i].value);
  	}
}
	if(workingMemory.checked){
		workMemForm.classList.remove("hidden");
	}
	if (attention.checked) {
		attenConForm.classList.remove("hidden");
	}
	if (rapidNaming.checked) {
		rapidForm.classList.remove("hidden");
	}
	if (audProcessing.checked) {
		audProForm.classList.remove("hidden");
	}
	if (phonAwareness.checked){
		phonAwarForm.classList.remove("hidden");
	}
	if(phonemic.checked){
		phonemicForm.classList.remove("hidden");
	}
	if(phonMemory.checked){
		phonMemForm.classList.remove("hidden");
	}
	if(audSequencing.checked){
		audSeqForm.classList.remove("hidden");
	}
	if(perception.checked){
		visPerForm.classList.remove("hidden");
	}
	if(vmi.checked){
		vmiForm.classList.remove("hidden");
	}
	if(speed.checked){
		speedForm.classList.remove("hidden");
	}
	if(longTerm.checked){
		longForm.classList.remove("hidden");
	}
	if(shortTerm.checked){
		shortForm.classList.remove("hidden");
	}
	if(comprehension.checked){
		compForm.classList.remove("hidden");
	}
	if(perceptual.checked){
		percetualForm.classList.remove("hidden");
	}
	if(fluid.checked){
		fluidForm.classList.remove("hidden");
	}
	if(social.checked){
		socialForm.classList.remove("hidden");
	}
	if(knowledge.checked){
		knowForm.classList.remove("hidden");
	}
	if(executive.checked){
		executiveForm.classList.remove("hidden");
	}
	if(orthographic.checked){
		orthographicForm.classList.remove("hidden");
	}

	submitImpacts.classList.remove("hidden");
	sld.classList.add("hidden");
}


const sldImpactsForm = document.getElementById("sldImpactsForm");
sldImpactsForm.addEventListener("submit", createStatement);
//target the places in the statement to insert things
const fNamePlace = document.getElementById("fNamePlace");
const lNamePlace = document.getElementById("lNamePlace");
const categoryPlace = document.getElementById("categoryPlace");
const deficitsPlace = document.getElementById("deficitsPlace");
const impactsPlace = document.getElementById("impactsPlace");
const catSpecificWords = document.getElementById("catSpecificWords");
const fNamePlace2 = document.getElementById("fNamePlace2");
//array impacts into categories
const workMemOptions = document.getElementsByName("working-memory");
const attentionOptions = document.getElementsByName("attention");
const rapidOptions = document.getElementsByName("rapid-naming");
const audProcOptions = document.getElementsByName("aud-processing");
const phonAwarOptions = document.getElementsByName("phon-awareness");
const phonemicOptions = document.getElementsByName("phonemic-awar");
const phonMemOptions = document.getElementsByName("phonMem");
const audSeqOptions = document.getElementsByName("aud-sequencing");
const visPerOptions = document.getElementsByName("vis-perception");
const vmiOptions = document.getElementsByName("vmi-impacts");
const speedOptions = document.getElementsByName("speed-impacts");
const longOptions = document.getElementsByName("longMem");
const shortOptions = document.getElementsByName("shortMem");
const compOptions = document.getElementsByName("verbRC");
const perceptualOptions = document.getElementsByName("perReas");
const fluidOptions = document.getElementsByName("fluidQuan");
const socialOptions = document.getElementsByName("socialPS");
const knowOptions = document.getElementsByName("knowledgeCI");
const executiveOptions = document.getElementsByName("executiveFunc");
const orthographicOptions = document.getElementsByName("orthProc");

//collect all the impacts selected
var sldImpacts= [];
var workMemImpacts = [];
var attentionImpacts =[];
var rapNamingImpacts = [];
var audProcImpacts = [];
var phonAwarImpacts = [];
var phonemicImpacts = [];
var phonMemImpacts = [];
var audSeqImpacts = [];
var visPerImpacts = [];
var vmiImpacts = []
var speedImpacts = [];
var longImpacts = [];
var shortImpacts = [];
var compImpacts = [];
var perceptualImpacts = [];
var fluidImpacts = [];
var socialImpacts = [];
var knowImpacts = [];
var executiveImpacts = [];
var orthographicImpacts = [];

function createStatement(){
	event.preventDefault();
	
	//collect all the impacts selected
	collectCheckboxes(sldImpactsForm, sldImpacts);

   	//collect working memory
   	collectCheckboxes(workMemOptions, workMemImpacts);

   	//collect attention/concentration
   	collectCheckboxes(attentionOptions, attentionImpacts);

   	//collect rapid naming
   	collectCheckboxes(rapidOptions, rapNamingImpacts);

   	//collect auditory processing
   	collectCheckboxes(audProcOptions, audProcImpacts);

   	//collect phonological awareness
   	collectCheckboxes(phonAwarOptions, phonAwarImpacts);

   	//collect phonemic
   	collectCheckboxes(phonemicOptions, phonemicImpacts);

   	//collect phonological memory
   	collectCheckboxes(phonMemOptions, phonMemImpacts);

   	//collect auditory sequencing impacts 
   	collectCheckboxes(audSeqOptions, audSeqImpacts);

   	//collect visual perception impacts
   	collectCheckboxes(visPerOptions, visPerImpacts);

   	//collect visual motor perception
   	collectCheckboxes(vmiOptions, vmiImpacts);

   	//collect processing speed
   	collectCheckboxes(speedOptions, speedImpacts);

   	//collect long term memory/ retrieval 
   	collectCheckboxes(longOptions, longImpacts);

   	//collect short term memory
   	collectCheckboxes(shortOptions, shortImpacts);

   	//collect comprehension
   	collectCheckboxes(compOptions, compImpacts);

   	//collect nonverbal/perceptual reasoning
   	collectCheckboxes(perceptualOptions, perceptualImpacts);

   	//collect fluid/quantitative reasoning
   	collectCheckboxes(fluidOptions, fluidImpacts);

   	//collect social perception and skills
   	collectCheckboxes(socialOptions, socialImpacts);

   	//collect knowledge
   	collectCheckboxes(knowOptions, knowImpacts);

   	//collect executive functioning
   	collectCheckboxes(executiveOptions, executiveImpacts);

   	//collect orthographic processing
   	collectCheckboxes(orthographicOptions, orthographicImpacts);

	fNamePlace.innerHTML = fname;
	lNamePlace.innerHTML = lname;
	categoryPlace.innerHTML = category;
	fNamePlace2.innerHTML = fname;

	if(category==="specific learning disability"){
		
		catSpecificWords.innerHTML = "processing deficits in"

  		//write in the deficits
		for(i = 0; i<sldDeficits.length; i++){
			if(sldDeficits.length === 1){
				catSpecificWords.innerHTML = "a processing deficit in";
				deficitsPlace.innerHTML = sldDeficits[0];
			}
			else if(sldDeficits.length === 2){
				deficitsPlace.innerHTML = sldDeficits[0] + " and " + sldDeficits[1];
			}
			else{
				if(i === sldDeficits.length-1){
					deficitsPlace.innerHTML+= " and " + sldDeficits[i];
				}
				else{
					deficitsPlace.innerHTML += " " + sldDeficits[i] + ",";
				}
			}
		}

		//write in the impacts to the statement
		if(workMemImpacts.length > 0){
			impacts(workingMemory.value, workMemImpacts);
		}
		if(attentionImpacts.length > 0){
			impacts(attention.value, attentionImpacts);
		}
		if(rapNamingImpacts.length > 0){
			impacts(rapidNaming.value, rapNamingImpacts);
		}
		if(audProcImpacts.length > 0){
			impacts(audProcessing.value, audProcImpacts);
		}
		if(phonAwarImpacts.length > 0){
			impacts(phonAwareness.value, phonAwarImpacts);
		}
		if(phonemicImpacts.length > 0){
			impacts(phonemic.value, phonemicImpacts);
		}
		if(phonMemImpacts.length > 0){
			impacts(phonMemory.value, phonMemImpacts);
		}
		if(audSeqImpacts.length > 0){
			impacts(audSequencing.value, audSeqImpacts);
		}
		if(visPerImpacts.length > 0){
			impacts(perception.value, visPerImpacts);
		}
		if(vmiImpacts.length > 0){
			impacts(vmi.value, vmiImpacts);
		}
		if(speedImpacts.length > 0){
			impacts(speed.value, speedImpacts);
		}
		if(longImpacts.length > 0){
			impacts(longTerm.value, longImpacts);
		}
		if(shortImpacts.length > 0){
			impacts(shortTerm.value, shortImpacts);
		}
		if(compImpacts.length > 0){
			impacts(comprehension.value, compImpacts);
		}
		if(perceptualImpacts.length > 0){
			impacts(perceptual.value, perceptualImpacts);
		}
		if(fluidImpacts.length > 0){
			impacts(fluid.value, fluidImpacts);
		}
		if(socialImpacts.length > 0){
			impacts(social.value, socialImpacts);
		}
		if(knowImpacts.length > 0){
			impacts(knowledge.value, knowImpacts);
		}
		if(executiveImpacts.length > 0){
			impacts(executive.value, executiveImpacts);
		}
		if(orthographicImpacts.length > 0){
			impacts(orthographic.value, orthographicImpacts);
		}

	sldImpactsForm.classList.add("hidden");
	statement.classList.remove("hidden");
}
}

//collects the elements that the user "checked" into an array
function collectCheckboxes(formOptions, itemsChosen){
	for (i = 0; i < formOptions.length; i++) {
  		if (formOptions[i].checked) {
   			itemsChosen.push(formOptions[i].value);
   		}
   	}
}

//creates the impact statement based on the impacts chosen by the user
function impacts(deficit, impactsChosen){
	impactsPlace.innerHTML += fname + "'s deficit in " + deficit + " can cause " + gender + " to ";

	for(i = 0; i<impactsChosen.length; i++){

		if(impactsChosen.length === 1){
			impactsPlace.innerHTML += impactsChosen[0] + ". ";
		}
		else if(impactsChosen.length === 2){
			impactsPlace.innerHTML += impactsChosen[0] + " and " + impactsChosen[1] + ". ";
			break;
		}
		else{
			if(i === impactsChosen.length-1){
				impactsPlace.innerHTML+= " and " + impactsChosen[i] + ". "
			}
			else{
				impactsPlace.innerHTML += " " + impactsChosen[i] + ",";
			}
		}

	}
}

