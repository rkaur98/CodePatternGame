
jQuery(document).ready(function ($) {

		    var run1 = document.getElementById('run1');
		    var r = document.getElementById('result');
		    
		$("#btn").click(function (){
			

			run();

		});

		function run() {
			r.innerHTML = " ";
		    var inp = document.getElementById('patt');
		    var scriptText = inp.value;
		    var oldScript = document.getElementById('scriptContainer');
		    var newScript;
		    var x = "var result = document.getElementById('result');";

		    if (oldScript) {
		      oldScript.parentNode.removeChild(oldScript);
		    }

		    newScript = document.createElement('script');
		    newScript.id = 'scriptContainer';
		    newScript.text = x + ' ' + inp.value;
		    document.body.appendChild(newScript);
		    
		    let divList  = document.getElementsByTagName("div");
		    let d1 = document.getElementById("run1").childNodes;
		    let d2 = document.getElementById("result").childNodes;

			
			if(d1[0].isEqualNode(d2[0]) == true){
				document.getElementById("done").innerHTML = '<h3>Congratulation Level Completed</h3><a class="ref" href="level3.html">Next Level</a>';
			}
			else{
				document.getElementById("done").innerHTML = ' ';
			}

		} 
		
		
	

		var y = '<table>';
		
		for(var i = 0;i<=4;i++){
			y += '<tr>'
			for(var j = 0;j<=i;j++){
				
					y += "<td>*</td>";
				

			}
			y += "</tr>";
		}
		y += "</table>"

		run1.innerHTML = y;
	});